import React from 'react';
import SEOHead from '../../components/SEOHead';
import { getPageSEO } from '../../utils/seoConfig';
import Header from '../../components/ui/Header';
import WhatsAppWidget from '../../components/ui/WhatsAppWidget';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import ServicesSection from './components/ServicesSection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import PortfolioPreview from './components/PortfolioPreview';
import ContactSection from './components/ContactSection';

const Homepage = () => {
  const seoData = getPageSEO('homepage');
  
  // Enhanced structured data for homepage
  const enhancedStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Evoq Creative Tech",
    "alternateName": "Evoq Creative Tech - Web Development Company",
    "url": "https://evoq-creative-tech.vercel.app",
    "description": "Professional web development company specializing in React, modern web technologies, and creative digital experiences. Custom web applications, responsive design, and technical SEO optimization.",
    "publisher": {
      "@type": "Organization",
      "name": "Evoq Creative Tech",
      "logo": {
        "@type": "ImageObject",
        "url": "https://evoq-creative-tech.vercel.app/assets/images/logo.png"
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://evoq-creative-tech.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@type": "Organization",
      "name": "Evoq Creative Tech",
      "url": "https://evoq-creative-tech.vercel.app",
      "description": "Professional web development and digital solutions company",
      "foundingDate": "2020",
      "numberOfEmployees": "10-50",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Global",
        "addressCountry": "Worldwide"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-XXX-XXX-XXXX",
        "contactType": "customer service",
        "availableLanguage": "English"
      },
      "sameAs": [
        "https://twitter.com/evoqcreativetech",
        "https://linkedin.com/company/evoqcreativetech",
        "https://github.com/evoqcreativetech"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Web Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Web Development",
              "description": "Professional custom web application development using modern technologies like React, Node.js, and modern frameworks."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "React Development",
              "description": "Specialized React application development with performance optimization and modern best practices."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Responsive Design",
              "description": "Mobile-first responsive web design ensuring optimal user experience across all devices."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Technical SEO",
              "description": "Comprehensive technical SEO optimization for improved search engine visibility and performance."
            }
          }
        ]
      }
    }
  };

  return (
    <>
      <SEOHead
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        image={seoData.image}
        url="/"
        type="website"
        structuredData={enhancedStructuredData}
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main role="main">
          <HeroSection />
          <MissionSection />
          <ServicesSection />
          <PricingSection />
          <TestimonialsSection />
          <PortfolioPreview />
          <ContactSection />
        </main>

        <WhatsAppWidget />
      </div>
    </>
  );
};

export default Homepage;