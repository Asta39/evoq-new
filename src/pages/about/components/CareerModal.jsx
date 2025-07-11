// components/CareerModal.jsx -- NEW FILE --

import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon'; // Adjust path if needed
import Button from '../../../components/ui/Button'; // Adjust path if needed

const CareerModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    position: '',
    portfolio: '',
    message: ''
  });

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData({ fullName: '', email: '', phone: '', age: '', gender: '', position: '', portfolio: '', message: '' });
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = "254115706542";

    // Create a detailed, well-formatted message
    const message = `
*New Career Application*

--- *Personal Details* ---
*Full Name:* ${formData.fullName}
*Email Address:* ${formData.email}
*Phone Number:* ${formData.phone}
*Age:* ${formData.age}
*Gender:* ${formData.gender}

--- *Application Details* ---
*Position Applied For:* ${formData.position}
*Portfolio/LinkedIn URL:* ${formData.portfolio || 'Not Provided'}

*Cover Message:*
${formData.message || 'No message provided.'}
    `;

    const encodedMessage = encodeURIComponent(message.trim());
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={onClose}>
      <div 
        className="relative bg-surface rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-surface/80 backdrop-blur-sm z-10 px-8 pt-8 pb-4">
          <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full text-text-secondary hover:bg-surface-hover">
            <Icon name="X" size={20} />
          </button>
          <div className="text-center">
            <h3 className="font-heading font-bold text-2xl text-primary">Join Our Team</h3>
            <p className="text-text-secondary mt-1">We're excited to learn more about you.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="px-8 pb-8 space-y-4">
          {/* Personal Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-text-secondary mb-1">Full Name</label>
              <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleChange} required className="w-full px-4 py-2 bg-background border border-border rounded-lg" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1">Email Address</label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 bg-background border border-border rounded-lg" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-text-secondary mb-1">Phone Number</label>
              <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-2 bg-background border border-border rounded-lg" />
            </div>
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-text-secondary mb-1">Age</label>
              <input type="number" name="age" id="age" value={formData.age} onChange={handleChange} required className="w-full px-4 py-2 bg-background border border-border rounded-lg" />
            </div>
          </div>
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-text-secondary mb-1">Gender</label>
            <select name="gender" id="gender" value={formData.gender} onChange={handleChange} required className="w-full px-4 py-2 bg-background border border-border rounded-lg">
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>
          {/* Application Info */}
          <div className="pt-4 border-t border-border">
            <label htmlFor="position" className="block text-sm font-medium text-text-secondary mb-1">Position Applying For</label>
            <input type="text" name="position" id="position" value={formData.position} onChange={handleChange} required placeholder="e.g., Frontend Developer, UI/UX Designer" className="w-full px-4 py-2 bg-background border border-border rounded-lg" />
          </div>
          <div>
            <label htmlFor="portfolio" className="block text-sm font-medium text-text-secondary mb-1">Portfolio or LinkedIn URL</label>
            <input type="url" name="portfolio" id="portfolio" value={formData.portfolio} onChange={handleChange} placeholder="https://..." className="w-full px-4 py-2 bg-background border border-border rounded-lg" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-1">Why do you want to join us?</label>
            <textarea name="message" id="message" value={formData.message} onChange={handleChange} rows="4" className="w-full px-4 py-2 bg-background border border-border rounded-lg resize-none"></textarea>
          </div>
          <div className="pt-2">
            <Button type="submit" variant="primary" size="lg" className="w-full">
              Submit Application
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CareerModal;