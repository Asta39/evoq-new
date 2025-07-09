import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AddOnsSection = ({ onAddOnSelect }) => {
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const addOns = [
    {
      id: 'hosting',
      name: 'Premium Hosting',
      description: 'High-performance hosting with SSL certificate',
      price: 5000,
      period: 'per year',
      icon: 'Server'
    },
    {
      id: 'maintenance',
      name: 'Monthly Maintenance',
      description: 'Regular updates, backups, and security monitoring',
      price: 8000,
      period: 'per month',
      icon: 'Settings'
    },
    {
      id: 'seo',
      name: 'SEO Optimization',
      description: 'Complete SEO setup and optimization',
      price: 15000,
      period: 'one-time',
      icon: 'TrendingUp'
    },
    {
      id: 'analytics',
      name: 'Analytics Setup',
      description: 'Google Analytics and conversion tracking',
      price: 3000,
      period: 'one-time',
      icon: 'BarChart3'
    },
    {
      id: 'social',
      name: 'Social Media Integration',
      description: 'Facebook, Instagram, and Twitter integration',
      price: 5000,
      period: 'one-time',
      icon: 'Share2'
    },
    {
      id: 'ecommerce',
      name: 'E-commerce Features',
      description: 'Shopping cart, payment gateway integration',
      price: 25000,
      period: 'one-time',
      icon: 'ShoppingCart'
    }
  ];

  const toggleAddOn = (addOnId) => {
    setSelectedAddOns(prev => 
      prev.includes(addOnId)
        ? prev.filter(id => id !== addOnId)
        : [...prev, addOnId]
    );
  };

  const calculateTotal = () => {
    return selectedAddOns.reduce((total, addOnId) => {
      const addOn = addOns.find(item => item.id === addOnId);
      return total + (addOn ? addOn.price : 0);
    }, 0);
  };

  const handleGetQuote = () => {
    const selectedItems = addOns.filter(addOn => selectedAddOns.includes(addOn.id));
    onAddOnSelect(selectedItems, calculateTotal());
  };

  return (
    <div className="bg-background rounded-xl border border-border p-6 lg:p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-heading font-bold text-xl lg:text-2xl text-primary mb-2">
            Optional Add-ons
          </h3>
          <p className="text-text-secondary">
            Enhance your package with additional services
          </p>
        </div>
        <Button
          variant="ghost"
          onClick={() => setIsExpanded(!isExpanded)}
          iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
          iconPosition="right"
        >
          {isExpanded ? 'Collapse' : 'View All'}
        </Button>
      </div>

      {/* Add-ons Grid */}
      <div className={`grid gap-4 transition-all duration-300 ${
        isExpanded ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'
      }`}>
        {(isExpanded ? addOns : addOns.slice(0, 3)).map((addOn) => (
          <div
            key={addOn.id}
            className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 ${
              selectedAddOns.includes(addOn.id)
                ? 'border-accent bg-accent/5' :'border-border hover:border-accent/50'
            }`}
            onClick={() => toggleAddOn(addOn.id)}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3 flex-1">
                <div className={`p-2 rounded-lg ${
                  selectedAddOns.includes(addOn.id)
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-surface text-text-primary'
                }`}>
                  <Icon name={addOn.icon} size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-heading font-semibold text-base text-primary mb-1">
                    {addOn.name}
                  </h4>
                  <p className="text-text-secondary text-sm mb-2">
                    {addOn.description}
                  </p>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-primary">
                      KES {addOn.price.toLocaleString()}
                    </span>
                    <span className="text-text-secondary text-sm">
                      {addOn.period}
                    </span>
                  </div>
                </div>
              </div>
              <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                selectedAddOns.includes(addOn.id)
                  ? 'border-accent bg-accent' :'border-border'
              }`}>
                {selectedAddOns.includes(addOn.id) && (
                  <Icon name="Check" size={12} className="text-accent-foreground" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Total and CTA */}
      {selectedAddOns.length > 0 && (
        <div className="mt-6 pt-6 border-t border-border">
          <div className="flex items-center justify-between mb-4">
            <span className="font-heading font-semibold text-lg text-primary">
              Total Add-ons:
            </span>
            <span className="font-bold text-xl text-accent">
              KES {calculateTotal().toLocaleString()}
            </span>
          </div>
          <Button
            variant="primary"
            size="lg"
            fullWidth
            onClick={handleGetQuote}
            className="btn-hover-scale"
            iconName="Calculator"
            iconPosition="left"
          >
            Get Custom Quote
          </Button>
        </div>
      )}
    </div>
  );
};

export default AddOnsSection;