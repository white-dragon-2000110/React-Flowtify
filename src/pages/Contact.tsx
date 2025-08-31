import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container-custom section-padding">
        <h1 className="text-center text-5xl md:text-6xl font-bold mb-16 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
          {t('contact.title')}
        </h1>
        <p className="text-center text-xl text-gray-300 mb-16 max-w-3xl mx-auto">
          {t('contact.description')}
        </p>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:pr-8"
          >
            <div className="sticky top-24">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Let's work together
              </h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Ready to transform your workflow? Get in touch and let's discuss how Flowtify can help your business grow.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    {['address', 'email', 'phone', 'support'].map((itemKey) => (
                      <div key={itemKey} className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-purple-300 text-lg">{t(`contact.contactInfo.items.${itemKey}.icon`)}</span>
                        </div>
                        <div>
                          <p className="font-medium text-white">{t(`contact.contactInfo.items.${itemKey}.label`)}</p>
                          <p className="text-gray-300">{t(`contact.contactInfo.items.${itemKey}.value`)}</p>
                          <p className="text-sm text-gray-400 mt-1">{t(`contact.contactInfo.items.${itemKey}.description`)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Office Hours */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Office Hours</h3>
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 space-y-3">
                    {['weekday', 'saturday', 'sunday'].map((dayKey, index) => (
                      <div key={index} className="flex justify-between items-center text-sm">
                        <span className="text-gray-300 font-medium">{t(`contact.officeHours.schedule.${dayKey}.day`)}</span>
                        <span className="text-white">{t(`contact.officeHours.schedule.${dayKey}.hours`)}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          t(`contact.officeHours.schedule.${dayKey}.status`) === 'Open' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                          t(`contact.officeHours.schedule.${dayKey}.status`) === 'Limited Support' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' :
                          'bg-gray-500/20 text-gray-300 border border-gray-500/30'
                        }`}>
                          {t(`contact.officeHours.schedule.${dayKey}.status`)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Social Media */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    {['twitter', 'linkedin', 'youtube'].map((platformKey) => (
                      <a
                        key={platformKey}
                        href={t(`contact.socialMedia.platforms.${platformKey}.url`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg flex items-center justify-center text-gray-300 hover:bg-purple-500/20 hover:text-purple-300 hover:border-purple-500/50 transition-all duration-200"
                      >
                        <span className="text-lg">{t(`contact.socialMedia.platforms.${platformKey}.icon`)}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ContactForm onSubmit={(formData) => {
              console.log('Contact form submitted:', formData);
              // Here you would typically send the data to your backend
              alert('Thank you for your message! We will get back to you soon.');
            }} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 