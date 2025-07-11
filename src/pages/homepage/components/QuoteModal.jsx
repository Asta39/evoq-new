// src/pages/homepage/components/QuoteModal.jsx -- NEW FILE --

import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuoteModal = ({ isOpen, onClose, packageDetails }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  // Effect to reset form when a new package is selected
  useEffect(() => {
    if (isOpen) {
      setFormData({ name: '', email: '', phone: '' });
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!packageDetails) return;

    // --- Format the WhatsApp Message ---
    const whatsappNumber = "254115706542";
    const featuresList = packageDetails.features.map(f => `- ${f}`).join('\n');

    const message = `
*New Quote Inquiry from Website*

*Selected Package: ${packageDetails.name}*
*Price:* KES ${packageDetails.price} (${packageDetails.period})

---
*Client Details:*
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
---

*Package Features Included:*
${featuresList}
    `;

    // Encode the message for a URL and create the WhatsApp link
    const encodedMessage = encodeURIComponent(message.trim());
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    // Close the modal after submission
    onClose();
  };

  // If the modal isn't open, render nothing
  if (!isOpen || !packageDetails) {
    return null;
  }

  return (
    // Backdrop
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Modal Content */}
      <div 
        className="relative bg-surface rounded-2xl shadow-xl w-full max-w-md p-8 m-4"
        onClick={(e) => e.stopPropagation()} // Prevents closing modal when clicking inside
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-text-secondary hover:bg-surface-hover"
        >
          <Icon name="X" size={20} />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <h3 className="font-heading font-bold text-2xl text-primary">Get a Quote</h3>
          <p className="text-text-secondary">
            You've selected the <span className="font-semibold text-accent">{packageDetails.name}</span> package.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-1">Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required 
              className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-accent focus:border-accent"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1">Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required 
              className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-accent focus:border-accent"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-text-secondary mb-1">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              value={formData.phone}
              onChange={handleChange}
              required 
              className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-accent focus:border-accent"
            />
          </div>
          <div className="pt-2">
            <Button type="submit" variant="primary" size="lg" className="w-full">
              Send Inquiry via WhatsApp
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuoteModal;