import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import WhatsAppWidget from '../../components/ui/WhatsAppWidget';
import ServiceHero from './components/ServiceHero';
import ServiceSelector from './components/ServiceSelector';
import ServiceDetails from './components/ServiceDetails';
import ServiceFAQ from './components/ServiceFAQ';
import ServiceSidebar from './components/ServiceSidebar';
import ServiceTestimonials from './components/ServiceTestimonials';

const ServicesDetail = () => {
  const [selectedService, setSelectedService] = useState('website-development');
  const location = useLocation();

  useEffect(() => {
    // Check if there's a service parameter in the URL or state
    const searchParams = new URLSearchParams(location.search);
    const serviceParam = searchParams.get('service');
    
    if (serviceParam) {
      setSelectedService(serviceParam);
    } else if (location.state?.service) {
      setSelectedService(location.state.service);
    }
  }, [location]);

  const handleServiceChange = (serviceId) => {
    setSelectedService(serviceId);
    // Update URL without page reload
    const newUrl = `${location.pathname}?service=${serviceId}`;
    window.history.replaceState(null, '', newUrl);
  };

  const handleConsultationClick = () => {
    // Scroll to contact form or open consultation modal
    const sidebar = document.getElementById('service-sidebar');
    if (sidebar) {
      sidebar.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content */}
      <main className="pt-16 md:pt-20">
        {/* Breadcrumb */}
        <div className="bg-surface py-4">
          <div className="max-w-7xl mx-auto px-5 md:px-10">
            <Breadcrumb />
          </div>
        </div>

        {/* Service Hero Section */}
        <ServiceHero 
          selectedService={selectedService}
          onConsultationClick={handleConsultationClick}
        />

        {/* Service Selector */}
        <ServiceSelector 
          selectedService={selectedService}
          onServiceChange={handleServiceChange}
        />

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <ServiceDetails selectedService={selectedService} />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1" id="service-sidebar">
              <div className="sticky top-24">
                <ServiceSidebar selectedService={selectedService} />
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <ServiceFAQ selectedService={selectedService} />

        {/* Testimonials Section */}
        <ServiceTestimonials selectedService={selectedService} />

        {/* Final CTA Section */}
        <section className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-16">
          <div className="max-w-4xl mx-auto px-5 md:px-10 text-center">
            <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="font-body text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have elevated their business with our expert services. Let's discuss your project today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleConsultationClick}
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body font-medium rounded-lg transition-colors duration-200 ease-in-out btn-hover-scale"
              >
                <span>Schedule Free Consultation</span>
              </button>
              
              <button
                onClick={() => window.open('https://wa.me/254115706542?text=Hi! I\'m ready to start my project with Evoq Creative Tech.', '_blank')}
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-success hover:bg-success/90 text-success-foreground font-body font-medium rounded-lg transition-colors duration-200 ease-in-out btn-hover-scale"
              >
                <span>Start Project Now</span>
              </button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-primary-foreground/20">
              <p className="font-body text-sm text-primary-foreground/80">
                 Free consultation • Transparent pricing • Fast delivery • 100% satisfaction guarantee
              </p>
            </div>
          </div>
        </section>
      </main>

      <WhatsAppWidget />
    </div>
  );
};

export default ServicesDetail;