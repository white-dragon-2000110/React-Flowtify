import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-t border-gray-800/50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Particles */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
              style={{
                left: `${15 + (i * 8) % 85}%`,
                top: `${20 + (i * 10) % 80}%`,
                animationDelay: `${i * 0.3}s`
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                y: [0, -25, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div>

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-28 h-28 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.15, 0.1],
            rotate: [0, -90, -180, -270, -360]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Bottom Bar */}
        <motion.div
          className="py-4 sm:py-6 border-t border-gray-800/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                         <div className="flex flex-col items-center md:items-start space-y-2">
               <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
                 {t('common.copyright')}
               </p>
               <p className="text-gray-500 text-xs text-center md:text-left">
                 {t('common.location')}
               </p>
             </div>

            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-purple-400 transition-colors duration-300">
                {t('common.privacy')}
              </Link>
              <Link to="/terms" className="hover:text-purple-400 transition-colors duration-300">
                {t('common.terms')}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Glow Line */}
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"
        initial={{ width: 0 }}
        whileInView={{ width: '75%' }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      />
    </footer>
  );
};

export default Footer; 