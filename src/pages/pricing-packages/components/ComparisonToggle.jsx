import React from 'react';
import Icon from '../../../components/AppIcon';

const ComparisonToggle = ({ isComparisonMode, onToggle }) => {
  return (
    <div className="flex items-center justify-center mb-8">
      <div className="bg-surface rounded-lg p-1 flex items-center space-x-2">
        <button
          onClick={() => onToggle(false)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-200 ${
            !isComparisonMode
              ? 'bg-accent text-accent-foreground shadow-sm'
              : 'text-text-secondary hover:text-accent'
          }`}
        >
          <Icon name="Grid3x3" size={18} />
          <span className="font-medium">Package View</span>
        </button>
        
        <button
          onClick={() => onToggle(true)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-200 ${
            isComparisonMode
              ? 'bg-accent text-accent-foreground shadow-sm'
              : 'text-text-secondary hover:text-accent'
          }`}
        >
          <Icon name="BarChart3" size={18} />
          <span className="font-medium">Compare Features</span>
        </button>
      </div>
    </div>
  );
};

export default ComparisonToggle;