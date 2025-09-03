import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormProps {
  onSubmit: (formData: ContactFormData) => void;
  className?: string;
}

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit, className = "" }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      await onSubmit(formData);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className={`relative bg-gradient-to-br from-gray-800/90 via-gray-800/80 to-gray-900/90 backdrop-blur-xl border border-gray-700/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
    >
      {/* Animated Background Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-purple-500/5 rounded-2xl sm:rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500"
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

      <div className="relative z-10">
        <motion.h3 
          className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-300 via-blue-300 to-purple-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Send us a Message
        </motion.h3>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {/* Name Field */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
              Name
            </label>
            <motion.input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className={`w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-700/50 border rounded-xl sm:rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 text-sm sm:text-base ${
                errors.name 
                  ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500' 
                  : 'border-gray-600/50 focus:ring-purple-500/50 focus:border-purple-500'
              }`}
              placeholder="Your name"
              whileFocus={{ scale: 1.02 }}
            />
            
            {errors.name && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-xs sm:text-sm text-red-400"
              >
                {errors.name}
              </motion.div>
            )}
          </motion.div>
          
          {/* Email Field */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <motion.input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className={`w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-700/50 border rounded-xl sm:rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 text-sm sm:text-base ${
                errors.email 
                  ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500' 
                  : 'border-gray-600/50 focus:ring-purple-500/50 focus:border-purple-500'
              }`}
              placeholder="your.email@example.com"
              whileFocus={{ scale: 1.02 }}
            />
            
            {errors.email && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-xs sm:text-sm text-red-400"
              >
                {errors.email}
              </motion.div>
            )}
          </motion.div>
          
          {/* Subject Field */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
              Subject
            </label>
            <motion.input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={(e) => handleChange('subject', e.target.value)}
              className={`w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-700/50 border rounded-xl sm:rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 text-sm sm:text-base ${
                errors.subject 
                  ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500' 
                  : 'border-gray-600/50 focus:ring-purple-500/50 focus:border-purple-500'
              }`}
              placeholder="How can we help?"
              whileFocus={{ scale: 1.02 }}
            />
            
            {errors.subject && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-xs sm:text-sm text-red-400"
              >
                {errors.subject}
              </motion.div>
            )}
          </motion.div>
          
          {/* Message Field */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <motion.textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              className={`w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-700/50 border rounded-xl sm:rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 resize-none text-sm sm:text-base ${
                errors.message 
                  ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500' 
                  : 'border-gray-600/50 focus:ring-purple-500/50 focus:border-purple-500'
              }`}
              placeholder="Tell us about your project..."
              whileFocus={{ scale: 1.02 }}
            />
            
            {errors.message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-xs sm:text-sm text-red-400"
              >
                {errors.message}
              </motion.div>
            )}
          </motion.div>
          
          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="relative w-full px-4 py-3 sm:px-6 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl sm:rounded-2xl hover:from-purple-700 hover:to-blue-700 transform transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/25 overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
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
            
            <span className="relative z-10 font-semibold">
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </span>
          </motion.button>
        </form>

        {/* Bottom Glow Line */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 hover:w-3/4 transition-all duration-500"
          whileHover={{ width: '75%' }}
        />
      </div>
    </motion.div>
  );
};

export default ContactForm; 