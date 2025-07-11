import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const WhatsAppWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // Show widget after initial page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const getContextualMessage = () => {
    const messages = {
      '/homepage': 'Hi! I\'m interested in learning more about your digital services.',
      '/services-detail': 'Hi! I\'d like to discuss your services in detail.',
      '/pricing-packages': 'Hi! I have questions about your pricing packages.',
      '/portfolio': 'Hi! I\'m impressed by your portfolio. Let\'s discuss my project.',
      '/about': 'Hi! I\'d like to know more about working with your team.',
      '/contact': 'Hi! I\'m ready to start a project with you.',
    };

    return messages[location.pathname] || 'Hi! I\'m interested in your digital services.';
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '+254115706542'; // Replace with actual WhatsApp number
    const message = encodeURIComponent(getContextualMessage());
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsExpanded(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-900">
      {/* Expanded Chat Interface */}
      {isExpanded && (
        <div className="mb-4 w-80 max-w-[calc(100vw-3rem)] bg-background rounded-lg shadow-lg border border-border overflow-hidden">
          <div className="bg-success p-4 text-success-foreground">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-success-foreground/20 rounded-full flex items-center justify-center">
                  <Icon name="MessageCircle" size={20} color="currentColor" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-sm">Evoq Creative Tech</h4>
                  <p className="text-xs opacity-90">Typically replies instantly</p>
                </div>
              </div>
              <button
                onClick={toggleExpanded}
                className="p-1 hover:bg-success-foreground/20 rounded transition-colors duration-200"
                aria-label="Close chat"
              >
                <Icon name="X" size={16} color="currentColor" />
              </button>
            </div>
          </div>

          <div className="p-4">
            <div className="bg-surface rounded-lg p-3 mb-4">
              <p className="text-sm text-text-primary font-body">
                Hi there! 👋 How can we help you with your digital project today?
              </p>
            </div>

            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-success hover:bg-success/90 text-success-foreground font-body font-medium py-3 px-4 rounded-lg transition-colors duration-200 ease-in-out flex items-center justify-center space-x-2 btn-hover-scale"
            >
              <Icon name="MessageCircle" size={18} />
              <span>Start Conversation</span>
            </button>

            <p className="text-xs text-text-secondary text-center mt-2 font-caption">
              We'll respond as soon as possible
            </p>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={isExpanded ? handleWhatsAppClick : toggleExpanded}
        className="w-14 h-14 bg-success hover:bg-success/90 text-success-foreground rounded-full shadow-lg flex items-center justify-center transition-all duration-200 ease-in-out btn-hover-scale pulse-animation"
        aria-label="Open WhatsApp chat"
      >
        <Icon name="MessageCircle" size={24} />
      </button>
    </div>
  );
};

export default WhatsAppWidget;