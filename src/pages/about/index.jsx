import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import WhatsAppWidget from '../../components/ui/WhatsAppWidget';
import Breadcrumb from '../../components/ui/Breadcrumb';
import FounderHero from './components/FounderHero';
import FounderStory from './components/FounderStory';
import CompanyValues from './components/CompanyValues';
import TeamShowcase from './components/TeamShowcase';
import CompanyTimeline from './components/CompanyTimeline';
import ClientTestimonials from './components/ClientTestimonials';
import OfficeLocation from './components/OfficeLocation';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Evoq Creative Tech | Leading Digital Agency in Kenya</title>
        <meta 
          name="description" 
          content="Learn about Evoq Creative Tech's journey, team, and values. Discover how we're transforming Kenyan businesses with innovative digital solutions and AI-enhanced websites." 
        />
        <meta name="keywords" content="about evoq creative tech, digital agency kenya, web development team, ai solutions kenya, nairobi web developers" />
        <meta property="og:title" content="About Us - Evoq Creative Tech | Leading Digital Agency in Kenya" />
        <meta property="og:description" content="Learn about Evoq Creative Tech's journey, team, and values. Discover how we're transforming Kenyan businesses with innovative digital solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://evoqcreativetech.co.ke/about" />
        <link rel="canonical" href="https://evoqcreativetech.co.ke/about" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16 md:pt-20">
          {/* Breadcrumb Navigation */}
          <div className="max-w-7xl mx-auto px-5 md:px-10 pt-6">
            <Breadcrumb />
          </div>

          {/* Founder Hero Section */}
          <FounderHero />

          {/* Founder Story Section */}
          <FounderStory />

          {/* Company Values Section */}
          <CompanyValues />

          {/* Team Showcase Section */}
          <TeamShowcase />

          {/* Company Timeline Section */}
          <CompanyTimeline />

          {/* Client Testimonials Section */}
          <ClientTestimonials />

          {/* Office Location Section */}
          <OfficeLocation />
        </main>

        <WhatsAppWidget />
      </div>
    </>
  );
};

export default About;