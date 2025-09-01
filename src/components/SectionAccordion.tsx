import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface SectionAccordionProps {
  sections: Array<{
    key: string;
    title: string;
    content: string;
  }>;
  className?: string;
}

const SectionAccordion: React.FC<SectionAccordionProps> = ({
  sections,
  className = ""
}) => {
  const [openSections, setOpenSections] = useState<Set<string>>(new Set());

  const toggleSection = (key: string) => {
    setOpenSections(prev => {
      const newSet = new Set<string>(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {sections.map((section) => {
        const isOpen = openSections.has(section.key);
        
        return (
          <motion.div
            key={section.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-lg overflow-hidden"
          >
            <button
              onClick={() => toggleSection(section.key)}
              className="w-full px-6 py-4 text-left hover:bg-purple-500/10 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset transition-colors"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-purple-300 pr-4">
                  {section.title}
                </h2>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDownIcon className="w-5 h-5 text-purple-300" />
                </motion.div>
              </div>
            </button>
            
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed">
                      {section.content.split(/(\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b)/).map((part, index) => {
                        // Check if this part is an email address
                        if (part.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/)) {
                          return (
                                                         <a
                               key={index}
                               rel="noopener noreferrer"
                               className="text-purple-400 hover:text-purple-300 underline transition-colors duration-300"
                             >
                               {part}
                             </a>
                          );
                        }
                        return part;
                      })}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
};

export default SectionAccordion; 