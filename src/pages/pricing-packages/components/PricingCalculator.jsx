import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingCalculator = ({ onCalculate }) => {
  const [selectedPackage, setSelectedPackage] = useState('');
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const packages = [
    { id: 'starter', name: 'Starter', price: 25000 },
    { id: 'business', name: 'Business', price: 55000 },
    { id: 'premium', name: 'Premium', price: 75000 },
    { id: 'elite', name: 'Elite', price: 150000 }
  ];

  const addOns = [
    { id: 'hosting', name: 'Premium Hosting', price: 5000, period: 'yearly' },
    { id: 'maintenance', name: 'Monthly Maintenance', price: 8000, period: 'monthly' },
    { id: 'seo', name: 'SEO Optimization', price: 15000, period: 'one-time' },
    { id: 'analytics', name: 'Analytics Setup', price: 3000, period: 'one-time' },
    { id: 'social', name: 'Social Media Integration', price: 5000, period: 'one-time' },
    { id: 'ecommerce', name: 'E-commerce Features', price: 25000, period: 'one-time' }
  ];

  const toggleAddOn = (addOnId) => {
    setSelectedAddOns(prev => 
      prev.includes(addOnId)
        ? prev.filter(id => id !== addOnId)
        : [...prev, addOnId]
    );
  };

  const calculateTotal = () => {
    const packagePrice = packages.find(p => p.id === selectedPackage)?.price || 0;
    const addOnPrice = selectedAddOns.reduce((total, addOnId) => {
      const addOn = addOns.find(a => a.id === addOnId);
      return total + (addOn ? addOn.price : 0);
    }, 0);
    
    return packagePrice + addOnPrice;
  };

  const handleCalculate = () => {
    const result = {
      package: packages.find(p => p.id === selectedPackage),
      addOns: addOns.filter(a => selectedAddOns.includes(a.id)),
      total: calculateTotal()
    };
    onCalculate(result);
  };

  return (
    <div className="bg-background rounded-xl border border-border p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-heading font-bold text-xl text-primary">
          Pricing Calculator
        </h3>
        <Button
          variant="ghost"
          onClick={() => setIsOpen(!isOpen)}
          iconName={isOpen ? "ChevronUp" : "Calculator"}
          iconPosition="left"
        >
          {isOpen ? 'Close' : 'Calculate'}
        </Button>
      </div>

      {isOpen && (
        <div className="space-y-6">
          {/* Package Selection */}
          <div>
            <label className="block text-sm font-medium text-primary mb-3">
              Select Package
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {packages.map((pkg) => (
                <button
                  key={pkg.id}
                  onClick={() => setSelectedPackage(pkg.id)}
                  className={`p-3 rounded-lg border-2 transition-all duration-200 text-center ${
                    selectedPackage === pkg.id
                      ? 'border-accent bg-accent/5' :'border-border hover:border-accent/50'
                  }`}
                >
                  <div className="font-medium text-primary text-sm">
                    {pkg.name}
                  </div>
                  <div className="font-bold text-accent text-sm">
                    KES {pkg.price.toLocaleString()}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Add-ons Selection */}
          <div>
            <label className="block text-sm font-medium text-primary mb-3">
              Add-ons (Optional)
            </label>
            <div className="space-y-2">
              {addOns.map((addOn) => (
                <div
                  key={addOn.id}
                  className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                    selectedAddOns.includes(addOn.id)
                      ? 'border-accent bg-accent/5' :'border-border hover:border-accent/50'
                  }`}
                  onClick={() => toggleAddOn(addOn.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                        selectedAddOns.includes(addOn.id)
                          ? 'border-accent bg-accent' :'border-border'
                      }`}>
                        {selectedAddOns.includes(addOn.id) && (
                          <Icon name="Check" size={10} className="text-accent-foreground" />
                        )}
                      </div>
                      <div>
                        <span className="text-sm font-medium text-primary">
                          {addOn.name}
                        </span>
                        <div className="text-xs text-text-secondary">
                          {addOn.period}
                        </div>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-accent">
                      KES {addOn.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Total and CTA */}
          <div className="pt-4 border-t border-border">
            <div className="flex items-center justify-between mb-4">
              <span className="font-heading font-semibold text-lg text-primary">
                Total Estimate:
              </span>
              <span className="font-bold text-2xl text-accent">
                KES {calculateTotal().toLocaleString()}
              </span>
            </div>
            
            <Button
              variant="primary"
              size="lg"
              fullWidth
              onClick={handleCalculate}
              disabled={!selectedPackage}
              className="btn-hover-scale"
              iconName="Send"
              iconPosition="right"
            >
              Get Detailed Quote
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingCalculator;