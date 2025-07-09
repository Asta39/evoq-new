import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ServiceHero = ({ selectedService, onConsultationClick }) => {
  const serviceData = {
    'website-development': {
      title: 'Website Development',
      subtitle: 'Custom Web Solutions That Drive Results',
      description: 'Transform your digital presence with cutting-edge websites built using modern technologies. We create responsive, fast-loading, and user-friendly websites that convert visitors into customers.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Mobile-First Approach'],
      icon: 'Code',
      gradient: 'from-blue-600 to-purple-600'
    },
    'website-rebranding': {
      title: 'Website Rebranding',
      subtitle: 'Refresh Your Digital Identity',
      description: 'Revitalize your online presence with strategic rebranding that aligns with your business goals. We modernize your website while maintaining brand consistency and improving user experience.',
      features: ['Brand Strategy', 'UI/UX Redesign', 'Content Migration', 'Performance Optimization'],
      icon: 'Palette',
      gradient: 'from-green-600 to-teal-600'
    },
    'seo-digital-visibility': {
      title: 'SEO & Digital Visibility',
      subtitle: 'Dominate Search Results',
      description: 'Boost your online visibility with comprehensive SEO strategies tailored for the Kenyan market. We help businesses rank higher on Google and attract more qualified leads.',
      features: ['Keyword Research', 'On-Page SEO', 'Local SEO', 'Analytics & Reporting'],
      icon: 'Search',
      gradient: 'from-orange-600 to-red-600'
    },
    'ai-powered-websites': {
      title: 'AI-Powered Websites',
      subtitle: 'Next-Generation Web Experiences',
      description: 'Leverage artificial intelligence to create smarter, more engaging websites. Our AI-enhanced solutions provide personalized user experiences and automated customer interactions.',
      features: ['AI Chatbots', 'Personalization', 'Smart Analytics', 'Automated Content'],
      icon: 'Brain',
      gradient: 'from-purple-600 to-pink-600'
    },
    'agentic-chatbots': {
      title: 'Agentic Chatbots',
      subtitle: 'Intelligent Customer Engagement',
      description: 'Deploy advanced AI chatbots that understand context and provide human-like interactions. Perfect for customer support, lead generation, and sales automation.',
      features: ['Natural Language Processing', '24/7 Support', 'Lead Qualification', 'Multi-language Support'],
      icon: 'MessageSquare',
      gradient: 'from-indigo-600 to-blue-600'
    }
  };

  const service = serviceData[selectedService] || serviceData['website-development'];

  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-16 md:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/20 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center`}>
                <Icon name={service.icon} size={24} className="text-white" />
              </div>
              <span className="text-accent font-body font-medium text-sm uppercase tracking-wider">
                Premium Service
              </span>
            </div>

            <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">
              {service.title}
            </h1>

            <h2 className="font-heading font-medium text-xl md:text-2xl text-primary-foreground/90">
              {service.subtitle}
            </h2>

            <p className="font-body text-base md:text-lg text-primary-foreground/80 leading-relaxed max-w-2xl">
              {service.description}
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-success flex-shrink-0" />
                  <span className="font-body text-sm text-primary-foreground/90">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                variant="secondary"
                size="lg"
                onClick={onConsultationClick}
                className="btn-hover-scale"
                iconName="Calendar"
                iconPosition="left"
              >
                Book Consultation
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open('https://wa.me/254700000000?text=Hi! I\'m interested in ' + service.title + ' services.', '_blank')}
                className="btn-hover-scale border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                iconName="MessageCircle"
                iconPosition="left"
              >
                WhatsApp Us
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative w-full h-80 md:h-96 bg-gradient-to-br from-surface/10 to-surface/5 rounded-2xl backdrop-blur-sm border border-primary-foreground/10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent"></div>
              
              {/* Mock Interface */}
              <div className="absolute inset-6 bg-background/95 rounded-lg shadow-lg overflow-hidden">
                <div className="h-8 bg-surface border-b border-border flex items-center px-4 space-x-2">
                  <div className="w-3 h-3 bg-error rounded-full"></div>
                  <div className="w-3 h-3 bg-warning rounded-full"></div>
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="h-4 bg-surface rounded w-3/4"></div>
                  <div className="h-4 bg-surface rounded w-1/2"></div>
                  <div className="h-20 bg-gradient-to-r from-accent/20 to-accent/10 rounded-lg flex items-center justify-center">
                    <Icon name={service.icon} size={32} className="text-accent" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-surface rounded w-full"></div>
                    <div className="h-3 bg-surface rounded w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;