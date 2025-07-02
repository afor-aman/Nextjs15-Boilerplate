'use client'
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Sparkles, 
  ArrowRight, 
  Play,
  CheckCircle,
  Star,
  Menu,
  X
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      {/* Navigation Header */}
      <nav className="w-full px-4 sm:px-6 lg:px-8 py-4 border-b border-border/50 backdrop-blur-sm bg-background/95 fixed top-0 z-50">
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
            <a href="/login" className="text-muted-foreground font-medium hover:text-primary transition-colors">
              Sign In
            </a>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6">
              <Link href="/signup">
                Sign Up
              </Link>
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
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh] py-8 sm:py-12 lg:py-24">
            
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
                  Transform your ideas into compelling content in seconds. WriteFlow&apos;s AI understands your voice, adapts to your style, and delivers human-quality writing that converts.
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
              {/* <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-6 pt-4 sm:pt-6 text-xs sm:text-sm text-muted-foreground">
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
              </div> */}
            </div>

                      {/* Right Column - Product Demo */}
            <div className="relative order-2 lg:order-2">
              {/* Background decorative elements */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <div className="w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl"></div>
              </div>
              
              {/* Main Product Interface */}
              <Image src="/image.png" alt="WriteFlow Interface" width={1000} height={1000} className="w-full border-2 border-primary rounded-lg h-full object-cover" />
            </div>
        </div>
      </main>
    </div>
  );
}
