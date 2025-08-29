import React from 'react';
import { useTranslation } from 'react-i18next';

const Terms: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container-custom section-padding">
        <h1 className="text-center text-5xl md:text-6xl font-bold mb-16 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
          {t('terms.title')}
        </h1>
        
        <div className="text-center mb-8">
          <p className="text-lg text-gray-300 mb-4">
            {t('terms.summary')}
          </p>
          <div className="text-sm text-gray-400">
            <span>Last updated: {t('terms.lastUpdated')}</span>
            <span className="mx-2">•</span>
            <span>Version: {t('terms.version')}</span>
          </div>
        </div>
        
        {/* PDF Embed */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-purple-300">{t('terms.pdfEmbed.title')}</h2>
            <p className="text-gray-300 mb-6">
              {t('terms.pdfEmbed.description')}
            </p>
            <div className="bg-gray-700/50 rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">📋</div>
              <p className="text-gray-300 mb-4">
                <strong>{t('terms.pdfEmbed.documentTitle')}</strong><br />
                {t('terms.pdfEmbed.documentSubtitle')}
              </p>
              <a
                href={t('terms.pdfUrl')}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg inline-flex items-center gap-2 transition-colors"
              >
                <span>📖</span>
                {t('terms.pdfEmbed.buttonText')}
              </a>
            </div>
          </div>
        </div>
        
        {/* Key Sections Summary */}
        <div className="max-w-4xl mx-auto space-y-6">
          {['acceptance', 'use-of-services', 'user-accounts', 'intellectual-property', 'limitation-of-liability', 'termination'].map((sectionKey) => (
            <div key={sectionKey} className="bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">{t(`terms.sections.${sectionKey}.title`)}</h2>
              <p className="text-gray-300">
                {t(`terms.sections.${sectionKey}.content`)}
              </p>
            </div>
          ))}
        </div>
        
        {/* Contact Information */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-purple-300">{t('terms.contactInfo.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="font-semibold text-white">Email</p>
                <p className="text-gray-300">{t('terms.contactInfo.email')}</p>
              </div>
              <div>
                <p className="font-semibold text-white">Address</p>
                <p className="text-gray-300">{t('terms.contactInfo.address')}</p>
              </div>
              <div>
                <p className="font-semibold text-white">Phone</p>
                <p className="text-gray-300">{t('terms.contactInfo.phone')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms; 