import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const WhatsAppSection = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('general');

  const messageTemplates = [
    {
      id: 'general',
      title: 'General Inquiry',
      message: 'Hi! I\'m interested in learning more about your digital services and would like to discuss my project requirements.'
    },
    {
      id: 'website',
      title: 'Website Development',
      message: 'Hi! I need a new website for my business. Can we discuss the requirements and get a quote?'
    },
    {
      id: 'rebranding',
      title: 'Website Rebranding',
      message: 'Hi! I\'m looking to rebrand my existing website. I\'d like to discuss the process and pricing.'
    },
    {
      id: 'seo',
      title: 'SEO Services',
      message: 'Hi! I\'m interested in your SEO and digital visibility services. Can we discuss how you can help improve my online presence?'
    },
    {
      id: 'ai',
      title: 'AI-Powered Solutions',
      message: 'Hi! I\'m interested in AI-powered websites and chatbot solutions. Can we schedule a consultation?'
    },
    {
      id: 'quote',
      title: 'Custom Quote',
      message: 'Hi! I have a unique project requirement and would like to get a custom quote. Can we discuss the details?'
    }
  ];

  const handleWhatsAppClick = (template) => {
    const phoneNumber = '+254700000000';
    const message = encodeURIComponent(template.message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const generateQRCode = () => {
    const phoneNumber = '+254700000000';
    const selectedMsg = messageTemplates.find(t => t.id === selectedTemplate);
    const message = encodeURIComponent(selectedMsg.message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(whatsappUrl)}`;
  };

  return (
    <section className="py-16 md:py-20 bg-success/5">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="MessageCircle" size={32} className="text-success-foreground" />
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
            Chat With Us on WhatsApp
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Get instant responses to your questions. Choose a message template or scan the QR code to start chatting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Message Templates */}
          <div className="space-y-6">
            <h3 className="font-heading font-semibold text-xl text-primary mb-4">
              Quick Start Messages
            </h3>
            
            <div className="space-y-3">
              {messageTemplates.map((template) => (
                <div
                  key={template.id}
                  className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                    selectedTemplate === template.id
                      ? 'border-success bg-success/10' :'border-border bg-background hover:border-success/50'
                  }`}
                  onClick={() => setSelectedTemplate(template.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-body font-semibold text-text-primary mb-2">
                        {template.title}
                      </h4>
                      <p className="font-body text-sm text-text-secondary">
                        {template.message}
                      </p>
                    </div>
                    <div className={`w-4 h-4 rounded-full border-2 ml-3 mt-1 ${
                      selectedTemplate === template.id
                        ? 'border-success bg-success' :'border-border'
                    }`}>
                      {selectedTemplate === template.id && (
                        <div className="w-full h-full rounded-full bg-success-foreground scale-50"></div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button
              variant="primary"
              size="lg"
              onClick={() => handleWhatsAppClick(messageTemplates.find(t => t.id === selectedTemplate))}
              className="w-full bg-success hover:bg-success/90 text-success-foreground"
              iconName="MessageCircle"
              iconPosition="left"
            >
              Start WhatsApp Chat
            </Button>
          </div>

          {/* QR Code Section */}
          <div className="bg-background rounded-lg p-8 shadow-sm text-center">
            <h3 className="font-heading font-semibold text-xl text-primary mb-6">
              Scan to Chat
            </h3>
            
            <div className="w-48 h-48 mx-auto mb-6 bg-surface rounded-lg flex items-center justify-center">
              <img
                src={generateQRCode()}
                alt="WhatsApp QR Code"
                className="w-44 h-44 rounded"
                onError={(e) => {
                  e.target.src = '/assets/images/no_image.png';
                }}
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2 text-success">
                <Icon name="Smartphone" size={20} />
                <span className="font-body font-medium">Scan with your phone</span>
              </div>
              
              <div className="text-sm text-text-secondary space-y-2">
                <p>1. Open WhatsApp on your phone</p>
                <p>2. Tap the QR code scanner</p>
                <p>3. Point your camera at the code</p>
                <p>4. Start chatting instantly!</p>
              </div>

              <div className="pt-4 border-t border-border">
                <div className="flex items-center justify-center space-x-2 text-success">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                  <span className="font-body text-sm font-medium">
                    Usually responds within 5 minutes
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Zap" size={24} className="text-success" />
            </div>
            <h4 className="font-heading font-semibold text-lg text-primary mb-2">
              Instant Response
            </h4>
            <p className="font-body text-sm text-text-secondary">
              Get immediate answers to your questions during business hours
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="FileText" size={24} className="text-success" />
            </div>
            <h4 className="font-heading font-semibold text-lg text-primary mb-2">
              Share Files
            </h4>
            <p className="font-body text-sm text-text-secondary">
              Easily share project requirements, images, and documents
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Calendar" size={24} className="text-success" />
            </div>
            <h4 className="font-heading font-semibold text-lg text-primary mb-2">
              Schedule Calls
            </h4>
            <p className="font-body text-sm text-text-secondary">
              Book consultation calls directly through our chat
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppSection;