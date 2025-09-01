import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import RequestDemoButton from '../components/RequestDemoButton';
import { Vortex } from '../components/Vortex';
import LoadingSpinner from '../components/LoadingSpinner';

// Import data
import homeDataRaw from '../data/home.json';

const Home: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language === 'es' ? 'es' : 'en';
  const homeData = homeDataRaw[currentLang as keyof typeof homeDataRaw];

  // Loading state
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Loading effect with 3-second delay
  useEffect(() => {
    const loadingDuration = 3000; // 3 seconds
    const progressInterval = 50; // Update progress every 50ms
    const progressStep = (progressInterval / loadingDuration) * 100;

    const progressTimer = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return Math.min(Math.round(prev + progressStep), 100);
      });
    }, progressInterval);

    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, loadingDuration);

    return () => {
      clearTimeout(loadingTimer);
      clearInterval(progressTimer);
    };
  }, []);

  return (
    <>
      {/* Loading Spinner */}
      <LoadingSpinner isLoading={isLoading} progress={loadingProgress} />

      <div className="min-h-screen bg-[#000008]">
        {/* Hero Section */}
        <section id="home" className="relative bg-[#000008] min-h-screen flex items-center justify-center overflow-hidden">
          {/* Vortex Background Animation */}
          <Vortex
            backgroundColor="rgb(0, 0, 12)"
            rangeY={800}
            particleCount={500}
            baseHue={270}
            className="absolute inset-0"
          />

          <div className="relative z-10 text-center text-white px-4">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {homeData.hero.title}
            </motion.h1>

            <motion.h2
              className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-gray-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {homeData.hero.subtitle}
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {homeData.hero.description}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <RequestDemoButton size="lg" />
            </motion.div>
          </div>
        </section>

        {/* Superpowers Section */}
        <section id="superpowers" className="section-padding bg-gray-900/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#000008]" />

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              {/* Superpowers Video */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <video
                  ref={(el) => {
                    if (el) {
                      setTimeout(() => {
                        el.play().catch(console.error);
                      }, 3000);
                    }
                  }}
                  src="/video/superpower.webm"
                  loop
                  muted
                  playsInline
                  className="w-full max-w-xs mx-auto rounded-lg shadow-2xl"
                >
                  Your browser does not support the video tag.
                </video>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                {homeData.superpowers.title}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {homeData.superpowers.subtitle}
              </p>
            </motion.div>

            {/* Interactive Network Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative w-full h-96 mb-16 overflow-hidden"
            >
              {/* Background Grid */}
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full" style={{
                  backgroundImage: `
                    radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)
                  `,
                  backgroundSize: '40px 40px'
                }}></div>
              </div>

              {/* Scattered Light Points */}
              <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                      scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Left Column - Integrated with your devices */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gray-800/60 rounded-lg flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {/* Desktop monitor */}
                        <rect x="2" y="3" width="20" height="15" rx="2" strokeWidth="2" />
                        <path d="M8 21v-3M16 21v-3" strokeWidth="2" />
                        <path d="M12 18v-3" strokeWidth="2" />
                        {/* Mobile phone overlapping */}
                        <rect x="4" y="12" width="6" height="10" rx="1" strokeWidth="2" />
                        <path d="M6 14v2" strokeWidth="1" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-white">
                      {homeData.superpowers.items[0].title}
                    </h3>
                    <h5 className="text-sm font-semibold mb-2 text-white">
                      {homeData.superpowers.items[0].description}
                    </h5>
                  </div>
                </motion.div>

                {/* Vertical Separator */}
                <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-px h-16 bg-gray-600"></div>
                </div>

                {/* Right Column - Secure but open */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gray-800/60 rounded-lg flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {/* Shield with padlock */}
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="2" />
                        <rect x="9" y="11" width="6" height="5" rx="1" strokeWidth="2" />
                        <path d="M12 11v-2a2 2 0 1 0-4 0v2" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-white">
                      {homeData.superpowers.items[1].title}
                    </h3>
                    <h5 className="text-sm font-semibold mb-2 text-white">
                      {homeData.superpowers.items[1].description}
                    </h5>
                  </div>
                </motion.div>
              </div>
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Left Column - Integrated with your devices */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gray-800/60 rounded-lg flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {/* Desktop monitor */}
                        <rect x="2" y="3" width="20" height="15" rx="2" strokeWidth="2" />
                        <path d="M8 21v-3M16 21v-3" strokeWidth="2" />
                        <path d="M12 18v-3" strokeWidth="2" />
                        {/* Mobile phone overlapping */}
                        <rect x="4" y="12" width="6" height="10" rx="1" strokeWidth="2" />
                        <path d="M6 14v2" strokeWidth="1" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-white">
                      {homeData.superpowers.items[2].title}
                    </h3>
                    <h5 className="text-sm font-semibold mb-2 text-white">
                      {homeData.superpowers.items[2].description}
                    </h5>
                  </div>
                </motion.div>

                {/* Vertical Separator */}
                <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-px h-16 bg-gray-600"></div>
                </div>

                {/* Right Column - Secure but open */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gray-800/60 rounded-lg flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {/* Shield with padlock */}
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="2" />
                        <rect x="9" y="11" width="6" height="5" rx="1" strokeWidth="2" />
                        <path d="M12 11v-2a2 2 0 1 0-4 0v2" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-white">
                      {homeData.superpowers.items[3].title}
                    </h3>
                    <h5 className="text-sm font-semibold mb-2 text-white">
                      {homeData.superpowers.items[3].description}
                    </h5>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Scale Section */}
        <section id="scale" className="section-padding bg-gray-800/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#000008]" />

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-300 to-teal-300 bg-clip-text text-transparent">
                {homeData.scale.title}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                {homeData.scale.subtitle}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {homeData.scale.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/20 rounded-3xl p-6 hover:bg-gray-800/60 hover:border-green-500/30 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-500 group relative overflow-hidden"
                  >
                    {/* Gradient highlight effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                      <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-300 font-medium relative z-10">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Integrations Section */}
        <section id="integrations" className="section-padding bg-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#000008]" />

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent h-[55px]">
                {homeData.integrations.title}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                {homeData.integrations.subtitle}
              </p>

              {/* Integrations Grid - 2x2 with Central Orb */}
              <div className="relative w-full max-w-4xl mx-auto mb-8">
                {/* Background Grid */}
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full" style={{
                    backgroundImage: `
                      linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px'
                  }}></div>
                </div>

                {/* Central Glowing Purple Orb */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 mt-4">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 shadow-2xl shadow-purple-500/50 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="3" strokeWidth={2} />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 1v6m0 6v6m11-7h-6m-6 0H1" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2x2 Grid Layout */}
                <div className="grid grid-cols-2 gap-8 relative z-30">
                  {/* Top-Left: Productivity & Communication */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0 }}
                    viewport={{ once: true }}
                    className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <div className="grid grid-cols-5 gap-3 mb-4">
                      {/* Google Drive */}
                      <div className="text-center">
                        <div className="w-10 h-10 border-2 border-white rounded-lg flex items-center justify-center mx-auto mb-2">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                          </svg>
                        </div>
                        <span className="text-xs text-gray-300">Google Drive</span>
                      </div>
                      {/* Gmail */}
                      <div className="text-center">
                        <div className="w-10 h-10 border-2 border-white rounded-lg flex items-center justify-center mx-auto mb-2">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                          </svg>
                        </div>
                        <span className="text-xs text-gray-300">Gmail</span>
                      </div>
                      {/* Slack */}
                      <div className="text-center">
                        <div className="w-10 h-10 border-2 border-white rounded-lg flex items-center justify-center mx-auto mb-2">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 15a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-6 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
                          </svg>
                        </div>
                        <span className="text-xs text-gray-300">Slack</span>
                      </div>
                      {/* Notion */}
                      <div className="text-center">
                        <div className="w-10 h-10 border-2 border-white rounded-lg flex items-center justify-center mx-auto mb-2">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm2 4v12h12V6H6z"/>
                          </svg>
                        </div>
                        <span className="text-xs text-gray-300">Notion</span>
                      </div>
                      {/* Discord */}
                      <div className="text-center">
                        <div className="w-10 h-10 border-2 border-white rounded-lg flex items-center justify-center mx-auto mb-2">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                          </svg>
                        </div>
                        <span className="text-xs text-gray-300">Discord</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Top-Right: Automation & Workflow */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <div className="grid grid-cols-5 gap-3 mb-4">
                      {/* Make */}
                      <div className="text-center">
                        <div className="w-10 h-10 border-2 border-white rounded-lg flex items-center justify-center mx-auto mb-2">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                        </div>
                        <span className="text-xs text-gray-300">Make</span>
                      </div>
                      {/* n8n */}
                      <div className="text-center">
                        <div className="w-10 h-10 border-2 border-white rounded-lg flex items-center justify-center mx-auto mb-2">
                          <span className="text-white font-bold text-xs">n8n</span>
                        </div>
                        <span className="text-xs text-gray-300">n8n</span>
                      </div>
                      {/* HubSpot */}
                      <div className="text-center">
                        <div className="w-10 h-10 border-2 border-white rounded-lg flex items-center justify-center mx-auto mb-2">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                        </div>
                        <span className="text-xs text-gray-300">HubSpot</span>
                      </div>
                      {/* Airtable */}
                      <div className="text-center">
                        <div className="w-10 h-10 border-2 border-white rounded-lg flex items-center justify-center mx-auto mb-2">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"/>
                          </svg>
                        </div>
                        <span className="text-xs text-gray-300">Airtable</span>
                      </div>
                      {/* Trello */}
                      <div className="text-center">
                        <div className="w-10 h-10 border-2 border-white rounded-lg flex items-center justify-center mx-auto mb-2">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 2v14h12V5H6z"/>
                          </svg>
                        </div>
                        <span className="text-xs text-gray-300">Trello</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Bottom-Left: Social Media & Messaging */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {/* WhatsApp */}
                      <div className="text-center">
                        <div className="w-10 h-10 border-2 border-white rounded-lg flex items-center justify-center mx-auto mb-2">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                          </svg>
                        </div>
                        <span className="text-xs text-gray-300">WhatsApp</span>
                      </div>
                      {/* Instagram */}
                      <div className="text-center">
                        <div className="w-10 h-10 border-2 border-white rounded-lg flex items-center justify-center mx-auto mb-2">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        </div>
                        <span className="text-xs text-gray-300">Instagram</span>
                      </div>
                      {/* Facebook */}
                      <div className="text-center">
                        <div className="w-10 h-10 border-2 border-white rounded-lg flex items-center justify-center mx-auto mb-2">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                        </div>
                        <span className="text-xs text-gray-300">Facebook</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Bottom-Right: Scheduling & Calendar */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <div className="flex flex-col items-center justify-center mb-4">
                      <div className="w-12 h-12 border-2 border-white rounded-lg flex items-center justify-center mb-2">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <span className="text-xs text-gray-300">Calendly</span>
                    </div>
                  </motion.div>
                </div>
              </div>

              <p className="text-lg text-gray-300 mb-4">
                {homeData.integrations.note}
              </p>

              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {homeData.integrations.cta}
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Data Protection & Security Section */}
        <section id="security" className="section-padding bg-gray-800/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#000008]" />

          <div className="container-custom relative z-10">
            <div className="space-y-16">
              {/* Never Lose Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center lg:text-left"
              >
                {/* Never Lose Information Video */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <video
                    ref={(el) => {
                      if (el) {
                        setTimeout(() => {
                          el.play().catch(console.error);
                        }, 3000);
                      }
                    }}
                    src="/video/nolose.webm"
                    loop
                    muted
                    playsInline
                    className="w-full max-w-sm mx-auto rounded-lg shadow-2xl"
                  >
                    Your browser does not support the video tag.
                  </video>
                </motion.div>

                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  {homeData.dataProtection.title}
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  {homeData.dataProtection.subtitle}
                </p>

                {/* Two-Column Feature Layout */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Left Column - Integrated with your devices */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gray-800/60 rounded-lg flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {/* Desktop monitor */}
                          <rect x="2" y="3" width="20" height="15" rx="2" strokeWidth="2" />
                          <path d="M8 21v-3M16 21v-3" strokeWidth="2" />
                          <path d="M12 18v-3" strokeWidth="2" />
                          {/* Mobile phone overlapping */}
                          <rect x="4" y="12" width="6" height="10" rx="1" strokeWidth="2" />
                          <path d="M6 14v2" strokeWidth="1" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 text-white">
                        {homeData.dataProtection.features[0]}
                      </h3>
                    </div>
                  </motion.div>

                  {/* Vertical Separator */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-px h-16 bg-gray-600"></div>
                  </div>

                  {/* Right Column - Secure but open */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gray-800/60 rounded-lg flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {/* Shield with padlock */}
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="2" />
                          <rect x="9" y="11" width="6" height="5" rx="1" strokeWidth="2" />
                          <path d="M12 11v-2a2 2 0 1 0-4 0v2" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 text-white">
                        {homeData.dataProtection.features[1]}
                      </h3>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Enterprise Security */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center lg:text-left"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-green-300 to-teal-300 bg-clip-text text-transparent">
                  {homeData.security.title}
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  {homeData.security.subtitle}
                </p>

                <div className="space-y-4">
                  {homeData.security.features.map((feature, index) => (
                    <div key={index} className="bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4">
                      <p className="text-gray-300">{feature}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section id="results" className="section-padding bg-gray-900/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#000008]" />

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">
                {homeData.results.title}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                {homeData.results.subtitle}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {homeData.results.metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-2xl p-8 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300"
                  >
                    <p className="text-2xl font-bold text-white mb-2">{metric}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="section-padding bg-gray-800/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#000008]" />

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                {homeData.pricing.title}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                {homeData.pricing.subtitle}
              </p>

              {/* Pricing Image with Text Overlay */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-8 relative w-full max-w-4xl mx-auto"
              >
                {/* Background Video */}
                <video
                  src="/video/price.webm"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full rounded-2xl shadow-2xl"
                >
                  Your browser does not support the video tag.
                </video>

                {/* Text Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8" style={{ transform: 'translateY(-250px)' }}>
                  {/* Pricing */}
                  <div className="mb-8">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-6xl font-bold text-purple-300">$10</span>
                      <span className="text-2xl text-gray-300">/month</span>
                    </div>
                    <p className="text-lg text-gray-400">(billed annually)</p>
                  </div>

                  {/* Features */}
                  <div className="grid gap-6 mb-8 text-center w-full items-center justify-center">
                    <div className="flex items-center gap-1">
                      <span className="text-gray-300 text-md">{homeData.pricing.description}</span>
                    </div>
                    <div className="space-y-2 w-full">
                      {homeData.pricing.factors.map((factor, index) => (
                        <div className="flex items-center gap-3">
                          <span className="text-gray-400 text-sm">•</span>
                          <span className="text-gray-300 text-sm">{factor}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="border border-purple-400 text-white font-semibold py-1 px-3 rounded-xl transition-all duration-300 transform hover:scale-105 text-md">
                    Start your 14-day trial
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Mission, Vision & Team Section */}
        <section id="about" className="section-padding bg-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#000008]" />

          <div className="container-custom relative z-10">
            <div className="space-y-16">
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  {homeData.mission.title}
                </h2>
                <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  {homeData.mission.description}
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-green-300 to-teal-300 bg-clip-text text-transparent">
                  {homeData.vision.title}
                </h2>
                <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  {homeData.vision.description}
                </p>
              </motion.div>

              {/* Team */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  {homeData.team.title}
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
                  {homeData.team.subtitle}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {homeData.team.members.map((member, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:border-purple-500/50 transition-all duration-300"
                    >
                      <p className="text-gray-300 text-sm">{member}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="section-padding bg-gray-800/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#000008]" />

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                {homeData.testimonials.title}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {homeData.testimonials.items.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:shadow-2xl hover:shadow-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300"
                  >
                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                      💬 "{testimonial.quote}"
                    </p>
                    <p className="text-yellow-300 font-medium">— {testimonial.author}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-padding bg-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#000008]" />

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-300 to-teal-300 bg-clip-text text-transparent">
                {homeData.contact.title}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
                {homeData.contact.subtitle}
              </p>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
                {homeData.contact.description}
              </p>

              <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <span className="text-2xl">📩</span>
                  <a href={`mailto:${homeData.contact.email}`} className="text-xl text-green-300 hover:text-green-200 transition-colors">
                    {homeData.contact.email}
                  </a>
                </div>

                <div className="flex items-center justify-center gap-6">
                  <span className="text-lg text-gray-300">🌐</span>
                  <div className="flex gap-4">
                    <span className="text-gray-300">{homeData.contact.social.instagram}</span>
                    <span className="text-gray-400">|</span>
                    <span className="text-gray-300">{homeData.contact.social.linkedin}</span>
                    <span className="text-gray-400">|</span>
                    <span className="text-gray-300">{homeData.contact.social.facebook}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;