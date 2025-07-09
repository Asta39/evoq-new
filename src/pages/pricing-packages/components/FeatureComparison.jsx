import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FeatureComparison = ({ packages, onSelectPackage }) => {
  const allFeatures = [
    'Responsive Design',
    'Custom Domain',
    'SSL Certificate',
    'Basic SEO Setup',
    'Contact Forms',
    'Social Media Integration',
    'Google Analytics',
    'Content Management',
    'E-commerce Features',
    'Advanced SEO',
    'Performance Optimization',
    'Security Features',
    'Custom Animations',
    'API Integration',
    'Database Setup',
    'User Authentication',
    'Payment Gateway',
    'Advanced Analytics',
    'AI Chatbot',
    'Custom Dashboard',
    'Priority Support',
    'Dedicated Account Manager'
  ];

  const getFeatureStatus = (packageFeatures, feature) => {
    return packageFeatures.some(f => 
      f.toLowerCase().includes(feature.toLowerCase()) || 
      feature.toLowerCase().includes(f.toLowerCase())
    );
  };

  return (
    <div className="bg-background rounded-xl border border-border overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead>
            <tr className="bg-surface border-b border-border">
              <th className="text-left p-4 font-heading font-semibold text-primary">
                Features
              </th>
              {packages.map((pkg) => (
                <th key={pkg.id} className="text-center p-4 min-w-[200px]">
                  <div className="space-y-2">
                    <h3 className="font-heading font-bold text-lg text-primary">
                      {pkg.name}
                    </h3>
                    <div className="text-2xl font-bold text-accent">
                      KES {pkg.price.toLocaleString()}
                    </div>
                    <Button
                      variant={pkg.id === 'business' ? 'primary' : 'outline'}
                      size="sm"
                      onClick={() => onSelectPackage(pkg)}
                      className="w-full btn-hover-scale"
                    >
                      Choose Plan
                    </Button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {allFeatures.map((feature, index) => (
              <tr key={feature} className={`border-b border-border ${
                index % 2 === 0 ? 'bg-background' : 'bg-surface/30'
              }`}>
                <td className="p-4 font-medium text-text-primary">
                  {feature}
                </td>
                {packages.map((pkg) => (
                  <td key={`${pkg.id}-${feature}`} className="p-4 text-center">
                    {getFeatureStatus(pkg.features, feature) ? (
                      <div className="inline-flex items-center justify-center w-6 h-6 bg-success/10 rounded-full">
                        <Icon name="Check" size={16} className="text-success" />
                      </div>
                    ) : (
                      <div className="inline-flex items-center justify-center w-6 h-6">
                        <Icon name="X" size={16} className="text-text-secondary/50" />
                      </div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeatureComparison;