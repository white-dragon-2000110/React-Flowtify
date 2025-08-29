import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface AccordionItemProps {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  id,
  question,
  answer,
  isOpen,
  onToggle
}) => {
  const headerRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        onToggle();
        break;
      case 'ArrowDown':
        e.preventDefault();
        if (!isOpen) {
          onToggle();
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (isOpen) {
          onToggle();
        }
        break;
    }
  };

  return (
    <div className="border-b border-gray-700/50 last:border-b-0">
      <button
        ref={headerRef}
        id={`accordion-header-${id}`}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${id}`}
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        className="w-full px-6 py-4 text-left hover:bg-purple-500/10 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset transition-colors"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white pr-4">
            {question}
          </h3>
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
            ref={contentRef}
            id={`accordion-content-${id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4">
              <p className="text-gray-300 leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface AccordionProps {
  items: Array<{
    id: string;
    question: string;
    answer: string;
  }>;
  allowMultiple?: boolean;
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  className = ""
}) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenItems(prev => {
        const newSet = new Set<string>(prev);
        if (newSet.has(id)) {
          newSet.delete(id);
        } else {
          newSet.add(id);
        }
        return newSet;
      });
    } else {
      setOpenItems(prev => {
        const newSet = new Set<string>();
        if (!prev.has(id)) {
          newSet.add(id);
        }
        return newSet;
      });
    }
  };

  return (
    <div className={`bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-lg ${className}`}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          question={item.question}
          answer={item.answer}
          isOpen={openItems.has(item.id)}
          onToggle={() => toggleItem(item.id)}
        />
      ))}
    </div>
  );
};

export default Accordion; 