import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ServicesSection = () => {
  const services = [
    {
      icon: "Code",
      title: "Website Development",
      description: "Custom-built websites that combine stunning design with powerful functionality. From simple landing pages to complex web applications, we create digital experiences that convert visitors into customers.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile-First"],
      link: "/services-detail"
    },
    {
      icon: "Palette",
      title: "Website Rebranding",
      description: "Transform your existing website with a fresh, modern look that reflects your brand evolution. We redesign and restructure your digital presence to improve user experience and business outcomes.",
      features: ["Brand Analysis", "UX/UI Redesign", "Content Strategy", "Migration Support"],
      link: "/services-detail"
    },
    {
      icon: "Search",
      title: "SEO & Digital Visibility",
      description: "Boost your online presence with comprehensive SEO strategies that drive organic traffic and improve search rankings. We optimize your website to be found by your target audience.",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Performance Tracking"],
      link: "/services-detail"
    },
    {
      icon: "Brain",
      title: "AI-Powered Websites",
      description: "Integrate artificial intelligence into your website to enhance user experience, automate processes, and provide personalized content that adapts to your visitors' needs.",
      features: ["AI Chatbots", "Personalization", "Smart Analytics", "Automated Content"],
      link: "/services-detail"
    },
    {
      icon: "MessageSquare",
      title: "Agentic Chatbots",
      description: "Deploy intelligent chatbots that understand context, learn from interactions, and provide human-like customer support 24/7, improving customer satisfaction and reducing support costs.",
      features: ["Natural Language Processing", "Multi-language Support", "Integration Ready", "Analytics Dashboard"],
      link: "/services-detail"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-primary mb-6">
            Our <span className="text-accent">Digital Services</span>
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive digital solutions designed to elevate your business and drive measurable results. From concept to launch, we're your trusted technology partner.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out card-elevation group"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <Icon name={service.icon} size={32} className="text-accent" />
              </div>

              {/* Content */}
              <h3 className="font-heading font-semibold text-xl text-primary mb-4">
                {service.title}
              </h3>
              
              <p className="font-body text-text-secondary mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="inline-flex items-center px-3 py-1 bg-surface rounded-full text-xs font-body text-text-secondary"
                    >
                      <Icon name="Check" size={12} className="text-accent mr-1" />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Link to={service.link}>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all duration-300"
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link to="/services-detail">
            <Button
              variant="primary"
              size="lg"
              className="btn-hover-scale"
              iconName="ArrowRight"
              iconPosition="right"
            >
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;