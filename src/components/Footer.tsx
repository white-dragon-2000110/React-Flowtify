import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 64; // h-16 = 64px
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const footerLinks = {
    product: [
      { sectionId: 'services', label: t('common.services') },
      { sectionId: 'integrations', label: t('common.integrations') },
      { sectionId: 'faqs', label: t('common.faqs') },
    ],
    company: [
      { sectionId: 'contact', label: t('common.contact') },
    ],
    legal: [
      { sectionId: 'privacy', label: t('common.privacy') },
      { sectionId: 'terms', label: t('common.terms') },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo_h.png" alt="Flowtify" className="absolute w-[300px] h-[300px] object-contain" />
            </div>
            <p className="text-gray-300 mb-6 max-w-md mt-16">
              Streamline your workflow with intelligent automation. Boost productivity, 
              reduce errors, and focus on what matters most.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                <span className="sr-only">LinkedIn</span>
                <img src="/svg/linkedin-icon.svg" alt="LinkedIn" className="w-6 h-6" />
              </a>
              <a href="https://wa.me/19738869963" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                <span className="sr-only">WhatsApp</span>
                <img src="/svg/whatsapp-icon.svg" alt="WhatsApp" className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/share/1Kws4Vzbxt/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                <span className="sr-only">Facebook</span>
                <img src="/svg/facebook-icon.svg" alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/flowtify.ai/reels/?next=%2F" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                <span className="sr-only">Instagram</span>
                <img src="/svg/instagram-icon.svg" alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="https://calendly.com/flowtifyai-info/meeting-1-1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                <span className="sr-only">Calendly</span>
                <img src="/svg/calendly-icon.svg" alt="Calendly" className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.sectionId}>
                  <button
                    onClick={() => scrollToSection(link.sectionId)}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.sectionId}>
                  <button
                    onClick={() => scrollToSection(link.sectionId)}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.sectionId}>
                  <button
                    onClick={() => scrollToSection(link.sectionId)}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Flowtify. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">
                Made with ❤️ for better workflows
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 