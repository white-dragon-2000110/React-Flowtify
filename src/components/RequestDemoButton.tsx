import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RequestDemoButtonProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

const RequestDemoButton: React.FC<RequestDemoButtonProps> = ({ 
  size = 'md', 
  className = "",
  onClick 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    sm: 'px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm',
    md: 'px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base',
    lg: 'px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg'
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Navigate to Calendly meeting
      window.open('https://calendly.com/flowtifyai-info/meeting-1-1', '_blank');
    }
  };

  return (
    <motion.button
      className={`relative ${sizeClasses[size]} bg-transparent border-2 border-white text-white font-semibold rounded-2xl hover:bg-white/10 transform transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-white/25 overflow-hidden group ${className}`}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ 
        scale: 1.05,
        y: -2
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Animated Background Glow */}
      <motion.div
        className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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

      {/* Button Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        animate={{
          x: ['-100%', '100%']
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Floating Particles */}
      <AnimatePresence>
        {isHovered && (
          <>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/60 rounded-full"
                style={{
                  left: `${20 + (i * 15) % 70}%`,
                  top: `${25 + (i * 10) % 70}%`,
                }}
                initial={{ opacity: 0, scale: 0, y: 0 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  y: [0, -20, 0]
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  duration: 2,
                  delay: i * 0.1
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Button Text */}
      <span className="relative z-10 font-semibold group-hover:text-white transition-colors duration-300">
        Request Demo
      </span>

      {/* Bottom Glow Line */}
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white group-hover:w-3/4 transition-all duration-500"
        whileHover={{ width: '75%' }}
      />
    </motion.button>
  );
};

export default RequestDemoButton; 