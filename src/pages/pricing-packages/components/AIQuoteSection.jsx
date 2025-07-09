import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';


const AIQuoteSection = ({ onQuoteRequest }) => {
  const [formData, setFormData] = useState({
    projectType: '',
    features: [],
    timeline: '',
    budget: '',
    description: ''
  });

  const projectTypes = [
    { id: 'ecommerce', label: 'E-commerce Platform', icon: 'ShoppingCart' },
    { id: 'saas', label: 'SaaS Dashboard', icon: 'Monitor' },
    { id: 'corporate', label: 'Corporate Website', icon: 'Building' },
    { id: 'portfolio', label: 'Portfolio Site', icon: 'User' },
    { id: 'blog', label: 'Blog/News Site', icon: 'FileText' },
    { id: 'custom', label: 'Custom Application', icon: 'Code' }
  ];

  const aiFeatures = [
    { id: 'chatbot', label: 'AI Chatbot Integration', price: 15000 },
    { id: 'recommendations', label: 'AI Product Recommendations', price: 20000 },
    { id: 'analytics', label: 'AI Analytics Dashboard', price: 25000 },
    { id: 'automation', label: 'Workflow Automation', price: 18000 },
    { id: 'personalization', label: 'Content Personalization', price: 22000 },
    { id: 'voice', label: 'Voice Interface', price: 30000 }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const toggleFeature = (featureId) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(featureId)
        ? prev.features.filter(id => id !== featureId)
        : [...prev.features, featureId]
    }));
  };

  const calculateEstimate = () => {
    const basePrice = 50000; // Base AI-enhanced website price
    const featurePrice = formData.features.reduce((total, featureId) => {
      const feature = aiFeatures.find(f => f.id === featureId);
      return total + (feature ? feature.price : 0);
    }, 0);
    
    return basePrice + featurePrice;
  };

  const handleSubmitQuote = () => {
    const quoteData = {
      ...formData,
      estimatedPrice: calculateEstimate(),
      selectedFeatures: aiFeatures.filter(f => formData.features.includes(f.id))
    };
    onQuoteRequest(quoteData);
  };

  return (
    <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-xl border border-accent/20 p-6 lg:p-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
          <Icon name="Zap" size={32} className="text-accent" />
        </div>
        <h3 className="font-heading font-bold text-2xl lg:text-3xl text-primary mb-2">
          AI-Enhanced Website
        </h3>
        <p className="text-text-secondary text-lg">
          Get a custom quote for your AI-powered web solution
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Project Type Selection */}
        <div>
          <h4 className="font-heading font-semibold text-lg text-primary mb-4">
            Project Type
          </h4>
          <div className="grid grid-cols-2 gap-3">
            {projectTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => handleInputChange('projectType', type.id)}
                className={`p-3 rounded-lg border-2 transition-all duration-200 text-left ${
                  formData.projectType === type.id
                    ? 'border-accent bg-accent/5' :'border-border hover:border-accent/50'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Icon name={type.icon} size={20} className="text-accent" />
                  <span className="text-sm font-medium text-primary">
                    {type.label}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* AI Features Selection */}
        <div>
          <h4 className="font-heading font-semibold text-lg text-primary mb-4">
            AI Features
          </h4>
          <div className="space-y-3">
            {aiFeatures.map((feature) => (
              <div
                key={feature.id}
                className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                  formData.features.includes(feature.id)
                    ? 'border-accent bg-accent/5' :'border-border hover:border-accent/50'
                }`}
                onClick={() => toggleFeature(feature.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                      formData.features.includes(feature.id)
                        ? 'border-accent bg-accent' :'border-border'
                    }`}>
                      {formData.features.includes(feature.id) && (
                        <Icon name="Check" size={10} className="text-accent-foreground" />
                      )}
                    </div>
                    <span className="text-sm font-medium text-primary">
                      {feature.label}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-accent">
                    +KES {feature.price.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Details */}
      <div className="mt-8 space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Timeline
            </label>
            <select
              value={formData.timeline}
              onChange={(e) => handleInputChange('timeline', e.target.value)}
              className="w-full p-3 border border-border rounded-lg focus:border-accent focus:outline-none"
            >
              <option value="">Select timeline</option>
              <option value="1-2 weeks">1-2 weeks</option>
              <option value="3-4 weeks">3-4 weeks</option>
              <option value="1-2 months">1-2 months</option>
              <option value="3+ months">3+ months</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Budget Range
            </label>
            <select
              value={formData.budget}
              onChange={(e) => handleInputChange('budget', e.target.value)}
              className="w-full p-3 border border-border rounded-lg focus:border-accent focus:outline-none"
            >
              <option value="">Select budget</option>
              <option value="50k-100k">KES 50,000 - 100,000</option>
              <option value="100k-200k">KES 100,000 - 200,000</option>
              <option value="200k-500k">KES 200,000 - 500,000</option>
              <option value="500k+">KES 500,000+</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-primary mb-2">
            Project Description
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            placeholder="Tell us about your project requirements..."
            rows={4}
            className="w-full p-3 border border-border rounded-lg focus:border-accent focus:outline-none resize-none"
          />
        </div>
      </div>

      {/* Estimate and CTA */}
      <div className="mt-8 pt-6 border-t border-border">
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-text-secondary text-sm">Estimated Price:</span>
            <div className="font-bold text-2xl text-accent">
              KES {calculateEstimate().toLocaleString()}
            </div>
          </div>
          <div className="text-right">
            <p className="text-text-secondary text-sm">
              Final price may vary based on requirements
            </p>
          </div>
        </div>

        <Button
          variant="primary"
          size="lg"
          fullWidth
          onClick={handleSubmitQuote}
          disabled={!formData.projectType}
          className="btn-hover-scale"
          iconName="Send"
          iconPosition="right"
        >
          Request Custom Quote
        </Button>
      </div>
    </div>
  );
};

export default AIQuoteSection;