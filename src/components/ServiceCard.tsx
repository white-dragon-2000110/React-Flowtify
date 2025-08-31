import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: string | React.ReactNode;
  title: string;
  description: string;
  features?: string[];
  ctaText?: string;
  onCtaClick?: () => void;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features,
  ctaText = "Learn More",
  onCtaClick,
  className = ""
}) => {
  return (
    <motion.div
      className={`relative bg-gradient-to-br from-gray-800/90 via-gray-800/80 to-gray-900/90 backdrop-blur-xl border border-gray-700/30 rounded-2xl p-5 group hover:scale-105 transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/30 flex flex-col h-full overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
    >
      {/* Animated Background Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0, 0.1, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Floating Particles */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/40 rounded-full"
            style={{
              left: `${20 + (i * 15) % 70}%`,
              top: `${25 + (i * 12) % 70}%`,
              animationDelay: `${i * 0.3}s`
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.2
            }}
          />
        ))}
      </motion.div>

      {/* Icon Container with Glow */}
      <motion.div 
        className="relative mb-4 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 w-14 h-14 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="relative z-10 w-12 h-12 text-purple-400 group-hover:text-purple-300 transition-colors duration-300 flex items-center justify-center">
          {typeof icon === 'string' ? (
            <span className="text-3xl">{icon}</span>
          ) : (
            icon
          )}
        </div>
      </motion.div>
      
      {/* Title with Gradient */}
      <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-300 via-blue-300 to-purple-300 bg-clip-text text-transparent group-hover:from-purple-200 group-hover:via-blue-200 group-hover:to-purple-200 transition-all duration-300">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-gray-300 mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
        {description}
      </p>
      
      {/* Features with Enhanced Styling */}
      {features && features.length > 0 && (
        <div className="mb-4">
          <h4 className="font-semibold mb-3 text-purple-400 text-sm uppercase tracking-wide group-hover:text-purple-300 transition-colors duration-300">
            Key Features
          </h4>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <motion.li 
                key={index} 
                className="text-sm text-gray-400 flex items-center group-hover:text-gray-300 transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <motion.span 
                  className="mr-3 text-purple-400 group-hover:text-purple-300 transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  ✓
                </motion.span>
                {feature}
              </motion.li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Spacer to push button to bottom */}
      <div className="flex-grow" />
      
      {/* Enhanced CTA Button */}
      <motion.button
        className="relative w-full px-6 py-4 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 border border-purple-400/50 text-purple-200 hover:from-purple-500/30 hover:via-blue-500/30 hover:to-purple-500/30 hover:border-purple-400 rounded-2xl transition-all duration-300 backdrop-blur-sm group-hover:shadow-lg group-hover:shadow-purple-500/25 overflow-hidden"
        onClick={onCtaClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Button Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={{
            x: ['-100%', '100%']
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Button Text */}
        <span className="relative z-10 font-semibold group-hover:text-white transition-colors duration-300">
          {ctaText}
        </span>
      </motion.button>
      
      {/* Bottom Glow Line */}
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-3/4 transition-all duration-500"
        whileHover={{ width: '75%' }}
      />
    </motion.div>
  );
};

export default ServiceCard; 