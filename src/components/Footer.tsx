import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Workflow Automation", href: '/services' },
        { name: "AI Solutions", href: '/services' },
        { name: "Integration Services", href: '/services' },
        { name: "Consulting", href: '/services' }
      ]
    },
    {
      title: "Integrations",
      links: [
        { name: "Popular Tools", href: '/integrations' },
        { name: "API Access", href: '/integrations' },
        { name: "Custom Connectors", href: '/integrations' },
        { name: "Webhooks", href: '/integrations' }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "FAQs", href: '/faqs' },
        { name: "Contact Us", href: '/contact' },
        { name: "Documentation", href: '/faqs' },
        { name: "Help Center", href: '/contact' }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: '/services' },
        { name: "Privacy Policy", href: '/privacy' },
        { name: "Terms & Conditions", href: '/terms' },
        { name: "Contact", href: '/contact' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'Facebook', href: '#', icon: '📘' },
    { name: 'Instagram', href: '#', icon: '📷' },
    { name: 'WhatsApp', href: '#', icon: '💬' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-t border-gray-800/50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Particles */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
              style={{
                left: `${15 + (i * 8) % 85}%`,
                top: `${20 + (i * 10) % 80}%`,
                animationDelay: `${i * 0.3}s`
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                y: [0, -25, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div>

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-28 h-28 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.15, 0.1],
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
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Logo with Glow */}
                <div className="relative mb-6">
                  <motion.div
                    className="absolute inset-0 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0, 0.2, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <img 
                    src="/logo_v.png" 
                    alt="Flowtify" 
                    className="relative z-10 w-24 h-24 object-contain hover:scale-105 transition-transform duration-300" 
                  />
                </div>

                <h3 className="text-xl font-bold text-white mb-4">
                  Flowtify
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Transform your business processes with AI-powered workflow automation. Boost productivity, reduce errors, and focus on what matters most.
                </p>

                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 rounded-xl flex items-center justify-center text-gray-300 hover:text-purple-400 hover:bg-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {/* Social Icon Glow */}
                      <motion.div
                        className="absolute inset-0 bg-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0, 0.2, 0]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      
                      <span className="relative z-10 text-lg group-hover:scale-110 transition-transform duration-300">
                        {social.icon}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-white mb-4 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                  {section.title}
                </h4>
                
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                      viewport={{ once: true }}
                    >
                      <Link
                        to={link.href}
                        className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="py-8 border-t border-gray-800/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
              Stay Updated
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get the latest updates on new features, integrations, and workflow automation tips.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <motion.input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300"
                whileFocus={{ scale: 1.02 }}
              />
              
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-2xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/25"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="py-6 border-t border-gray-800/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Flowtify. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-purple-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-purple-400 transition-colors duration-300">
                Terms & Conditions
              </Link>
              <Link to="/contact" className="hover:text-purple-400 transition-colors duration-300">
                Contact
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Glow Line */}
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"
        initial={{ width: 0 }}
        whileInView={{ width: '75%' }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      />
    </footer>
  );
};

export default Footer; 