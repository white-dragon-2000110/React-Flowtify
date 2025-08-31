import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

interface CircleProps {
  children: React.ReactNode;
  className?: string;
}

const Circle = forwardRef<HTMLDivElement, CircleProps>(({ children, className = "" }, ref) => {
  return (
    <motion.div
      ref={ref}
      className={`z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 dark:bg-background p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] dark:hover:border-cyan-300 dark:hover:bg-[#051a22] transition-all duration-200 cursor-pointer ${className}`}
      whileHover={{ 
        scale: 1.05,
        borderColor: "#67e8f9" // cyan-300
      }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );
});

Circle.displayName = 'Circle';

export default Circle; 