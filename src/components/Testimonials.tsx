import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Testimonials: React.FC = () => {
  const { t } = useTranslation();



  return (
    <section className="py-20 relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Success Icons */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl opacity-20"
              style={{
                left: `${15 + (i * 10) % 80}%`,
                top: `${20 + (i * 12) % 80}%`,
                animationDelay: `${i * 0.5}s`
              }}
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [0.8, 1.2, 0.8],
                y: [0, -20, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: i * 0.3
              }}
            >
              {['⭐', '🎯', '🏆', '💎', '🚀', '✨', '🌟', '💫'][i]}
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-yellow-500/15 to-orange-500/15 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-28 h-28 bg-gradient-to-br from-green-500/15 to-emerald-500/15 rounded-full blur-xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.15, 0.25, 0.15],
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent h-[80px]">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials; 