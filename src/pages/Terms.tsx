import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SectionAccordion from '../components/SectionAccordion';

const Terms: React.FC = () => {
  const { t } = useTranslation();

  const termsSections = [
    'permitted-use',
    'intellectual',
    'services',
    'liability',
    'payments',
    'data-privacy',
    'modifications',
    'jurisdiction',
    'contact',
  ];

  const getTermsSections = () => {
    return termsSections.map(sectionKey => ({
      key: sectionKey,
      title: t(`terms.sections.${sectionKey}.title`),
      content: t(`terms.sections.${sectionKey}.content`)
    }));
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-6 mb-6">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
              {t('terms.title')}
            </h1>
            
            {/* Download Button */}
            <motion.button
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/documents/Terms & Conditions (English).pdf';
                link.download = 'Flowtify_AI_Terms_and_Conditions.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="relative group p-3 bg-red-600 hover:bg-red-700 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-red-500/25"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Animated Download Icon */}
              <motion.svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                animate={{
                  y: [0, -2, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </motion.svg>
              
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-red-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0, 0.3, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.button>
          </div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {/* Acceptance Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-lg text-center">
              <p className="text-lg text-gray-300 leading-relaxed">
                Access and use of the Flowtify AI website (
                <a
                  href="https://flowtifyai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 underline transition-colors duration-300"
                >
                  https://flowtifyai.com
                </a>
                ) implies full acceptance of these Terms & Conditions.
              </p>
            </div>
          </motion.div>
          
          {/* Key Sections */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <SectionAccordion sections={getTermsSections()} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Terms; 