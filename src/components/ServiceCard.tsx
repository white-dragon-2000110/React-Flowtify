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
      className={`bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 group hover:scale-110 transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 flex flex-col h-full ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 0.8, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
        {typeof icon === 'string' ? (
          <span>{icon}</span>
        ) : (
          <div className="w-16 h-16 text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
            {icon}
          </div>
        )}
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 text-purple-300 group-hover:text-purple-200 transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-300 mb-6 leading-relaxed">
        {description}
      </p>
      
      {features && features.length > 0 && (
        <div className="mb-6">
          <h4 className="font-semibold mb-3 text-purple-400 text-sm uppercase tracking-wide">
            Key Features
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
      )}
      
      {/* Spacer to push button to bottom */}
      <div className="flex-grow" />
      
      <motion.button
        className="w-full px-6 py-3 border border-purple-400/50 text-purple-200 hover:bg-purple-500/20 hover:border-purple-400 rounded-lg transition-all duration-300 backdrop-blur-sm group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600"
        onClick={onCtaClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {ctaText}
      </motion.button>
    </motion.div>
  );
};

export default ServiceCard; 