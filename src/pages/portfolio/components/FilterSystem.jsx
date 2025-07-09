import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const FilterSystem = ({ 
  filters, 
  activeFilters, 
  onFilterChange, 
  searchQuery, 
  onSearchChange,
  onClearFilters 
}) => {
  const filterCategories = [
    {
      key: 'technology',
      label: 'Technology',
      icon: 'Code2',
      options: filters.technologies
    },
    {
      key: 'industry',
      label: 'Industry',
      icon: 'Building2',
      options: filters.industries
    },
    {
      key: 'type',
      label: 'Project Type',
      icon: 'Layers',
      options: filters.types
    }
  ];

  const hasActiveFilters = Object.values(activeFilters).some(arr => arr.length > 0) || searchQuery;

  return (
    <div className="bg-background rounded-xl shadow-sm border border-border p-6 mb-8">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Input
            type="search"
            placeholder="Search projects by client, title, or description..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 pr-4"
          />
          <Icon 
            name="Search" 
            size={18} 
            className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" 
          />
        </div>
      </div>

      {/* Filter Categories */}
      <div className="space-y-6">
        {filterCategories.map((category) => (
          <div key={category.key}>
            <h4 className="font-heading font-semibold text-sm text-text-primary mb-3 flex items-center">
              <Icon name={category.icon} size={16} className="text-accent mr-2" />
              {category.label}
            </h4>
            
            <div className="flex flex-wrap gap-2">
              {category.options.map((option) => {
                const isActive = activeFilters[category.key]?.includes(option);
                
                return (
                  <button
                    key={option}
                    onClick={() => onFilterChange(category.key, option)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ease-in-out ${
                      isActive
                        ? 'bg-accent text-accent-foreground shadow-sm'
                        : 'bg-surface text-text-secondary hover:bg-accent/10 hover:text-accent'
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
          <div className="text-sm text-text-secondary">
            {Object.values(activeFilters).flat().length} filter(s) applied
            {searchQuery && ` • Searching: "${searchQuery}"`}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            iconName="X"
            iconPosition="left"
            className="text-text-secondary hover:text-text-primary"
          >
            Clear All
          </Button>
        </div>
      )}
    </div>
  );
};

export default FilterSystem;