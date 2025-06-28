import React from 'react';
import { ArrowRight, Sparkles, Zap, Brain } from 'lucide-react';
import Image from 'next/image';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-4 block">
              AI ASSISTANT
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Never write alone
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Get intelligent suggestions, expand your ideas, and overcome writer's block with AI that understands your voice
          </p>
          
          {/* CTA Button */}
          <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] inline-flex items-center gap-2">
            Start writing - it's free
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Demo Image */}
        <div className="relative max-w-5xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden p-8">
            <Image
              src="/image.png"
              alt="WriteFlow AI Writing Assistant Demo"
              width={1200}
              height={700}
              className="w-full h-auto rounded-lg"
              priority
            />
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Suggestions</h3>
            <p className="text-gray-600">Get contextual writing suggestions that match your style and tone</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Creative Expansion</h3>
            <p className="text-gray-600">Transform brief notes into comprehensive, engaging content</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Instant Flow</h3>
            <p className="text-gray-600">Break through writer's block with real-time assistance</p>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center">
          <p className="text-gray-600 text-lg">
            Join thousands of writers who never write alone • No credit card required
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
