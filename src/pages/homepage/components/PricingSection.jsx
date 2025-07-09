import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const PricingSection = () => {
  const packages = [
    {
      name: "Starter",
      price: "25,000",
      period: "One-time",
      description: "Perfect for small businesses and startups looking to establish their online presence",
      features: [
        "5-page responsive website",
        "Mobile-optimized design",
        "Basic SEO setup",
        "Contact form integration",
        "Social media links",
        "1 month support"
      ],
      popular: false,
      cta: "Get Started",
      link: "/contact"
    },
    {
      name: "Business",
      price: "55,000",
      period: "One-time",
      description: "Ideal for growing businesses that need more functionality and professional features",
      features: [
        "10-page responsive website",
        "Advanced SEO optimization",
        "Blog/News section",
        "Google Analytics setup",
        "WhatsApp integration",
        "3 months support",
        "Basic e-commerce (5 products)"
      ],
      popular: true,
      cta: "Most Popular",
      link: "/contact"
    },
    {
      name: "Premium",
      price: "75,000+",
      period: "Starting from",
      description: "Comprehensive solution for established businesses requiring advanced features",
      features: [
        "Unlimited pages",
        "Custom functionality",
        "Advanced e-commerce",
        "Payment gateway integration",
        "Admin dashboard",
        "6 months support",
        "Performance optimization",
        "Security features"
      ],
      popular: false,
      cta: "Get Quote",
      link: "/contact"
    },
    {
      name: "Elite",
      price: "150,000+",
      period: "Starting from",
      description: "Enterprise-level solution with AI integration and custom development",
      features: [
        "Custom web application",
        "AI-powered features",
        "Agentic chatbots",
        "Advanced analytics",
        "Multi-user system",
        "12 months support",
        "Dedicated project manager",
        "Priority support"
      ],
      popular: false,
      cta: "Contact Us",
      link: "/contact"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-primary mb-6">
            Transparent <span className="text-accent">Pricing</span>
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Choose the perfect package for your business needs. All prices are in Kenyan Shillings (KES) with no hidden fees.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-surface rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out card-elevation ${
                pkg.popular ? 'ring-2 ring-accent transform scale-105' : ''
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-body font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Package Header */}
              <div className="text-center mb-8">
                <h3 className="font-heading font-semibold text-xl text-primary mb-2">
                  {pkg.name}
                </h3>
                <div className="mb-4">
                  <span className="font-heading font-bold text-3xl text-primary">
                    KES {pkg.price}
                  </span>
                  <span className="font-body text-sm text-text-secondary ml-2">
                    {pkg.period}
                  </span>
                </div>
                <p className="font-body text-sm text-text-secondary leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Icon name="Check" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                      <span className="font-body text-sm text-text-secondary">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <Link to={pkg.link}>
                <Button
                  variant={pkg.popular ? "primary" : "outline"}
                  size="md"
                  className="w-full btn-hover-scale"
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  {pkg.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-surface rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="font-heading font-semibold text-xl text-primary mb-4">
              Need Something Custom?
            </h3>
            <p className="font-body text-text-secondary mb-6 leading-relaxed">
              Every business is unique. If our standard packages don't fit your needs, we'll create a custom solution tailored specifically for your requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button
                  variant="primary"
                  size="md"
                  className="btn-hover-scale"
                  iconName="MessageSquare"
                  iconPosition="left"
                >
                  Request Custom Quote
                </Button>
              </Link>
              <Link to="/pricing-packages">
                <Button
                  variant="outline"
                  size="md"
                  className="btn-hover-scale"
                  iconName="FileText"
                  iconPosition="left"
                >
                  View Detailed Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;