import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface RequestDemoButtonProps {
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const RequestDemoButton: React.FC<RequestDemoButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = ""
}) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Focus trap for modal
  useEffect(() => {
    if (isModalOpen) {
      const modal = document.getElementById('calendly-modal');
      if (modal) {
        const focusableElements = modal.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        const handleTabKey = (e: KeyboardEvent) => {
          if (e.key === 'Tab') {
            if (e.shiftKey) {
              if (document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
              }
            } else {
              if (document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
              }
            }
          }
        };

        const handleEscape = (e: KeyboardEvent) => {
          if (e.key === 'Escape') {
            setIsModalOpen(false);
          }
        };

        document.addEventListener('keydown', handleTabKey);
        document.addEventListener('keydown', handleEscape);

        // Focus first element
        firstElement?.focus();

        return () => {
          document.removeEventListener('keydown', handleTabKey);
          document.removeEventListener('keydown', handleEscape);
        };
      }
    }
  }, [isModalOpen]);

  const buttonClasses = {
    primary: 'btn-primary',
    outline: 'btn-outline'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <motion.button
        className={`${buttonClasses[variant]} ${sizeClasses[size]} ${className}`}
        onClick={openModal}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {t('common.requestDemo')}
      </motion.button>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              id="calendly-modal"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl w-full max-w-4xl h-[600px] max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-700 bg-gray-800/50">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {t('demo.title')}
                </h2>
                <button
                  onClick={closeModal}
                  className="p-2 rounded-lg hover:bg-gray-700 text-gray-300 hover:text-white transition-colors duration-200"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Calendly Embed */}
              <div className="flex-1 h-full bg-gray-900">
                <iframe
                  src="https://calendly.com/flowtify/demo"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Schedule a demo with Flowtify"
                  className="min-h-[500px]"
                />
              </div>

              {/* Fallback for iframe issues */}
              <div className="p-6 text-center border-t border-gray-700 bg-gray-800/50">
                <p className="text-gray-300 mb-4">
                  {t('demo.fallbackText')}
                </p>
                <a
                  href="https://calendly.com/flowtify/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                >
                  {t('demo.openCalendly')}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default RequestDemoButton; 