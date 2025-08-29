import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { currentLanguage, changeLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'es' : 'en';
    changeLanguage(newLanguage);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
    >
      <span className="text-sm font-medium">
        {currentLanguage === 'en' ? '🇺🇸' : '🇪🇸'}
      </span>
      <span className="text-sm font-medium">
        {t(`common.${currentLanguage === 'en' ? 'spanish' : 'english'}`)}
      </span>
    </button>
  );
};

export default LanguageSwitcher; 