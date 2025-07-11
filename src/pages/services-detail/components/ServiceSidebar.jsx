import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ServiceSidebar = ({ selectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: selectedService,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceOptions = [
    { value: 'website-development', label: 'Website Development' },
    { value: 'website-rebranding', label: 'Website Rebranding' },
    { value: 'seo-digital-visibility', label: 'SEO & Digital Visibility' },
    { value: 'ai-powered-websites', label: 'AI-Powered Websites' },
    { value: 'agentic-chatbots', label: 'Agentic Chatbots' }
  ];

  const pricingRanges = {
    'website-development': 'KES 25,000 - 150,000+',
    'website-rebranding': 'KES 35,000 - 85,000',
    'seo-digital-visibility': 'KES 15,000/month - 45,000/month',
    'ai-powered-websites': 'KES 75,000 - 200,000+',
    'agentic-chatbots': 'KES 45,000 - 120,000'
  };

  const relatedServices = {
    'website-development': ['website-rebranding', 'seo-digital-visibility'],
    'website-rebranding': ['website-development', 'seo-digital-visibility'],
    'seo-digital-visibility': ['website-development', 'ai-powered-websites'],
    'ai-powered-websites': ['agentic-chatbots', 'website-development'],
    'agentic-chatbots': ['ai-powered-websites', 'website-development']
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 1. Get the human-readable service name from the form's service value.
    const serviceName = serviceOptions.find(s => s.value === formData.service)?.label || formData.service;

    // 2. Define your WhatsApp number.
    const whatsappNumber = "254115706542";

    // 3. Create a clean, well-formatted message.
    const formattedMessage = `
*New Consultation Request from Sidebar Form*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Selected Service:* ${serviceName}

*Message:*
${formData.message}
    `;

    // 4. Encode the message and create the WhatsApp URL.
    const encodedMessage = encodeURIComponent(formattedMessage.trim());
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // 5. Open WhatsApp in a new tab.
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // 6. Reset the form and the submitting state.
    // We add a small delay to allow the new tab to open smoothly.
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: selectedService, // Reset to the currently viewed service
        message: ''
      });
    }, 500);
  };
  const handleWhatsAppContact = () => {
    const serviceName = serviceOptions.find(s => s.value === selectedService)?.label || 'Website Development';
    const message = `Hi! I'm interested in ${serviceName} services. Can we discuss my project?`;
    window.open(`https://wa.me/254115706542?text=${encodeURIComponent(message)}`, '_blank');
  };



  return (
    <div className="space-y-6">
      {/* Quick Contact Card */}
      <div className="bg-background rounded-lg border border-border p-6 shadow-sm">
        <h3 className="font-heading font-semibold text-lg text-primary mb-4">
          Get Quick Quote
        </h3>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-center space-x-3">
            <Icon name="DollarSign" size={20} className="text-accent" />
            <div>
              <p className="font-body text-sm text-text-secondary">Price Range</p>
              <p className="font-body font-medium text-primary">
                {pricingRanges[selectedService]}
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Icon name="Clock" size={20} className="text-accent" />
            <div>
              <p className="font-body text-sm text-text-secondary">Timeline</p>
              <p className="font-body font-medium text-primary">4-8 weeks</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Icon name="Users" size={20} className="text-accent" />
            <div>
              <p className="font-body text-sm text-text-secondary">Team Size</p>
              <p className="font-body font-medium text-primary">3-5 experts</p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
<button
  onClick={handleWhatsAppContact}
  className="group w-full flex items-center justify-center gap-3 px-8 py-3 font-semibold text-text-primary bg-black/5 backdrop-blur-md border border-black/10 rounded-full transition-all duration-300 hover:bg-black/10 hover:border-black/20"
>
  <Icon name="MessageCircle" size={20} className="transition-transform duration-300 group-hover:scale-110" />
  <span>WhatsApp Us</span>
</button>
          

        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-background rounded-lg border border-border p-6 shadow-sm">
        <h3 className="font-heading font-semibold text-lg text-primary mb-4">
          Request Consultation
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          
          <Input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          
          <Input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          
          <div>
            <select
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-border rounded-lg font-body text-text-primary bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
              required
            >
              {serviceOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          
          <textarea
            name="message"
            placeholder="Tell us about your project..."
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 border border-border rounded-lg font-body text-text-primary bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent resize-none"
            required
          />
          
<button
  type="submit"
  disabled={isSubmitting}
  className="group w-full flex items-center justify-center gap-3 px-8 py-3 font-semibold text-text-primary bg-black/5 backdrop-blur-md border border-black/10 rounded-full transition-all duration-300 hover:bg-black/10 hover:border-black/20 disabled:opacity-50 disabled:cursor-not-allowed"
>
  {isSubmitting ? (
    // Loading indicator
    <>
      <div className="w-5 h-5 border-2 border-text-primary/50 border-t-text-primary rounded-full animate-spin"></div>
      <span>Sending...</span>
    </>
  ) : (
    // Default state
    <>
      <span>Send Inquiry</span>
      <Icon name="Send" size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
    </>
  )}
</button>
        </form>
      </div>

      {/* Related Services */}
      <div className="bg-background rounded-lg border border-border p-6 shadow-sm">
        <h3 className="font-heading font-semibold text-lg text-primary mb-4">
          Related Services
        </h3>
        
        <div className="space-y-3">
          {relatedServices[selectedService]?.map(serviceId => {
            const service = serviceOptions.find(s => s.value === serviceId);
            return (
              <button
                key={serviceId}
                className="w-full text-left p-3 rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-all duration-200 ease-in-out"
              >
                <p className="font-body font-medium text-primary">{service?.label}</p>
                <p className="font-body text-sm text-text-secondary">
                  {pricingRanges[serviceId]}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-gradient-to-br from-accent to-accent/90 rounded-lg p-6 text-accent-foreground">
        <h3 className="font-heading font-semibold text-lg mb-4">
          Need Immediate Help?
        </h3>
        
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Icon name="Phone" size={18} />
            <span className="font-body">+254 115 706 542</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <Icon name="Mail" size={18} />
            <span className="font-body">evoqcreativetech@gmail.com</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <Icon name="Clock" size={18} />
            <span className="font-body">Mon-Fri: 8AM-6PM EAT</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSidebar;