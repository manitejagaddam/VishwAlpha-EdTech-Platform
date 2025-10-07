import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'About', path: '/about', icon: 'Users' },
    { name: 'Services', path: '/services', icon: 'Briefcase' },
    { name: 'Activities', path: '/activities', icon: 'Calendar' },
    { name: 'Contact', path: '/contact', icon: 'Mail' }
  ];

  const moreItems = [
    { name: 'International Presence', path: '/international-presence', icon: 'Globe' }
  ];

  const handleNavigation = (path) => {
    window.location.href = path;
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-normal ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-brand' 
          : 'bg-transparent'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-6 lg:px-8">
          {/* Logo Section */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => handleNavigation('/homepage')}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow group-hover:shadow-glow-lg transition-all duration-normal">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div className="absolute -inset-1 bg-gradient-primary rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-normal blur-sm"></div>
            </div>
            <div className="ml-3">
              <h1 className="text-xl font-display font-bold text-gradient-primary">
                VishwAlpha
              </h1>
              <p className="text-xs text-text-secondary font-medium">
                Intelligent Education
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <button
                key={item?.name}
                onClick={() => handleNavigation(item?.path)}
                className="flex items-center px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-normal rounded-md hover:bg-muted/50 group"
              >
                <Icon 
                  name={item?.icon} 
                  size={16} 
                  className="mr-2 text-text-muted group-hover:text-primary transition-colors duration-normal" 
                />
                {item?.name}
              </button>
            ))}
            
            {/* More Dropdown */}
            <div className="relative group">
              <button className="flex items-center px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-normal rounded-md hover:bg-muted/50">
                <Icon name="MoreHorizontal" size={16} className="mr-2" />
                More
                <Icon name="ChevronDown" size={14} className="ml-1" />
              </button>
              
              <div className="absolute right-0 top-full mt-2 w-56 bg-popover border border-border rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-normal">
                <div className="py-2">
                  {moreItems?.map((item) => (
                    <button
                      key={item?.name}
                      onClick={() => handleNavigation(item?.path)}
                      className="flex items-center w-full px-4 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-muted/50 transition-colors duration-normal"
                    >
                      <Icon name={item?.icon} size={16} className="mr-3" />
                      {item?.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleNavigation('/contact')}
              className="border-primary/20 text-text-secondary hover:text-text-primary hover:border-primary/40"
            >
              Get Started
            </Button>
            <Button
              variant="default"
              size="sm"
              className="bg-gradient-primary hover:opacity-90 text-white shadow-glow hover:shadow-glow-lg"
              onClick={() => handleNavigation('/services')}
            >
              Experience AI Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-text-secondary hover:text-text-primary transition-colors duration-normal"
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden transition-all duration-normal overflow-hidden ${
            isMenuOpen 
              ? 'max-h-screen opacity-100 border-t border-border' :'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-background/95 backdrop-blur-md">
            <nav className="px-6 py-4 space-y-2">
              {navigationItems?.map((item) => (
                <button
                  key={item?.name}
                  onClick={() => handleNavigation(item?.path)}
                  className="flex items-center w-full px-4 py-3 text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-muted/50 rounded-md transition-colors duration-normal"
                >
                  <Icon name={item?.icon} size={18} className="mr-3" />
                  {item?.name}
                </button>
              ))}
              
              {moreItems?.map((item) => (
                <button
                  key={item?.name}
                  onClick={() => handleNavigation(item?.path)}
                  className="flex items-center w-full px-4 py-3 text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-muted/50 rounded-md transition-colors duration-normal"
                >
                  <Icon name={item?.icon} size={18} className="mr-3" />
                  {item?.name}
                </button>
              ))}
              
              <div className="pt-4 space-y-3 border-t border-border">
                <Button
                  variant="outline"
                  fullWidth
                  onClick={() => handleNavigation('/contact')}
                  className="border-primary/20 text-text-secondary hover:text-text-primary hover:border-primary/40"
                >
                  Get Started
                </Button>
                <Button
                  variant="default"
                  fullWidth
                  className="bg-gradient-primary hover:opacity-90 text-white shadow-glow"
                  onClick={() => handleNavigation('/services')}
                >
                  Experience AI Demo
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;