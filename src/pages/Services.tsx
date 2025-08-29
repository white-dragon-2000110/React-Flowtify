import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';

const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      key: 'workflow',
      icon: '⚡',
      title: t('services.workflow.title'),
      description: t('services.workflow.description'),
      features: t('services.workflow.features', { returnObjects: true }) as string[],
      ctaText: t('common.learnMore')
    },
    {
      key: 'ai',
      icon: '🧠',
      title: t('services.ai.title'),
      description: t('services.ai.description'),
      features: t('services.ai.features', { returnObjects: true }) as string[],
      ctaText: t('common.learnMore')
    },
    {
      key: 'integration',
      icon: '🔗',
      title: t('services.integration.title'),
      description: t('services.integration.description'),
      features: t('services.integration.features', { returnObjects: true }) as string[],
      ctaText: t('common.learnMore')
    },
    {
      key: 'consulting',
      icon: '💼',
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      features: t('services.consulting.features', { returnObjects: true }) as string[],
      ctaText: t('common.learnMore')
    }
  ];

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
            {t('services.title')}
          </h1>
          <p className="text-center text-xl text-gray-300 max-w-3xl mx-auto">
            {t('services.description')}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                ctaText={service.ctaText}
                onCtaClick={() => console.log(`Learn more about ${service.key}`)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services; 