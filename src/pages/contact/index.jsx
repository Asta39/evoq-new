import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import WhatsAppWidget from '../../components/ui/WhatsAppWidget';
import Breadcrumb from '../../components/ui/Breadcrumb';
import ContactHero from './components/ContactHero';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import WhatsAppSection from './components/WhatsAppSection';
import FAQ from './components/FAQ';
import CalendlySection from './components/CalendlySection';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact Us - Evoq Creative Tech | Get Your Project Started</title>
        <meta 
          name="description" 
          content="Contact Evoq Creative Tech for your digital project needs. Get instant quotes, schedule consultations, and start your journey to digital success in Kenya and across Africa." 
        />
        <meta name="keywords" content="contact, digital agency Kenya, web development consultation, project quote, WhatsApp support" />
        <meta property="og:title" content="Contact Us - Evoq Creative Tech" />
        <meta property="og:description" content="Get in touch with Kenya's leading digital agency. Multiple ways to connect and start your project." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://evoqcreative.co.ke/contact" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16 md:pt-20">
          <div className="max-w-7xl mx-auto px-5 md:px-10 py-6">
            <Breadcrumb />
          </div>
          
          <ContactHero />
          <ContactForm />
          <ContactInfo />
          <WhatsAppSection />
          <CalendlySection />
          <FAQ />
        </main>

        <WhatsAppWidget />
      </div>
    </>
  );
};

export default Contact;