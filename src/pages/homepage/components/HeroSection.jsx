// src/pages/homepage/components/HeroSection.jsx -- FINAL, UPDATED CODE --

import React from 'react';
import { Link } from 'react-router-dom';
// We no longer need the custom Button component for this design, but keep the import if other parts use it.
// import Button from '../../../components/ui/Button'; 
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Video Background and Overlay (No changes here) */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline poster="/assets/images/hero-background.jpg" className="absolute w-full h-full object-cover">
          <source src="/assets/videos/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-primary/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Headline and Subtitle (No changes here) */}
          <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground mb-6 leading-tight">
            We Build Smart, Scalable &{' '}
            <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
              AI-Enhanced
            </span>{' '}
            Web Experiences
          </h1>
          <p className="font-body text-lg sm:text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your digital presence with cutting-edge web solutions that drive growth, enhance user experience, and leverage the power of artificial intelligence.
          </p>

          {/* --- UPDATED: CTA Buttons with Glassmorphism Style --- */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
            
            {/* 1. "Book Free Consultation" as an <a> tag pointing to the section ID */}
            <Link
              to="/contact"
              className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-3 font-semibold text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-full transition-all duration-300 hover:bg-white/20 hover:border-white/30"
            >
              <Icon name="Calendar" size={20} />
              Book Free Consultation
            </Link>
            
            {/* 2. "View Our Work" as a <Link> styled the same way */}
            <Link 
              to="/portfolio"
              className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-3 font-semibold text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-full transition-all duration-300 hover:bg-white/20 hover:border-white/30"
            >
              <Icon name="Eye" size={20} />
              View Our Work
            </Link>

          </div>

          {/* Trust Indicators (No changes here) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-primary-foreground/80">
            {/* ...your trust indicators... */}
          </div>
        </div>
      </div>

      {/* Scroll Indicator (No changes here) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <Icon name="ChevronDown" size={24} className="text-primary-foreground/60" />
      </div>
    </section>
  );
};

export default HeroSection;