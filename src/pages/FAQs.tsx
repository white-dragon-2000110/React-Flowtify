import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Accordion from '../components/Accordion';

const FAQs: React.FC = () => {
  const { t } = useTranslation();

  const faqCategories = [
    { key: 'general', faqs: ['what', 'how', 'benefits'] },
    { key: 'pricing', faqs: ['pricing', 'trial', 'cancellation'] },
    { key: 'support', faqs: ['support', 'training', 'onboarding'] },
    { key: 'technical', faqs: ['security', 'integrations', 'scalability'] }
  ];

  const getAllFAQs = () => {
    const allFAQs: Array<{
      id: string;
      question: string;
      answer: string;
    }> = [];
    faqCategories.forEach(category => {
      category.faqs.forEach(faqKey => {
        allFAQs.push({
          id: `${category.key}-${faqKey}`,
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
          <h1 className="text-center text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
            {t('faqs.title')}
          </h1>
          <p className="text-center text-xl text-gray-300 max-w-3xl mx-auto">
            {t('faqs.description')}
          </p>
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
        </div>
      </div>
    </div>
  );
};

export default FAQs; 