import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingCard = ({ 
  packageData, 
  isPopular = false, 
  onSelectPackage 
}) => {
  const {
    id,
    name,
    price,
    originalPrice,
    description,
    features,
    deliveryTime,
    buttonText = "Choose Package"
  } = packageData;

  const handlePackageSelect = () => {
    onSelectPackage(packageData);
  };

  return (
    <div className={`relative bg-background rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${
      isPopular 
        ? 'border-accent shadow-md transform scale-105' 
        : 'border-border hover:border-accent/50'
    }`}>
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </div>
        </div>
      )}

      <div className="p-6 lg:p-8">
        {/* Package Header */}
        <div className="text-center mb-6">
          <h3 className="font-heading font-bold text-xl lg:text-2xl text-primary mb-2">
            {name}
          </h3>
          <p className="text-text-secondary text-sm lg:text-base mb-4">
            {description}
          </p>
          
          {/* Pricing */}
          <div className="mb-4">
            <div className="flex items-center justify-center space-x-2">
              <span className="text-3xl lg:text-4xl font-bold text-primary">
                KES {price.toLocaleString()}
              </span>
              {originalPrice && (
                <span className="text-lg text-text-secondary line-through">
                  KES {originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            <p className="text-text-secondary text-sm mt-1">
              One-time payment
            </p>
          </div>

          {/* Delivery Time */}
          <div className="inline-flex items-center space-x-2 bg-surface px-3 py-1 rounded-full">
            <Icon name="Clock" size={16} className="text-accent" />
            <span className="text-sm font-medium text-text-primary">
              {deliveryTime}
            </span>
          </div>
        </div>

        {/* Features List */}
        <div className="mb-8">
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-0.5">
                  <Icon 
                    name="Check" 
                    size={16} 
                    className="text-success" 
                  />
                </div>
                <span className="text-text-primary text-sm lg:text-base">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <Button
          variant={isPopular ? "primary" : "outline"}
          size="lg"
          fullWidth
          onClick={handlePackageSelect}
          className="btn-hover-scale"
          iconName="ArrowRight"
          iconPosition="right"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;