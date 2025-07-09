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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: selectedService,
      message: ''
    });
    setIsSubmitting(false);
  };

  const handleWhatsAppContact = () => {
    const serviceName = serviceOptions.find(s => s.value === selectedService)?.label || 'Website Development';
    const message = `Hi! I'm interested in ${serviceName} services. Can we discuss my project?`;
    window.open(`https://wa.me/254700000000?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleDownloadBrochure = () => {
    // Simulate PDF download
    alert('Service brochure download will start shortly!');
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
          <Button
            variant="primary"
            size="md"
            fullWidth
            onClick={handleWhatsAppContact}
            className="btn-hover-scale"
            iconName="MessageCircle"
            iconPosition="left"
          >
            WhatsApp Us
          </Button>
          
          <Button
            variant="outline"
            size="md"
            fullWidth
            onClick={handleDownloadBrochure}
            className="btn-hover-scale"
            iconName="Download"
            iconPosition="left"
          >
            Download Brochure
          </Button>
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
          
          <Button
            type="submit"
            variant="primary"
            size="md"
            fullWidth
            loading={isSubmitting}
            className="btn-hover-scale"
            iconName="Send"
            iconPosition="right"
          >
            {isSubmitting ? 'Sending...' : 'Send Inquiry'}
          </Button>
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
            <span className="font-body">+254 700 000 000</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <Icon name="Mail" size={18} />
            <span className="font-body">hello@evoqcreativetech.com</span>
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