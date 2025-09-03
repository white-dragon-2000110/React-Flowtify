import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="flex items-start space-x-4 w-full"
    >
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-gray-800/60 rounded-lg flex items-center justify-center border border-gray-700/30">
          {icon}
        </div>
      </div>
      <div className="flex-1 text-left min-w-0">
        <h3 className="text-lg font-semibold mb-2 text-white">
          {title}
        </h3>
        <p className="text-sm text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default FeatureCard; 