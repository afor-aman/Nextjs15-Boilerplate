import React from 'react';
import { 
  FileText, 
  BookOpen, 
  Shield, 
  Send, 
  PenTool, 
  Mic 
} from 'lucide-react';

interface UseCase {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const useCases: UseCase[] = [
  {
    id: 'blog-posts',
    title: 'Blog Posts',
    description: 'Create engaging blog content that drives traffic and converts readers into customers.',
    icon: FileText
  },
  {
    id: 'social-media',
    title: 'Social Media',
    description: 'Generate viral-worthy posts, captions, and stories across all platforms.',
    icon: Send
  },
  {
    id: 'email-campaigns',
    title: 'Email Campaigns',
    description: 'Craft compelling email sequences that nurture leads and boost conversions.',
    icon: PenTool
  },
  {
    id: 'case-studies',
    title: 'Case Studies',
    description: 'Showcase your success stories with professional, data-driven case studies.',
    icon: BookOpen
  },
  {
    id: 'sales-copy',
    title: 'Sales Copy',
    description: 'Write persuasive sales pages and landing pages that convert visitors into buyers.',
    icon: Shield
  },
  {
    id: 'video-scripts',
    title: 'Video Scripts',
    description: 'Create engaging scripts for YouTube, ads, and presentations that captivate audiences.',
    icon: Mic
  }
];

const UseCase: React.FC = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-sm font-semibold text-primary/70 tracking-widest uppercase mb-4 block">
              USE CASES
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            You&apos;re in control
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Types of content WriteFlow can help you with
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase) => {
            const IconComponent = useCase.icon;
            return (
              <div 
                key={useCase.id}
                className="group bg-background border border-border rounded-2xl p-8 hover:border-purple-200 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-[1.02]"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-purple-600" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    {useCase.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to create content that converts?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
              Start Creating Now
            </button>
            <p className="text-sm text-muted-foreground">
              No credit card required • Free 7-day trial
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCase;
