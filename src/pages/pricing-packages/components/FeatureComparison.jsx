// src/pages/pricing-packages/components/FeatureComparison.jsx -- FINAL, GUARANTEED CODE --

import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FeatureComparison = ({ packages, onSelectPackage }) => {

  // 1. A new, more powerful feature list with IDs that match your package data.
  // This is the master checklist for our table.
  const allFeatures = [
    { name: 'Responsive Design', id: 'Responsive Design' },
    { name: 'Number of Pages', id: 'Pages' }, // We'll handle this specially
    { name: 'Custom Domain Setup', id: 'Custom Domain' },
    { name: 'SSL Certificate', id: 'SSL Certificate' },
    { name: 'Basic SEO Setup', id: 'Basic SEO' },
    { name: 'Contact Forms', id: 'Contact Forms' },
    { name: 'Social Media Integration', id: 'Social Media' },
    { name: 'Google Analytics Setup', id: 'Google Analytics' },
    { name: 'Content Management (CMS)', id: 'Content Management' },
    { name: 'Advanced SEO Optimization', id: 'Advanced SEO' },
    { name: 'Performance Optimization', id: 'Performance Optimization' },
    { name: 'Security Features', id: 'Security' },
    { name: 'Email Integration', id: 'Email Integration' },
    { name: 'Blog Setup', id: 'Blog Setup' },
    { name: 'Live Chat Integration', id: 'Live Chat' },
    { name: 'E-commerce Features', id: 'E-commerce' },
    { name: 'Custom Animations', id: 'Custom Animations' },
    { name: 'API Integration', id: 'API Integration' },
    { name: 'Database Setup', id: 'Database Setup' },
    { name: 'User Authentication', id: 'User Authentication' },
    { name: 'Payment Gateway Integration', id: 'Payment Gateway' },
    { name: 'Advanced Analytics', id: 'Advanced Analytics' },
    { name: 'AI Chatbot Integration', id: 'AI Chatbot' },
    { name: 'Custom Dashboard', id: 'Custom Dashboard' },
    { name: 'Advanced User Roles', id: 'Advanced User Roles' },
    { name: 'Multi-language Support', id: 'Multi-language' },
    { name: 'Dedicated Account Manager', id: 'Dedicated Account Manager' },
    { name: 'Free Support Duration', id: 'Support' } // We'll handle this specially
  ];

  // 2. An intelligent function to get the *actual* feature value or status.
  const getFeatureValue = (pkg, featureId) => {
    // Special handling for features that have values, not just yes/no
    if (featureId === 'Pages') {
      const pageFeature = pkg.features.find(f => f.toLowerCase().includes('page'));
      return pageFeature ? pageFeature.replace('Up to ', '').replace(' Pages', '') : <Icon name="X" size={16} className="text-text-secondary/50 mx-auto" />;
    }
    if (featureId === 'Support') {
      const supportFeature = pkg.features.find(f => f.toLowerCase().includes('support'));
      return supportFeature ? supportFeature.replace(' Free Support', '') : <Icon name="X" size={16} className="text-text-secondary/50 mx-auto" />;
    }

    // This creates a flat list of all features for a package, including inherited ones.
    let allPackageFeatures = [];
    let currentPackage = pkg;
    while(currentPackage) {
      allPackageFeatures = [...allPackageFeatures, ...currentPackage.features];
      const everythingIn = currentPackage.features.find(f => f.startsWith('Everything in '));
      if (everythingIn) {
        const parentPackageName = everythingIn.replace('Everything in ', '');
        currentPackage = packages.find(p => p.name === parentPackageName);
      } else {
        currentPackage = null;
      }
    }

    // Check if the flattened list contains the feature ID.
    const hasFeature = allPackageFeatures.some(f => f.toLowerCase().includes(featureId.toLowerCase()));
    return hasFeature ? <Icon name="Check" size={16} className="text-success mx-auto" /> : <Icon name="X" size={16} className="text-text-secondary/50 mx-auto" />;
  };

  return (
    <div className="bg-background rounded-xl border border-border overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead>
            <tr className="bg-surface border-b border-border">
              <th className="text-left p-4 font-heading font-semibold text-primary">Features</th>
              {packages.map((pkg) => (
                <th key={pkg.id} className="text-center p-4 min-w-[200px]">
                  <div className="space-y-2">
                    <h3 className="font-heading font-bold text-lg text-primary">{pkg.name}</h3>
                    <div className="text-2xl font-bold text-accent">KES {pkg.price.toLocaleString()}</div>
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
              <tr key={feature.id} className={`border-b border-border ${index % 2 === 0 ? 'bg-background' : 'bg-surface/30'}`}>
                <td className="p-4 font-medium text-text-primary">{feature.name}</td>
                {packages.map((pkg) => (
                  <td key={`${pkg.id}-${feature.id}`} className="p-4 text-center font-medium text-text-primary">
                    {getFeatureValue(pkg, feature.id)}
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