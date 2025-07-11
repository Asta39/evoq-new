// src/pages/contact/components/ContactForm.jsx -- THE COMPLETE AND FINAL CODE --

import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceOptions = [
    { value: '', label: 'Select a service' },
    { value: 'website-development', label: 'Website Development' },
    { value: 'website-rebranding', label: 'Website Rebranding' },
    { value: 'seo-digital-visibility', label: 'SEO & Digital Visibility' },
    { value: 'ai-powered-websites', label: 'AI-Powered Websites' },
    { value: 'agentic-chatbots', label: 'Agentic Chatbots' },
    { value: 'custom-quote', label: 'Custom Quote Request' },
    { value: 'consultation', label: 'Free Consultation' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const serviceLabel = serviceOptions.find(opt => opt.value === formData.service)?.label || formData.service;
    const whatsappNumber = "254115706542";
    const formattedMessage = `
*New Contact Form Submission*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Service of Interest:* ${serviceLabel}

*Message:*
${formData.message}
    `;
    const encodedMessage = encodeURIComponent(formattedMessage.trim());
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
    }, 500);
  };

  if (isSubmitted) {
    return (
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-5 md:px-10">
          <div className="text-center bg-success/10 border border-success/20 rounded-lg p-8 md:p-12">
            <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Check" size={32} className="text-success-foreground" />
            </div>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-success mb-4">
              Message Sent Successfully!
            </h2>
            <p className="font-body text-lg text-text-primary mb-6">
              Thank you for reaching out to us. We've received your inquiry and will get back to you within 24 hours.
            </p>
            <Button
              variant="primary"
              onClick={() => setIsSubmitted(false)}
              iconName="ArrowLeft"
              iconPosition="left"
            >
              Send Another Message
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="max-w-4xl mx-auto px-5 md:px-10">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
            Start Your Project
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you with a detailed proposal tailored to your needs.
          </p>
        </div>

        <div className="bg-surface rounded-lg p-6 md:p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block font-body font-medium text-text-primary mb-2">
                  Full Name *
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className={errors.name ? 'border-error' : ''}
                />
                {errors.name && (
                  <p className="text-error text-sm mt-1 flex items-center">
                    <Icon name="AlertCircle" size={16} className="mr-1" />
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block font-body font-medium text-text-primary mb-2">
                  Email Address *
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  className={errors.email ? 'border-error' : ''}
                />
                {errors.email && (
                  <p className="text-error text-sm mt-1 flex items-center">
                    <Icon name="AlertCircle" size={16} className="mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block font-body font-medium text-text-primary mb-2">
                Service of Interest *
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg font-body text-text-primary bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200 ${
                  errors.service ? 'border-error' : 'border-border'
                }`}
              >
                {serviceOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="text-error text-sm mt-1 flex items-center">
                  <Icon name="AlertCircle" size={16} className="mr-1" />
                  {errors.service}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block font-body font-medium text-text-primary mb-2">
                Project Details *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                rows={6}
                className={`w-full px-4 py-3 border rounded-lg font-body text-text-primary bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200 resize-vertical ${
                  errors.message ? 'border-error' : 'border-border'
                }`}
              />
              {errors.message && (
                <p className="text-error text-sm mt-1 flex items-center">
                  <Icon name="AlertCircle" size={16} className="mr-1" />
                  {errors.message}
                </p>
              )}
            </div>

            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="privacy"
                required
                className="mt-1 w-4 h-4 text-accent border-border rounded focus:ring-accent"
              />
              <label htmlFor="privacy" className="font-body text-sm text-text-secondary">
                I agree to the{' '}
                <a href="#" className="text-accent hover:underline">
                  Privacy Policy
                </a>{' '}
                and consent to being contacted about my inquiry.
              </label>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
              loading={isSubmitting}
              className="w-full md:w-auto"
              iconName="Send"
              iconPosition="right"
            >
              {isSubmitting ? 'Sending Message...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;