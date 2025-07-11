// src/components/ui/Header.jsx -- FINAL, UPDATED WITH YOUR LOGO --

import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsHeaderVisible(false);
    } else {
      setIsHeaderVisible(true);
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', controlHeader);
    return () => window.removeEventListener('scroll', controlHeader);
  }, [controlHeader]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const isActiveRoute = (path) => location.pathname === path;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 px-4 transition-transform duration-300 ease-in-out ${
          isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
        role="banner"
      >
        <nav
          className="max-w-6xl mx-auto mt-4 flex items-center justify-between h-16 rounded-full bg-white/70 backdrop-blur-lg shadow-lg ring-1 ring-black/5 px-4" // Adjusted padding for image logo
          role="navigation"
          aria-label="Main navigation"
        >
          {/* --- UPDATED LOGO SECTION --- */}
          <Link to="/homepage" className="flex items-center gap-2 flex-shrink-0" aria-label="Evoq Home">
            {/* Replaced the div and SVG with an <img> tag */}
            <img 
              src="/assets/images/logo1.png" 
              alt="Evoq Creative Tech Logo" 
              className="h-10 w-auto" // Adjust h-10 (height) as needed
            />
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                  isActiveRoute(item.path) ? 'text-primary' : 'text-gray-500 hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <Button
              variant="primary"
              size="md"
              onClick={() => window.location.href='/contact'}
              className="hidden sm:flex"
              iconName="ArrowRight"
              iconPosition="right"
            >
              Start Project
            </Button>
            <button onClick={toggleMobileMenu} className="lg:hidden p-2 rounded-full text-gray-800 hover:bg-gray-200/50" aria-label="Open mobile menu">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </nav>
      </header>

      {/* --- UPDATED MOBILE MENU LOGO --- */}
      {isMobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40" onClick={closeMobileMenu} />
          <div className={`fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white/80 backdrop-blur-xl shadow-2xl z-50 flex flex-col transition-transform duration-300 ease-in-out ${ isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full' }`}>
            <div className="flex items-center justify-between p-5 border-b border-gray-900/10">
              {/* Replaced the div and SVG with an <img> tag */}
              <Link to="/homepage" className="flex items-center gap-2" onClick={closeMobileMenu}>
                <img 
                  src="/assets/images/logo1.png" 
                  alt="Evoq Creative Tech Logo" 
                  className="h-8 w-auto" // A slightly smaller logo for the mobile menu
                />
              </Link>
              <button onClick={closeMobileMenu} className="p-2 rounded-full hover:bg-gray-200/50" aria-label="Close menu">
                <Icon name="X" size={20} />
              </button>
            </div>
            <nav className="flex-grow py-6 space-y-2">
              {navigationItems.map((item) => (
                <Link key={item.path} to={item.path} onClick={closeMobileMenu} className={`flex items-center gap-4 px-6 py-3 font-medium text-base transition-colors ${ isActiveRoute(item.path) ? 'bg-gray-900/10 text-gray-900' : 'text-gray-600 hover:bg-gray-900/5 hover:text-gray-900' }`}>
                  <Icon name={item.icon} size={20} />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
            <div className="p-6 border-t border-gray-900/10">
              <Button variant="primary" size="lg" onClick={() => { window.location.href = '/contact'; closeMobileMenu(); }} className="w-full" iconName="ArrowRight" iconPosition="right">
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