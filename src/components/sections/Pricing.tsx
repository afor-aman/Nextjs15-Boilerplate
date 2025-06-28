import React from 'react';
import { Check, Star, Zap, Crown, ArrowRight, Calendar } from 'lucide-react';

interface PricingTier {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  billingPeriod: string;
  description: string;
  features: string[];
  cta: {
    text: string;
    type: 'primary' | 'secondary';
  };
  badge?: string;
  popular?: boolean;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const pricingTiers: PricingTier[] = [
  {
    id: 'start',
    name: 'Start',
    price: 0,
    billingPeriod: 'forever',
    description: 'Perfect for trying out WriteFlow and creating your first content pieces',
    features: [
      '5,000 words per month',
      '3 AI writing templates',
      'Basic grammar checking',
      'Email support',
      'Export to PDF/Word',
      'Mobile app access'
    ],
    cta: {
      text: 'Start Free Trial',
      type: 'secondary'
    },
    icon: Star,
    color: 'gray'
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 19,
    originalPrice: 29,
    billingPeriod: 'per month',
    description: 'Ideal for content creators and small teams who need advanced AI assistance',
    features: [
      'Unlimited words',
      '50+ AI writing templates',
      'Advanced grammar & style',
      'Brand voice training',
      'Priority support',
      'Team collaboration (3 members)',
      'Custom templates',
      'Plagiarism checker',
      'SEO optimization',
      'API access'
    ],
    cta: {
      text: 'Start Free Trial',
      type: 'primary'
    },
    badge: 'Most Popular',
    popular: true,
    icon: Zap,
    color: 'blue'
  },
  {
    id: 'ultimate',
    name: 'Ultimate',
    price: 49,
    originalPrice: 79,
    billingPeriod: 'per month',
    description: 'For agencies and enterprises requiring maximum power and customization',
    features: [
      'Everything in Pro',
      'Unlimited team members',
      'White-label solution',
      'Custom AI model training',
      'Advanced analytics',
      'Dedicated account manager',
      'Custom integrations',
      'SLA guarantee (99.9%)',
      'On-premise deployment',
      'Advanced security features'
    ],
    cta: {
      text: 'Book a Demo',
      type: 'primary'
    },
    badge: 'Enterprise',
    icon: Crown,
    color: 'purple'
  }
];

const Pricing: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Choose your writing superpower
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Start free, scale as you grow. All plans include our core AI writing features with no hidden fees.
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white rounded-full p-2 shadow-lg border border-gray-200">
            <span className="px-4 py-2 text-sm font-medium text-gray-600">Monthly</span>
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
              Save 35% with Annual
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier) => {
            const IconComponent = tier.icon;
            const isPopular = tier.popular;
            
            return (
              <div 
                key={tier.id}
                className={`relative bg-white rounded-2xl shadow-xl border-2 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] ${
                  isPopular 
                    ? 'border-blue-500 ring-4 ring-blue-100' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {/* Popular Badge */}
                {tier.badge && (
                  <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full text-sm font-bold text-white shadow-lg ${
                    isPopular ? 'bg-blue-600' : 'bg-purple-600'
                  }`}>
                    {tier.badge}
                  </div>
                )}

                <div className="p-8">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                      tier.color === 'blue' ? 'bg-blue-100' :
                      tier.color === 'purple' ? 'bg-purple-100' : 'bg-gray-100'
                    }`}>
                      <IconComponent className={`w-8 h-8 ${
                        tier.color === 'blue' ? 'text-blue-600' :
                        tier.color === 'purple' ? 'text-purple-600' : 'text-gray-600'
                      }`} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{tier.description}</p>
                    
                    {/* Pricing */}
                    <div className="mb-6">
                      <div className="flex items-baseline justify-center">
                        {tier.originalPrice && (
                          <span className="text-lg text-gray-400 line-through mr-2">
                            ${tier.originalPrice}
                          </span>
                        )}
                        <span className="text-4xl font-bold text-gray-900">
                          ${tier.price}
                        </span>
                        <span className="text-gray-600 ml-2">/{tier.billingPeriod}</span>
                      </div>
                      
                      {tier.originalPrice && (
                        <div className="text-green-600 text-sm font-semibold mt-2">
                          Save ${tier.originalPrice - tier.price}/month
                        </div>
                      )}
                      
                      {tier.price > 0 && (
                        <div className="text-gray-500 text-sm mt-1">
                          That's just ${(tier.price / 30).toFixed(2)} per day
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {tier.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                          tier.color === 'blue' ? 'text-blue-600' :
                          tier.color === 'purple' ? 'text-purple-600' : 'text-green-600'
                        }`} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02] flex items-center justify-center space-x-2 ${
                    tier.cta.type === 'primary'
                      ? `${tier.color === 'purple' ? 'bg-purple-600 hover:bg-purple-700' : 'bg-blue-600 hover:bg-blue-700'} text-white shadow-lg`
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900 border-2 border-gray-200 hover:border-gray-300'
                  }`}>
                    <span>{tier.cta.text}</span>
                    {tier.cta.text.includes('Demo') ? (
                      <Calendar className="w-5 h-5" />
                    ) : (
                      <ArrowRight className="w-5 h-5" />
                    )}
                  </button>

                  {/* Trust Signal */}
                  <p className="text-center text-gray-500 text-xs mt-4">
                    {tier.price === 0 ? 'No credit card required' : '14-day money-back guarantee'}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Comparison */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 text-center">
              Compare all features
            </h3>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-4 gap-4 text-sm">
              {/* Header Row */}
              <div className="font-semibold text-gray-900">Features</div>
              <div className="text-center font-semibold text-gray-600">Start</div>
              <div className="text-center font-semibold text-blue-600">Pro</div>
              <div className="text-center font-semibold text-purple-600">Ultimate</div>
              
              {/* Feature Rows */}
              {[
                ['Monthly word limit', '5,000', 'Unlimited', 'Unlimited'],
                ['AI Templates', '3', '50+', '50+'],
                ['Team members', '1', '3', 'Unlimited'],
                ['Brand voice training', '❌', '✅', '✅'],
                ['API access', '❌', '✅', '✅'],
                ['White-label', '❌', '❌', '✅'],
                ['Dedicated support', '❌', '❌', '✅']
              ].map((row, index) => (
                <React.Fragment key={index}>
                  <div className="py-3 border-t border-gray-100 font-medium text-gray-900">
                    {row[0]}
                  </div>
                  <div className="py-3 border-t border-gray-100 text-center text-gray-600">
                    {row[1]}
                  </div>
                  <div className="py-3 border-t border-gray-100 text-center text-blue-600 font-medium">
                    {row[2]}
                  </div>
                  <div className="py-3 border-t border-gray-100 text-center text-purple-600 font-medium">
                    {row[3]}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Teaser */}
        <div className="text-center mt-16">
          <p className="text-gray-600 text-lg mb-4">
            Questions about pricing? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="text-blue-600 hover:text-blue-700 font-semibold">
              View FAQ →
            </button>
            <span className="text-gray-400">•</span>
            <button className="text-blue-600 hover:text-blue-700 font-semibold">
              Contact Sales →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
