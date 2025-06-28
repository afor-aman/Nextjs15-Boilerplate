'use client'
import React, { useState } from 'react';
import { 
  Zap, 
  Target, 
  Shield, 
  Sparkles, 
  BarChart3, 
  Clock, 
  Users, 
  CheckCircle2,
  ArrowRight,
  PlayCircle,
  Brain,
  Palette,
  Globe,
  Lock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

type ColorType = 'blue' | 'purple' | 'green' | 'orange' | 'slate';

interface Feature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  color: ColorType;
  icon: React.ComponentType<{ className?: string }>;
  benefits: string[];
  placeholder: string;
}

const features: Feature[] = [
  {
    id: 'ai-writing',
    title: 'AI-Powered Writing Engine',
    subtitle: 'Generate high-quality content in seconds',
    description: 'Our advanced AI understands context, tone, and your brand voice to create compelling content that converts. From blog posts to social media, emails to product descriptions.',
    color: 'blue', // Trust & Intelligence
    icon: Brain,
    benefits: [
      'Understands your brand voice and tone',
      'Creates SEO-optimized content automatically',
      'Generates multiple variants to choose from',
      'Learns from your feedback to improve'
    ],
    placeholder: '/api/placeholder/600/400'
  },
  {
    id: 'brand-voice',
    title: 'Smart Brand Voice Training',
    subtitle: 'Consistent voice across all content',
    description: 'Train our AI on your existing content to perfectly match your brand personality. Every piece of content feels authentically yours, maintaining consistency at scale.',
    color: 'purple', // Creativity & Premium
    icon: Palette,
    benefits: [
      'Analyzes your existing content style',
      'Maintains tone consistency across channels',
      'Adapts to different content types',
      'Evolves with your brand over time'
    ],
    placeholder: '/api/placeholder/600/400'
  },
  {
    id: 'analytics',
    title: 'Performance Analytics',
    subtitle: 'Data-driven content optimization',
    description: 'Track how your content performs across channels. Get insights on engagement, conversions, and ROI to continuously improve your content strategy.',
    color: 'orange', // Energy & Action
    icon: BarChart3,
    benefits: [
      'Cross-platform performance tracking',
      'A/B testing for content variants',
      'ROI and conversion analytics',
      'Automated optimization suggestions'
    ],
    placeholder: '/api/placeholder/600/400'
  },
];

const colorClasses: Record<ColorType, {
  bg: string;
  border: string;
  icon: string;
  text: string;
  button: string;
  accent: string;
}> = {
  blue: {
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    icon: 'text-blue-600',
    text: 'text-blue-700',
    button: 'bg-blue-600 hover:bg-blue-700',
    accent: 'bg-blue-100'
  },
  purple: {
    bg: 'bg-purple-50',
    border: 'border-purple-100', 
    icon: 'text-purple-600',
    text: 'text-purple-700',
    button: 'bg-purple-600 hover:bg-purple-700',
    accent: 'bg-purple-100'
  },
  green: {
    bg: 'bg-green-50',
    border: 'border-green-100',
    icon: 'text-green-600', 
    text: 'text-green-700',
    button: 'bg-green-600 hover:bg-green-700',
    accent: 'bg-green-100'
  },
  orange: {
    bg: 'bg-orange-50',
    border: 'border-orange-100',
    icon: 'text-orange-600',
    text: 'text-orange-700', 
    button: 'bg-orange-600 hover:bg-orange-700',
    accent: 'bg-orange-100'
  },
  slate: {
    bg: 'bg-slate-50',
    border: 'border-slate-200',
    icon: 'text-slate-600',
    text: 'text-slate-700',
    button: 'bg-slate-600 hover:bg-slate-700',
    accent: 'bg-slate-100'
  }
};

export default function Features() {
  const [activeFeature, setActiveFeature] = useState('ai-writing');
  const currentFeature = features.find(f => f.id === activeFeature) || features[0];
  const colors = colorClasses[currentFeature.color];

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-background to-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-primary/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/3 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-left mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Powerful Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything you need to{' '}
            <span className="text-primary relative inline-block">
              create amazing content
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            From AI-powered writing to team collaboration, WriteFlow gives you all the tools to create, optimize, and scale your content strategy.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Feature Navigation Tabs */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-lg font-semibold text-foreground mb-6">Core Features</h3>
            {features.map((feature) => {
              const isActive = activeFeature === feature.id;
              const featureColors = colorClasses[feature.color];
              const IconComponent = feature.icon;
              
              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 hover:scale-[1.02] ${
                    isActive 
                      ? `${featureColors.bg} ${featureColors.border} shadow-md` 
                      : 'bg-background border-border hover:bg-muted/50'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`p-2 rounded-lg ${isActive ? featureColors.accent : 'bg-muted'}`}>
                      <IconComponent className={`w-5 h-5 ${isActive ? featureColors.icon : 'text-muted-foreground'}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className={`font-semibold text-sm mb-1 ${isActive ? featureColors.text : 'text-foreground'}`}>
                        {feature.title}
                      </h4>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {feature.subtitle}
                      </p>
                    </div>
                    {isActive && (
                      <ArrowRight className={`w-4 h-4 ${featureColors.icon} flex-shrink-0`} />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Feature Content */}
          <div className="lg:col-span-8">
            <div className={`rounded-2xl border p-8 transition-all duration-500 ${colors.bg} ${colors.border}`}>
              {/* Feature Header */}
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-3 rounded-xl ${colors.accent}`}>
                    <currentFeature.icon className={`w-6 h-6 ${colors.icon}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{currentFeature.title}</h3>
                    <p className={`text-sm ${colors.text} font-medium`}>{currentFeature.subtitle}</p>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {currentFeature.description}
                </p>
              </div>

              {/* Feature Image Placeholder */}
              <div className="mb-8 rounded-xl overflow-hidden bg-gradient-to-br from-muted/50 to-muted border border-border">
                <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-muted/30 to-muted/60">
                  <div className="text-center">
                    <PlayCircle className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                    <p className="text-muted-foreground font-medium">Feature Demo Placeholder</p>
                    <p className="text-sm text-muted-foreground/70">{currentFeature.title}</p>
                  </div>
                </div>
              </div>

              {/* Feature Benefits */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {currentFeature.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className={`w-5 h-5 ${colors.icon} flex-shrink-0 mt-0.5`} />
                    <span className="text-sm text-foreground font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Feature CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className={`${colors.button} text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  Try it
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">10x</div>
            <div className="text-sm text-muted-foreground">Faster Writing</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime SLA</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">50K+</div>
            <div className="text-sm text-muted-foreground">Happy Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support</div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to transform your content strategy?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of content creators who've already revolutionized their workflow with WriteFlow.
            </p>
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              Start Your Free Trial
              <Sparkles className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
