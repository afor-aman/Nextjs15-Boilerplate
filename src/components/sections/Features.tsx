'use client'
import React from 'react';
import { 
  Brain,
  Palette,
  BarChart3,
  FileText,
  Search,
  Calendar,
  Puzzle,
  Library,
  Workflow,
  Globe,
  Shield,
  Sparkles,
  Users,
  MessageCircle,
  Upload,
  Moon,
  Languages,
  BookOpen,
  RefreshCw,
  Download,
  ListChecks,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

type ColorType = 'blue' | 'purple' | 'green' | 'orange' | 'teal' | 'indigo' | 'pink' | 'slate';
type DemoType = 'writing' | 'autocomplete' | 'chat' | 'upload';

interface FeaturedDemo {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  color: ColorType;
  icon: React.ComponentType<{ className?: string }>;
  demoType: DemoType;
}

interface AdditionalFeature {
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  color: ColorType;
  isNew: boolean;
}

// Featured demos (top 4 with visual elements)
const featuredDemos: FeaturedDemo[] = [
  {
    id: 'ai-writing',
    title: 'AI-Powered Writing Engine',
    subtitle: 'Generate high-quality content in seconds',
    description: 'Our advanced AI understands context, tone, and your brand voice to create compelling content that converts.',
    color: 'blue',
    icon: Brain,
    demoType: 'writing'
  },
  {
    id: 'brand-voice',
    title: 'Smart Brand Voice Training',
    subtitle: 'Consistent voice across all content',
    description: 'Train our AI on your existing content to perfectly match your brand personality and maintain consistency.',
    color: 'purple',
    icon: Palette,
    demoType: 'autocomplete'
  },
  {
    id: 'chat-assistant',
    title: 'AI Content Assistant',
    subtitle: 'Chat with your content library',
    description: 'Ask questions about your content, get suggestions, and receive instant help from our AI assistant.',
    color: 'green',
    icon: MessageCircle,
    demoType: 'chat'
  },
  {
    id: 'file-generation',
    title: 'Generate From Your Files',
    subtitle: 'Transform documents into content',
    description: 'Upload your research, documents, or files and generate new content based on your existing materials.',
    color: 'orange',
    icon: Upload,
    demoType: 'upload'
  }
];

// All other features (grid layout)
const additionalFeatures: AdditionalFeature[] = [
  {
    title: 'Performance Analytics',
    subtitle: 'Track how your content performs across channels with detailed insights',
    icon: BarChart3,
    color: 'blue',
    isNew: false
  },
  {
    title: 'Multi-Language Support',
    subtitle: 'Create content in 50+ languages with AI-powered translation',
    icon: Languages,
    color: 'teal',
    isNew: false
  },
  {
    title: 'Content Templates',
    subtitle: 'Access 500+ professional templates for every content type',
    icon: FileText,
    color: 'green',
    isNew: false
  },
  {
    title: '1,700+ Content Styles',
    subtitle: 'Write in any style required by your brand or target audience',
    icon: Sparkles,
    color: 'purple',
    isNew: true
  },
  {
    title: 'SEO Optimization',
    subtitle: 'Built-in SEO suggestions and keyword optimization for better ranking',
    icon: Search,
    color: 'indigo',
    isNew: false
  }
];

const colorClasses: Record<ColorType, string> = {
  blue: 'bg-blue-50 border-blue-100 text-blue-700',
  purple: 'bg-purple-50 border-purple-100 text-purple-700',
  green: 'bg-green-50 border-green-100 text-green-700',
  orange: 'bg-orange-50 border-orange-100 text-orange-700',
  teal: 'bg-teal-50 border-teal-100 text-teal-700',
  indigo: 'bg-indigo-50 border-indigo-100 text-indigo-700',
  pink: 'bg-pink-50 border-pink-100 text-pink-700',
  slate: 'bg-slate-50 border-slate-100 text-slate-700'
};

const iconColors: Record<ColorType, string> = {
  blue: 'text-blue-600',
  purple: 'text-purple-600',
  green: 'text-green-600',
  orange: 'text-orange-600',
  teal: 'text-teal-600',
  indigo: 'text-indigo-600',
  pink: 'text-pink-600',
  slate: 'text-slate-600'
};

// Demo placeholder component with actual image
const DemoPlaceholder = ({ type, title }: { type: DemoType; title: string }) => {
  return (
    <div className="rounded-xl overflow-hidden bg-white border border-border shadow-sm">
      <div className="w-full h-full relative">
        <Image 
          src="/image.png" 
          alt={`${title} Demo`} 
          width={600} 
          height={400} 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default function Features() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-background to-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
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
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From AI-powered writing to team collaboration, WriteFlow gives you all the tools to create, optimize, and scale your content strategy.
          </p>
        </div>

        {/* Featured Demos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {featuredDemos.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className={`rounded-2xl border p-6 transition-all duration-300 hover:shadow-lg ${colorClasses[feature.color]}`}
              >
                {/* Feature Header */}
                <div className="mb-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`p-2 rounded-lg bg-white/50`}>
                      <IconComponent className={`w-5 h-5 ${iconColors[feature.color]}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{feature.title}</h3>
                      <p className="text-sm font-medium opacity-80">{feature.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Demo with Image */}
                <DemoPlaceholder type={feature.demoType} title={feature.title} />
              </div>
            );
          })}
        </div>

        {/* Additional Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {additionalFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-background rounded-xl border border-border p-6 hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-2 rounded-lg ${colorClasses[feature.color]}`}>
                    <IconComponent className={`w-5 h-5 ${iconColors[feature.color]}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-semibold text-foreground">{feature.title}</h3>
                      {feature.isNew && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                          NEW
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">10x</div>
            <div className="text-sm text-muted-foreground">Faster Writing</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">50K+</div>
            <div className="text-sm text-muted-foreground">Happy Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">1,700+</div>
            <div className="text-sm text-muted-foreground">Content Styles</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">AI Support</div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
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
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
