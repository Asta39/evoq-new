import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const location = useLocation();

  const navigationItems = [
    { label: 'Home', path: '/homepage', icon: 'Home' },
    { label: 'Services', path: '/services-detail', icon: 'Settings' },
    { label: 'Pricing', path: '/pricing-packages', icon: 'DollarSign' },
    { label: 'Portfolio', path: '/portfolio', icon: 'Briefcase' },
    { label: 'About', path: '/about', icon: 'Users' },
    { label: 'Contact', path: '/contact', icon: 'Mail' },
  ];

  const controlHeader = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Hide header when scrolling down, show when scrolling up
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsHeaderVisible(false);
    } else {
      setIsHeaderVisible(true);
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    let timeoutId;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(controlHeader, 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [controlHeader]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  const handleStartProject = () => {
    // Navigate to contact page or open contact modal
    window.location.href = '/contact';
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-1100 transition-all duration-300 ease-in-out ${
          isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50' 
            : 'bg-background/80 backdrop-blur-sm'
        }`}
        role="banner"
      >
        <nav className="max-w-7xl mx-auto px-5 md:px-10" role="navigation" aria-label="Main navigation">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link 
              to="/homepage" 
              className="flex items-center space-x-2 btn-hover-scale focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-lg"
              onClick={closeMobileMenu}
              aria-label="Evoq Creative Tech Home"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-lg flex items-center justify-center shadow-sm">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div className="hidden sm:block">
                <span className="font-heading font-semibold text-lg md:text-xl text-primary">
                  Evoq
                </span>
                <span className="font-heading font-medium text-lg md:text-xl text-accent ml-1">
                  Creative Tech
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-body font-medium text-sm xl:text-base transition-colors duration-200 ease-in-out hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-md px-2 py-1 ${
                    isActiveRoute(item.path)
                      ? 'text-accent' :'text-text-primary'
                  }`}
                  aria-current={isActiveRoute(item.path) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA Button & Mobile Menu Toggle */}
            <div className="flex items-center space-x-4">
              <Button
                variant="primary"
                size="md"
                onClick={handleStartProject}
                className="hidden sm:flex btn-hover-scale"
                iconName="ArrowRight"
                iconPosition="right"
                aria-label="Start a new project"
              >
                Start Project
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-2 rounded-md text-text-primary hover:text-accent hover:bg-surface transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <Icon 
                  name={isMobileMenuOpen ? "X" : "Menu"} 
                  size={24} 
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-1150 lg:hidden"
          onClick={closeMobileMenu}
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
        >
          <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm" aria-hidden="true" />
          
          <div 
            id="mobile-menu"
            className="absolute top-0 right-0 w-80 max-w-[85vw] h-full bg-background shadow-2xl transform transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-5 border-b border-border">
              <span id="mobile-menu-title" className="font-heading font-semibold text-lg text-primary">
                Menu
              </span>
              <button
                onClick={closeMobileMenu}
                className="p-2 rounded-md text-text-primary hover:text-accent hover:bg-surface transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                aria-label="Close menu"
              >
                <Icon name="X" size={20} aria-hidden="true" />
              </button>
            </div>

            <div className="py-6" role="navigation" aria-label="Mobile navigation">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={`flex items-center space-x-3 px-5 py-4 font-body font-medium text-base transition-colors duration-200 ease-in-out hover:bg-surface hover:text-accent focus:outline-none focus:bg-surface focus:text-accent ${
                    isActiveRoute(item.path)
                      ? 'text-accent bg-surface/50' :'text-text-primary'
                  }`}
                  aria-current={isActiveRoute(item.path) ? 'page' : undefined}
                >
                  <Icon name={item.icon} size={20} aria-hidden="true" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-border">
              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  handleStartProject();
                  closeMobileMenu();
                }}
                className="w-full btn-hover-scale"
                iconName="ArrowRight"
                iconPosition="right"
                aria-label="Start a new project"
              >
                Start Project
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;