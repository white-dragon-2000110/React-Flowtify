import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      quote: t('testimonials.testimonial1.quote'),
      name: t('testimonials.testimonial1.name'),
      role: t('testimonials.testimonial1.role'),
      company: t('testimonials.testimonial1.company'),
      avatar: '/svg/testimonial-executive.svg'
    },
    {
      id: '2',
      quote: t('testimonials.testimonial2.quote'),
      name: t('testimonials.testimonial2.name'),
      role: t('testimonials.testimonial2.role'),
      company: t('testimonials.testimonial2.company'),
      avatar: '/svg/testimonial-female-executive.svg'
    },
    {
      id: '3',
      quote: t('testimonials.testimonial3.quote'),
      name: t('testimonials.testimonial3.name'),
      role: t('testimonials.testimonial3.role'),
      company: t('testimonials.testimonial3.company'),
      avatar: '/svg/testimonial-tech-professional.svg'
    }
  ];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Success Icons */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl opacity-20"
              style={{
                left: `${15 + (i * 10) % 80}%`,
                top: `${20 + (i * 12) % 80}%`,
                animationDelay: `${i * 0.5}s`
              }}
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [0.8, 1.2, 0.8],
                y: [0, -20, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: i * 0.3
              }}
            >
              {['⭐', '🎯', '🏆', '💎', '🚀', '✨', '🌟', '💫'][i]}
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-yellow-500/15 to-orange-500/15 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-28 h-28 bg-gradient-to-br from-green-500/15 to-emerald-500/15 rounded-full blur-xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.15, 0.25, 0.15],
            rotate: [0, -90, -180, -270, -360]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-yellow-300 to-blue-300 bg-clip-text text-transparent h-[60px]">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        <div 
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Testimonial Cards */}
          <div className="relative h-80">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.9 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div className="relative bg-gradient-to-br from-gray-800/90 via-gray-800/80 to-gray-900/90 backdrop-blur-xl border border-gray-700/30 rounded-3xl p-8 text-center h-full flex flex-col justify-center overflow-hidden group hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500">
                  {/* Animated Background Glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-yellow-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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

                  {/* Floating Particles */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  >
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-yellow-400/40 rounded-full"
                        style={{
                          left: `${20 + (i * 15) % 70}%`,
                          top: `${25 + (i * 12) % 70}%`,
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

                  {/* Avatar with Enhanced Glow */}
                  <motion.div 
                    className="mb-6 flex justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative">
                      {/* Avatar Glow Effect */}
                      <motion.div
                        className="absolute inset-0 w-28 h-28 bg-gradient-to-r from-purple-500/20 via-yellow-500/20 to-blue-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"
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
                      
                      <img 
                        src={testimonials[currentIndex].avatar} 
                        alt={`${testimonials[currentIndex].name} avatar`}
                        className="relative z-10 w-24 h-24 object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </motion.div>

                  {/* Quote with Enhanced Typography */}
                  <motion.blockquote 
                    className="text-xl text-gray-200 mb-8 italic leading-relaxed group-hover:text-gray-100 transition-colors duration-300 relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {/* Quote Marks */}
                    <motion.span
                      className="absolute -top-2 -left-2 text-4xl text-purple-400/50 group-hover:text-purple-300/70 transition-colors duration-300"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      "
                    </motion.span>
                    
                    <span className="relative z-10 px-8">
                      {testimonials[currentIndex].quote}
                    </span>
                    
                    <motion.span
                      className="absolute -bottom-2 -right-2 text-4xl text-blue-400/50 group-hover:text-blue-300/70 transition-colors duration-300"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      "
                    </motion.span>
                  </motion.blockquote>

                  {/* Author Information with Gradient */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <p className="font-bold text-lg bg-gradient-to-r from-purple-300 via-yellow-300 to-blue-300 bg-clip-text text-transparent group-hover:from-purple-200 group-hover:via-yellow-200 group-hover:to-blue-200 transition-all duration-300">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                    </p>
                  </motion.div>

                  {/* Bottom Glow Line */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 via-yellow-500 to-blue-500 group-hover:w-3/4 transition-all duration-500"
                    whileHover={{ width: '75%' }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Enhanced Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 scale-125' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to testimonial ${index + 1}`}
              >
                {index === currentIndex && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 