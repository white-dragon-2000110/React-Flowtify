import React from 'react';
import FeatureCard from './FeatureCard';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeatureSectionProps {
  features: Feature[];
  className?: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ features, className = "" }) => {
  if (features.length === 0) {
    return null;
  }

  return (
    <div className={`relative grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 ${className}`}>
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          delay={index * 0.1}
        />
      ))}
    </div>
  );
};

export default FeatureSection; 