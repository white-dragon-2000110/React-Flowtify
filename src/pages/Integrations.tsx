import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import IntegrationCard from '../components/IntegrationCard';

const Integrations: React.FC = () => {
  const { t } = useTranslation();

  const categories = [
    { key: 'communication', integrations: ['slack', 'teams'] },
    { key: 'productivity', integrations: ['notion', 'asana'] },
    { key: 'automation', integrations: ['zapier', 'ifttt'] },
    { key: 'business', integrations: ['salesforce', 'hubspot'] }
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
            {t('integrations.title')}
          </h1>
          <p className="text-center text-xl text-gray-300 max-w-3xl mx-auto">
            {t('integrations.description')}
          </p>
        </motion.div>
        
        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category.key}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-purple-300">
              {t(`integrations.categories.${category.key}.name`)}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.integrations.map((integrationKey, integrationIndex) => (
                <motion.div
                  key={integrationKey}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (integrationIndex * 0.1) }}
                >
                  <IntegrationCard
                    name={t(`integrations.categories.${category.key}.integrations.${integrationKey}.name`)}
                    icon={t(`integrations.categories.${category.key}.integrations.${integrationKey}.icon`)}
                    description={t(`integrations.categories.${category.key}.integrations.${integrationKey}.description`)}
                    features={t(`integrations.categories.${category.key}.integrations.${integrationKey}.features`, { returnObjects: true }) as string[]}
                    setupSteps={t(`integrations.categories.${category.key}.integrations.${integrationKey}.setupSteps`, { returnObjects: true }) as string[]}
                    onConnect={() => console.log(`Connect to ${integrationKey}`)}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Integrations; 