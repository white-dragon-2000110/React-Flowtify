import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import Testimonials from '../components/Testimonials';
import RequestDemoButton from '../components/RequestDemoButton';
import { Vortex } from '../components/Vortex';
import Circle from '../components/Circle';
import AnimatedBeam from '../components/AnimatedBeam';

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
  
  // Refs for circular layout
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  
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

  // Modal state for Workflow Automation card
  const [showWorkflowModal, setShowWorkflowModal] = useState(false);
  
  // Modal state for AI-Powered Solutions card
  const [showAISolutionsModal, setShowAISolutionsModal] = useState(false);
  
  // Modal state for System Integration card
  const [showSystemIntegrationModal, setShowSystemIntegrationModal] = useState(false);
  
  // Modal state for Consulting Services card
  const [showConsultingModal, setShowConsultingModal] = useState(false);

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

  // Handle AI icon click to show Workflow Automation modal
  const handleAIIconClick = () => {
    setShowWorkflowModal(true);
  };

  // Handle Integration icon click to show AI-Powered Solutions modal
  const handleIntegrationIconClick = () => {
    setShowAISolutionsModal(true);
  };

  // Handle System Integration icon click to show System Integration modal
  const handleSystemIntegrationIconClick = () => {
    setShowSystemIntegrationModal(true);
  };

  // Handle Consulting Services icon click to show Consulting Services modal
  const handleConsultingIconClick = () => {
    setShowConsultingModal(true);
  };

  // Handle escape key to close modals
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (showWorkflowModal) {
          setShowWorkflowModal(false);
        }
        if (showAISolutionsModal) {
          setShowAISolutionsModal(false);
        }
        if (showSystemIntegrationModal) {
          setShowSystemIntegrationModal(false);
        }
        if (showConsultingModal) {
          setShowConsultingModal(false);
        }
      }
    };

    if (showWorkflowModal || showAISolutionsModal || showSystemIntegrationModal || showConsultingModal) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [showWorkflowModal, showAISolutionsModal, showSystemIntegrationModal, showConsultingModal]);



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
    { name: 'LinkedIn', logo: '/svg/linkedin-icon.svg', description: 'Professional networking' },
    { name: 'WhatsApp', logo: '/svg/whatsapp-icon.svg', description: 'Business messaging' },
    { name: 'Instagram', logo: '/svg/instagram-icon.svg', description: 'Social media marketing' },
    { name: 'Facebook', logo: '/svg/facebook-icon.svg', description: 'Community engagement' },
    { name: 'Calendly', logo: '/svg/calendly-icon.svg', description: 'Meeting scheduling' },
    { name: 'Slack', logo: '/svg/slack-icon.svg', description: 'Team communication' }
  ];

  return (
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
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent h-[110px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t('home.hero.title')}
          </motion.h1>

          {/* Hero Video */}
          <motion.div
            className="w-full max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <video
              className="w-full h-auto rounded-2xl shadow-2xl"
              autoPlay
              muted
              loop
              playsInline
              style={{
                filter: 'brightness(0.9) contrast(1.1) saturate(1.1)',
              }}
            >
              <source src="/video/home.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          <motion.h2
            className="text-2xl md:text-4xl font-semibold mb-8 mt-5 text-gray-200"
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

          {/* Vortex Animation Component */}
          <motion.div
            className="w-full max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Vortex
              backgroundColor="transparent"
              particleCount={200}
              baseHue={270}
              baseSpeed={0.08}
              rangeSpeed={0.2}
              baseRadius={0.6}
              rangeRadius={1.2}
              className="h-64 w-full rounded-2xl overflow-hidden"
              containerClassName="h-64 w-full"
            />
          </motion.div>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <RequestDemoButton size="lg" />
            <motion.button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  const headerHeight = 64; // h-16 = 64px
                  const elementPosition = contactSection.offsetTop - headerHeight;
                  window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                  });
                }
              }}
              className="px-8 py-4 text-xl border border-purple-400/50 text-purple-200 hover:bg-purple-500/20 hover:border-purple-400 rounded-lg transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('common.contactUs')}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section id="services" className="section-padding bg-gray-800/50 relative overflow-hidden">
        {/* Simple Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 via-purple-900/20 to-gray-800/50" />

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

          <div className="relative max-w-6xl mx-auto">
            {/* Circular Services Layout */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative flex w-full max-w-[800px] items-center justify-center overflow-hidden rounded-2xl border border-gray-700/50 bg-gray-800/20 backdrop-blur-sm p-16 mx-auto"
              ref={containerRef}
            >
              {/* Background Video */}
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover opacity-100 z-0"
              >
                <source src="/video/ourservice.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
              {/* Gradient Line */}
              <div className="absolute right-5 top-0 h-px w-1/2 bg-gradient-to-l from-transparent via-purple-400/30 via-10% to-transparent" />
              
              {/* Main Component */}
              <div className="flex h-full w-full flex-row justify-between gap-16 max-w-lg items-center">
                <div className="flex flex-col justify-center gap-4">
                  {/* Div 1 - AI */}
                  {/* Div 1 - AI */}
                  <Circle ref={div1Ref} className='mt-16'>
                    <svg
                      viewBox="0 0 256 308"
                      width="40"
                      height="40"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid"
                      className="cursor-pointer hover:scale-110 transition-transform duration-200"
                      onClick={handleAIIconClick}
                    >
                      <path
                        d="M239.682 40.707C211.113-.182 154.69-12.301 113.895 13.69L42.247 59.356a82.198 82.198 0 0 0-37.135 55.056 86.566 86.566 0 0 0 8.536 55.576 82.425 82.425 0 0 0-12.296 30.719 87.596 87.596 0 0 0 14.964 66.244c28.574 40.893 84.997 53.007 125.787 27.016l71.648-45.664a82.182 82.182 0 0 0 37.135-55.057 86.601 86.601 0 0 0-8.53-55.577 82.409 82.409 0 0 0 12.29-30.718 87.573 87.573 0 0 0-14.963-66.244"
                        fill="#FF3E00"
                      />
                      <path
                        d="M106.889 270.841c-23.102 6.007-47.497-3.036-61.103-22.648a52.685 52.685 0 0 1-9.003-39.85 49.978 49.978 0 0 1 1.713-6.693l1.35-4.115 3.671 2.697a92.447 92.447 0 0 0 28.036 14.007l2.663.808-.245 2.659a16.067 16.067 0 0 0 2.89 10.656 17.143 17.143 0 0 0 18.397 6.828 15.786 15.786 0 0 0 4.403-1.935l71.67-45.672a14.922 14.922 0 0 0 6.734-9.977 15.923 15.923 0 0 0-2.713-12.011 17.156 17.156 0 0 0-18.404-6.832 15.78 15.78 0 0 0-4.396 1.933l-27.35 17.434a52.298 52.298 0 0 1-14.553 6.391c-23.101 6.007-47.497-3.036-61.101-22.649a52.681 52.681 0 0 1-9.004-39.849 49.428 49.428 0 0 1 22.34-33.114l71.664-45.677a52.218 52.218 0 0 1 14.563-6.398c23.101-6.007 47.497 3.036 61.101 22.648a52.685 52.685 0 0 1 9.004 39.85 50.559 50.559 0 0 1-1.713 6.692l-1.35 4.116-3.67-2.693a92.373 92.373 0 0 0-28.037-14.013l-2.664-.809.246-2.658a16.099 16.099 0 0 0-2.89-10.656 17.143 17.143 0 0 0-18.398-6.828 15.786 15.786 0 0 0-4.402 1.935l-71.67 45.674a14.898 14.898 0 0 0-6.73 9.975 15.9 15.9 0 0 0 2.709 12.012 17.156 17.156 0 0 0 18.404 6.832 15.841 15.841 0 0 0 4.402-1.935l27.345-17.427a52.147 52.147 0 0 1 14.552-6.397c23.101-6.006 47.497 3.037 61.102 22.65a52.681 52.681 0 0 1 9.003 39.848 49.453 49.453 0 0 1-22.34 33.12l-71.664 45.673a52.218 52.218 0 0 1-14.563 6.398"
                        fill="#FFF"
                      />
                    </svg>
                  </Circle>
                  
                  {/* Div 2 - AI-Powered Solutions */}
                  <Circle ref={div2Ref}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="120"
                      height="120"
                      viewBox="0 0 120 120"
                      className="cursor-pointer hover:scale-110 transition-transform duration-200"
                      onClick={handleIntegrationIconClick}
                    >
                      {/* Main AI Brain */}
                      <path
                        d="M60 20 C40 20 25 35 25 55 C25 75 40 90 60 90 C80 90 95 75 95 55 C95 35 80 20 60 20 Z"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="3"
                      />
                      
                      {/* Brain Folds */}
                      <path
                        d="M35 40 Q45 35 55 40 Q65 45 75 40 Q85 35 95 40"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="2"
                        opacity="0.8"
                      />
                      <path
                        d="M35 50 Q45 45 55 50 Q65 55 75 50 Q85 45 95 50"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="2"
                        opacity="0.8"
                      />
                      <path
                        d="M35 60 Q45 55 55 60 Q65 65 75 60 Q85 55 95 60"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="2"
                        opacity="0.8"
                      />
                      
                      {/* AI Circuit Lines */}
                      <path
                        d="M20 30 L40 30 L40 40 L60 40 L60 50 L80 50 L80 60 L100 60"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="2"
                        opacity="0.7"
                      />
                      
                      {/* Data Nodes */}
                      <circle cx="20" cy="30" r="3" fill="#fff" opacity="0.9" />
                      <circle cx="40" cy="30" r="3" fill="#fff" opacity="0.9" />
                      <circle cx="40" cy="40" r="3" fill="#fff" opacity="0.9" />
                      <circle cx="60" cy="40" r="3" fill="#fff" opacity="0.9" />
                      <circle cx="60" cy="50" r="3" fill="#fff" opacity="0.9" />
                      <circle cx="80" cy="50" r="3" fill="#fff" opacity="0.9" />
                      <circle cx="80" cy="60" r="3" fill="#fff" opacity="0.9" />
                      <circle cx="100" cy="60" r="3" fill="#fff" opacity="0.9" />
                      
                      {/* Central Processing Unit */}
                      <circle cx="60" cy="55" r="8" fill="#fff" opacity="0.3" />
                      <circle cx="60" cy="55" r="5" fill="#fff" />
                      
                      {/* AI Text */}
                      <text x="60" y="110" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">
                        AI
                      </text>
                    </svg>
                  </Circle>
                  
                  {/* Div 3 - System Integration */}
                  <Circle ref={div3Ref}>
                    <svg
                      width="120"
                      height="120"
                      viewBox="0 0 120 120"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="cursor-pointer hover:scale-110 transition-transform duration-200"
                      onClick={handleSystemIntegrationIconClick}
                    >
                      {/* Main System Box */}
                      <rect x="20" y="20" width="80" height="60" rx="8" fill="none" stroke="#fff" strokeWidth="3" />
                      
                      {/* Connection Points */}
                      <circle cx="15" cy="35" r="3" fill="#fff" />
                      <circle cx="15" cy="50" r="3" fill="#fff" />
                      <circle cx="15" cy="65" r="3" fill="#fff" />
                      <circle cx="105" cy="35" r="3" fill="#fff" />
                      <circle cx="105" cy="50" r="3" fill="#fff" />
                      <circle cx="105" cy="65" r="3" fill="#fff" />
                      
                      {/* Connection Lines */}
                      <path d="M15 35 L20 35" stroke="#fff" strokeWidth="2" />
                      <path d="M15 50 L20 50" stroke="#fff" strokeWidth="2" />
                      <path d="M15 65 L20 65" stroke="#fff" strokeWidth="2" />
                      <path d="M100 35 L105 35" stroke="#fff" strokeWidth="2" />
                      <path d="M100 50 L105 50" stroke="#fff" strokeWidth="2" />
                      <path d="M100 65 L105 65" stroke="#fff" strokeWidth="2" />
                      
                      {/* Internal Components */}
                      <rect x="30" y="30" width="20" height="15" rx="3" fill="#fff" opacity="0.3" />
                      <rect x="70" y="30" width="20" height="15" rx="3" fill="#fff" opacity="0.3" />
                      <rect x="30" y="55" width="20" height="15" rx="3" fill="#fff" opacity="0.3" />
                      <rect x="70" y="55" width="20" height="15" rx="3" fill="#fff" opacity="0.3" />
                      
                      {/* Central Hub */}
                      <circle cx="60" cy="50" r="8" fill="#fff" opacity="0.2" />
                      <circle cx="60" cy="50" r="5" fill="#fff" />
                      
                      {/* Data Flow Arrows */}
                      <path d="M50 50 L45 50" stroke="#fff" strokeWidth="2" markerEnd="url(#arrowhead)" />
                      <path d="M70 50 L75 50" stroke="#fff" strokeWidth="2" markerEnd="url(#arrowhead)" />
                      <path d="M60 40 L60 35" stroke="#fff" strokeWidth="2" markerEnd="url(#arrowhead)" />
                      <path d="M60 60 L60 65" stroke="#fff" strokeWidth="2" markerEnd="url(#arrowhead)" />
                      
                      {/* Arrow Markers */}
                      <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" fill="#fff" />
                        </marker>
                      </defs>
                      
                      {/* Integration Text */}
                      <text x="60" y="100" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">
                        INTEGRATION
                      </text>
                    </svg>
                  </Circle>
                  
                  {/* Div 4 - Consulting Services */}
                  <Circle ref={div4Ref}>
                    <svg
                      width="120"
                      height="120"
                      viewBox="0 0 120 120"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="cursor-pointer hover:scale-110 transition-transform duration-200"
                      onClick={handleConsultingIconClick}
                    >
                      {/* Professional Person */}
                      <circle cx="60" cy="35" r="15" fill="#fff" />
                      
                      {/* Business Suit */}
                      <path d="M45 50 L75 50 L75 85 L45 85 Z" fill="#fff" />
                      <path d="M50 50 L70 50 L70 75 L50 75 Z" fill="#fff" opacity="0.3" />
                      
                      {/* Tie */}
                      <path d="M58 50 L62 50 L60 85 Z" fill="#fff" opacity="0.8" />
                      
                      {/* Briefcase */}
                      <rect x="35" y="70" width="50" height="25" rx="3" fill="none" stroke="#fff" strokeWidth="2" />
                      <rect x="40" y="75" width="40" height="15" fill="#fff" opacity="0.3" />
                      <path d="M45 70 L45 65 L55 65 L55 70" fill="none" stroke="#fff" strokeWidth="2" />
                      
                      {/* Charts and Graphs */}
                      <rect x="25" y="25" width="20" height="15" rx="2" fill="none" stroke="#fff" strokeWidth="1.5" opacity="0.7" />
                      <path d="M30 35 L35 32 L40 35 L45 30" fill="none" stroke="#fff" strokeWidth="1.5" opacity="0.7" />
                      
                      <rect x="75" y="25" width="20" height="15" rx="2" fill="none" stroke="#fff" strokeWidth="1.5" opacity="0.7" />
                      <rect x="78" y="28" width="4" height="9" fill="#fff" opacity="0.7" />
                      <rect x="84" y="30" width="4" height="7" fill="#fff" opacity="0.7" />
                      <rect x="90" y="32" width="4" height="5" fill="#fff" opacity="0.7" />
                      
                      {/* Consulting Text */}
                      <text x="60" y="110" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">
                        CONSULTING
                      </text>
                    </svg>
                  </Circle>
                </div>
                
                <div className="flex flex-col justify-center">
                  {/* Div 6 - Central AI Card */}
                  <Circle ref={div6Ref}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      shapeRendering="geometricPrecision"
                      textRendering="geometricPrecision"
                      imageRendering="optimizeQuality"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      viewBox="0 0 512 512"
                    >
                      <rect
                        fill="#CC9B7A"
                        width="512"
                        height="512"
                        rx="104.187"
                        ry="105.042"
                      />
                      <path
                        fill="#1F1F1E"
                        fillRule="nonzero"
                        d="M318.663 149.787h-43.368l78.952 212.423 43.368.004-78.952-212.427zm-125.326 0l-78.952 212.427h44.255l15.932-44.608 82.846-.004 16.107 44.612h44.255l-79.126-212.427h-45.317zm-4.251 128.341l26.91-74.701 27.083 74.701h-53.993z"
                      />
                    </svg>
                  </Circle>
                </div>
                
                <div className="flex flex-col justify-center">
                  {/* Div 7 - User */}
                  <Circle ref={div7Ref}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className='text-white'
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </Circle>
                </div>
              </div>

              {/* Animated Beams */}
              <AnimatedBeam 
                containerRef={containerRef} 
                fromRef={div1Ref} 
                toRef={div6Ref}
                curvature={20}
                gradientStartColor="#ffaa40"
                gradientStopColor="#9c40ff"
                duration={6}
                delay={0.2}
                intendedWidth={800}
                intendedHeight={434}
              />
              <AnimatedBeam 
                containerRef={containerRef} 
                fromRef={div2Ref} 
                toRef={div6Ref}
                curvature={15}
                gradientStartColor="#40ffaa"
                gradientStopColor="#409cff"
                duration={5.5}
                delay={0.4}
                intendedWidth={800}
                intendedHeight={434}
              />
              <AnimatedBeam 
                containerRef={containerRef} 
                fromRef={div3Ref} 
                toRef={div6Ref}
                curvature={25}
                gradientStartColor="#ff40aa"
                gradientStopColor="#9c40ff"
                duration={6.5}
                delay={0.6}
                intendedWidth={800}
                intendedHeight={434}
              />
              <AnimatedBeam 
                containerRef={containerRef} 
                fromRef={div4Ref} 
                toRef={div6Ref}
                curvature={18}
                gradientStartColor="#aa40ff"
                gradientStopColor="#40ff9c"
                duration={5.8}
                delay={0.8}
                intendedWidth={800}
                intendedHeight={434}
              />
              <AnimatedBeam 
                containerRef={containerRef} 
                fromRef={div5Ref} 
                toRef={div6Ref}
                curvature={22}
                gradientStartColor="#ff9c40"
                gradientStopColor="#40aaff"
                duration={6.2}
                delay={1.0}
                intendedWidth={800}
                intendedHeight={434}
              />
              <AnimatedBeam 
                containerRef={containerRef} 
                fromRef={div6Ref} 
                toRef={div7Ref}
                curvature={30}
                reverse={true}
                gradientStartColor="#ff4080"
                gradientStopColor="#8040ff"
                duration={7}
                delay={1.2}
                intendedWidth={800}
                intendedHeight={434}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Cards Section */}
      <section className="section-padding bg-gray-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/5 to-gray-900" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-20 w-2 h-2 bg-purple-400/30 rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-40 right-32 w-1 h-1 bg-blue-400/40 rounded-full"
            animate={{
              y: [0, 15, 0],
              opacity: [0.4, 0.9, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-purple-500/25 rounded-full"
            animate={{
              y: [0, -25, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {servicesPreview.map((service, index) => (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Animated Card Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-purple-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0, 0.3, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Main Card */}
                <motion.div
                  className="relative bg-gradient-to-br from-gray-800/90 via-gray-800/80 to-gray-900/90 backdrop-blur-xl border border-gray-700/30 rounded-3xl p-6 h-full group-hover:border-purple-500/50 group-hover:shadow-2xl group-hover:shadow-purple-500/30 transition-all duration-500 overflow-hidden"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated Border Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Icon Container with Glow */}
                  <div className="relative mb-6">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0, 0.3, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <div className="relative flex justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-purple-400/30 group-hover:border-purple-400/50 transition-all duration-300">
                        <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                          {service.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Title with Gradient */}
                  <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-300 via-blue-300 to-purple-300 bg-clip-text text-transparent group-hover:from-purple-200 group-hover:via-blue-200 group-hover:to-purple-200 transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-purple-400 text-sm uppercase tracking-wide group-hover:text-purple-300 transition-colors duration-300">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex}
                          className="text-sm text-gray-400 flex items-center group-hover:text-gray-300 transition-colors duration-300"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                        >
                          <motion.span 
                            className="mr-3 text-purple-400 group-hover:text-purple-300 transition-colors duration-300"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            ✓
                          </motion.span>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* CTA Button */}
                  <motion.button
                    className="relative w-full px-6 py-3 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 border border-purple-400/50 text-purple-200 hover:from-purple-500/30 hover:via-blue-500/30 hover:to-purple-500/30 hover:border-purple-400 rounded-2xl transition-all duration-300 backdrop-blur-sm group-hover:shadow-lg group-hover:shadow-purple-500/25 overflow-hidden"
                    onClick={() => window.location.href = '/services'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Button Glow Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{
                        x: ['-100%', '100%']
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    
                    {/* Button Text */}
                    <span className="relative z-10 font-semibold group-hover:text-white transition-colors duration-300">
                      {service.ctaText}
                    </span>
                  </motion.button>
                  
                  {/* Bottom Glow Line */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-3/4 transition-all duration-500"
                    whileHover={{ width: '75%' }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Preview Section */}
      <section id="integrations" className="section-padding bg-gray-900 relative overflow-hidden">
        {/* Simple Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent h-[60px]">
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
                             integration.name === 'WhatsApp' ? (
                 // Special Card for WhatsApp (without video)
                 <motion.div
                   key={integration.name}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.6, delay: index * 0.1 }}
                   className="relative group"
                 >
                  {/* Animated Card Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-purple-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0, 0.3, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Main Card */}
                  <motion.div
                    className="relative bg-gradient-to-br from-gray-800/90 via-gray-800/80 to-gray-900/90 backdrop-blur-xl border border-purple-500/50 rounded-3xl p-6 h-full group-hover:shadow-2xl group-hover:shadow-purple-500/30 transition-all duration-500 overflow-hidden"
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Animated Border Glow */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    
                    <div className="text-center mb-4 flex-grow relative z-10">
                      <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <img 
                          src={integration.logo} 
                          alt={`${integration.name} logo`}
                          className="w-16 h-16 object-contain"
                        />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-purple-300 via-blue-300 to-purple-300 bg-clip-text text-transparent group-hover:from-purple-200 group-hover:via-blue-200 group-hover:to-purple-200 transition-all duration-300">
                        {integration.name}
                      </h3>
                      <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {integration.description}
                      </p>
                    </div>
                    
                    {/* Integration Features */}
                    <div className="mt-6 pt-6 border-t border-gray-700/50 relative z-10">
                      <h4 className="font-semibold mb-3 text-purple-400 text-sm uppercase tracking-wide group-hover:text-purple-300 transition-colors duration-300">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        <li className="text-sm text-gray-400 flex items-center group-hover:text-gray-300 transition-colors duration-300">
                          <motion.span 
                            className="text-purple-400 mr-2 text-lg group-hover:text-purple-300 transition-colors duration-300"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            ✓
                          </motion.span>
                          Seamless integration
                        </li>
                        <li className="text-sm text-gray-400 flex items-center group-hover:text-gray-300 transition-colors duration-300">
                          <motion.span 
                            className="text-purple-400 mr-2 text-lg group-hover:text-purple-300 transition-colors duration-300"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            ✓
                          </motion.span>
                          Real-time sync
                        </li>
                        <li className="text-sm text-gray-400 flex items-center group-hover:text-gray-300 transition-colors duration-300">
                          <motion.span 
                            className="text-purple-400 mr-2 text-lg group-hover:text-purple-300 transition-colors duration-300"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            ✓
                          </motion.span>
                          Secure connection
                        </li>
                      </ul>
                    </div>
                    
                    {/* Enhanced Connect Button */}
                    <motion.button
                      className="relative w-full mt-6 px-4 py-3 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 border border-purple-400/50 text-purple-200 hover:from-purple-500/30 hover:via-blue-500/30 hover:to-purple-500/30 hover:border-purple-400 rounded-2xl transition-all duration-300 backdrop-blur-sm group-hover:shadow-lg group-hover:shadow-purple-500/25 overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Button Glow Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        animate={{
                          x: ['-100%', '100%']
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                      
                      {/* Button Text */}
                      <span className="relative z-10 font-semibold group-hover:text-white transition-colors duration-300">
                        Connect {integration.name}
                      </span>
                    </motion.button>
                    
                    {/* Bottom Glow Line */}
                    <motion.div
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-3/4 transition-all duration-500"
                      whileHover={{ width: '75%' }}
                    />
                  </motion.div>
                </motion.div>
              ) : (
                // Regular Card for other integrations
                <motion.div
                  key={integration.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Animated Card Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-purple-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0, 0.3, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Main Card */}
                  <motion.div
                    className="relative bg-gradient-to-br from-gray-800/90 via-gray-800/80 to-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-6 h-full group-hover:border-purple-500/50 group-hover:shadow-2xl group-hover:shadow-purple-500/30 transition-all duration-500 overflow-hidden"
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Animated Border Glow */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    
                    <div className="text-center mb-4 flex-grow relative z-10">
                      <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <img 
                          src={integration.logo} 
                          alt={`${integration.name} logo`}
                          className="w-16 h-16 object-contain"
                        />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-purple-300 via-blue-300 to-purple-300 bg-clip-text text-transparent group-hover:from-purple-200 group-hover:via-blue-200 group-hover:to-purple-200 transition-all duration-300">
                        {integration.name}
                      </h3>
                      <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {integration.description}
                      </p>
                    </div>
                    
                    {/* Integration Features */}
                    <div className="mt-6 pt-6 border-t border-gray-700/50 relative z-10">
                      <h4 className="font-semibold mb-3 text-purple-400 text-sm uppercase tracking-wide group-hover:text-purple-300 transition-colors duration-300">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        <li className="text-sm text-gray-400 flex items-center group-hover:text-gray-300 transition-colors duration-300">
                          <motion.span 
                            className="text-purple-400 mr-2 text-lg group-hover:text-purple-300 transition-colors duration-300"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            ✓
                          </motion.span>
                          Seamless integration
                        </li>
                        <li className="text-sm text-gray-400 flex items-center group-hover:text-gray-300 transition-colors duration-300">
                          <motion.span 
                            className="text-purple-400 mr-2 text-lg group-hover:text-purple-300 transition-colors duration-300"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            ✓
                          </motion.span>
                          Real-time sync
                        </li>
                        <li className="text-sm text-gray-400 flex items-center group-hover:text-gray-300 transition-colors duration-300">
                                                     <motion.span 
                             className="text-purple-400 mr-2 text-lg group-hover:text-purple-300 transition-colors duration-300"
                             whileHover={{ scale: 1.2, rotate: 5 }}
                             transition={{ duration: 0.2 }}
                           >
                             ✓
                           </motion.span>
                          Secure connection
                        </li>
                      </ul>
                    </div>
                    
                    {/* Enhanced Connect Button */}
                    <motion.button
                      className="relative w-full mt-6 px-4 py-3 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 border border-purple-400/50 text-purple-200 hover:from-purple-500/30 hover:via-blue-500/30 hover:to-purple-500/30 hover:border-purple-400 rounded-2xl transition-all duration-300 backdrop-blur-sm group-hover:shadow-lg group-hover:shadow-purple-500/25 overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Button Glow Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        animate={{
                          x: ['-100%', '100%']
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                      
                      {/* Button Text */}
                      <span className="relative z-10 font-semibold group-hover:text-white transition-colors duration-300">
                        Connect {integration.name}
                      </span>
                    </motion.button>
                    
                    {/* Bottom Glow Line */}
                    <motion.div
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-3/4 transition-all duration-500"
                      whileHover={{ width: '75%' }}
                    />
                  </motion.div>
                </motion.div>
              )
            ))}
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="lg:w-1/3">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative h-full min-h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/40 via-blue-900/30 to-indigo-900/40 border border-purple-500/30"
              >
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <div className="bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full p-4 mb-6">
                    <svg className="w-12 h-12 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">
                    Seamless Integrations
                  </h3>
                  <p className="text-lg text-purple-200 leading-relaxed">
                    Connect your favorite tools and automate your workflow with our powerful integration platform.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>


        </div>
      </section>

      {/* Testimonials Section */}
      <div className="bg-gradient-to-br from-gray-800/50 via-purple-900/20 to-gray-800/50 relative overflow-hidden min-h-screen">
        {/* Simple Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 via-purple-900/20 to-gray-800/50" />

        <div className="relative z-10">
          <Testimonials />
        </div>
      </div>

      {/* FAQs Section */}
      <section id="faqs" className="section-padding bg-gray-900/80 relative overflow-hidden">
        {/* Simple Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-purple-900/10 to-gray-900/80" />

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
        {/* Simple Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 via-green-900/20 to-gray-800/50" />

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

      {/* Workflow Automation Modal */}
      {showWorkflowModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowWorkflowModal(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-gray-800/90 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center">
                  <svg
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10"
                  >
                    {/* Central Automation Hub */}
                    <circle
                      cx="32"
                      cy="32"
                      r="20"
                      fill="url(#hubGradient)"
                      stroke="url(#hubStroke)"
                      strokeWidth="2"
                    />

                    {/* Inner Hub Core */}
                    <circle
                      cx="32"
                      cy="32"
                      r="12"
                      fill="url(#coreGradient)"
                      stroke="url(#coreStroke)"
                      strokeWidth="1.5"
                    />

                    {/* Rotating Gear System */}
                    <g>
                      {/* Main Gear */}
                      <circle
                        cx="32"
                        cy="32"
                        r="16"
                        fill="none"
                        stroke="url(#gearGradient)"
                        strokeWidth="2"
                        strokeDasharray="2 2"
                      />

                      {/* Gear Teeth */}
                      {[...Array(12)].map((_, i) => (
                        <rect
                          key={i}
                          x="30"
                          y="16"
                          width="4"
                          height="6"
                          rx="2"
                          fill="url(#gearTeethGradient)"
                          transform={`rotate(${i * 30} 32 32)`}
                        />
                      ))}
                    </g>

                    {/* Workflow Process Nodes */}
                    <circle cx="16" cy="16" r="5" fill="url(#processGradient)" stroke="url(#processStroke)" strokeWidth="1.5" />
                    <circle cx="48" cy="16" r="5" fill="url(#processGradient)" stroke="url(#processStroke)" strokeWidth="1.5" />
                    <circle cx="16" cy="48" r="5" fill="url(#processGradient)" stroke="url(#processStroke)" strokeWidth="1.5" />
                    <circle cx="48" cy="48" r="5" fill="url(#processGradient)" stroke="url(#processStroke)" strokeWidth="1.5" />

                    {/* Gradients */}
                    <defs>
                      <linearGradient id="hubGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ff8a00" />
                        <stop offset="100%" stopColor="#ff6b35" />
                      </linearGradient>
                      <linearGradient id="hubStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffaa40" />
                        <stop offset="100%" stopColor="#ff6b35" />
                      </linearGradient>
                      <linearGradient id="coreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="100%" stopColor="#ffd700" />
                      </linearGradient>
                      <linearGradient id="coreStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffaa40" />
                        <stop offset="100%" stopColor="#ff6b35" />
                      </linearGradient>
                      <linearGradient id="gearGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffaa40" />
                        <stop offset="100%" stopColor="#ff6b35" />
                      </linearGradient>
                      <linearGradient id="gearTeethGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="100%" stopColor="#ffd700" />
                      </linearGradient>
                      <linearGradient id="processGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffaa40" />
                        <stop offset="100%" stopColor="#ff6b35" />
                      </linearGradient>
                      <linearGradient id="processStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="100%" stopColor="#ffd700" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    Workflow Automation
                  </h2>
                  <p className="text-gray-400 text-lg">Streamline your business processes</p>
                </div>
              </div>
              <button
                onClick={() => setShowWorkflowModal(false)}
                className="w-10 h-10 bg-gray-700/50 hover:bg-gray-600/50 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="space-y-6">
              <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600/30">
                <h3 className="text-xl font-semibold text-white mb-4">What is Workflow Automation?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Workflow automation is the process of automating repetitive tasks and business processes using technology. 
                  It helps organizations reduce manual work, minimize errors, and improve efficiency by creating automated 
                  workflows that can handle complex business logic and decision-making processes.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600/30">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Benefits</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      Increased productivity
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      Reduced errors
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      Cost savings
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      Better compliance
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600/30">
                  <h4 className="text-lg font-semibold text-white mb-3">Use Cases</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      Customer onboarding
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      Invoice processing
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      HR workflows
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      Marketing campaigns
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl p-6 border border-orange-500/30">
                <h4 className="text-lg font-semibold text-white mb-3">Ready to Automate?</h4>
                <p className="text-gray-300 mb-4">
                  Let us help you identify and automate your business workflows to improve efficiency and reduce costs.
                </p>
                <div className="flex gap-4">
                  <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300">
                    Get Started
                  </button>
                  <button 
                    onClick={() => setShowWorkflowModal(false)}
                    className="px-6 py-3 bg-gray-700/50 text-gray-300 font-semibold rounded-lg hover:bg-gray-600/50 transition-colors duration-200"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* AI-Powered Solutions Modal */}
      {showAISolutionsModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowAISolutionsModal(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-gray-800/90 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 64 64"
                    className="text-white"
                  >
                    {/* Neural Network Nodes */}
                    <circle cx="32" cy="16" r="4" fill="currentColor" opacity="0.9" />
                    <circle cx="16" cy="32" r="4" fill="currentColor" opacity="0.9" />
                    <circle cx="48" cy="32" r="4" fill="currentColor" opacity="0.9" />
                    <circle cx="32" cy="48" r="4" fill="currentColor" opacity="0.9" />
                    
                    {/* Central AI Core */}
                    <circle cx="32" cy="32" r="6" fill="currentColor" />
                    
                    {/* Connection Lines */}
                    <path d="M32 20 L32 26" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
                    <path d="M20 32 L26 32" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
                    <path d="M38 32 L44 32" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
                    <path d="M32 38 L32 44" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
                    
                    {/* Diagonal Connections */}
                    <path d="M20 20 L26 26" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                    <path d="M38 26 L44 20" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                    <path d="M20 44 L26 38" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                    <path d="M38 38 L44 44" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                    
                    {/* Data Flow Indicators */}
                    <circle cx="32" cy="8" r="1.5" fill="currentColor" opacity="0.6" />
                    <circle cx="8" cy="32" r="1.5" fill="currentColor" opacity="0.6" />
                    <circle cx="56" cy="32" r="1.5" fill="currentColor" opacity="0.6" />
                    <circle cx="32" cy="56" r="1.5" fill="currentColor" opacity="0.6" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    AI-Powered Solutions
                  </h2>
                  <p className="text-gray-400 text-lg">Intelligent automation for modern businesses</p>
                </div>
              </div>
              <button
                onClick={() => setShowAISolutionsModal(false)}
                className="w-10 h-10 bg-gray-700/50 hover:bg-gray-600/50 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="space-y-6">
              <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600/30">
                <h3 className="text-xl font-semibold text-white mb-4">What are AI-Powered Solutions?</h3>
                <p className="text-gray-300 leading-relaxed">
                  AI-Powered Solutions leverage artificial intelligence and machine learning to create intelligent, 
                  adaptive systems that can learn from data, make predictions, and automate complex decision-making processes. 
                  These solutions transform how businesses operate by providing insights, automation, and optimization capabilities.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600/30">
                  <h4 className="text-lg font-semibold text-white mb-3">Core Features</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      Machine Learning algorithms
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      Natural Language Processing
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      Predictive analytics
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      Computer vision
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600/30">
                  <h4 className="text-lg font-semibold text-white mb-3">Applications</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      Chatbots & virtual assistants
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      Data analysis & insights
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      Process optimization
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      Customer behavior prediction
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-6 border border-blue-500/30">
                <h4 className="text-lg font-semibold text-white mb-3">Ready to Leverage AI?</h4>
                <p className="text-gray-300 mb-4">
                  Discover how AI-powered solutions can transform your business operations and drive innovation.
                </p>
                <div className="flex gap-4">
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300">
                    Explore AI Solutions
                  </button>
                  <button 
                    onClick={() => setShowAISolutionsModal(false)}
                    className="px-6 py-3 bg-gray-700/50 text-gray-300 font-semibold rounded-lg hover:bg-gray-600/50 transition-colors duration-200"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* System Integration Modal */}
      {showSystemIntegrationModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowSystemIntegrationModal(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-gray-800/90 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 64 64"
                    className="text-white"
                  >
                    {/* Main System Box */}
                    <rect x="16" y="16" width="32" height="24" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
                    
                    {/* Connection Points */}
                    <circle cx="12" cy="24" r="2" fill="currentColor" />
                    <circle cx="12" cy="32" r="2" fill="currentColor" />
                    <circle cx="12" cy="40" r="2" fill="currentColor" />
                    <circle cx="52" cy="24" r="2" fill="currentColor" />
                    <circle cx="52" cy="32" r="2" fill="currentColor" />
                    <circle cx="52" cy="40" r="2" fill="currentColor" />
                    
                    {/* Connection Lines */}
                    <path d="M12 24 L16 24" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M12 32 L16 32" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M12 40 L16 40" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M48 24 L52 24" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M48 32 L52 32" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M48 40 L52 40" stroke="currentColor" strokeWidth="1.5" />
                    
                    {/* Internal Components */}
                    <rect x="20" y="20" width="10" height="8" rx="2" fill="currentColor" opacity="0.3" />
                    <rect x="34" y="20" width="10" height="8" rx="2" fill="currentColor" opacity="0.3" />
                    <rect x="20" y="32" width="10" height="8" rx="2" fill="currentColor" opacity="0.3" />
                    <rect x="34" y="32" width="10" height="8" rx="2" fill="currentColor" opacity="0.3" />
                    
                    {/* Central Hub */}
                    <circle cx="32" cy="28" r="4" fill="currentColor" opacity="0.2" />
                    <circle cx="32" cy="28" r="2.5" fill="currentColor" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                    System Integration
                  </h2>
                  <p className="text-gray-400 text-lg">Connect and synchronize your business systems</p>
                </div>
              </div>
              <button
                onClick={() => setShowSystemIntegrationModal(false)}
                className="w-10 h-10 bg-gray-700/50 hover:bg-gray-600/50 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="space-y-6">
              <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600/30">
                <h3 className="text-xl font-semibold text-white mb-4">What is System Integration?</h3>
                <p className="text-gray-300 leading-relaxed">
                  System Integration connects different software applications, databases, and business processes to work 
                  together seamlessly. It eliminates data silos, automates workflows, and provides a unified view of 
                  your business operations across all platforms and systems.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600/30">
                  <h4 className="text-lg font-semibold text-white mb-3">Integration Benefits</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      Seamless data flow
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      Reduced manual work
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      Real-time synchronization
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      Improved accuracy
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600/30">
                  <h4 className="text-lg font-semibold text-white mb-3">Integration Types</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                      API integrations
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                      Database connections
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                      Cloud services
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                      Third-party tools
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-xl p-6 border border-green-500/30">
                <h4 className="text-lg font-semibold text-white mb-3">Ready to Integrate?</h4>
                <p className="text-gray-300 mb-4">
                  Let us help you connect your systems and create a unified, efficient business environment.
                </p>
                <div className="flex gap-4">
                  <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300">
                    Start Integration
                  </button>
                  <button 
                    onClick={() => setShowSystemIntegrationModal(false)}
                    className="px-6 py-3 bg-gray-700/50 text-gray-300 font-semibold rounded-lg hover:bg-gray-600/50 transition-colors duration-200"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Consulting Services Modal */}
      {showConsultingModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowConsultingModal(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-gray-800/90 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 64 64"
                    className="text-white"
                  >
                    {/* Professional Person */}
                    <circle cx="32" cy="20" r="8" fill="currentColor" />
                    
                    {/* Business Suit */}
                    <path d="M24 28 L40 28 L40 48 L24 48 Z" fill="currentColor" />
                    <path d="M26 28 L38 28 L38 46 L26 46 Z" fill="currentColor" opacity="0.3" />
                    
                    {/* Tie */}
                    <path d="M30 28 L34 28 L32 48 Z" fill="currentColor" opacity="0.8" />
                    
                    {/* Briefcase */}
                    <rect x="22" y="42" width="20" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="24" y="44" width="16" height="8" fill="currentColor" opacity="0.3" />
                    <path d="M26 42 L26 40 L30 40 L30 42" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    
                    {/* Charts and Graphs */}
                    <rect x="12" y="12" width="10" height="8" rx="1" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.7" />
                    <path d="M14 18 L17 16 L20 18 L23 16" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.7" />
                    
                    <rect x="42" y="12" width="10" height="8" rx="1" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.7" />
                    <rect x="44" y="14" width="2" height="4" fill="currentColor" opacity="0.7" />
                    <rect x="47" y="15" width="2" height="3" fill="currentColor" opacity="0.7" />
                    <rect x="50" y="16" width="2" height="2" fill="currentColor" opacity="0.7" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                    Consulting Services
                  </h2>
                  <p className="text-gray-400 text-lg">Expert guidance for your business transformation</p>
                </div>
              </div>
              <button
                onClick={() => setShowConsultingModal(false)}
                className="w-10 h-10 bg-gray-700/50 hover:bg-gray-600/50 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="space-y-6">
              <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600/30">
                <h3 className="text-xl font-semibold text-white mb-4">What are Consulting Services?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our consulting services provide expert guidance, strategic planning, and implementation support 
                  to help your business achieve its goals. We analyze your current processes, identify opportunities 
                  for improvement, and develop customized solutions that drive growth and efficiency.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600/30">
                  <h4 className="text-lg font-semibold text-white mb-3">Consulting Areas</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                      Business strategy
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                      Process optimization
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                      Digital transformation
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                      Technology implementation
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600/30">
                  <h4 className="text-lg font-semibold text-white mb-3">Our Approach</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      Assessment & analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      Strategic planning
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      Implementation support
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      Ongoing guidance
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-xl p-6 border border-indigo-500/30">
                <h4 className="text-lg font-semibold text-white mb-3">Ready to Transform?</h4>
                <p className="text-gray-300 mb-4">
                  Let our expert consultants help you navigate your business challenges and achieve sustainable growth.
                </p>
                <div className="flex gap-4">
                  <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300">
                    Get Consultation
                  </button>
                  <button 
                    onClick={() => setShowConsultingModal(false)}
                    className="px-6 py-3 bg-gray-700/50 text-gray-300 font-semibold rounded-lg hover:bg-gray-600/50 transition-colors duration-200"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

    </div>
  );
};

export default Home; 
