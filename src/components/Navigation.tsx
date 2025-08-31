import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSwitcher from './LanguageSwitcher';

// Custom Dock Icon Component with Tooltip
interface DockIconProps {
  children: React.ReactNode;
  tooltip?: string;
  delay?: number;
}

const DockIcon: React.FC<DockIconProps> = ({ children, tooltip, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, delay }}
      whileHover={{
        scale: 1.1,
        y: -3,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Dock Hover Effect - Glow Ring */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        animate={{
          scale: isHovered ? [1, 1.2, 1] : 1,
          opacity: isHovered ? [0.3, 0.6, 0.3] : 0
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Dock Hover Effect - Inner Glow */}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Tooltip */}
      {tooltip && (
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-2 bg-gray-800/95 backdrop-blur-xl border border-gray-700/50 rounded-lg text-white text-sm font-medium whitespace-nowrap shadow-2xl shadow-purple-500/20 z-50"
            >
              {tooltip}
              {/* Tooltip Arrow */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800/95"></div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </motion.div>
  );
};

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
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/50"
    >
      {/* Animated Background Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0, 0.1, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Clickable to Home */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200"
          >
            <img
              src="/logo_h.png"
              alt="Flowtify"
              className="w-[250px] h-[250px] object-contain"
            />
          </button>

          {/* Desktop Navigation with Dock Effects */}
          <div className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item, index) => (
              <DockIcon key={item.path} tooltip={item.label} delay={index * 0.1}>
                {item.isHomeSection && item.sectionId ? (
                  <motion.button
                    onClick={() => scrollToSection(item.sectionId!)}
                    className={`relative text-sm font-medium transition-all duration-300 px-4 py-2 rounded-xl ${isActive(item.path)
                        ? 'text-purple-400 bg-purple-500/20 border border-purple-500/30'
                        : 'text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 border border-transparent'
                      }`}
                  >
                    {/* Active Indicator Glow */}
                    {isActive(item.path) && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl blur-sm"
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    )}

                    <span className="relative z-10">{item.label}</span>
                  </motion.button>
                ) : (
                  <Link
                    to={item.path}
                    className={`relative text-sm font-medium transition-all duration-300 px-4 py-2 rounded-xl ${isActive(item.path)
                        ? 'text-purple-400 bg-purple-500/20 border border-purple-500/30'
                        : 'text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 border border-transparent'
                      }`}
                  >
                    {/* Active Indicator Glow */}
                    {isActive(item.path) && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl blur-sm"
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    )}

                    <span className="relative z-10">{item.label}</span>
                  </Link>
                )}
              </DockIcon>
            ))}
          </div>

          {/* Right side - Language Switcher and Login with Dock Effects */}
          <div className="hidden md:flex items-center space-x-4">
            <DockIcon tooltip="Change Language" delay={0.1}>
              <LanguageSwitcher />
            </DockIcon>

            {/* Enhanced Login Button with Dock Effect */}
            <DockIcon tooltip="Login to Account" delay={0.1}>
              <Link
                to="/login"
                className="relative px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-xl hover:from-purple-600 hover:to-blue-600 transform transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/25 overflow-hidden group"
              >
                <span className="relative z-10">{t('common.login')}</span>
              </Link>
            </DockIcon>
          </div>

          {/* Enhanced Mobile menu button with Dock Effect */}
          <DockIcon tooltip="Toggle Menu" delay={0.2}>
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative p-3 rounded-xl text-gray-300 hover:text-purple-400 hover:bg-purple-500/20 transition-all duration-300 group"
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
            </motion.button>
          </DockIcon>
        </div>

        {/* Enhanced Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="md:hidden py-4 border-t border-gray-800/50 bg-gray-900/95 backdrop-blur-xl overflow-hidden"
            >
              <div className="flex flex-col space-y-4">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {item.isHomeSection && item.sectionId ? (
                      <motion.button
                        onClick={() => {
                          scrollToSection(item.sectionId!);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`relative w-full text-left text-sm font-medium transition-all duration-300 px-4 py-3 rounded-xl ${isActive(item.path)
                            ? 'text-purple-400 bg-purple-500/20 border border-purple-500/30'
                            : 'text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 border border-transparent'
                          }`}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {/* Active Indicator Glow */}
                        {isActive(item.path) && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl blur-sm"
                            animate={{
                              scale: [1, 1.05, 1],
                              opacity: [0.3, 0.5, 0.3]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                        )}

                        <span className="relative z-10">{item.label}</span>
                      </motion.button>
                    ) : (
                      <motion.div
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Link
                          to={item.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`relative block w-full text-left text-sm font-medium transition-all duration-300 px-4 py-3 rounded-xl ${isActive(item.path)
                              ? 'text-purple-400 bg-purple-500/20 border border-purple-500/30'
                              : 'text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 border border-transparent'
                            }`}
                        >
                          {/* Active Indicator Glow */}
                          {isActive(item.path) && (
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl blur-sm"
                              animate={{
                                scale: [1, 1.05, 1],
                                opacity: [0.3, 0.5, 0.3]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                          )}

                          <span className="relative z-10">{item.label}</span>
                        </Link>
                      </motion.div>
                    )}
                  </motion.div>
                ))}

                <div className="pt-4 border-t border-gray-800/50 px-4">
                  <LanguageSwitcher />
                </div>

                <div className="px-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to="/login"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="relative w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300 text-center overflow-hidden group"
                    >
                      {/* Button Glow Effect */}


                      <span className="relative z-10">{t('common.login')}</span>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation; 