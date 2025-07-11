// src/pages/portfolio/components/PortfolioHero.jsx -- THE COMPLETE AND FINAL CODE --

import React from 'react';
import Icon from '../../../components/AppIcon';
// We no longer need the custom Button component

const PortfolioHero = () => {
  const handleStartProject = () => {
    window.location.href = '/contact';
  };

  const stats = [
    { value: '50+', label: 'Projects Completed' },
    { value: '30+', label: 'Happy Clients' },
    { value: '5+', label: 'Years Experience' },
    { value: '15+', label: 'Industries Served' }
  ];

  return (
    // 1. ADDED `relative` and `overflow-hidden` TO THE MAIN SECTION
    <section className="relative overflow-hidden text-primary-foreground py-16 md:py-24">

      {/* 2. REPLACED THE OLD PATTERN WITH A VIDEO BACKGROUND AND OVERLAY */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/images/portfolio-fallback.jpg" // A static fallback image is recommended
          className="absolute w-full h-full object-cover"
        >
          <source src="/assets/videos/portfolio-hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* This dark overlay is crucial for text readability over the video */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* 3. ALL ORIGINAL CONTENT IS NOW WRAPPED IN A `relative z-10` CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary-foreground/10 rounded-full text-sm font-medium mb-6">
            <Icon name="Briefcase" size={16} className="mr-2" />
            Our Work Portfolio
          </div>

          {/* Main Heading */}
          <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
            Transforming Ideas Into
            <span className="block text-accent">Digital Excellence</span>
          </h1>

          {/* Description */}
          <p className="font-body text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Explore our curated collection of successful projects that showcase our expertise in web development, AI integration, and digital transformation across diverse industries.
          </p>

          {/* 4. REPLACED <Button> with <button> AND APPLIED DARK GLASS STYLE */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={handleStartProject}
              className="group flex items-center justify-center gap-3 px-8 py-3 font-semibold text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-full transition-all duration-300 hover:bg-white/20 hover:border-white/30"
            >
              <span>Start Your Project</span>
              <Icon name="ArrowRight" size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => document.getElementById('portfolio-grid')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center justify-center gap-3 px-8 py-3 font-semibold text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-full transition-all duration-300 hover:bg-white/20 hover:border-white/30"
            >
              <Icon name="Eye" size={20} className="transition-transform duration-300 group-hover:scale-110" />
              <span>View Projects</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-heading font-bold text-2xl md:text-3xl text-accent mb-1">
                  {stat.value}
                </div>
                <div className="font-body text-sm md:text-base text-primary-foreground/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. THE BOTTOM WAVE IS PRESERVED AND NOW HAS `relative z-10` to sit on top of the video */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-8 md:h-12 fill-background" // `fill-background` makes it match your page's main background color
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" />
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" />
          <path d="MYou've0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
        </svg>
      </div>
    </section>
  );
};

export default PortfolioHero;