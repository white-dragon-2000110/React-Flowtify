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

  // Responsive grid classes based on gridCols
  const getGridClass = () => {
    switch (gridCols) {
      case 1:
        return "grid-cols-1";
      case 2:
        return "grid-cols-1 sm:grid-cols-2";
      case 3:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
      case 4:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
      default:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    }
  };

  const gridClass = getGridClass();

  // Check if we need to center the last card in a 2-column grid
  const shouldCenterLastCard = gridCols === 2 && features.length % 2 === 1;

  return (
    <div className={`responsive-px relative grid ${gridClass} responsive-gap-6 mb-8 ${className}`}>
      {features.map((feature, index) => {
        const isLastCard = index === features.length - 1;
        const cardClassName = shouldCenterLastCard && isLastCard 
          ? "sm:col-span-2 sm:justify-self-center sm:w-fit" 
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