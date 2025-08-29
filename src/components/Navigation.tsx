import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';


const Navigation: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { path: '/', label: t('common.home'), isHomeSection: true, sectionId: 'home' },
    { path: '/services', label: t('common.services'), isHomeSection: true, sectionId: 'services' },
    { path: '/integrations', label: t('common.integrations'), isHomeSection: true, sectionId: 'integrations' },
    { path: '/faqs', label: t('common.faqs'), isHomeSection: true, sectionId: 'faqs' },
    { path: '/contact', label: t('common.contact'), isHomeSection: true, sectionId: 'contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 64; // h-16 = 64px
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // If not on home page, navigate to home and then scroll
      window.location.href = `/#${sectionId}`;
    }
  };

  // Handle hash navigation when page loads
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const sectionId = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerHeight = 64; // h-16 = 64px
          const elementPosition = element.offsetTop - headerHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2"
          >
            <img src="/logo_h.png" alt="Flowtify" className="w-[250px] h-[250px] object-contain" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              item.isHomeSection && item.sectionId ? (
                <button
                  key={item.path}
                  onClick={() => scrollToSection(item.sectionId!)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-purple-400'
                      : 'text-gray-300 hover:text-purple-400'
                  }`}
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-purple-400'
                      : 'text-gray-300 hover:text-purple-400'
                  }`}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>

          {/* Right side - Language Switcher and Login */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <Link
              to="/login"
              className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {t('common.login')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-purple-400 hover:bg-gray-800 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800 bg-gray-900/95">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                item.isHomeSection && item.sectionId ? (
                  <button
                    key={item.path}
                    onClick={() => {
                      scrollToSection(item.sectionId!);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-sm font-medium transition-colors duration-200 px-4 py-2 rounded-lg text-left ${
                      isActive(item.path)
                        ? 'text-purple-400 bg-gray-800'
                        : 'text-gray-300 hover:text-purple-400 hover:bg-gray-800'
                    }`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-sm font-medium transition-colors duration-200 px-4 py-2 rounded-lg ${
                      isActive(item.path)
                        ? 'text-purple-400 bg-gray-800'
                        : 'text-gray-300 hover:text-purple-400 hover:bg-gray-800'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              ))}
              <div className="pt-4 border-t border-gray-800 px-4">
                <LanguageSwitcher />
              </div>
              <div className="px-4">
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 text-center"
                >
                  {t('common.login')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation; 