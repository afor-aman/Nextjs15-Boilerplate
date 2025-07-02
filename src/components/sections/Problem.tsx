'use client'
import React from 'react';
import { AlertTriangle, ArrowRight, Zap, Clock, DollarSign, TrendingUp, Target, Star, Users, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Problem() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-background via-background to-muted/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-destructive/5 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header - Left Aligned */}
        <div className="text-left mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-muted/50 rounded-full border border-border/50 mb-6">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Problem → Solution Analysis</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            The Content Creation Reality Check
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            89% of content teams bleed hours on tasks that don&apos;t convert.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          
          {/* Problem Section */}
          <div className="space-y-6 lg:space-y-7">
            <div className="text-left">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-destructive/10 rounded-full border border-destructive/20 mb-6">
                <AlertTriangle className="w-4 h-4 text-destructive" />
                <span className="text-sm font-medium text-destructive">The Painful Reality</span>
              </div>
              
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                Content creation is{' '}
                <span className="text-destructive relative inline-block">
                  killing your growth
                </span>
              </h3>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                You&apos;re burning <strong className="text-destructive font-bold">20+ hours per week</strong> creating content that barely converts, while your competitors race ahead.
              </p>

              {/* Impact Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-destructive/5 rounded-lg border border-destructive/10">
                  <div className="text-2xl font-bold text-destructive mb-1">73%</div>
                  <div className="text-sm text-muted-foreground">Time wasted on research</div>
                </div>
                <div className="text-center p-4 bg-destructive/5 rounded-lg border border-destructive/10">
                  <div className="text-2xl font-bold text-destructive mb-1">$2.4K</div>
                  <div className="text-sm text-muted-foreground">Monthly content costs</div>
                </div>
              </div>
            </div>

            {/* Problem Pain Points */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-5 bg-destructive/5 rounded-xl border border-destructive/10 hover:bg-destructive/10 transition-colors">
                <Clock className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-foreground font-semibold">20+ hours wasted every week</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-5 bg-destructive/5 rounded-xl border border-destructive/10 hover:bg-destructive/10 transition-colors">
                <TrendingUp className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-foreground font-semibold">No predictable growth without a system</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-5 bg-destructive/5 rounded-xl border border-destructive/10 hover:bg-destructive/10 transition-colors">
                <DollarSign className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-foreground font-semibold">Outsourcing costs spiral out of control</p>
                </div>
              </div>
            </div>

            {/* Pain Point Quote */}
            <div className="bg-muted/30 p-6 rounded-xl border border-border/50 relative">
              <div className="absolute top-4 left-4 text-6xl text-destructive/20 font-serif">&quot;</div>
              <p className="text-foreground italic text-lg pl-8 mb-3 font-medium">
                I was spending 15 hours a week on content and barely getting results. It felt like I was stuck in quicksand.
              </p>
              <div className="flex items-center space-x-2 pl-8">
                <div className="flex items-center space-x-1 mr-2">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <Star className="w-4 h-4 text-gray-300" />
                </div>
                <div className="w-8 h-8 bg-muted rounded-full"></div>
                <div className="text-sm text-foreground font-medium">Sarah K., Marketing Director</div>
              </div>
            </div>
          </div>

          {/* Solution Section */}
          <div className="space-y-6 lg:space-y-7">
            <div className="text-left">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">The Smart Solution</span>
              </div>
              
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                AI that writes like{' '}
                <span className="text-primary relative inline-block">
                  you, but faster
                </span>
              </h3>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Transform your content creation from <strong className="text-foreground">painful chore</strong> to <strong className="text-primary">competitive advantage</strong> in just minutes.
              </p>

              {/* Success Stats - Enhanced with green tint and shadow */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-primary/5 rounded-lg border border-primary/10 shadow-sm">
                  <div className="text-2xl font-bold text-primary mb-1">10x</div>
                  <div className="text-sm text-muted-foreground">Faster content creation</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-primary/5 rounded-lg border border-primary/10 shadow-sm">
                  <div className="text-2xl font-bold text-primary mb-1">94%</div>
                  <div className="text-sm text-muted-foreground">Time saved weekly</div>
                </div>
              </div>
            </div>

            {/* Solution Benefits */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-5 bg-primary/5 rounded-xl border border-primary/10 hover:bg-primary/10 transition-colors">
                <Zap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-foreground font-semibold">Content in minutes, not hours</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-5 bg-primary/5 rounded-xl border border-primary/10 hover:bg-primary/10 transition-colors">
                <Target className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-foreground font-semibold">Perfect brand voice, every time</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-5 bg-primary/5 rounded-xl border border-primary/10 hover:bg-primary/10 transition-colors">
                <DollarSign className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-foreground font-semibold">Save $30K+ annually on content</p>
                </div>
              </div>
            </div>

            {/* Mini CTA - Solid Accent Color */}
            <div className="text-left">
              <Button 
                className="inline-flex items-center space-x-2 px-6 py-3 bg-accent text-accent-foreground hover:bg-accent/90 transition-colors shadow-md"
              >
                <Eye className="w-4 h-4" />
                <span>See it in action</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Success Story */}
            <div className="bg-primary/5 p-6 rounded-xl border border-primary/20 relative">
              <div className="absolute top-4 left-4 text-6xl text-primary/20 font-serif">&quot;</div>
              <p className="text-foreground italic text-lg pl-8 mb-3">
                WriteFlow transformed my content strategy. I went from 20 hours a week to 2 hours, and my engagement doubled.
              </p>
              <div className="flex items-center space-x-2 pl-8">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">Mike R., Content Creator</div>
              </div>
            </div>

            {/* Strong CTA */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-xl border border-primary/20">
              <div className="flex items-center space-x-2 mb-4">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">Join 50,000+ Smart Content Creators</span>
              </div>
              <Button 
                size="lg"
                className="w-full px-8 py-4 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                Start Your Free Trial Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <p className="text-sm text-muted-foreground text-center mt-3">
                ✨ No credit card required • Cancel anytime • 7-day money-back guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
