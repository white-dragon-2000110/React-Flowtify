import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Accordion from '../components/Accordion';

const FAQs: React.FC = () => {
  const { t } = useTranslation();

  const faqCategories = [
    { key: 'general', faqs: ['what', 'who', 'different'] },
    { key: 'results', faqs: ['results', 'processes', 'ai_agent'] },
    { key: 'integrations', faqs: ['integrations', 'implementation', 'whatsapp_api'] },
    { key: 'getting_started', faqs: ['start', 'roi', 'process', 'demo'] },
    { key: 'pricing', faqs: ['cost', 'contracts'] },
    { key: 'support', faqs: ['team_replacement', 'languages', 'security', 'support_services', 'troubleshooting', 'migration', 'voice'] }
  ];

  const getAllFAQs = () => {
    const allFAQs: Array<{
      id: string;
      order: number;
      question: string;
      answer: string;
    }> = [];
    let orderCounter = 1;
    
    faqCategories.forEach(category => {
      category.faqs.forEach(faqKey => {
        allFAQs.push({
          id: `${category.key}-${faqKey}`,
          order: orderCounter++,
          question: t(`faqs.categories.${category.key}.faqs.${faqKey}.question`),
          answer: t(`faqs.categories.${category.key}.faqs.${faqKey}.answer`)
        });
      });
    });
    return allFAQs;
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="h-[150px] text-center text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
            {t('faqs.title')}
          </h1>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion
              items={getAllFAQs()}
              allowMultiple={false}
              className="shadow-lg"
            />
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-lg mt-8 text-center"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              {t('faqs.contact_info')}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FAQs; 