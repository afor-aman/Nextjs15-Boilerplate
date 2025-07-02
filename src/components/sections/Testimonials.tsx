'use client'
import React from 'react';
import { 
  Star,
  Quote,
  Users,
  TrendingUp,
  MessageSquare,
  ThumbsUp,
  Heart,
} from 'lucide-react';

// Featured testimonials (hero section)
const featuredTestimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Content Marketing Director",
    company: "TechFlow",
    avatar: "/api/placeholder/80/80",
    content: "WriteFlow transformed our content strategy completely. We went from publishing 2 blog posts per week to 10, with engagement rates increasing by 340%. The AI understands our brand voice perfectly.",
    rating: 5,
    metrics: "340% engagement increase",
    featured: true
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Founder & CEO",
    company: "StartupBoost",
    avatar: "/api/placeholder/80/80",
    content: "As a non-native English speaker, WriteFlow has been a game-changer. The quality of content it produces is indistinguishable from what our best copywriters create, but 10x faster.",
    rating: 5,
    metrics: "10x faster content creation",
    featured: true
  }
];

// Grid testimonials
const gridTestimonials = [
  {
    id: 3,
    name: "Emily Johnson",
    role: "Social Media Manager",
    company: "BrandCraft",
    avatar: "/api/placeholder/60/60",
    content: "The AI-powered writing engine is incredible. It maintains our brand voice across all platforms and has cut our content creation time by 80%.",
    rating: 5,
    category: "Efficiency"
  },
  {
    id: 4,
    name: "David Park",
    role: "Marketing Lead",
    company: "GrowthLab",
    avatar: "/api/placeholder/60/60",
    content: "WriteFlow's SEO optimization features helped us rank #1 for 15 competitive keywords within 3 months. The ROI is incredible.",
    rating: 5,
    category: "SEO Results"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Content Creator",
    company: "CreativeStudio",
    avatar: "/api/placeholder/60/60",
    content: "The multi-language support is phenomenal. We now create content in 8 languages simultaneously, expanding our global reach.",
    rating: 5,
    category: "Global Reach"
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Digital Marketing Manager",
    company: "ScaleUp Inc",
    avatar: "/api/placeholder/60/60",
    content: "Team collaboration features are outstanding. Our approval workflow is now seamless, and content quality has never been better.",
    rating: 5,
    category: "Team Workflow"
  },
  {
    id: 7,
    name: "Anna Kowalski",
    role: "Blog Editor",
    company: "ContentPro",
    avatar: "/api/placeholder/60/60",
    content: "The analytics dashboard gives us insights we never had before. We can now optimize content performance in real-time.",
    rating: 5,
    category: "Analytics"
  },
  {
    id: 8,
    name: "Michael Chang",
    role: "E-commerce Manager",
    company: "ShopSmart",
    avatar: "/api/placeholder/60/60",
    content: "Product descriptions that used to take hours now take minutes. Our conversion rates improved by 45% since switching to WriteFlow.",
    rating: 5,
    category: "E-commerce"
  }
];

// Social proof statistics
const socialProofStats = [
  {
    number: "50K+",
    label: "Content Creators",
    icon: Users,
    color: "text-blue-600"
  },
  {
    number: "2M+",
    label: "Content Pieces Created",
    icon: MessageSquare,
    color: "text-green-600"
  },
  {
    number: "99.8%",
    label: "Customer Satisfaction",
    icon: Heart,
    color: "text-red-500"
  },
  {
    number: "4.9/5",
    label: "Average Rating",
    icon: Star,
    color: "text-yellow-500"
  }
];

// Render star rating
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

// Avatar placeholder
const Avatar = ({ alt, size = 'md' }: { alt: string; size?: 'sm' | 'md' | 'lg' }) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };
  
  return (
    <div className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-2 border-white shadow-sm`}>
      <span className="text-sm font-semibold text-foreground">
        {alt.split(' ').map(n => n[0]).join('')}
      </span>
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-50 rounded-full border border-green-100 mb-6">
            <ThumbsUp className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-green-700">Customer Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Loved by{' '}
            <span className="text-primary relative inline-block">
              50,000+ creators
            </span>{' '}
            worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join thousands of content creators, marketers, and businesses who have transformed their content strategy with WriteFlow.
          </p>
        </div>

        {/* Social Proof Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {socialProofStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <div className="p-3 bg-background rounded-xl shadow-sm border border-border">
                    <IconComponent className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Featured Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {featuredTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-background rounded-2xl border border-border p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-primary/30" />
              </div>
              
              {/* Content */}
              <blockquote className="text-lg text-foreground leading-relaxed mb-6">
                &quot;{testimonial.content}&quot;
              </blockquote>
              
              {/* Metrics Badge */}
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-green-50 rounded-full border border-green-100 mb-6">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-700">{testimonial.metrics}</span>
              </div>
              
              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <Avatar alt={testimonial.name} size="lg" />
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-1">
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <StarRating rating={testimonial.rating} />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Grid Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {gridTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-background rounded-xl border border-border p-6 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
              {/* Rating */}
              <div className="flex items-center justify-between mb-4">
                <StarRating rating={testimonial.rating} />
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                  {testimonial.category}
                </span>
              </div>
              
              {/* Content */}
              <blockquote className="text-sm text-foreground leading-relaxed mb-4">
                "{testimonial.content}"
              </blockquote>
              
              {/* Author Info */}
              <div className="flex items-center space-x-3">
                <Avatar alt={testimonial.name} size="sm" />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-foreground text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground truncate">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
