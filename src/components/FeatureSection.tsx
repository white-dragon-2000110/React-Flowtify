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
  if (features.length !== 4) {
    console.warn('FeatureSection expects exactly 4 features for 2x2 grid layout');
    return null;
  }

  return (
    <div className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 ${className}`}>
      {/* Top Row */}
      <div className="space-y-4">
        <FeatureCard
          icon={features[0].icon}
          title={features[0].title}
          description={features[0].description}
          delay={0}
        />
        <FeatureCard
          icon={features[2].icon}
          title={features[2].title}
          description={features[2].description}
          delay={0.2}
        />
      </div>

      {/* Vertical Separator Line */}
      <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-px h-32 bg-gray-600/60"></div>
      </div>

      {/* Right Column */}
      <div className="space-y-4">
        <FeatureCard
          icon={features[1].icon}
          title={features[1].title}
          description={features[1].description}
          delay={0.1}
        />
        <FeatureCard
          icon={features[3].icon}
          title={features[3].title}
          description={features[3].description}
          delay={0.3}
        />
      </div>
    </div>
  );
};

export default FeatureSection; 