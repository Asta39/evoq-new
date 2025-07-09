import React from 'react';
import Icon from '../../../components/AppIcon';

const ServiceSelector = ({ selectedService, onServiceChange }) => {
  const services = [
    {
      id: 'website-development',
      name: 'Website Development',
      icon: 'Code',
      description: 'Custom web solutions'
    },
    {
      id: 'website-rebranding',
      name: 'Website Rebranding',
      icon: 'Palette',
      description: 'Digital identity refresh'
    },
    {
      id: 'seo-digital-visibility',
      name: 'SEO & Digital Visibility',
      icon: 'Search',
      description: 'Search optimization'
    },
    {
      id: 'ai-powered-websites',
      name: 'AI-Powered Websites',
      icon: 'Brain',
      description: 'Next-gen web experiences'
    },
    {
      id: 'agentic-chatbots',
      name: 'Agentic Chatbots',
      icon: 'MessageSquare',
      description: 'Intelligent automation'
    }
  ];

  return (
    <section className="bg-surface py-12">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center mb-8">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary mb-4">
            Explore Our Services
          </h2>
          <p className="font-body text-text-secondary max-w-2xl mx-auto">
            Choose a service to learn more about our capabilities and approach
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => onServiceChange(service.id)}
              className={`p-4 rounded-lg border-2 transition-all duration-200 ease-in-out text-left btn-hover-scale ${
                selectedService === service.id
                  ? 'border-accent bg-accent/5 shadow-md'
                  : 'border-border bg-background hover:border-accent/50 hover:bg-accent/5'
              }`}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  selectedService === service.id
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-surface text-text-primary'
                }`}>
                  <Icon name={service.icon} size={20} />
                </div>
                
                <div>
                  <h3 className={`font-heading font-semibold text-sm mb-1 ${
                    selectedService === service.id ? 'text-accent' : 'text-primary'
                  }`}>
                    {service.name}
                  </h3>
                  <p className="font-body text-xs text-text-secondary">
                    {service.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSelector;