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
      className={`bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 group hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/50 transition-all duration-300 ${className}`}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 rounded-lg hover:bg-purple-500/20 transition-colors"
          aria-label={isExpanded ? "Collapse setup steps" : "Expand setup steps"}
        >
          {isExpanded ? (
            <ChevronUpIcon className="w-5 h-5 text-purple-300" />
          ) : (
            <ChevronDownIcon className="w-5 h-5 text-purple-300" />
          )}
        </button>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 text-purple-300 group-hover:text-purple-200 transition-colors">
        {name}
      </h3>
      
      <p className="text-gray-300 mb-6 leading-relaxed">
        {description}
      </p>
      
      <div className="mb-6">
        <h4 className="font-semibold mb-3 text-purple-400 text-sm uppercase tracking-wide">
          Features
        </h4>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-gray-400 flex items-center">
              <span className="text-purple-400 mr-2 text-lg">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-6 overflow-hidden"
          >
            <h4 className="font-semibold mb-3 text-purple-400 text-sm uppercase tracking-wide">
              Setup Steps
            </h4>
            <ol className="space-y-2">
              {setupSteps.map((step, index) => (
                <li key={index} className="text-sm text-gray-400 flex items-start">
                  <span className="text-purple-400 mr-2 text-lg font-bold min-w-[20px]">
                    {index + 1}.
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        className="w-full px-6 py-3 border border-purple-400/50 text-purple-200 hover:bg-purple-500/20 hover:border-purple-400 rounded-lg transition-all duration-300 backdrop-blur-sm group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600"
        onClick={onConnect}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Connect
      </motion.button>
    </motion.div>
  );
};

export default IntegrationCard; 