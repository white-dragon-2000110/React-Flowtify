import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Privacy: React.FC = () => {
  const { t } = useTranslation();

  const privacySections = [
    'data-collection',
    'data-usage', 
    'data-protection',
    'user-rights',
    'international-transfers',
    'responsible-entity',
    'updates'
  ];

  const getPrivacySections = () => {
    return privacySections.map(sectionKey => ({
      key: sectionKey,
      title: t(`privacy.sections.${sectionKey}.title`),
      content: t(`privacy.sections.${sectionKey}.content`)
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
            <h1 className="h-[70px] text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
              {t('privacy.title')}
            </h1>
            
            {/* Download Button */}
            <motion.button
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/documents/Privacy Policy (English) (7).pdf';
                link.download = 'Flowtify_AI_Privacy_Policy.pdf';
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
          
          <p className="text-center text-xl text-gray-300 max-w-3xl mx-auto">
            {t('privacy.summary')}
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {/* Privacy Policy Sections */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="space-y-6">
              {getPrivacySections().map((section, index) => (
                <motion.div
                  key={section.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-lg"
                >
                  <h2 className="text-xl font-semibold mb-3 text-purple-300">
                    {section.title}
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    {section.content.split(/(\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b)/).map((part, index) => {
                      // Check if this part is an email address
                      if (part.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/)) {
                        return (
                          <a
                            key={index}
                            rel="noopener noreferrer"
                            className="text-purple-400 hover:text-purple-300 underline transition-colors duration-300 cursor-pointer"
                          >
                            {part}
                          </a>
                        );
                      }
                      return part;
                    })}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Last Updated */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-lg mb-8 text-center"
          >
            <p className="text-gray-300">
              <span className="font-semibold text-purple-300">Last update:</span> {t('privacy.lastUpdated')}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Privacy; 