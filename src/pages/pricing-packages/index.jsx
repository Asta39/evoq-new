import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import WhatsAppWidget from '../../components/ui/WhatsAppWidget';
import Breadcrumb from '../../components/ui/Breadcrumb';
import PricingCard from './components/PricingCard';
import AddOnsSection from './components/AddOnsSection';
import AIQuoteSection from './components/AIQuoteSection';
import PaymentTermsSection from './components/PaymentTermsSection';
import ComparisonToggle from './components/ComparisonToggle';
import FeatureComparison from './components/FeatureComparison';
import PricingCalculator from './components/PricingCalculator';

import Button from '../../components/ui/Button';

const PricingPackages = () => {
  const [isComparisonMode, setIsComparisonMode] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const packages = [
    {
      id: 'starter',
      name: 'Starter',
      price: 25000,
      description: 'Perfect for small businesses and personal websites',
      features: [
        'Responsive Design (Mobile & Desktop)',
        'Up to 5 Pages',
        'Custom Domain Setup',
        'SSL Certificate',
        'Basic SEO Setup',
        'Contact Forms',
        'Social Media Integration',
        'Google Analytics Setup',
        '30 Days Free Support'
      ],
      deliveryTime: '1-2 weeks',
      buttonText: 'Choose Starter'
    },
    {
      id: 'business',
      name: 'Business',
      price: 55000,
      originalPrice: 65000,
      description: 'Ideal for growing businesses with advanced features',
      features: [
        'Everything in Starter',
        'Up to 10 Pages',
        'Content Management System',
        'Advanced SEO Optimization',
        'Performance Optimization',
        'Security Features',
        'Email Integration',
        'Blog Setup',
        'Live Chat Integration',
        '60 Days Free Support'
      ],
      deliveryTime: '2-3 weeks',
      buttonText: 'Choose Business'
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 75000,
      description: 'Advanced solution for established businesses',
      features: [
        'Everything in Business',
        'Up to 15 Pages',
        'E-commerce Features',
        'Custom Animations',
        'API Integration',
        'Database Setup',
        'User Authentication',
        'Payment Gateway Integration',
        'Advanced Analytics',
        'Priority Support',
        '90 Days Free Support'
      ],
      deliveryTime: '3-4 weeks',
      buttonText: 'Choose Premium'
    },
    {
      id: 'elite',
      name: 'Elite',
      price: 150000,
      description: 'Enterprise-level solution with premium features',
      features: [
        'Everything in Premium',
        'Unlimited Pages',
        'AI Chatbot Integration',
        'Custom Dashboard',
        'Advanced User Roles',
        'Multi-language Support',
        'Advanced Security',
        'Custom Integrations',
        'Performance Monitoring',
        'Dedicated Account Manager',
        '6 Months Free Support'
      ],
      deliveryTime: '4-6 weeks',
      buttonText: 'Choose Elite'
    }
  ];

  const handlePackageSelect = (packageData) => {
    setSelectedPackage(packageData);
    const message = encodeURIComponent(
      `Hi! I'm interested in the ${packageData.name} package (KES ${packageData.price.toLocaleString()}). Can we discuss the details?`
    );
    window.open(`https://wa.me/+254700000000?text=${message}`, '_blank');
  };

  const handleAddOnSelect = (selectedAddOns, total) => {
    const addOnNames = selectedAddOns.map(addon => addon.name).join(', ');
    const message = encodeURIComponent(
      `Hi! I'm interested in these add-ons: ${addOnNames}. Total cost: KES ${total.toLocaleString()}. Can we discuss?`
    );
    window.open(`https://wa.me/+254700000000?text=${message}`, '_blank');
  };

  const handleQuoteRequest = (quoteData) => {
    const message = encodeURIComponent(
      `Hi! I'd like a custom quote for an AI-enhanced website. Project type: ${quoteData.projectType}, Features: ${quoteData.selectedFeatures.map(f => f.label).join(', ')}, Estimated: KES ${quoteData.estimatedPrice.toLocaleString()}`
    );
    window.open(`https://wa.me/+254700000000?text=${message}`, '_blank');
  };

  const handleCalculatorResult = (result) => {
    const message = encodeURIComponent(
      `Hi! I calculated a quote: ${result.package?.name} package + add-ons. Total: KES ${result.total.toLocaleString()}. Can we discuss?`
    );
    window.open(`https://wa.me/+254700000000?text=${message}`, '_blank');
  };

  const handleDownloadBrochure = () => {
    // In a real app, this would trigger a PDF download
    const message = encodeURIComponent(
      "Hi! I'd like to download your pricing brochure and discuss your services."
    );
    window.open(`https://wa.me/+254700000000?text=${message}`, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Pricing Packages - Evoq Creative Tech | Transparent Web Development Pricing</title>
        <meta name="description" content="Transparent pricing for web development services in Kenya. Choose from Starter (KES 25,000), Business (KES 55,000), Premium (KES 75,000+), or Elite (KES 150,000+) packages." />
        <meta name="keywords" content="web development pricing Kenya, website cost Nairobi, digital agency packages, web design pricing" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-5 md:px-10">
              <Breadcrumb />
              
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-primary mb-6">
                  Transparent Pricing for
                  <span className="text-accent block mt-2">
                    Every Business Need
                  </span>
                </h1>
                <p className="text-text-secondary text-lg lg:text-xl mb-8 leading-relaxed">
                  Choose the perfect package for your business. No hidden fees, no surprises. 
                  Just honest pricing for exceptional web solutions.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={handleDownloadBrochure}
                    className="btn-hover-scale"
                    iconName="Download"
                    iconPosition="left"
                  >
                    Download Pricing Guide
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => {
                      const message = encodeURIComponent("Hi! I'd like to schedule a consultation to discuss my project requirements.");
                      window.open(`https://wa.me/+254700000000?text=${message}`, '_blank');
                    }}
                    className="btn-hover-scale"
                    iconName="Calendar"
                    iconPosition="left"
                  >
                    Schedule Consultation
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Calculator */}
          <section className="py-16 bg-surface/30">
            <div className="max-w-7xl mx-auto px-5 md:px-10">
              <PricingCalculator onCalculate={handleCalculatorResult} />
            </div>
          </section>

          {/* Comparison Toggle */}
          <section className="py-8">
            <div className="max-w-7xl mx-auto px-5 md:px-10">
              <ComparisonToggle 
                isComparisonMode={isComparisonMode}
                onToggle={setIsComparisonMode}
              />
            </div>
          </section>

          {/* Pricing Packages */}
          <section className="pb-16">
            <div className="max-w-7xl mx-auto px-5 md:px-10">
              {isComparisonMode ? (
                <FeatureComparison 
                  packages={packages}
                  onSelectPackage={handlePackageSelect}
                />
              ) : (
                <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
                  {packages.map((pkg, index) => (
                    <PricingCard
                      key={pkg.id}
                      packageData={pkg}
                      isPopular={pkg.id === 'business'}
                      onSelectPackage={handlePackageSelect}
                    />
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Add-ons Section */}
          <section className="py-16 bg-surface/30">
            <div className="max-w-7xl mx-auto px-5 md:px-10">
              <AddOnsSection onAddOnSelect={handleAddOnSelect} />
            </div>
          </section>

          {/* AI Quote Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-5 md:px-10">
              <AIQuoteSection onQuoteRequest={handleQuoteRequest} />
            </div>
          </section>

          {/* Payment Terms */}
          <section className="py-16 bg-surface/30">
            <div className="max-w-7xl mx-auto px-5 md:px-10">
              <PaymentTermsSection />
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-5 md:px-10">
              <div className="text-center mb-12">
                <h2 className="font-heading font-bold text-2xl lg:text-3xl text-primary mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-text-secondary text-lg">
                  Common questions about our pricing and services
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    question: "What's included in the free support period?",
                    answer: "Free support includes bug fixes, minor content updates, technical assistance, and guidance on using your website. It doesn't cover major design changes or new feature development."
                  },
                  {
                    question: "Can I upgrade my package later?",
                    answer: "Yes! You can upgrade your package at any time. We'll calculate the difference and apply it to additional features or pages for your website."
                  },
                  {
                    question: "Do you offer payment plans?",
                    answer: "Yes, we offer flexible payment plans. You can pay 50% upfront, 30% at project milestone, and 20% upon completion. Custom payment arrangements can be discussed."
                  },
                  {
                    question: "What happens if I'm not satisfied?",
                    answer: "We offer unlimited revisions during the development process. If you're not satisfied within 7 days of project start (before work begins), we provide a full refund."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-background rounded-lg border border-border p-6">
                    <h3 className="font-heading font-semibold text-lg text-primary mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-16 bg-gradient-to-br from-accent/5 to-primary/5">
            <div className="max-w-4xl mx-auto px-5 md:px-10 text-center">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl text-primary mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-text-secondary text-lg mb-8">
                Let's discuss your requirements and create something amazing together.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => {
                    const message = encodeURIComponent("Hi! I'm ready to start my project. Can we discuss the details?");
                    window.open(`https://wa.me/+254700000000?text=${message}`, '_blank');
                  }}
                  className="btn-hover-scale"
                  iconName="MessageCircle"
                  iconPosition="left"
                >
                  Start Project Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.location.href = '/contact'}
                  className="btn-hover-scale"
                  iconName="Mail"
                  iconPosition="left"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </section>
        </main>

        <WhatsAppWidget />
      </div>
    </>
  );
};

export default PricingPackages;