import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactHero = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+254700000000';
    const message = encodeURIComponent('Hi! I\'m interested in discussing a project with Evoq Creative Tech.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+254700000000';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:hello@evoqcreativetech.com';
  };

  return (
    <section className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center mb-12">
          <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
            Let's Build Something
            <span className="block text-accent">Amazing Together</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            Ready to transform your digital presence? Get in touch with our team of experts and let's discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Button
            variant="secondary"
            size="lg"
            onClick={handleWhatsAppClick}
            className="flex flex-col items-center p-6 h-auto bg-background/10 hover:bg-background/20 text-primary-foreground border-primary-foreground/20"
            iconName="MessageCircle"
          >
            <Icon name="MessageCircle" size={32} className="mb-3" />
            <span className="font-semibold text-lg mb-1">WhatsApp</span>
            <span className="text-sm opacity-80">Instant Response</span>
          </Button>

          <Button
            variant="secondary"
            size="lg"
            onClick={handleCallClick}
            className="flex flex-col items-center p-6 h-auto bg-background/10 hover:bg-background/20 text-primary-foreground border-primary-foreground/20"
            iconName="Phone"
          >
            <Icon name="Phone" size={32} className="mb-3" />
            <span className="font-semibold text-lg mb-1">Call Us</span>
            <span className="text-sm opacity-80">+254 700 000 000</span>
          </Button>

          <Button
            variant="secondary"
            size="lg"
            onClick={handleEmailClick}
            className="flex flex-col items-center p-6 h-auto bg-background/10 hover:bg-background/20 text-primary-foreground border-primary-foreground/20"
            iconName="Mail"
          >
            <Icon name="Mail" size={32} className="mb-3" />
            <span className="font-semibold text-lg mb-1">Email</span>
            <span className="text-sm opacity-80">hello@evoqcreativetech.com</span>
          </Button>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-background/10 rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Available Monday - Friday, 8:00 AM - 6:00 PM EAT</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;