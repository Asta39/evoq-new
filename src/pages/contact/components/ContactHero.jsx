// src/pages/contact/components/ContactHero.jsx -- THE COMPLETE AND FINAL CODE --

import React from 'react';
import Icon from '../../../components/AppIcon';
// We no longer need the custom Button component for this design

const ContactHero = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '254115706542';
    const message = encodeURIComponent('Hi! I\'m interested in discussing a project with Evoq Creative Tech.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:254115706542';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:evoqcreativetech@gmail.com';
  };

  return (
    // 1. ADDED `relative` AND `overflow-hidden` TO THE MAIN SECTION
    <section className="relative overflow-hidden text-primary-foreground py-16 md:py-20">

      {/* 2. ADDED VIDEO BACKGROUND AND OVERLAY */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/images/contact-fallback.jpg" // A static fallback image is recommended
          className="absolute w-full h-full object-cover"
        >
          <source src="/assets/videos/contact-hero-video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* This dark overlay is crucial for text readability over the video */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* 3. WRAPPED ALL CONTENT IN A `relative z-10` CONTAINER TO PLACE IT ON TOP */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center mb-12">
          <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
            Let's Build Something
            <span className="block text-accent">Amazing Together</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            Ready to transform your digital presence? Get in touch with our team of experts and let's discuss how we can bring your vision to life.
          </p>
        </div>

        {/* 4. REPLACED <Button> with <button> AND APPLIED DARK GLASS STYLE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <button
            onClick={handleWhatsAppClick}
            className="group flex flex-col items-center justify-center p-6 h-auto text-white bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-white/20"
          >
            <Icon name="MessageCircle" size={32} className="mb-3 transition-transform duration-300 group-hover:scale-110" />
            <span className="font-semibold text-lg mb-1">WhatsApp</span>
            <span className="text-sm opacity-80">Instant Response</span>
          </button>

          <button
            onClick={handleCallClick}
            className="group flex flex-col items-center justify-center p-6 h-auto text-white bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-white/20"
          >
            <Icon name="Phone" size={32} className="mb-3 transition-transform duration-300 group-hover:scale-110" />
            <span className="font-semibold text-lg mb-1">Call Us</span>
            <span className="text-sm opacity-80">+254 115 706 542</span>
          </button>

          <button
            onClick={handleEmailClick}
            className="group flex flex-col items-center justify-center p-6 h-auto text-white bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-white/20"
          >
            <Icon name="Mail" size={32} className="mb-3 transition-transform duration-300 group-hover:scale-110" />
            <span className="font-semibold text-lg mb-1">Email</span>
            <span className="text-sm opacity-80">evoqcreativetech@gmail.com</span>
          </button>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-black/20 rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Available Monday - Friday, 8:00 AM - 6:00 PM EAT</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;