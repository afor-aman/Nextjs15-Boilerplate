'use client'
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Sparkles, 
  ArrowRight, 
  Play,
  CheckCircle,
  Users,
  Star,
  Zap,
  Shield,
  Globe,
  Menu,
  X
} from 'lucide-react';

export default function Hero() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      {/* Navigation Header */}
      <nav className="w-full px-4 sm:px-6 lg:px-8 py-4 border-b border-border/50 backdrop-blur-sm bg-background/95 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">WriteFlow</span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Features
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Pricing
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Templates
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Help
            </a>
          </div>

          {/* Desktop Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-muted-foreground font-medium hover:text-primary transition-colors">
              Sign In
            </a>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/50">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium px-2 py-1">
                Features
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium px-2 py-1">
                Pricing
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium px-2 py-1">
                Templates
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium px-2 py-1">
                Help
              </a>
              <div className="flex flex-col space-y-3 pt-4 border-t border-border/50">
                <a href="#" className="text-muted-foreground font-medium hover:text-primary transition-colors px-2 py-1">
                  Sign In
                </a>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

              {/* Main Hero Section - Above the Fold */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh] py-8 sm:py-12 lg:py-16">
            
            {/* Left Column - Hero Content */}
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-1">
              {/* Social Proof Badge */}
              <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-accent/50 rounded-full border border-border/50 text-center">
                <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-foreground">Trusted by 50,000+ writers</span>
                <div className="hidden sm:flex -space-x-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-500 rounded-full border-2 border-background"></div>
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full border-2 border-background"></div>
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-purple-500 rounded-full border-2 border-background"></div>
                </div>
              </div>

              {/* Main Value Proposition */}
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Write 10x faster with{' '}
                  <span className="text-primary relative">
                    AI that thinks
                    <div className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-0.5 sm:h-1 bg-primary/20 rounded-full"></div>
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
                  Transform your ideas into compelling content in seconds. WriteFlow's AI understands your voice, adapts to your style, and delivers human-quality writing that converts.
                </p>
              </div>

              {/* Benefits List */}
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-foreground">Generate blog posts, emails, and copy in minutes</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-foreground">Maintain your unique brand voice across all content</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-foreground">Built-in plagiarism detection and fact-checking</span>
                </div>
              </div>

              {/* Single Focused CTA */}
              <div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4 pt-4">
                <Button 
                  size="lg"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Start Writing for Free
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="lg"
                  className="w-full sm:w-auto px-4 sm:px-6 py-3 sm:py-4 text-muted-foreground hover:text-foreground group"
                >
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:text-primary transition-colors" />
                  Watch 2-min demo
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-6 pt-4 sm:pt-6 text-xs sm:text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>GDPR compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-purple-500 flex-shrink-0" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>

                      {/* Right Column - Product Demo */}
            <div className="relative order-2 lg:order-2">
              {/* Background decorative elements */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <div className="w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl"></div>
              </div>
              
              {/* Main Product Interface */}
              <div className="relative bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl">
                {/* Browser Header */}
                <div className="flex items-center space-x-2 mb-4 sm:mb-6">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                  <div className="ml-2 sm:ml-4 text-xs text-muted-foreground bg-accent/50 px-2 sm:px-3 py-1 rounded-full hidden sm:block">
                    app.writeflow.ai
                  </div>
                </div>
                
                {/* Editor Interface */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      <span className="text-sm sm:text-base font-semibold text-foreground">AI Writing Assistant</span>
                    </div>
                    <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                      Online
                    </div>
                  </div>
                  
                  {/* Writing Interface */}
                  <div className="bg-background rounded-lg p-3 sm:p-4 border border-border/50">
                    <div className="text-xs sm:text-sm text-muted-foreground mb-2">✨ AI Suggestion</div>
                    <div className="space-y-2 text-xs sm:text-sm">
                      <p className="text-foreground">
                        "Transform your marketing strategy with data-driven insights that deliver measurable results..."
                      </p>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                        <span>Writing in your brand voice</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-2 sm:pt-4">
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-foreground">2.3s</div>
                      <div className="text-xs text-muted-foreground">Avg generation</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-foreground">98%</div>
                      <div className="text-xs text-muted-foreground">Accuracy rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-foreground">15+</div>
                      <div className="text-xs text-muted-foreground">Content types</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Feature Cards - Hidden on mobile for cleaner look */}
              <div className="hidden sm:block absolute -top-4 -left-4 bg-card border border-border rounded-xl p-3 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-yellow-500" />
                  <span className="text-xs font-medium">10x faster writing</span>
                </div>
              </div>
              
              <div className="hidden sm:block absolute -bottom-4 -right-4 bg-card border border-border rounded-xl p-3 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-blue-500" />
                  <span className="text-xs font-medium">25+ languages</span>
                </div>
              </div>

              {/* Mobile Feature Pills - Shown only on mobile */}
              <div className="flex sm:hidden justify-center space-x-4 mt-4">
                <div className="flex items-center space-x-1 bg-card border border-border rounded-lg px-3 py-2 shadow-sm">
                  <Zap className="w-3 h-3 text-yellow-500" />
                  <span className="text-xs font-medium">10x faster</span>
                </div>
                <div className="flex items-center space-x-1 bg-card border border-border rounded-lg px-3 py-2 shadow-sm">
                  <Globe className="w-3 h-3 text-blue-500" />
                  <span className="text-xs font-medium">25+ languages</span>
                </div>
              </div>
            </div>
        </div>

                  {/* Social Proof Section */}
          <div className="py-12 sm:py-16 border-t border-border/50">
            <div className="text-center mb-8 sm:mb-12">
              <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">Trusted by teams at</p>
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-12 opacity-60">
                <div className="h-7 sm:h-8 bg-muted rounded flex items-center justify-center px-4 sm:px-6 text-xs sm:text-sm font-medium">
                  TechCorp
                </div>
                <div className="h-7 sm:h-8 bg-muted rounded flex items-center justify-center px-4 sm:px-6 text-xs sm:text-sm font-medium">
                  StartupFlow
                </div>
                <div className="h-7 sm:h-8 bg-muted rounded flex items-center justify-center px-4 sm:px-6 text-xs sm:text-sm font-medium">
                  CreativeStudio
                </div>
                <div className="h-7 sm:h-8 bg-muted rounded flex items-center justify-center px-4 sm:px-6 text-xs sm:text-sm font-medium">
                  DataDriven
                </div>
                <div className="h-7 sm:h-8 bg-muted rounded flex items-center justify-center px-4 sm:px-6 text-xs sm:text-sm font-medium">
                  GrowthLab
                </div>
              </div>
            </div>
            
            {/* Testimonial */}
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-6 sm:p-8">
                <div className="flex justify-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-base sm:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed">
                  "WriteFlow has completely transformed how our marketing team creates content. We're publishing 3x more high-quality articles and our engagement rates have doubled."
                </blockquote>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                    SJ
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="font-semibold text-foreground text-sm sm:text-base">Sarah Johnson</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Head of Marketing, TechCorp</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </main>
    </div>
  );
}
