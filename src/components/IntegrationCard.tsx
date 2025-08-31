import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

interface IntegrationCardProps {
  name: string;
  icon: string;
  description: string;
  features: string[];
  setupSteps: string[];
  onConnect?: () => void;
  className?: string;
}

const IntegrationCard: React.FC<IntegrationCardProps> = ({
  name,
  icon,
  description,
  features,
  setupSteps,
  onConnect,
  className = ""
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className={`relative bg-gradient-to-br from-gray-800/90 via-gray-800/80 to-gray-900/90 backdrop-blur-xl border border-gray-700/30 rounded-3xl p-8 group hover:shadow-2xl hover:shadow-purple-500/30 hover:border-purple-500/50 transition-all duration-500 overflow-hidden ${className}`}
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated Background Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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

      {/* Floating Tech Particles */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
            style={{
              left: `${15 + (i * 12) % 80}%`,
              top: `${20 + (i * 10) % 70}%`,
              animationDelay: `${i * 0.4}s`
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              y: [0, -25, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: i * 0.3
            }}
          />
        ))}
      </motion.div>

      <div className="flex items-start justify-between mb-6">
        {/* Icon with Enhanced Glow */}
        <motion.div 
          className="relative text-6xl group-hover:scale-110 transition-transform duration-300"
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          {/* Icon Glow Effect */}
          <motion.div
            className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <div className="relative z-10">{icon}</div>
        </motion.div>

        {/* Expand/Collapse Button */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="relative p-3 rounded-2xl hover:bg-purple-500/20 transition-all duration-300 group-hover:bg-purple-500/30"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          aria-label={isExpanded ? "Collapse setup steps" : "Expand setup steps"}
        >
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isExpanded ? (
              <ChevronUpIcon className="w-5 h-5 text-purple-300 group-hover:text-purple-200 transition-colors duration-300" />
            ) : (
              <ChevronDownIcon className="w-5 h-5 text-purple-300 group-hover:text-purple-200 transition-colors duration-300" />
            )}
          </motion.div>
        </motion.button>
      </div>
      
      {/* Title with Gradient */}
      <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-300 via-blue-300 to-purple-300 bg-clip-text text-transparent group-hover:from-purple-200 group-hover:via-blue-200 group-hover:to-purple-200 transition-all duration-300">
        {name}
      </h3>
      
      {/* Description */}
      <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
        {description}
      </p>
      
      {/* Features with Enhanced Styling */}
      <div className="mb-6">
        <h4 className="font-semibold mb-3 text-purple-400 text-sm uppercase tracking-wide group-hover:text-purple-300 transition-colors duration-300">
          Features
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
      
      {/* Expandable Setup Steps */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="mb-6 overflow-hidden"
          >
            <h4 className="font-semibold mb-3 text-blue-400 text-sm uppercase tracking-wide group-hover:text-blue-300 transition-colors duration-300">
              Setup Steps
            </h4>
            <ol className="space-y-3">
              {setupSteps.map((step, index) => (
                <motion.li 
                  key={index} 
                  className="text-sm text-gray-400 flex items-start group-hover:text-gray-300 transition-colors duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <motion.span 
                    className="mr-3 text-blue-400 group-hover:text-blue-300 transition-colors duration-300 font-bold min-w-[20px]"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {index + 1}.
                  </motion.span>
                  {step}
                </motion.li>
              ))}
            </ol>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Enhanced Connect Button */}
      <motion.button
        className="relative w-full px-6 py-4 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 border border-blue-400/50 text-blue-200 hover:from-blue-500/30 hover:via-purple-500/30 hover:to-blue-500/30 hover:border-blue-400 rounded-2xl transition-all duration-300 backdrop-blur-sm group-hover:shadow-lg group-hover:shadow-blue-500/25 overflow-hidden"
        onClick={onConnect}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Button Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={{
            x: ['-100%', '100%']
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Button Text */}
        <span className="relative z-10 font-semibold group-hover:text-white transition-colors duration-300">
          Connect
        </span>
      </motion.button>

      {/* Bottom Glow Line */}
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-3/4 transition-all duration-500"
        whileHover={{ width: '75%' }}
      />
    </motion.div>
  );
};

export default IntegrationCard; 