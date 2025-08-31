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
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Default behavior - scroll to contact section
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const headerHeight = 64;
        const elementPosition = contactSection.offsetTop - headerHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <motion.button
      className={`relative ${sizeClasses[size]} bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-2xl hover:from-purple-700 hover:to-blue-700 transform transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/25 overflow-hidden group ${className}`}
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
        className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
        className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-3/4 transition-all duration-500"
        whileHover={{ width: '75%' }}
      />
    </motion.button>
  );
};

export default RequestDemoButton; 