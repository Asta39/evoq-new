import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const Breadcrumb = () => {
  const location = useLocation();

  const breadcrumbMap = {
    '/homepage': { label: 'Home', parent: null },
    '/services-detail': { label: 'Services', parent: '/homepage' },
    '/pricing-packages': { label: 'Pricing', parent: '/homepage' },
    '/portfolio': { label: 'Portfolio', parent: '/homepage' },
    '/about': { label: 'About', parent: '/homepage' },
    '/contact': { label: 'Contact', parent: '/homepage' },
  };

  const currentPath = location.pathname;
  const currentBreadcrumb = breadcrumbMap[currentPath];

  // Don't show breadcrumb on homepage
  if (!currentBreadcrumb || currentPath === '/homepage') {
    return null;
  }

  const breadcrumbs = [];
  
  // Add home breadcrumb
  breadcrumbs.push({
    label: 'Home',
    path: '/homepage',
    isActive: false
  });

  // Add current page breadcrumb
  breadcrumbs.push({
    label: currentBreadcrumb.label,
    path: currentPath,
    isActive: true
  });

  return (
    <nav 
      className="flex items-center space-x-2 text-sm font-body mb-6"
      aria-label="Breadcrumb navigation"
    >
      {breadcrumbs.map((breadcrumb, index) => (
        <React.Fragment key={breadcrumb.path}>
          {index > 0 && (
            <Icon 
              name="ChevronRight" 
              size={16} 
              className="text-text-secondary" 
            />
          )}
          
          {breadcrumb.isActive ? (
            <span 
              className="text-text-primary font-medium"
              aria-current="page"
            >
              {breadcrumb.label}
            </span>
          ) : (
            <Link
              to={breadcrumb.path}
              className="text-text-secondary hover:text-accent transition-colors duration-200 ease-in-out"
            >
              {breadcrumb.label}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;