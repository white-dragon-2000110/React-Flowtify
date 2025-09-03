import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-1.5 sm:py-2 text-gray-300 hover:text-purple-400 hover:bg-purple-500/20 rounded-xl transition-all duration-300 group"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Globe Icon with Glow */}
        <div className="relative">
          <motion.div
            className="absolute inset-0 w-5 h-5 sm:w-6 sm:h-6 bg-purple-500/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <GlobeAltIcon className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 group-hover:text-purple-300 transition-colors duration-300" />
        </div>

        {/* Current Language */}
        <span className="text-xs sm:text-sm font-medium group-hover:text-purple-300 transition-colors duration-300">
          {currentLanguage.flag} {currentLanguage.code.toUpperCase()}
        </span>

        {/* Chevron Icon */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDownIcon className="w-3 h-3 sm:w-4 sm:h-4 group-hover:text-purple-300 transition-colors duration-300" />
        </motion.div>
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full right-0 mt-2 w-48 bg-gradient-to-br from-gray-800/95 via-gray-800/90 to-gray-900/95 backdrop-blur-xl border border-gray-700/30 rounded-2xl shadow-2xl shadow-purple-500/20 overflow-hidden z-50"
          >
            {/* Dropdown Background Glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-purple-500/5 rounded-2xl"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <div className="relative z-10 py-2">
              {languages.map((language, index) => (
                <motion.button
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-purple-500/20 transition-all duration-300 ${
                    language.code === currentLanguage.code
                      ? 'text-purple-300 bg-purple-500/10 border-r-2 border-purple-500'
                      : 'text-gray-300 hover:text-purple-200'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Language Flag */}
                  <span className="text-lg">{language.flag}</span>
                  
                  {/* Language Name */}
                  <span className="text-sm font-medium">{language.name}</span>
                  
                  {/* Current Language Indicator */}
                  {language.code === currentLanguage.code && (
                    <motion.div
                      className="ml-auto w-2 h-2 bg-purple-400 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Bottom Glow Line */}
            <motion.div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"
              initial={{ width: 0 }}
              animate={{ width: '75%' }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher; 