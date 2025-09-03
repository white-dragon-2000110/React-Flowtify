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
  gridCols?: number;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ features, className = "", gridCols = 3 }) => {
  if (features.length === 0) {
    return null;
  }

  const gridClass = gridCols === 2 
    ? "grid-cols-1 md:grid-cols-2" 
    : "grid-cols-1 md:grid-cols-3";

  // Check if we need to center the last card in a 2-column grid
  const shouldCenterLastCard = gridCols === 2 && features.length % 2 === 1;

  return (
    <div className={`px-[150px] relative grid ${gridClass} gap-8 mb-8 ${className}`}>
      {features.map((feature, index) => {
        const isLastCard = index === features.length - 1;
        const cardClassName = shouldCenterLastCard && isLastCard 
          ? "md:col-span-2 md:justify-self-center md:w-fit" 
          : "";

        return (
          <div key={index} className={cardClassName}>
            <FeatureCard
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FeatureSection; 