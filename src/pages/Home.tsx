import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import Testimonials from '../components/Testimonials';
import RequestDemoButton from '../components/RequestDemoButton';

// Custom SVG Icon for Workflow Automation - Awesome Design
const WorkflowAutomationIcon: React.FC = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    {/* Central Automation Hub */}
    <motion.circle
      cx="32"
      cy="32"
      r="20"
      fill="url(#hubGradient)"
      stroke="url(#hubStroke)"
      strokeWidth="2"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.3 }}
    />

    {/* Inner Hub Core */}
    <motion.circle
      cx="32"
      cy="32"
      r="12"
      fill="url(#coreGradient)"
      stroke="url(#coreStroke)"
      strokeWidth="1.5"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    />

    {/* Rotating Gear System */}
    <motion.g
      animate={{ rotate: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    >
      {/* Main Gear */}
    <motion.circle
      cx="32"
        cy="32"
        r="16"
        fill="none"
        stroke="url(#gearGradient)"
        strokeWidth="2"
        strokeDasharray="2 2"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      />

      {/* Gear Teeth */}
      {[...Array(12)].map((_, i) => (
        <motion.rect
          key={i}
          x="30"
          y="16"
          width="4"
          height="6"
          rx="2"
          fill="url(#gearTeethGradient)"
          transform={`rotate(${i * 30} 32 32)`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.5 + i * 0.05 }}
        />
      ))}
    </motion.g>

    {/* Workflow Process Nodes */}
    <motion.circle
      cx="16"
      cy="16"
      r="5"
      fill="url(#processGradient)"
      stroke="url(#processStroke)"
      strokeWidth="1.5"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 2.0 }}
    />

    <motion.circle
      cx="48"
      cy="16"
      r="5"
      fill="url(#processGradient)"
      stroke="url(#processStroke)"
      strokeWidth="1.5"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 2.2 }}
    />

    <motion.circle
      cx="16"
      cy="48"
      r="5"
      fill="url(#processGradient)"
      stroke="url(#processStroke)"
      strokeWidth="1.5"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 2.4 }}
    />

    <motion.circle
      cx="48"
      cy="48"
      r="5"
      fill="url(#processGradient)"
      stroke="url(#processStroke)"
      strokeWidth="1.5"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 2.6 }}
    />

    {/* Dynamic Connection Lines */}
    <motion.path
      d="M21 21 L32 32"
      stroke="url(#connectionGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.2, delay: 2.8 }}
    />

    <motion.path
      d="M43 21 L32 32"
      stroke="url(#connectionGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.2, delay: 3.0 }}
    />

    <motion.path
      d="M21 43 L32 32"
      stroke="url(#connectionGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.2, delay: 3.2 }}
    />

    <motion.path
      d="M43 43 L32 32"
      stroke="url(#connectionGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.2, delay: 3.4 }}
    />

    {/* Data Flow Arrows */}
    <motion.path
      d="M26 26 L30 30 L26 34 Z"
      fill="url(#arrowGradient)"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 3.6 }}
    />

    <motion.path
      d="M38 26 L34 30 L38 34 Z"
      fill="url(#arrowGradient)"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 3.8 }}
    />

    <motion.path
      d="M26 38 L30 34 L26 30 Z"
      fill="url(#arrowGradient)"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 4.0 }}
    />

    <motion.path
      d="M38 38 L34 34 L38 30 Z"
      fill="url(#arrowGradient)"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 4.2 }}
    />

    {/* Process Indicators */}
    <motion.rect
      x="14"
      y="14"
      width="4"
      height="4"
      rx="2"
      fill="url(#indicatorGradient)"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, delay: 4.4 }}
    />

    <motion.rect
      x="46"
      y="14"
      width="4"
      height="4"
      rx="2"
      fill="url(#indicatorGradient)"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, delay: 4.6 }}
    />

    <motion.rect
      x="14"
      y="46"
      width="4"
      height="4"
      rx="2"
      fill="url(#indicatorGradient)"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, delay: 4.8 }}
    />

    <motion.rect
      x="46"
      y="46"
      width="4"
      height="4"
      rx="2"
      fill="url(#indicatorGradient)"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, delay: 5.0 }}
    />

    {/* Floating Data Streams */}
    {[...Array(8)].map((_, i) => (
      <motion.circle
        key={i}
        cx={24 + (i * 2)}
        cy={24 + (i % 2) * 2}
        r="0.8"
        fill="url(#dataStreamGradient)"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 1.5, 0],
          opacity: [0, 1, 0],
          y: [0, -8, 0]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          delay: i * 0.2,
          ease: "easeInOut"
        }}
      />
    ))}

    {/* Central Processing Unit */}
    <motion.path
      d="M30 30 L34 30 L32 34 Z"
      fill="url(#cpuGradient)"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 5.2 }}
    />

    {/* Circuit Board Pattern */}
    <motion.path
      d="M28 28 L36 28 M28 36 L36 36 M32 28 L32 36"
      stroke="url(#circuitGradient)"
      strokeWidth="1"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.2, delay: 5.5 }}
    />

    {/* Animated Glow Rings */}
    <motion.circle
      cx="32"
      cy="32"
      r="28"
      fill="none"
      stroke="url(#outerGlowGradient)"
      strokeWidth="0.5"
      strokeOpacity="0.3"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.8, delay: 5.8 }}
      whileHover={{ scale: 1.2, opacity: 0.5 }}
    />

    <motion.circle
      cx="32"
      cy="32"
      r="35"
      fill="none"
      stroke="url(#outerGlowGradient)"
      strokeWidth="0.3"
      strokeOpacity="0.2"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 2.2, delay: 6.2 }}
      whileHover={{ scale: 1.3, opacity: 0.4 }}
    />

    {/* Gradient Definitions */}
    <defs>
      <linearGradient id="hubGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1e40af" />
        <stop offset="50%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#60a5fa" />
      </linearGradient>

      <linearGradient id="hubStroke" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#1d4ed8" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>

      <linearGradient id="coreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#f3f4f6" />
      </linearGradient>

      <linearGradient id="coreStroke" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#e5e7eb" />
        <stop offset="100%" stopColor="#d1d5db" />
      </linearGradient>

      <linearGradient id="gearGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#a78bfa" />
      </linearGradient>

      <linearGradient id="gearTeethGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#a78bfa" />
        <stop offset="100%" stopColor="#c084fc" />
      </linearGradient>

      <linearGradient id="processGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#34d399" />
      </linearGradient>

      <linearGradient id="processStroke" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#059669" />
        <stop offset="100%" stopColor="#10b981" />
      </linearGradient>

      <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
      </linearGradient>

      <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#fbbf24" />
      </linearGradient>

      <linearGradient id="indicatorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ef4444" />
        <stop offset="100%" stopColor="#f87171" />
      </linearGradient>

      <radialGradient id="dataStreamGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#60a5fa" />
        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
      </radialGradient>

      <linearGradient id="cpuGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>

      <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#6b7280" />
        <stop offset="100%" stopColor="#9ca3af" />
      </linearGradient>

      <radialGradient id="outerGlowGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#1e40af" stopOpacity="0" />
      </radialGradient>
    </defs>
  </svg>
);

// Custom SVG Icon for AI-Powered Solutions
const AIPoweredIcon: React.FC = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    {/* Central Neural Network Core */}
    <motion.circle
      cx="32"
      cy="32"
      r="16"
      fill="url(#aiCoreGradient)"
      stroke="url(#aiCoreStroke)"
      strokeWidth="2"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    />

    {/* Neural Network Nodes */}
    {[...Array(8)].map((_, i) => (
      <motion.circle
        key={i}
        cx={32 + Math.cos(i * Math.PI / 4) * 24}
        cy={32 + Math.sin(i * Math.PI / 4) * 24}
        r="3"
        fill="url(#neuralNodeGradient)"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 + i * 0.1 }}
      />
    ))}

    {/* Secondary Neural Layer */}
    {[...Array(12)].map((_, i) => (
      <motion.circle
        key={`secondary-${i}`}
        cx={32 + Math.cos(i * Math.PI / 6) * 36}
        cy={32 + Math.sin(i * Math.PI / 6) * 36}
        r="2"
        fill="url(#secondaryNodeGradient)"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 + i * 0.05 }}
      />
    ))}

    {/* Neural Connections */}
    {[...Array(8)].map((_, i) => (
      <motion.path
        key={`connection-${i}`}
        d={`M ${32 + Math.cos(i * Math.PI / 4) * 16} ${32 + Math.sin(i * Math.PI / 4) * 16} L ${32 + Math.cos(i * Math.PI / 4) * 24} ${32 + Math.sin(i * Math.PI / 4) * 24}`}
        stroke="url(#connectionGradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 + i * 0.1 }}
      />
    ))}

    {/* Secondary Connections */}
    {[...Array(12)].map((_, i) => (
      <motion.path
        key={`secondary-connection-${i}`}
        d={`M ${32 + Math.cos(i * Math.PI / 6) * 24} ${32 + Math.sin(i * Math.PI / 6) * 24} L ${32 + Math.cos(i * Math.PI / 6) * 36} ${32 + Math.sin(i * Math.PI / 6) * 36}`}
        stroke="url(#secondaryConnectionGradient)"
        strokeWidth="1"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.5 + i * 0.05 }}
      />
    ))}

    {/* AI Processing Waves */}
    <motion.circle
      cx="32"
      cy="32"
      r="20"
      fill="none"
      stroke="url(#waveGradient)"
      strokeWidth="1"
      strokeDasharray="4 4"
      initial={{ rotate: 0, opacity: 0 }}
      animate={{ rotate: 360, opacity: [0, 0.6, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    />

    <motion.circle
      cx="32"
      cy="32"
      r="28"
      fill="none"
      stroke="url(#waveGradient)"
      strokeWidth="1"
      strokeDasharray="6 6"
      initial={{ rotate: 0, opacity: 0 }}
      animate={{ rotate: -360, opacity: [0, 0.4, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
    />

    {/* Floating Data Particles */}
    {[...Array(6)].map((_, i) => (
      <motion.circle
        key={`particle-${i}`}
        cx={32 + (Math.random() - 0.5) * 40}
        cy={32 + (Math.random() - 0.5) * 40}
        r="1"
        fill="url(#particleGradient)"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: [0, 1, 0],
          scale: [0, 1.5, 0],
          x: [0, (Math.random() - 0.5) * 20],
          y: [0, (Math.random() - 0.5) * 20]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: i * 0.5,
          ease: "easeInOut"
        }}
      />
    ))}

    {/* Central AI Symbol */}
    <motion.text
      x="32"
      y="38"
      textAnchor="middle"
      fill="url(#textGradient)"
      fontSize="12"
      fontWeight="bold"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 3 }}
    >
      AI
    </motion.text>

    {/* Gradient Definitions */}
    <defs>
      <radialGradient id="aiCoreGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </radialGradient>

      <linearGradient id="aiCoreStroke" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#a78bfa" />
        <stop offset="100%" stopColor="#60a5fa" />
      </linearGradient>

      <linearGradient id="neuralNodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#f97316" />
      </linearGradient>

      <linearGradient id="secondaryNodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.8" />
      </linearGradient>

      <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#f97316" stopOpacity="0.8" />
      </linearGradient>

      <linearGradient id="secondaryConnectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.6" />
      </linearGradient>

      <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
      </linearGradient>

      <radialGradient id="particleGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
      </radialGradient>

      <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#f3f4f6" />
      </linearGradient>
    </defs>
  </svg>
);

// Custom SVG Icon for System Integration
const SystemIntegrationIcon: React.FC = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    {/* Central Integration Hub */}
    <motion.rect
      x="24"
      y="24"
      width="16"
      height="16"
      rx="3"
      fill="url(#hubGradient)"
      stroke="url(#hubStroke)"
      strokeWidth="2"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    />

    {/* Connected Systems - Top Left */}
    <motion.rect
      x="8"
      y="8"
      width="12"
      height="8"
      rx="2"
      fill="url(#systemGradient)"
      stroke="url(#systemStroke)"
      strokeWidth="1.5"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1 }}
    />

    {/* Connected Systems - Top Right */}
    <motion.rect
      x="44"
      y="8"
      width="12"
      height="8"
      rx="2"
      fill="url(#systemGradient)"
      stroke="url(#systemStroke)"
      strokeWidth="1.5"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.2 }}
    />

    {/* Connected Systems - Bottom Left */}
    <motion.rect
      x="8"
      y="48"
      width="12"
      height="8"
      rx="2"
      fill="url(#systemGradient)"
      stroke="url(#systemStroke)"
      strokeWidth="1.5"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.4 }}
    />

    {/* Connected Systems - Bottom Right */}
    <motion.rect
      x="44"
      y="48"
      width="12"
      height="8"
      rx="2"
      fill="url(#systemGradient)"
      stroke="url(#systemStroke)"
      strokeWidth="1.5"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.6 }}
    />

    {/* Integration Connections */}
    <motion.path
      d="M20 12 L28 24"
      stroke="url(#connectionGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 2 }}
    />

    <motion.path
      d="M44 12 L36 24"
      stroke="url(#connectionGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 2.2 }}
    />

    <motion.path
      d="M20 56 L28 40"
      stroke="url(#connectionGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 2.4 }}
    />

    <motion.path
      d="M44 56 L36 40"
      stroke="url(#connectionGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 2.6 }}
    />

    {/* Data Flow Arrows */}
    <motion.path
      d="M26 12 L28 12 L28 14 Z"
      fill="url(#arrowGradient)"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 3 }}
    />

    <motion.path
      d="M38 12 L36 12 L36 14 Z"
      fill="url(#arrowGradient)"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 3.2 }}
    />

    <motion.path
      d="M26 56 L28 56 L28 54 Z"
      fill="url(#arrowGradient)"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 3.4 }}
    />

    <motion.path
      d="M38 56 L36 56 L36 54 Z"
      fill="url(#arrowGradient)"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 3.6 }}
    />

    {/* Central Hub Icon */}
    <motion.path
      d="M28 28 L32 32 L28 36 M32 28 L28 32 L32 36"
      stroke="url(#hubIconGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 3.8 }}
    />

    {/* System Icons */}
    <motion.text
      x="14"
      y="13"
      textAnchor="middle"
      fill="url(#textGradient)"
      fontSize="8"
      fontWeight="bold"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 4 }}
    >
      API
    </motion.text>

    <motion.text
      x="50"
      y="13"
      textAnchor="middle"
      fill="url(#textGradient)"
      fontSize="8"
      fontWeight="bold"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 4.2 }}
    >
      DB
    </motion.text>

    <motion.text
      x="14"
      y="53"
      textAnchor="middle"
      fill="url(#textGradient)"
      fontSize="8"
      fontWeight="bold"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 4.4 }}
    >
      CRM
    </motion.text>

    <motion.text
      x="50"
      y="53"
      textAnchor="middle"
      fill="url(#textGradient)"
      fontSize="8"
      fontWeight="bold"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 4.6 }}
    >
      ERP
    </motion.text>

    {/* Animated Data Flow */}
    <motion.circle
      cx="24"
      cy="18"
      r="1.5"
      fill="url(#dataFlowGradient)"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        cx: [24, 28, 32],
        cy: [18, 21, 24]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        delay: 5,
        ease: "easeInOut"
      }}
    />

    <motion.circle
      cx="40"
      cy="18"
      r="1.5"
      fill="url(#dataFlowGradient)"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        cx: [40, 36, 32],
        cy: [18, 21, 24]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        delay: 5.5,
        ease: "easeInOut"
      }}
    />

    {/* Gradient Definitions */}
    <defs>
      <linearGradient id="hubGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>

      <linearGradient id="hubStroke" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#34d399" />
        <stop offset="100%" stopColor="#10b981" />
      </linearGradient>

      <linearGradient id="systemGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#1d4ed8" />
      </linearGradient>

      <linearGradient id="systemStroke" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#60a5fa" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>

      <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
      </linearGradient>

      <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#34d399" />
        <stop offset="100%" stopColor="#60a5fa" />
      </linearGradient>

      <linearGradient id="hubIconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#f3f4f6" />
      </linearGradient>

      <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#e5e7eb" />
      </linearGradient>

      <radialGradient id="dataFlowGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#34d399" />
        <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
      </radialGradient>
    </defs>
  </svg>
);

// Custom SVG Icon for Consulting Services - Awesome Design
const ConsultingIcon: React.FC = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    {/* Central Brain Hub */}
    <motion.circle
      cx="32"
      cy="32"
      r="18"
      fill="url(#brainGradient)"
      stroke="url(#brainStroke)"
      strokeWidth="2"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    />

    {/* Brain Neural Network */}
    <motion.path
      d="M24 24 Q28 20 32 24 Q36 20 40 24"
      stroke="url(#neuralGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.8 }}
    />

    <motion.path
      d="M26 28 Q30 24 34 28 Q38 24 42 28"
      stroke="url(#neuralGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.2, delay: 1.0 }}
    />

    <motion.path
      d="M28 32 Q32 28 36 32"
      stroke="url(#neuralGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.2, delay: 1.2 }}
    />

    {/* Neural Nodes */}
    {[...Array(8)].map((_, i) => (
      <motion.circle
        key={i}
        cx={26 + (i * 2)}
        cy={24 + (i % 3) * 4}
        r="1.5"
        fill="url(#nodeGradient)"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 + i * 0.1 }}
      />
    ))}

    {/* Strategic Planning Compass */}
    <motion.circle
      cx="32"
      cy="12"
      r="6"
      fill="url(#compassGradient)"
      stroke="url(#compassStroke)"
      strokeWidth="1.5"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 2.0 }}
    />

    <motion.path
      d="M32 8 L32 16 M28 12 L36 12"
      stroke="url(#compassStroke)"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 2.3 }}
    />

    {/* Data Analytics Chart */}
    <motion.rect
      x="8"
      y="48"
      width="16"
      height="8"
      rx="2"
      fill="url(#chartGradient)"
      stroke="url(#chartStroke)"
      strokeWidth="1.5"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 2.5 }}
    />

    {/* Chart Bars */}
    <motion.rect
      x="10"
      y="54"
      width="2"
      height="2"
      fill="url(#barGradient)"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{ duration: 0.6, delay: 3.0 }}
    />

    <motion.rect
      x="13"
      y="52"
      width="2"
      height="4"
      fill="url(#barGradient)"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{ duration: 0.6, delay: 3.2 }}
    />

    <motion.rect
      x="16"
      y="50"
      width="2"
      height="6"
      fill="url(#barGradient)"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{ duration: 0.6, delay: 3.4 }}
    />

    <motion.rect
      x="19"
      y="53"
      width="2"
      height="3"
      fill="url(#barGradient)"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{ duration: 0.6, delay: 3.6 }}
    />

    {/* Innovation Lightbulb */}
    <motion.circle
      cx="48"
      cy="16"
      r="5"
      fill="url(#lightbulbGradient)"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 2.8 }}
    />

    <motion.path
      d="M48 11 L48 16 M45 13 L51 13"
      stroke="url(#lightbulbStroke)"
      strokeWidth="1.5"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 3.8 }}
    />

    {/* Consulting Documents */}
    <motion.rect
      x="44"
      y="44"
      width="12"
      height="16"
      rx="2"
      fill="url(#documentGradient)"
      stroke="url(#documentStroke)"
      strokeWidth="1.5"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 3.0 }}
    />

    {/* Document Lines */}
    <motion.rect
      x="46"
      y="48"
      width="8"
      height="1"
      rx="0.5"
      fill="url(#lineGradient)"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.6, delay: 3.8 }}
    />

    <motion.rect
      x="46"
      y="51"
      width="6"
      height="1"
      rx="0.5"
      fill="url(#lineGradient)"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.6, delay: 4.0 }}
    />

    <motion.rect
      x="46"
      y="54"
      width="7"
      height="1"
      rx="0.5"
      fill="url(#lineGradient)"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.6, delay: 4.2 }}
    />

    {/* Connection Lines */}
    <motion.path
      d="M32 14 L32 20"
      stroke="url(#connectionGradient)"
      strokeWidth="1.5"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 4.0 }}
    />

    <motion.path
      d="M24 48 L32 40"
      stroke="url(#connectionGradient)"
      strokeWidth="1.5"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 4.2 }}
    />

    <motion.path
      d="M40 48 L32 40"
      stroke="url(#connectionGradient)"
      strokeWidth="1.5"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 4.4 }}
    />

    {/* Floating Data Particles */}
    {[...Array(6)].map((_, i) => (
      <motion.circle
        key={i}
        cx={20 + (i * 8)}
        cy={20 + (i % 2) * 8}
        r="1"
        fill="url(#particleGradient)"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 1, 0],
          opacity: [0, 1, 0],
          y: [0, -10, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: i * 0.3,
          ease: "easeInOut"
        }}
      />
    ))}

    {/* Dynamic Glow Effects */}
    <motion.circle
      cx="32"
      cy="32"
      r="25"
      fill="none"
      stroke="url(#outerGlowGradient)"
      strokeWidth="0.5"
      strokeOpacity="0.2"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, delay: 4.5 }}
      whileHover={{ scale: 1.3, opacity: 0.4 }}
    />

    <motion.circle
      cx="32"
      cy="32"
      r="30"
      fill="none"
      stroke="url(#outerGlowGradient)"
      strokeWidth="0.3"
      strokeOpacity="0.1"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 2, delay: 5.0 }}
      whileHover={{ scale: 1.4, opacity: 0.3 }}
    />

    {/* Gradient Definitions */}
    <defs>
      <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="50%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>

      <linearGradient id="brainStroke" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#a78bfa" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>

      <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>

      <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#ef4444" />
      </linearGradient>

      <linearGradient id="compassGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>

      <linearGradient id="compassStroke" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#d97706" />
        <stop offset="100%" stopColor="#b45309" />
      </linearGradient>

      <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ec4899" />
        <stop offset="100%" stopColor="#be185d" />
      </linearGradient>

      <linearGradient id="chartStroke" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f472b6" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>

      <linearGradient id="barGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#f3f4f6" />
      </linearGradient>

      <linearGradient id="lightbulbGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>

      <linearGradient id="lightbulbStroke" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#d97706" />
        <stop offset="100%" stopColor="#b45309" />
      </linearGradient>

      <linearGradient id="documentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f3f4f6" />
        <stop offset="100%" stopColor="#e5e7eb" />
      </linearGradient>

      <linearGradient id="documentStroke" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#d1d5db" />
        <stop offset="100%" stopColor="#9ca3af" />
      </linearGradient>

      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#6b7280" />
        <stop offset="100%" stopColor="#4b5563" />
      </linearGradient>

      <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
      </linearGradient>

      <radialGradient id="particleGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
      </radialGradient>

      <radialGradient id="outerGlowGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
      </radialGradient>
    </defs>
  </svg>
);

const Home: React.FC = () => {
  const { t } = useTranslation();
  
  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [contactErrors, setContactErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleContactChange = (field: string, value: string) => {
    setContactForm(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (contactErrors[field as keyof typeof contactErrors] && value) {
      setContactErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    const newErrors = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    
    // Validation
    if (!contactForm.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!contactForm.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(contactForm.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    }
    
    if (!contactForm.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!contactForm.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setContactErrors(newErrors);
    
    // If no errors, handle submission
    if (!Object.values(newErrors).some(error => error)) {
      console.log('Contact form submitted:', contactForm);
      // Here you would typically send the data to your backend
    }
  };

  const servicesPreview = [
    {
      key: 'workflow',
      icon: <WorkflowAutomationIcon />,
      title: t('services.workflow.title'),
      description: t('services.workflow.description'),
      features: t('services.workflow.features', { returnObjects: true }) as string[],
      ctaText: t('common.learnMore')
    },
    {
      key: 'ai',
      icon: <AIPoweredIcon />,
      title: t('services.ai.title'),
      description: t('services.ai.description'),
      features: t('services.ai.features', { returnObjects: true }) as string[],
      ctaText: t('common.learnMore')
    },
    {
      key: 'integration',
      icon: <SystemIntegrationIcon />,
      title: t('services.integration.title'),
      description: t('services.integration.description'),
      features: t('services.integration.features', { returnObjects: true }) as string[],
      ctaText: t('common.learnMore')
    },
    {
      key: 'consulting',
      icon: <ConsultingIcon />,
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      features: t('services.consulting.features', { returnObjects: true }) as string[],
      ctaText: t('common.learnMore')
    }
  ];



  // Custom SVG Icon for Notion








  const integrationsPreview = [
    { name: 'Slack', logo: '/svg/slack-icon.svg', description: 'Team communication' },
    { name: 'Notion', logo: '/svg/notion-icon.svg', description: 'Knowledge management' },
    { name: 'Salesforce', logo: '/svg/salesforce-icon.svg', description: 'CRM integration' },
    { name: 'Zapier', logo: '/svg/zapier-icon.svg', description: 'Workflow automation' },
    { name: 'HubSpot', logo: '/svg/hubspot-icon.svg', description: 'Marketing automation' },
    { name: 'Asana', logo: '/svg/asana-icon.svg', description: 'Project management' }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/video/home.webm" type="video/webm" />
        </video>
        
        {/* Glowing Background Elements */}
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-purple-500/20 via-transparent to-transparent"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Central Glowing Arc */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="w-[800px] h-[400px] bg-gradient-to-r from-purple-400/30 via-blue-500/40 to-purple-400/30 rounded-full blur-3xl" />
        </motion.div>

        {/* Floating Particles */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/60 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                y: [0, -20, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </motion.div>

        <div className="relative z-10 text-center text-white px-4">
          {/* AI Feature Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-4 py-2 mb-8"
          >
            <span className="text-purple-300">✨</span>
            <span className="text-purple-200 text-sm font-medium">Take notes using AI</span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t('home.hero.title')}
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-4xl font-semibold mb-8 text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('home.hero.subtitle')}
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('home.hero.description')}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <RequestDemoButton size="lg" />
            <motion.a
              href="/contact"
              className="px-8 py-4 text-xl border border-purple-400/50 text-purple-200 hover:bg-purple-500/20 hover:border-purple-400 rounded-lg transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('common.contactUs')}
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section id="services" className="section-padding bg-gray-800/50 relative overflow-hidden">
        {/* Spectacular Background Canvas */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Animated Geometric Shapes */}
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-xl"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.4, 0.2],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <motion.div
            className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.3, 0.2],
              rotate: [0, -180, -360]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <motion.div
            className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-xl"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.2, 0.35, 0.2],
              rotate: [0, 90, 180, 270, 360]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Floating Particles */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/40 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  y: [0, -30, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: Math.random() * 3
                }}
              />
            ))}
          </motion.div>

          {/* Animated Grid Lines */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
              {t('home.servicesPreview.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('home.servicesPreview.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesPreview.map((service, index) => (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Special Canvas Background for Workflow Automation */}
                {service.key === 'workflow' && (
                  <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none group-hover:scale-105 transition-transform duration-300">
                    {/* Workplace Image Background */}
                    <img
                      src="/picture/workplace.jpg"
                      alt="Modern workplace automation"
                      className="absolute z-0 inset-0 w-full h-full object-cover group-hover:opacity-100 transition-all duration-300"
                      style={{ filter: 'brightness(0.7) contrast(1.2) saturate(1.1)' }}
                    />

                    {/* Overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-blue-900/30 to-purple-900/40 group-hover:from-purple-900/60 group-hover:via-blue-900/50 group-hover:to-purple-900/60 transition-all duration-300" />

                    {/* Subtle animated glow effect */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full group-hover:opacity-40 group-hover:scale-125 transition-all duration-300 z-50"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      whileHover={{ scale: [1.2, 1.5, 1.2] }}
                    />
                  </div>
                )}

                {/* Video Background for AI-Powered Solutions */}
                {service.key === 'ai' && (
                  <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none group-hover:scale-105 transition-transform duration-300">
                    {/* Video Background - EVEN SMALLER & SEAMLESS LOOP */}
                    <video
                      className="absolute inset-0 w-full h-full object-cover opacity-105 group-hover:opacity-100 transition-all duration-300"
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{
                        filter: 'brightness(1.3) contrast(1.5) saturate(1.4)',
                        transform: 'scale(1)',
                        objectPosition: 'center'
                      }}
                      onEnded={(e) => {
                        // Add 2 second delay before restarting video
                        const video = e.target as HTMLVideoElement;
                        setTimeout(() => {
                        video.currentTime = 0;
                        video.play();
                        }, 2000);
                      }}
                    >
                      <source src="/video/brain.webm" type="video/webm" />
                      Your browser does not support the video tag.
                    </video>

                    {/* Minimal Overlay - Almost invisible */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-purple-900/3 to-blue-900/5 group-hover:from-blue-900/10 group-hover:via-purple-900/8 group-hover:to-blue-900/10 transition-all duration-300" />

                    {/* Enhanced Glow Effect - More Prominent */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-gradient-to-r from-blue-400/40 to-purple-400/40 rounded-full group-hover:opacity-60 group-hover:scale-125 transition-all duration-300"
                      animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.4, 0.7, 0.4]
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      whileHover={{ scale: [1.4, 1.7, 1.4] }}
                    />

                    {/* Video Enhancement Ring - More Visible */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-44 h-44 border-2 border-blue-400/50 rounded-full group-hover:border-blue-400/80 group-hover:border-4 transition-all duration-300"
                      animate={{
                        scale: [0.9, 1.2, 0.9],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      whileHover={{ scale: [1.2, 1.4, 1.2] }}
                    />

                    {/* Additional Brightness Ring */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-gradient-to-r from-white/20 to-blue-200/20 rounded-full group-hover:opacity-40 group-hover:scale-125 transition-all duration-300"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2]
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      whileHover={{ scale: [1.2, 1.5, 1.2] }}
                    />
                  </div>
                )}

                {/* Video Background for System Integration */}
                {service.key === 'integration' && (
                  <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none group-hover:scale-105 transition-transform duration-300">
                    {/* Integration Video Background */}
                    <video
                      className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-100 transition-all duration-300"
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{ 
                        transform: 'scale(1)',
                        objectPosition: 'center'
                      }}
                      onEnded={(e) => {
                        // Add 2 second delay before restarting video
                        const video = e.target as HTMLVideoElement;
                        setTimeout(() => {
                        video.currentTime = 0;
                        video.play();
                        }, 2000);
                      }}
                    >
                      <source src="/video/integration.webm" type="video/webm" />
                      Your browser does not support the video tag.
                    </video>
                    
                    {/* Overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-indigo-900/40 group-hover:from-blue-900/60 group-hover:via-purple-900/50 group-hover:to-indigo-900/60 transition-all duration-300" />
                    
                    {/* Subtle animated glow effect */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full group-hover:opacity-40 group-hover:scale-125 transition-all duration-300"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      whileHover={{ scale: [1.2, 1.5, 1.2] }}
                    />

                    {/* Floating Data Planets */}
                    <motion.div
                      className="absolute inset-0"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                      whileHover={{ rotate: -720, scale: 1.2 }}
                    >
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute rounded-full group-hover:scale-125 transition-all duration-300"
                          style={{
                            left: `${20 + (i * 12) % 80}%`,
                            top: `${25 + (i * 10) % 70}%`,
                            width: `${8 + (i % 3) * 4}px`,
                            height: `${8 + (i % 3) * 4}px`,
                            background: i % 2 === 0
                              ? 'radial-gradient(circle, #60a5fa 0%, #3b82f6 100%)'
                              : 'radial-gradient(circle, #a78bfa 0%, #8b5cf6 100%)',
                            animationDelay: `${i * 0.5}s`
                          }}
                          animate={{
                            scale: [0.8, 1.2, 0.8],
                            opacity: [0.4, 0.8, 0.4]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: i * 0.3
                          }}
                        />
                      ))}
                    </motion.div>

                    {/* Circuit Network Lines */}
                    <svg className="absolute inset-0 w-full h-full" style={{ filter: 'drop-shadow(0 0 6px rgba(139, 92, 246, 0.4))' }}>
                      <motion.path
                        d="M 15% 25% Q 35% 15% 55% 25% T 85% 35%"
                        stroke="url(#circuitGradient)"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 4, delay: 0.5 }}
                        className="group-hover:stroke-width-2 group-hover:opacity-100 transition-all duration-300"
                      />
                      <motion.path
                        d="M 20% 60% Q 40% 70% 60% 60% T 80% 50%"
                        stroke="url(#circuitGradient)"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 4, delay: 1 }}
                        className="group-hover:stroke-width-2 group-hover:opacity-100 transition-all duration-300"
                      />
                      <motion.path
                        d="M 25% 40% Q 45% 50% 65% 40%"
                        stroke="url(#circuitGradient)"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 4, delay: 1.5 }}
                        className="group-hover:stroke-width-2 group-hover:opacity-100 transition-all duration-300"
                      />

                      {/* Gradient Definition */}
                      <defs>
                        <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#60a5fa" stopOpacity="1" />
                          <stop offset="50%" stopColor="#a78bfa" stopOpacity="1" />
                          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="1" />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Data Flow Particles */}
                    <motion.div
                      className="absolute inset-0"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                      whileHover={{ rotate: 720, scale: 1.4 }}
                    >
                      {[...Array(20)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-blue-400 rounded-full group-hover:w-1.5 group-hover:h-1.5 group-hover:bg-blue-300 transition-all duration-300"
                          style={{
                            left: `${15 + (i * 4) % 85}%`,
                            top: `${20 + (i * 3) % 80}%`,
                            animationDelay: `${i * 0.2}s`
                          }}
                          animate={{
                            y: [0, -20, 0],
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.15
                          }}
                          whileHover={{ y: [0, -30, 0], scale: [0, 2, 0] }}
                        />
                      ))}
                    </motion.div>

                    {/* Integration Rings */}
                    <motion.div
                      className="absolute inset-0"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                      whileHover={{ rotate: -720, scale: 1.2 }}
                    >
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-blue-400/40 rounded-full group-hover:border-blue-400/70 group-hover:border-2 transition-all duration-300"
                          style={{
                            width: `${60 + i * 50}px`,
                            height: `${60 + i * 50}px`,
                            animationDelay: `${i * 0.4}s`
                          }}
                          animate={{
                            scale: [0.7, 1.2, 0.7],
                            opacity: [0.2, 0.5, 0.2]
                          }}
                          transition={{
                            duration: 6,
                            repeat: Infinity,
                            delay: i * 0.3
                          }}
                          whileHover={{ scale: [0.9, 1.4, 0.9], opacity: [0.3, 0.6, 0.3] }}
                        />
                      ))}
                    </motion.div>
                  </div>
                )}

                {/* Video Background for Consulting Services */}
                {service.key === 'consulting' && (
                  <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none group-hover:scale-105 transition-transform duration-300">
                    {/* Consulting Video Background */}
                    <video
                      className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-100 transition-all duration-300"
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{ 
                        transform: 'scale(1.1)',
                        objectPosition: 'center'
                      }}
                      onEnded={(e) => {
                        // Add 2 second delay before restarting video
                        const video = e.target as HTMLVideoElement;
                        setTimeout(() => {
                          video.currentTime = 0;
                          video.play();
                        }, 2000);
                      }}
                    >
                      <source src="/video/consulting.webm" type="video/webm" />
                      Your browser does not support the video tag.
                    </video>
                    
                    {/* Overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-blue-900/40 to-indigo-900/50 group-hover:from-purple-900/70 group-hover:via-blue-900/60 group-hover:to-indigo-900/70 transition-all duration-300" />
                    
                    {/* Consulting-specific animated elements */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-purple-400/30 to-blue-400/30 rounded-full group-hover:opacity-50 group-hover:scale-125 transition-all duration-300"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      whileHover={{ scale: [1.3, 1.6, 1.3] }}
                    />

                    {/* Strategic Planning Elements */}
                    <motion.div
                      className="absolute inset-0"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                      whileHover={{ rotate: 720, scale: 1.2 }}
                    >
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute rounded-full group-hover:scale-125 transition-all duration-300"
                          style={{
                            left: `${20 + (i * 8) % 80}%`,
                            top: `${25 + (i * 10) % 70}%`,
                            width: `${6 + (i % 3) * 3}px`,
                            height: `${6 + (i % 3) * 3}px`,
                            background: i % 2 === 0
                              ? 'radial-gradient(circle, #a78bfa 0%, #8b5cf6 100%)'
                              : 'radial-gradient(circle, #60a5fa 0%, #3b82f6 100%)',
                            animationDelay: `${i * 0.4}s`
                          }}
                          animate={{
                            scale: [0.8, 1.2, 0.8],
                            opacity: [0.4, 0.8, 0.4]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: i * 0.3
                          }}
                        />
                      ))}
                    </motion.div>

                    {/* Consulting Network Lines */}
                    <svg className="absolute inset-0 w-full h-full" style={{ filter: 'drop-shadow(0 0 6px rgba(139, 92, 246, 0.4))' }}>
                      <motion.path
                        d="M 20% 30% Q 40% 20% 60% 30% T 80% 40%"
                        stroke="url(#consultingGradient)"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 4, delay: 0.5 }}
                        className="group-hover:stroke-width-2 group-hover:opacity-100 transition-all duration-300"
                      />
                      <motion.path
                        d="M 25% 60% Q 45% 70% 65% 60% T 85% 50%"
                        stroke="url(#consultingGradient)"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 4, delay: 1 }}
                        className="group-hover:stroke-width-2 group-hover:opacity-100 transition-all duration-300"
                      />

                      {/* Gradient Definition */}
                      <defs>
                        <linearGradient id="consultingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#a78bfa" stopOpacity="1" />
                          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" />
                          <stop offset="100%" stopColor="#6366f1" stopOpacity="1" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                )}

                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  ctaText={service.ctaText}
                  onCtaClick={() => window.location.href = '/services'}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Preview Section */}
      <section id="integrations" className="section-padding bg-gray-900 relative overflow-hidden">

        {/* Spectacular Background Canvas */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Animated Tech Patterns */}
          <motion.div
            className="absolute top-10 right-10 w-48 h-48 bg-gradient-to-br from-cyan-500/15 to-blue-500/15 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.6, 1],
              opacity: [0.15, 0.3, 0.15],
              rotate: [0, 120, 240, 360]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          <motion.div
            className="absolute bottom-10 left-10 w-36 h-36 bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.15, 0.25, 0.15],
              rotate: [0, -120, -240, -360]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Circuit Board Pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(6, 182, 212, 0.1) 2px, transparent 2px),
              radial-gradient(circle at 80% 70%, rgba(147, 51, 234, 0.1) 2px, transparent 2px),
              radial-gradient(circle at 40% 80%, rgba(236, 72, 153, 0.1) 2px, transparent 2px)
            `,
            backgroundSize: '100px 100px, 150px 150px, 120px 120px'
          }} />

          {/* Floating Tech Icons */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-2xl opacity-20"
                style={{
                  left: `${20 + (i * 10) % 80}%`,
                  top: `${30 + (i * 15) % 70}%`,
                  animationDelay: `${i * 0.5}s`
                }}
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                  scale: [0.8, 1.2, 0.8],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              >
                {['🔗', '⚡', '🌐', '🔌', '📡', '💻', '📱', '☁️'][i]}
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
              {t('home.integrationsPreview.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('home.integrationsPreview.subtitle')}
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
            {/* Left Side - Integration Cards Grid */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {integrationsPreview.map((integration, index) => (
              <motion.div
                key={integration.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                    className="bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 group hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col"
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-center mb-4 flex-grow">
                      <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <img 
                          src={integration.logo} 
                          alt={`${integration.name} logo`}
                          className="w-16 h-16 object-contain"
                        />
                </div>
                      <h3 className="text-xl font-semibold mb-3 text-purple-300 group-hover:text-purple-200 transition-colors">
                  {integration.name}
                </h3>
                      <p className="text-gray-300 leading-relaxed">
                  {integration.description}
                </p>
                    </div>
                    
                    {/* Integration Features */}
                    <div className="mt-6 pt-6 border-t border-gray-700/50">
                      <h4 className="font-semibold mb-3 text-purple-400 text-sm uppercase tracking-wide">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        <li className="text-sm text-gray-400 flex items-center">
                          <span className="text-purple-400 mr-2 text-lg">✓</span>
                          Seamless integration
                        </li>
                        <li className="text-sm text-gray-400 flex items-center">
                          <span className="text-purple-400 mr-2 text-lg">✓</span>
                          Real-time sync
                        </li>
                        <li className="text-sm text-gray-400 flex items-center">
                          <span className="text-purple-400 mr-2 text-lg">✓</span>
                          Secure connection
                        </li>
                      </ul>
                    </div>
                    
                    {/* Connect Button */}
                    <motion.button
                      className="w-full mt-6 px-4 py-2 border border-purple-400/50 text-purple-200 hover:bg-purple-500/20 hover:border-purple-400 rounded-lg transition-all duration-300 backdrop-blur-sm group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Connect {integration.name}
                    </motion.button>
              </motion.div>
            ))}
              </div>
            </div>

            {/* Right Side - Video */}
            <div className="lg:w-1/3">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative h-full min-h-[600px] rounded-2xl overflow-hidden"
              >
                {/* Video Background */}
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    filter: 'brightness(0.7) contrast(1.2) saturate(1.1)',
                    objectPosition: 'center'
                  }}
                  onEnded={(e) => {
                    // Add 2 second delay before restarting video
                    const video = e.target as HTMLVideoElement;
                    setTimeout(() => {
                      video.currentTime = 0;
                      video.play();
                    }, 2000);
                  }}
                >
                  <source src="/video/popular_integration.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Video Overlay for better readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-purple-900/50 to-gray-900/70" />
                
                {/* Video Content Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <div className="bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full p-4 mb-6">
                    <svg className="w-12 h-12 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    Seamless Integrations
                  </h3>
                  <p className="text-lg text-purple-200 leading-relaxed">
                    Connect your favorite tools and automate your workflow with our powerful integration platform.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.a
              href="/integrations"
              className="inline-block px-8 py-3 text-lg border border-purple-400/50 text-purple-200 hover:bg-purple-500/20 hover:border-purple-400 rounded-lg transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('home.integrationsPreview.viewAll')}
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <div className="bg-gray-800/50 relative overflow-hidden min-h-screen">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          autoPlay
          loop
          muted
          playsInline
          style={{
            filter: 'brightness(0.8) contrast(1.1) saturate(1.0)',
            objectPosition: 'center'
          }}
          onEnded={(e) => {
            // Add 2 second delay before restarting video
            const video = e.target as HTMLVideoElement;
            setTimeout(() => {
              video.currentTime = 0;
              video.play();
            }, 2000);
          }}
        >
          <source src="/video/customers_say.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Spectacular Background Canvas */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Animated Success Patterns */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full blur-xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.35, 0.2],
              rotate: [0, 90, 180, 270, 360]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          <motion.div
            className="absolute bottom-1/4 right-1/4 w-28 h-28 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-xl"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.2, 0.3, 0.2],
              rotate: [0, -90, -180, -270, -360]
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Success Stars Pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(234, 179, 8, 0.1) 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, rgba(34, 197, 94, 0.1) 1px, transparent 1px),
              radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px, 120px 120px, 100px 100px'
          }} />

          {/* Floating Success Icons */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-xl opacity-25"
                style={{
                  left: `${15 + (i * 15) % 85}%`,
                  top: `${20 + (i * 12) % 80}%`,
                  animationDelay: `${i * 0.4}s`
                }}
                animate={{
                  opacity: [0.25, 0.5, 0.25],
                  scale: [0.7, 1.1, 0.7],
                  y: [0, -15, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              >
                {['⭐', '🎯', '🏆', '💎', '🚀', '✨'][i]}
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="relative z-10">
          <Testimonials />
        </div>
      </div>

      {/* FAQs Section */}
      <section id="faqs" className="section-padding bg-gray-900/80 relative overflow-hidden">
        {/* Spectacular Background Canvas */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Animated FAQ Patterns */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.35, 0.2],
              rotate: [0, 90, 180, 270, 360]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          <motion.div
            className="absolute bottom-1/4 right-1/4 w-28 h-28 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.2, 0.3, 0.2],
              rotate: [0, -90, -180, -270, -360]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Question Mark Pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.1) 1px, transparent 1px),
              radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px, 120px 120px, 80px 80px'
          }} />
        </div>

        <div className="relative z-10">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get answers to the most common questions about Flowtify
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {[
                  {
                    question: "What is Flowtify and how does it work?",
                    answer: "Flowtify is a powerful workflow automation platform that connects your favorite tools and automates repetitive tasks. It works by creating custom workflows that trigger actions across multiple applications, saving you time and reducing manual work."
                  },
                  {
                    question: "How secure is my data with Flowtify?",
                    answer: "Your data security is our top priority. We use enterprise-grade encryption, secure API connections, and follow industry best practices for data protection. All data is encrypted in transit and at rest."
                  },
                  {
                    question: "Can I integrate Flowtify with my existing tools?",
                    answer: "Yes! Flowtify integrates with 100+ popular business tools including Slack, Notion, Salesforce, Zapier, HubSpot, and Asana. We're constantly adding new integrations based on user requests."
                  },
                  {
                    question: "How long does it take to set up my first workflow?",
                    answer: "Most users can create their first workflow in under 10 minutes using our intuitive drag-and-drop interface. We also provide pre-built templates to get you started quickly."
                  },
                  {
                    question: "What kind of support do you offer?",
                    answer: "We offer comprehensive support including live chat, email support, video tutorials, and a knowledge base. Enterprise customers also get dedicated account management and priority support."
                  }
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <h3 className="text-xl font-semibold mb-4 text-blue-300 group-hover:text-blue-200 transition-colors">
                      {faq.question}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gray-800/50 relative overflow-hidden">
        {/* Spectacular Background Canvas */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Animated Contact Patterns */}
          <motion.div
            className="absolute top-1/3 left-1/3 w-36 h-36 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.25, 0.4, 0.25],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <motion.div
            className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.25, 0.35, 0.25],
              rotate: [0, -180, -360]
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Connection Lines Pattern */}
          <svg className="absolute inset-0 w-full h-full">
            <motion.path
              d="M 20% 30% Q 40% 20% 60% 30% T 80% 40%"
              stroke="url(#contactGradient)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 5, delay: 0.5 }}
            />
            <motion.path
              d="M 25% 70% Q 45% 60% 65% 70% T 85% 60%"
              stroke="url(#contactGradient)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 5, delay: 1 }}
            />

            <defs>
              <linearGradient id="contactGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
              </linearGradient>
            </defs>
          </svg>

          {/* Floating Contact Icons */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-lg opacity-25"
                style={{
                  left: `${15 + (i * 10) % 80}%`,
                  top: `${25 + (i * 8) % 70}%`,
                  animationDelay: `${i * 0.4}s`
                }}
                animate={{
                  opacity: [0.25, 0.5, 0.25],
                  scale: [0.8, 1.2, 0.8],
                  y: [0, -18, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              >
                {['📧', '💬', '📱', '🌐', '📞', '✉️', '💻', '🤝'][i]}
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="relative z-10">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-300 to-teal-300 bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to transform your workflow? Let's discuss how Flowtify can help your business grow.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Information */}
          <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
                  className="space-y-6"
                >
                  <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
                    <h3 className="text-2xl font-bold mb-6 text-green-300">
                      Contact Information
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-white">Email</p>
                          <p className="text-gray-300">hello@flowtify.com</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-white">Phone</p>
                          <p className="text-gray-300">+1 (555) 123-4567</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-white">Office</p>
                          <p className="text-gray-300">123 Innovation Drive<br />Tech City, TC 12345</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6"
                >
                  <h3 className="text-2xl font-bold mb-6 text-teal-300">
                    Send us a Message
                  </h3>
                  <form onSubmit={handleContactSubmit} className="space-y-4" noValidate>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={contactForm.name}
                          onChange={(e) => handleContactChange('name', e.target.value)}
                          className={`w-full px-4 py-3 pr-12 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                            contactErrors.name 
                              ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500' 
                              : 'border-gray-600/50 focus:ring-teal-500/50 focus:border-teal-500'
                          }`}
                          placeholder="Your name"
                        />
                        
                        {/* Error Icon */}
                        {contactErrors.name && (
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                              </svg>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Error Message */}
                      {contactErrors.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 text-sm text-red-400 flex items-center space-x-2"
                        >
                          <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                          </svg>
                          <span>{contactErrors.name}</span>
                        </motion.div>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="email"
                          name="email"
                          value={contactForm.email}
                          onChange={(e) => handleContactChange('email', e.target.value)}
                          className={`w-full px-4 py-3 pr-12 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                            contactErrors.email 
                              ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500' 
                              : 'border-gray-600/50 focus:ring-teal-500/50 focus:border-teal-500'
                          }`}
                          placeholder="your.email@example.com"
                        />
                        
                        {/* Error Icon */}
                        {contactErrors.email && (
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                              </svg>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Error Message */}
                      {contactErrors.email && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 text-sm text-red-400 flex items-center space-x-2"
                        >
                          <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                          </svg>
                          <span>{contactErrors.email}</span>
                        </motion.div>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                        Subject
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={contactForm.subject}
                          onChange={(e) => handleContactChange('subject', e.target.value)}
                          className={`w-full px-4 py-3 pr-12 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                            contactErrors.subject 
                              ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500' 
                              : 'border-gray-600/50 focus:ring-teal-500/50 focus:border-teal-500'
                          }`}
                          placeholder="How can we help?"
                        />
                        
                        {/* Error Icon */}
                        {contactErrors.subject && (
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                              </svg>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Error Message */}
                      {contactErrors.subject && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 text-sm text-red-400 flex items-center space-x-2"
                        >
                          <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                          </svg>
                          <span>{contactErrors.subject}</span>
                        </motion.div>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message
                      </label>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={contactForm.message}
                          onChange={(e) => handleContactChange('message', e.target.value)}
                          className={`w-full px-4 py-3 pr-12 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                            contactErrors.message 
                              ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500' 
                              : 'border-gray-600/50 focus:ring-teal-500/50 focus:border-teal-500'
                          }`}
                          placeholder="Tell us about your project..."
                        />
                        
                        {/* Error Icon */}
                        {contactErrors.message && (
                          <div className="absolute top-3 right-3 flex items-center pointer-events-none">
                            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                              </svg>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Error Message */}
                      {contactErrors.message && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 text-sm text-red-400 flex items-center space-x-2"
                        >
                          <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                          </svg>
                          <span>{contactErrors.message}</span>
                        </motion.div>
                      )}
                    </div>
                    
                    <motion.button
                      type="submit"
                      className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Message
                    </motion.button>
                  </form>
          </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home; 