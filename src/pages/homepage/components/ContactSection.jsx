// src/pages/homepage/components/ContactSection.jsx -- FINAL, UPDATED CODE --

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const services = [
    "Website Development",
    "Website Rebranding",
    "SEO & Digital Visibility",
    "AI-Powered Websites",
    "Agentic Chatbots",
    "Custom Solution"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // --- THIS IS THE ONLY FUNCTION THAT HAS BEEN UPDATED ---
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from reloading

    // 1. Define your WhatsApp number (no '+' sign)
    const whatsappNumber = "254115706542";

    // 2. Create a clean, well-formatted message. Using * for bold text in WhatsApp.
    const formattedMessage = `
*New Project Inquiry from Website*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Service of Interest:* ${formData.service}

*Message:*
${formData.message}
    `;

    // 3. Encode the message to make it safe for a URL
    const encodedMessage = encodeURIComponent(formattedMessage.trim());

    // 4. Create the final WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // 5. Open the URL in a new tab, which launches WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    // 6. Reset the form so the user can see it's been submitted
    setFormData({
      name: '',
      email: '',
      service: '',
      message: ''
    });
  };

  const contactInfo = [
    // ... your contactInfo array is unchanged ...
    { icon: "Mail", title: "Email Us", content: "evoqcreativetech@gmail.com", action: "mailto:evoqcreativetech@gmail.com" },
    { icon: "Phone", title: "Call Us", content: "+254 115 706 542", action: "tel:+254115706542" },
    { icon: "MessageCircle", title: "WhatsApp", content: "Chat with us instantly", action: "https://wa.me/254115706542" },
    { icon: "MapPin", title: "Location", content: "Nairobi, Kenya", action: null }
  ];

  return (
    // The entire JSX structure below is unchanged.
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-primary mb-6">Let's Build Something <span className="text-accent">Amazing Together</span></h2>
          <p className="font-body text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">Ready to transform your digital presence? Get in touch with us today and let's discuss how we can help your business grow.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="bg-background rounded-2xl p-8 shadow-sm">
            <h3 className="font-heading font-semibold text-2xl text-primary mb-6">Start Your Project</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-body text-sm font-medium text-text-primary mb-2">Full Name *</label>
                  <Input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your full name" required />
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-text-primary mb-2">Email Address *</label>
                  <Input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email" required />
                </div>
              </div>
              <div>
                <label className="block font-body text-sm font-medium text-text-primary mb-2">Service Needed *</label>
                <select name="service" value={formData.service} onChange={handleInputChange} required className="w-full px-4 py-3 border border-border rounded-lg font-body text-text-primary bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200">
                  <option value="">Select a service</option>
                  {services.map((service, index) => (<option key={index} value={service}>{service}</option>))}
                </select>
              </div>
              <div>
                <label className="block font-body text-sm font-medium text-text-primary mb-2">Project Details *</label>
                <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Tell us about your project requirements..." required rows={4} className="w-full px-4 py-3 border border-border rounded-lg font-body text-text-primary bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 resize-none" />
              </div>
              <Button type="submit" variant="primary" size="lg" className="w-full btn-hover-scale" iconName="Send" iconPosition="right">Send Message</Button>
            </form>
          </div>
          <div>
            <h3 className="font-heading font-semibold text-2xl text-primary mb-8">Get in Touch</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center"><Icon name={info.icon} size={24} className="text-accent" /></div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-primary mb-1">{info.title}</h4>
                    {info.action ? (<a href={info.action} className="font-body text-text-secondary hover:text-accent transition-colors duration-200" target={info.action.startsWith('http') ? '_blank' : '_self'} rel={info.action.startsWith('http') ? 'noopener noreferrer' : ''}>{info.content}</a>) : (<span className="font-body text-text-secondary">{info.content}</span>)}
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-background rounded-2xl p-6 mb-8">
              <h4 className="font-heading font-semibold text-lg text-primary mb-4 flex items-center gap-2"><Icon name="Clock" size={20} className="text-accent" /> Business Hours</h4>
              <div className="space-y-2 font-body text-sm text-text-secondary">
                <div className="flex justify-between"><span>Monday - Friday</span><span>8:00 AM - 6:00 PM</span></div>
                <div className="flex justify-between"><span>Saturday</span><span>9:00 AM - 4:00 PM</span></div>
                <div className="flex justify-between"><span>Sunday</span><span>Closed</span></div>
              </div>
            </div>
            <div className="space-y-4">
              <Link to="/contact"><Button variant="outline" size="md" className="w-full btn-hover-scale" iconName="MessageSquare" iconPosition="left">Visit Full Contact Page</Button></Link>
              <a href="https://wa.me/254115706542?text=Hi! I'd like to schedule a free consultation." target="_blank" rel="noopener noreferrer"><Button variant="success" size="md" className="w-full btn-hover-scale" iconName="Calendar" iconPosition="left">Schedule Free Consultation</Button></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;