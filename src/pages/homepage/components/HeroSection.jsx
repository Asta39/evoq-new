import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary-foreground/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-primary-foreground/20 rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-primary-foreground/20 rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 border border-primary-foreground/20 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground mb-6 leading-tight">
            We Build Smart, Scalable &{' '}
            <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
              AI-Enhanced
            </span>{' '}
            Web Experiences
          </h1>

          {/* Subtitle */}
          <p className="font-body text-lg sm:text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your digital presence with cutting-edge web solutions that drive growth, enhance user experience, and leverage the power of artificial intelligence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto btn-hover-scale"
              iconName="Calendar"
              iconPosition="left"
            >
              Book Free Consultation
            </Button>
            
            <Link to="/portfolio">
              <Button
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 btn-hover-scale"
                iconName="Eye"
                iconPosition="left"
              >
                View Our Work
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <Icon name="MapPin" size={20} />
              <span className="font-body text-sm">Based in Kenya</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Users" size={20} />
              <span className="font-body text-sm">50+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Award" size={20} />
              <span className="font-body text-sm">AI-Powered Solutions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={24} className="text-primary-foreground/60" />
      </div>
    </section>
  );
};

export default HeroSection;