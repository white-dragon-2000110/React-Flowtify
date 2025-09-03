import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import createGlobe from "cobe";
import type { COBEOptions } from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { useRef } from "react";
import DottedMap from "dotted-map";

import RequestDemoButton from '../components/RequestDemoButton';
import { Vortex } from '../components/Vortex';
import LoadingSpinner from '../components/LoadingSpinner';
import FeatureSection from '../components/FeatureSection';
import { cn } from "../lib/utils";
import { Marquee } from "../components/magicui/marquee";

// Globe Component
const MOVEMENT_DAMPING = 1400;

const GLOBE_CONFIG: COBEOptions = {
  width: 600,
  height: 600,
  onRender: () => { },
  devicePixelRatio: 1,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 0.4,
  mapSamples: 4000,
  mapBrightness: 20.0,
  baseColor: [0.1, 0.1, 0.1],
  markerColor: [0.2, 0.6, 1.0], // Modern blue
  glowColor: [0.2, 0.2, 0.2],
  markers: [
    { location: [14.5995, 120.9842], size: 0.015 },
    { location: [19.076, 72.8777], size: 0.05 },
    { location: [23.8103, 90.4125], size: 0.025 },
    { location: [30.0444, 31.2357], size: 0.035 },
    { location: [39.9042, 116.4074], size: 0.04 },
    { location: [-23.5505, -46.6333], size: 0.05 },
    { location: [19.4326, -99.1332], size: 0.05 },
    { location: [40.7128, -74.006], size: 0.05 },
    { location: [34.6937, 135.5022], size: 0.025 },
    { location: [41.0082, 28.9784], size: 0.03 },
  ],
};

function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  const phiRef = useRef(0);
  const widthRef = useRef(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 40,
    stiffness: 80,
  });

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        widthRef.current = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: widthRef.current,
      height: widthRef.current,
      onRender: (state: Record<string, unknown>) => {
        if (!pointerInteracting.current) phiRef.current += 0.003;
        (state as any).phi = phiRef.current + rs.get();
        (state as any).width = widthRef.current;
        (state as any).height = widthRef.current;
      },
    });

    setTimeout(() => (canvasRef.current!.style.opacity = "1"), 0);
    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [rs, config]);

  return (
    <div
      className={`relative mx-auto aspect-[1/1] w-full h-full max-w-[600px] ${className || ''}`}
    >
      <canvas
        className="w-full h-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}

// Marquee Reviews Component
const reviews = [
  {
    name: "JaGabriela Méndezck",
    username: "@gabymendezcoaching",
    body: "Flowtify gave me my time back. My business looks more professional, and I stopped losing leads. The bot answers, books and even follows up. I'm obsessed.",
    img: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="2" y="3" width="20" height="15" rx="2" strokeWidth="2" />
      <path d="M8 21v-3M16 21v-3" strokeWidth="2" />
      <path d="M12 18v-3" strokeWidth="2" />
      <rect x="4" y="12" width="6" height="10" rx="1" strokeWidth="2" />
      <path d="M6 14v2" strokeWidth="1" />
    </svg>,
  },
  {
    name: "Michael Harris",
    username: "@mikeharris_mkt",
    body: "We integrated Flowtify with our CRM and Instagram — now our pipeline runs smoother than ever. Zero-code, zero stress.",
    img: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="2" y="3" width="20" height="15" rx="2" strokeWidth="2" />
      <path d="M8 21v-3M16 21v-3" strokeWidth="2" />
      <path d="M12 18v-3" strokeWidth="2" />
      <rect x="4" y="12" width="6" height="10" rx="1" strokeWidth="2" />
      <path d="M6 14v2" strokeWidth="1" />
    </svg>,
  },
  {
    name: "Jonathan Blake",
    username: "@jonblake_ops",
    body: "I've worked with dozens of automation tools — but Flowtify? It's different. Sleek, intuitive, and actually built for humans. Top-notch support too.",
    img: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="2" y="3" width="20" height="15" rx="2" strokeWidth="2" />
      <path d="M8 21v-3M16 21v-3" strokeWidth="2" />
      <path d="M12 18v-3" strokeWidth="2" />
      <rect x="4" y="12" width="6" height="10" rx="1" strokeWidth="2" />
      <path d="M6 14v2" strokeWidth="1" />
    </svg>,
  },
  {
    name: "Laura Fernández",
    username: "@laura.fer.ux",
    body: "I run a small branding studio and Flowtify helps me handle DMs, appointment reminders, and follow-ups. It's like having a digital assistant that never sleeps.",
    img: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="2" y="3" width="20" height="15" rx="2" strokeWidth="2" />
      <path d="M8 21v-3M16 21v-3" strokeWidth="2" />
      <path d="M12 18v-3" strokeWidth="2" />
      <rect x="4" y="12" width="6" height="10" rx="1" strokeWidth="2" />
      <path d="M6 14v2" strokeWidth="1" />
    </svg>,
  },
  {
    name: "Michael Harris",
    username: "@mikeharris_mkt",
    body: "We integrated Flowtify with our CRM and Instagram — now our pipeline runs smoother than ever. Zero-code, zero stress.",
    img: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="2" y="3" width="20" height="15" rx="2" strokeWidth="2" />
      <path d="M8 21v-3M16 21v-3" strokeWidth="2" />
      <path d="M12 18v-3" strokeWidth="2" />
      <rect x="4" y="12" width="6" height="10" rx="1" strokeWidth="2" />
      <path d="M6 14v2" strokeWidth="1" />
    </svg>,
  },
  {
    name: "Daniela Rivas",
    username: "@daniwritescontent",
    body: "At first I thought Flowtify was just another bot. But wow. It's smart, human-like, and so easy to train. My clients love how responsive I've become.",
    img: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="2" y="3" width="20" height="15" rx="2" strokeWidth="2" />
      <path d="M8 21v-3M16 21v-3" strokeWidth="2" />
      <path d="M12 18v-3" strokeWidth="2" />
      <rect x="4" y="12" width="6" height="10" rx="1" strokeWidth="2" />
      <path d="M6 14v2" strokeWidth="1" />
    </svg>,
  },
  // {
  //   name: "JaGabriela Méndezck",
  //   username: "@gabymendezcoaching",
  //   body: "Flowtify gave me my time back. My business looks more professional, and I stopped losing leads. The bot answers, books and even follows up. I'm obsessed.",
  //   img: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //     <rect x="2" y="3" width="20" height="15" rx="2" strokeWidth="2" />
  //     <path d="M8 21v-3M16 21v-3" strokeWidth="2" />
  //     <path d="M12 18v-3" strokeWidth="2" />
  //     <rect x="4" y="12" width="6" height="10" rx="1" strokeWidth="2" />
  //     <path d="M6 14v2" strokeWidth="1" />
  //   </svg>,
  // },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string | React.ReactElement;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-3 mb-3">
        <div className="flex-shrink-0">
          {typeof img === 'string' ? (
            <>
              <img
                className="w-12 h-12 rounded-full border-2 border-gray-600/30 object-cover"
                alt={`${name}'s avatar`}
                src={img}
                onError={(e) => {
                  // Fallback to initials if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              {/* Fallback initials if image fails */}
              <div
                className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-lg hidden"
                style={{ display: 'none' }}
              >
                {name.charAt(0).toUpperCase()}
              </div>
            </>
          ) : (
            <div className="w-12 h-12 bg-gray-800/60 rounded-lg flex items-center justify-center border border-gray-700/30">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          )}
        </div>
        <div className="flex flex-col min-w-0">
          <figcaption className="text-sm font-semibold text-white truncate">
            {name}
          </figcaption>
          <p className="text-xs text-white truncate">{username}</p>
        </div>
      </div>
      <blockquote className="text-sm text-gray-200 leading-relaxed">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:40s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:40s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-r from-background"></div>
    </div>
  );
}

// World Map Component
interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
}

function WorldMap({
  dots = [],
  lineColor = "#0ea5e9",
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const map = useMemo(() => new DottedMap({ height: 80, grid: "diagonal" }), []);

  const svgMap = useMemo(() => map.getSVG({
    radius: 0.18,
    color: "#bec1c7",
    shape: "circle",
    backgroundColor: "black",
  }), [map]);

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div className="w-full aspect-[2/1] bg-black rounded-lg relative font-sans">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1"
                initial={{
                  pathLength: 0,
                }}
                animate={{
                  pathLength: 1,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.3 * i,
                  ease: "easeOut",
                }}
                key={`start-upper-${i}`}
              ></motion.path>
            </g>
          );
        })}

        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {dots.map((dot, i) => (
          <g key={`points-group-${i}`}>
            <g key={`start-${i}`}>
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r="2"
                fill={lineColor}
              />
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r="2"
                fill={lineColor}
                opacity="0.5"
              >
                <animate
                  attributeName="r"
                  from="2"
                  to="6"
                  dur="2s"
                  begin="0s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.5"
                  to="0"
                  dur="2s"
                  begin="0s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
            <g key={`end-${i}`}>
              <circle
                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                r="2"
                fill={lineColor}
              />
              <circle
                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                r="2"
                fill={lineColor}
                opacity="0.5"
              >
                <animate
                  attributeName="r"
                  from="2"
                  to="6"
                  dur="2s"
                  begin="0s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.5"
                  to="0"
                  dur="2s"
                  begin="0s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          </g>
        ))}
      </svg>
    </div>
  );
}

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
        <section id="home" className="relative bg-[#000008] pb-16 pt-10 flex items-start justify-center overflow-hidden">
          {/* Vortex Background Animation */}
          <Vortex
            backgroundColor="rgb(0, 0, 12)"
            rangeY={800}
            particleCount={500}
            baseHue={270}
            className="absolute inset-0"
          />

          <div className="relative z-10 text-center text-white px-4 pt-5 sm:pt-10 md:pt-16 lg:pt-20 xl:pt-24">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {homeData.hero.title}
            </motion.h1>

            <motion.h2
              className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {homeData.hero.subtitle}
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl mb-14 max-w-3xl mx-auto text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {homeData.hero.description}
            </motion.p>

            {/* Hero Video */}
            <motion.div
              className="mb-[120px] w-full max-w-2xl mx-auto px-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <video
                ref={(el) => {
                  if (el) {
                    const observer = new IntersectionObserver((entries) => {
                      entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                          el.play().catch(console.error);
                        } else {
                          el.pause();
                        }
                      });
                    }, { threshold: 0.3 });
                    observer.observe(el);
                    return () => observer.disconnect();
                  }
                }}
                src="/video/home.webm"
                loop
                muted
                playsInline
                className="w-full h-auto max-h-[40vh] object-cover rounded-2xl shadow-2xl"
              >
                Your browser does not support the video tag.
              </video>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                {homeData.superpowers.title}
              </h2>
              <p className="text-xl text-white max-w-3xl mx-auto mb-12">
                {homeData.superpowers.subtitle}
              </p>

              {/* Superpowers Video - Positioned between title and cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="my-24 w-full max-w-2xl mx-auto px-4"
              >
                <video
                  ref={(el) => {
                    if (el) {
                      const observer = new IntersectionObserver((entries) => {
                        entries.forEach((entry) => {
                          if (entry.isIntersecting) {
                            el.play().catch(console.error);
                          } else {
                            el.pause();
                          }
                        });
                      }, { threshold: 0.3 });
                      observer.observe(el);
                      return () => observer.disconnect();
                    }
                  }}
                  src="/video/superpower.webm"
                  loop
                  muted
                  playsInline
                  className="w-full h-auto max-h-[80vh] sm:max-h-[100vh] object-cover rounded-lg shadow-2xl"
                >
                  Your browser does not support the video tag.
                </video>
              </motion.div>
            </motion.div>

            {/* Interactive Network Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative w-full overflow-hidden px-10"
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
              <FeatureSection
                gridCols={2}
                className="!px-2 sm:!px-6 md:!px-8 lg:!px-12"
                features={[
                  {
                    icon: (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="2" y="3" width="20" height="15" rx="2" strokeWidth="2" />
                        <path d="M8 21v-3M16 21v-3" strokeWidth="2" />
                        <path d="M12 18v-3" strokeWidth="2" />
                        <rect x="4" y="12" width="6" height="10" rx="1" strokeWidth="2" />
                        <path d="M6 14v2" strokeWidth="1" />
                      </svg>
                    ),
                    title: homeData.superpowers.items[0].title,
                    description: homeData.superpowers.items[0].description
                  },
                  {
                    icon: (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="2" />
                        <rect x="9" y="11" width="6" height="5" rx="1" strokeWidth="2" />
                        <path d="M12 11v-2a2 2 0 1 0-4 0v2" strokeWidth="2" />
                      </svg>
                    ),
                    title: homeData.superpowers.items[1].title,
                    description: homeData.superpowers.items[1].description
                  },
                  {
                    icon: (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="2" y="3" width="20" height="15" rx="2" strokeWidth="2" />
                        <path d="M8 21v-3M16 21v-3" strokeWidth="2" />
                        <path d="M12 18v-3" strokeWidth="2" />
                        <rect x="4" y="12" width="6" height="10" rx="1" strokeWidth="2" />
                        <path d="M6 14v2" strokeWidth="1" />
                      </svg>
                    ),
                    title: homeData.superpowers.items[2].title,
                    description: homeData.superpowers.items[2].description
                  },
                  {
                    icon: (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="2" />
                        <path d="M12 11v-2a2 0 1 0-4 0v2" strokeWidth="2" />
                      </svg>
                    ),
                    title: homeData.superpowers.items[3].title,
                    description: homeData.superpowers.items[3].description
                  }
                ]}
              />
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                {homeData.scale.title}
              </h2>
              <p className="text-xl text-white max-w-3xl mx-auto mb-12">
                {homeData.scale.subtitle}
              </p>

              {/* Scale Video - Positioned between subtitle and feature cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-16 w-full max-w-2xl mx-auto px-4"
              >
                <video
                  ref={(el) => {
                    if (el) {
                      const observer = new IntersectionObserver((entries) => {
                        entries.forEach((entry) => {
                          if (entry.isIntersecting) {
                            el.play().catch(console.error);
                          } else {
                            el.pause();
                          }
                        });
                      }, { threshold: 0.3 });
                      observer.observe(el);
                      return () => observer.disconnect();
                    }
                  }}
                  src="/video/scalable.webm"
                  loop
                  muted
                  playsInline
                  className="w-full h-auto max-h-[60vh] sm:max-h-[80vh] object-cover rounded-lg shadow-2xl"
                >
                  Your browser does not support the video tag.
                </video>
              </motion.div>

              <FeatureSection
                features={[
                  {
                    icon: (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    ),
                    title: homeData.scale.features[0],
                    description: "Always-on updates and real-time synchronization"
                  },
                  {
                    icon: (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                      </svg>
                    ),
                    title: homeData.scale.features[1],
                    description: "Instant scalability to handle any workload"
                  },
                  {
                    icon: (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                      </svg>
                    ),
                    title: homeData.scale.features[2],
                    description: "Dedicated support team available 24/7"
                  }
                ]}
              />
            </motion.div>
          </div>
        </section>

        {/* Integrations Section */}
        <section id="integrations" className="section-padding bg-gray-900/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#000008]" />

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-12 md:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
                {homeData.integrations.title}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white max-w-2xl sm:max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                {homeData.integrations.subtitle}
              </p>

              {/* Mobile Logos - Visible only on Mobile */}
              <div className="md:hidden mb-6 flex justify-center">
                <div className="relative">
                  <img
                    src="/video/logo.gif"
                    alt="Flowtify Logo Background"
                    className="w-32 h-32 object-contain"
                  />
                  <img
                    src="/logo.png"
                    alt="Flowtify Logo"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 object-contain"
                  />
                </div>
              </div>

              {/* Integrations Grid - 2x2 with Central Orb */}
              <div className="relative w-full max-w-3xl sm:max-w-4xl mx-auto mb-6 sm:mb-8">
                {/* Background Grid */}
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full" style={{
                    backgroundImage: `
                      radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)
                    `,
                    backgroundSize: '40px 40px'
                  }}></div>
                </div>

                {/* Central Logo */}
                <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 mt-4 pointer-events-none">
                  <div className="relative">
                    <img
                      src="/video/logo.gif"
                      alt="Flowtify Logo Background"
                      className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain"
                    />
                    <img
                      src="/logo.png"
                      alt="Flowtify Logo"
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
                    />
                  </div>
                </div>

                {/* 2x2 Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 relative z-30">
                  {/* Top-Left: Productivity & Communication */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0 }}
                    viewport={{ once: true }}
                    className="p-4 sm:p-6"
                  >
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3 mb-3 sm:mb-4">
                      {/* Google Drive */}
                      <div className="text-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-white rounded-lg flex items-center justify-center mx-auto mb-2">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                          </svg>
                        </div>
                        <span className="text-xs text-white">Drive</span>
                      </div>
                      {/* Gmail */}
                      <div className="text-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-white rounded-lg flex items-center justify-center mx-auto mb-2">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                          </svg>
                        </div>
                        <span className="text-xs text-white">Gmail</span>
                      </div>
                      {/* Slack */}
                      <div className="text-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-white rounded-lg flex items-center justify-center mx-auto mb-2">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 15a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-6 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                          </svg>
                        </div>
                        <span className="text-xs text-white">Slack</span>
                      </div>
                      {/* Notion */}
                      <div className="text-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-white rounded-lg flex items-center justify-center mx-auto mb-2">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4 19h16V5H4v14zm2-2h12V7H6v10zm-1-9h2v2H5V8zm0 4h2v2H5v-2zm4-4h2v2H9V8zm0 4h2v2H9v-2zm4-4h2v2h-2V8zm0 4h2v2h-2v-2z" />
                          </svg>
                        </div>
                        <span className="text-xs text-white">Notion</span>
                      </div>
                      {/* Discord */}
                      <div className="text-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-white rounded-lg flex items-center justify-center mx-auto mb-2">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                          </svg>
                        </div>
                        <span className="text-xs text-white">Discord</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Top-Right: Automation & Workflow */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="p-4 sm:p-6"
                  >
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3 mb-3 sm:mb-4">
                      {/* Make */}
                      <div className="text-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-white rounded-lg flex items-center justify-center mx-auto mb-2">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                          </svg>
                        </div>
                        <span className="text-xs text-white">Make</span>
                      </div>
                      {/* n8n */}
                      <div className="text-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-white rounded-lg flex items-center justify-center mx-auto mb-2">
                          <span className="text-white font-bold text-xs">n8n</span>
                        </div>
                        <span className="text-xs text-white">n8n</span>
                      </div>
                      {/* HubSpot */}
                      <div className="text-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-white rounded-lg flex items-center justify-center mx-auto mb-2">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                          </svg>
                        </div>
                        <span className="text-xs text-white">HubSpot</span>
                      </div>
                      {/* Airtable */}
                      <div className="text-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-white rounded-lg flex items-center justify-center mx-auto mb-2">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" />
                          </svg>
                        </div>
                        <span className="text-xs text-white">Airtable</span>
                      </div>
                      {/* Trello */}
                      <div className="text-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-white rounded-lg flex items-center justify-center mx-auto mb-2">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 2v14h12V5H6z" />
                          </svg>
                        </div>
                        <span className="text-xs text-white">Trello</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Bottom-Left: Social Media & Messaging */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="p-4 sm:p-6"
                  >
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-3 sm:mb-4">
                      {/* WhatsApp */}
                      <div className="text-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-white rounded-lg flex items-center justify-center mx-auto mb-2">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                          </svg>
                        </div>
                        <span className="text-xs text-white">WhatsApp</span>
                      </div>
                      {/* Instagram */}
                      <div className="text-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-white rounded-lg flex items-center justify-center mx-auto mb-2">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </div>
                        <span className="text-xs text-white">Instagram</span>
                      </div>
                      {/* Facebook */}
                      <div className="text-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-white rounded-lg flex items-center justify-center mx-auto mb-2">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                          </svg>
                        </div>
                        <span className="text-xs text-white">Facebook</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Bottom-Right: Scheduling & Calendar */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="p-4 sm:p-6"
                  >
                    <div className="flex flex-col items-center justify-center mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-white rounded-lg flex items-center justify-center mb-2">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                      </div>
                      <span className="text-xs text-white">Calendly</span>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Note Text - Positioned outside grid container */}
              <div className="relative z-40 mt-8 text-center">
                <p className="text-base sm:text-lg text-gray-300 mb-4 px-4">
                  {homeData.integrations.note}
                </p>
              </div>

              <motion.button
                className="relative px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-2xl hover:bg-white/10 transform transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-white/25 overflow-hidden group"
                whileHover={{
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Animated Background Glow */}
                <motion.div
                  className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0, 0.1, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Button Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
                  {homeData.integrations.cta}
                </span>

                {/* Bottom Glow Line */}
                <motion.div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white group-hover:w-3/4 transition-all duration-500"
                  whileHover={{ width: '75%' }}
                />
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Data Protection & Security Section */}
        <section id="security" className="section-padding bg-gray-800/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#000008]" />

          <div className="container-custom relative z-10">
            <div className="space-y-8 sm:space-y-12 md:space-y-16">
              {/* Never Lose Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
                  {homeData.dataProtection.title}
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 px-4 sm:px-6 md:px-8">
                  {homeData.dataProtection.subtitle}
                </p>

                {/* Never Lose Information Video */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mb-6 sm:mb-8 w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] mx-auto px-2 sm:px-4"
                >
                  <video
                    ref={(el) => {
                      if (el) {
                        const observer = new IntersectionObserver((entries) => {
                          entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                              el.play().catch(console.error);
                            } else {
                              el.pause();
                            }
                          });
                        }, { threshold: 0.3 });
                        observer.observe(el);
                        return () => observer.disconnect();
                      }
                    }}
                    src="/video/nolose.webm"
                    loop
                    muted
                    playsInline
                    className="w-full h-auto max-h-[20vh] sm:max-h-[25vh] md:max-h-[30vh] lg:max-h-[35vh] xl:max-h-[40vh] object-cover rounded-lg shadow-2xl"
                  >
                    Your browser does not support the video tag.
                  </video>
                </motion.div>

                {/* Two-Column Feature Layout */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8 px-4 sm:px-6 md:px-8 lg:px-12">
                  {/* Left Column - Integrated with your devices */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3 sm:space-x-4 px-4 sm:px-20 md:px-24 lg:px-32"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/60 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    <div className="flex-1 text-left">
                      <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 text-white leading-tight">
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
                    className="flex items-start space-x-3 sm:space-x-4 px-4 sm:px-20 md:px-24 lg:px-32"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/60 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {/* Shield with padlock */}
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="2" />
                          <rect x="9" y="11" width="6" height="5" rx="1" strokeWidth="2" />
                          <path d="M12 11v-2a2 2 0 1 0-4 0v2" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 text-white leading-tight">
                        {homeData.dataProtection.features[1]}
                      </h3>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Spacer for more distance between sections */}
              <div className="h-6 sm:h-8 md:h-12 lg:h-[50px]"></div>

              {/* Enterprise Security */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
                  {homeData.security.title}
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 px-4 sm:px-6 md:px-8 max-w-2xl mx-auto">
                  {homeData.security.subtitle}
                </p>

                {/* Security Image - Positioned between title and feature cards */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mb-8 sm:mb-12 md:mb-16 w-full max-w-lg sm:max-w-xl md:max-w-2xl mx-auto px-2 sm:px-4"
                >
                  <img
                    src="/video/security.gif"
                    alt="Enterprise Security"
                    className="w-2/3 h-auto max-h-[20vh] sm:max-h-[25vh] md:max-h-[30vh] lg:max-h-[35vh] xl:max-h-[40vh] object-cover rounded-lg shadow-2xl mx-auto"
                  />
                </motion.div>

                {/* Enhanced Security Features Grid with Proper Centering */}
                <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
                    {/* Card 1 - Official APIs */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3 sm:space-x-4 pl-4 sm:pl-10 md:pl-12 lg:pl-16"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/60 rounded-lg flex items-center justify-center border border-gray-700/30">
                          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="2" />
                            <rect x="9" y="11" width="6" height="5" rx="1" strokeWidth="2" />
                            <path d="M12 11v-2a2 2 0 1 0-4 0v2" strokeWidth="2" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 text-white leading-tight">
                          {homeData.security.features[0]}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                          Official APIs with end-to-end encryption
                        </p>
                      </div>
                    </motion.div>

                    {/* Card 2 - GDPR & CCPA */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3 sm:space-x-4 ml-4 sm:ml-8 md:ml-12"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/60 rounded-lg flex items-center justify-center border border-gray-700/30">
                          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M9 12l2 2 4-4" strokeWidth="2" />
                            <path d="M21 12c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2z" strokeWidth="2" />
                            <path d="M3 12c1 0 2-1 2-2s-1-2-2-2-2 1-2 2 1 2 2 2z" strokeWidth="2" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 text-white leading-tight">
                          {homeData.security.features[1]}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                          GDPR & CCPA compliance guaranteed
                        </p>
                      </div>
                    </motion.div>

                    {/* Card 3 - Secure Cloud Infrastructure (Centered on mobile, spans full width on small screens) */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3 sm:space-x-4 mt-6 sm:mt-0 pl-4 sm:pl-10 md:pl-12 lg:pl-16 sm:col-span-2 sm:justify-self-center sm:max-w-md"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/60 rounded-lg flex items-center justify-center border border-gray-700/30">
                          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" strokeWidth="2" />
                            <path d="M12 16l-2-2 2-2" strokeWidth="2" />
                            <path d="M12 12l2 2-2 2" strokeWidth="2" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 text-white leading-tight">
                          {homeData.security.features[2]}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                          Secure cloud infrastructure
                        </p>
                      </div>
                    </motion.div>
                  </div>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                {homeData.results.title}
              </h2>
              <p className="text-xl text-white max-w-3xl mx-auto mb-12">
                {homeData.results.subtitle}
              </p>

              <FeatureSection
                features={[
                  {
                    icon: (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    ),
                    title: homeData.results.metrics[0],
                    description: "Lower operational costs and increased efficiency"
                  },
                  {
                    icon: (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" strokeWidth={2} />
                        <polyline points="12,6 12,12 16,14" strokeWidth={2} />
                      </svg>
                    ),
                    title: homeData.results.metrics[1],
                    description: "Time saved through automation and optimization"
                  },
                  {
                    icon: (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                      </svg>
                    ),
                    title: homeData.results.metrics[2],
                    description: "Lead conversion increase and revenue growth"
                  }
                ]}
              />
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                {homeData.pricing.title}
              </h2>
              <p className="text-xl text-white max-w-3xl mx-auto mb-8">
                {homeData.pricing.subtitle}
              </p>

              {/* Spacer for more distance between title and video */}
              <div className="h-8 sm:h-12 md:h-16 lg:h-20"></div>

              {/* Pricing Video with Overlay */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-8 sm:mb-12 relative w-full max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto px-4"
              >
                {/* Background Video */}
                <video
                  ref={(el) => {
                    if (el) {
                      const observer = new IntersectionObserver((entries) => {
                        entries.forEach((entry) => {
                          if (entry.isIntersecting) {
                            el.play().catch(console.error);
                          } else {
                            el.pause();
                          }
                        });
                      }, { threshold: 0.3 });
                      observer.observe(el);
                      return () => observer.disconnect();
                    }
                  }}
                  src="/video/price.webm"
                  loop
                  muted
                  playsInline
                  className="w-full h-auto max-h-[40vh] sm:max-h-[50vh] md:max-h-[60vh] lg:max-h-[70vh] object-cover rounded-lg sm:rounded-2xl shadow-2xl"
                >
                  Your browser does not support the video tag.
                </video>

                {/* Text Overlay on Video - Hidden on Mobile */}
                <div className="hidden md:flex absolute inset-0 flex-col items-center text-center px-4 z-10">
                  {/* Investment Factors */}
                  <div className="mb-6 sm:mb-8">
                    <div className="flex items-center justify-start gap-1 mb-4 sm:mb-6">
                      <span className="text-white text-sm sm:text-base md:text-lg font-semibold">{homeData.pricing.description}</span>
                    </div>
                    <div className="space-y-2 sm:space-y-3 w-full text-left max-w-2xl mx-auto">
                      {homeData.pricing.factors.map((factor, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <span className="text-white text-sm sm:text-base mt-1">•</span>
                          <span className="text-white text-sm sm:text-base leading-relaxed">{factor}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="border border-purple-400 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base bg-black/50 backdrop-blur-sm mb-4 sm:mb-6">
                    Start your 14-day trial
                  </button>

                  {/* Additional Pricing Information */}
                  <div className="max-w-2xl mx-auto relative z-40">
                    <p className="text-white text-sm sm:text-base leading-relaxed mb-2 sm:mb-3 mt-[160px]">
                      At Flowtify, we believe in transparency and simplicity.
                    </p>
                    <p className="text-white text-sm sm:text-base leading-relaxed mb-2 sm:mb-3 px-[100px]">
                      After your demo, you'll receive a tailored proposal with clear phases, costs, and ROI expectations.
                    </p>
                    <p className="text-white text-sm sm:text-base leading-relaxed mb-2 sm:mb-3">
                      You only pay for what you truly need — and nothing more.
                    </p>
                    <p className="text-white text-sm sm:text-base leading-relaxed px-[100px]">
                      ✨ Bonus: Schedule your demo today and receive our free eBook on "The Future of Business
                      Automation", packed with practical insights to start optimizing immediately.
                    </p>

                    {/* Price Image */}
                    <div className="mt-4 sm:mt-6 flex justify-center">
                      <img
                        src="/picture/price.png"
                        alt="Flowtify Pricing"
                        className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-48 object-contain rounded-lg relative z-10"
                      />
                    </div>
                  </div>
                </div>

                {/* Mobile Text Below Video - Visible only on Mobile */}
                <div className="md:hidden mt-4 px-4 text-center">
                  {/* Investment Factors */}
                  <div className="mb-6">
                    <div className="flex items-center justify-start gap-1 mb-4">
                      <span className="text-white text-base font-semibold">{homeData.pricing.description}</span>
                    </div>
                    <div className="space-y-2 w-full text-left max-w-2xl mx-auto">
                      {homeData.pricing.factors.map((factor, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <span className="text-white text-sm mt-1">•</span>
                          <span className="text-white text-sm leading-relaxed">{factor}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="border border-purple-400 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 text-base bg-black/50 backdrop-blur-sm mb-6">
                    Start your 14-day trial
                  </button>

                  {/* Additional Pricing Information */}
                  <div className="max-w-2xl mx-auto">
                    <p className="text-white text-base leading-relaxed mb-3">
                      At Flowtify, we believe in transparency and simplicity.
                    </p>
                    <p className="text-white text-base leading-relaxed mb-3 px-4">
                      After your demo, you'll receive a tailored proposal with clear phases, costs, and ROI expectations.
                    </p>
                    <p className="text-white text-base leading-relaxed mb-3">
                      You only pay for what you truly need — and nothing more.
                    </p>
                    <p className="text-white text-base leading-relaxed px-4 mb-6">
                      ✨ Bonus: Schedule your demo today and receive our free eBook on "The Future of Business
                      Automation", packed with practical insights to start optimizing immediately.
                    </p>

                    {/* Price Image */}
                    <div className="flex justify-center">
                      <img
                        src="/picture/price.png"
                        alt="Flowtify Pricing"
                        className="w-48 h-48 object-contain rounded-lg"
                      />
                    </div>
                  </div>
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
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  {homeData.mission.title}
                </h2>
                <p className="text-lg text-white max-w-4xl mx-auto leading-relaxed">
                  {homeData.mission.description}
                </p>

                {/* Globe Component */}
                <div className="mt-4 sm:mt-4 md:mt-6 lg:mt-8 relative h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full max-w-6xl mx-auto overflow-visible">
                  <Globe className="w-full h-full" />
                </div>
              </motion.div>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  {homeData.vision.title}
                </h2>
                <p className="text-lg text-white max-w-4xl mx-auto leading-relaxed">
                  {homeData.vision.description}
                </p>

                {/* Vision Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mt-8 w-full max-w-4xl mx-auto px-4"
                >
                  <img
                    src="/video/end.gif"
                    alt="Our Vision"
                    className="w-1/2 h-auto max-h-[25.5vh] sm:max-h-[15vh] md:max-h-[25.5vh] object-cover rounded-lg shadow-2xl mx-auto mt-20"
                  />
                </motion.div>
              </motion.div>


            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="section-padding bg-gray-800/50 relative overflow-hidden pb-0">
          <div className="absolute inset-0 bg-[#000008]" />

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white">
                {homeData.testimonials.title}
              </h2>

              {/* Marquee Reviews Section */}
              <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[250px]">
                <MarqueeDemo />
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
              viewport={{ once: true, amount: 0.3 }}
              className="text-center mb-8 sm:mb-12 md:mb-16"
            >
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white px-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                {homeData.contact.title}
              </motion.h2>

              <motion.p
                className="text-base sm:text-lg md:text-xl text-white max-w-2xl sm:max-w-3xl mx-auto mb-3 sm:mb-4 px-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {homeData.contact.subtitle}
              </motion.p>

              <motion.p
                className="text-sm sm:text-base md:text-lg text-white max-w-2xl sm:max-w-3xl mx-auto mb-6 sm:mb-8 px-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {homeData.contact.description}
              </motion.p>

              {/* World Map Component */}
              <motion.div
                className="mb-8 sm:mb-10 md:mb-12 max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto px-2 sm:px-4 md:px-8 lg:px-16 xl:px-[100px]"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <WorldMap
                  dots={[
                    { start: { lat: 40.7128, lng: -74.006 }, end: { lat: 51.5074, lng: -0.1278 } },
                    { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 35.6762, lng: 139.6503 } },
                    { start: { lat: 35.6762, lng: 139.6503 }, end: { lat: 19.076, lng: 72.8777 } }
                  ]}
                  lineColor="#0ea5e9"
                />
              </motion.div>

              <motion.div
                className="bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-4 sm:mb-6 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <span className="text-xl sm:text-2xl mb-2 sm:mb-0">📩</span>
                  <a href={`mailto:${homeData.contact.email}`} className="text-base sm:text-lg md:text-xl text-green-400 underline hover:text-green-300 transition-colors cursor-pointer break-all">
                    {homeData.contact.email}
                  </a>
                </motion.div>

                <motion.div
                  className="flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  {/* Social Media Links - Stacked on mobile for better mobile experience */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-6 text-center">
                    <a
                      href="https://www.instagram.com/flowtify.ai/reels/?next=%2F"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base text-green-400 underline hover:text-green-300 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      {homeData.contact.social.instagram}
                    </a>
                    <span className="text-white hidden sm:inline">|</span>
                    <a
                      href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base text-green-400 underline hover:text-green-300 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      {homeData.contact.social.linkedin}
                    </a>
                    <span className="text-white hidden sm:inline">|</span>
                    <a
                      href="https://www.facebook.com/share/1Kws4Vzbxt/?mibextid=wwXIfr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base text-green-400 underline hover:text-green-300 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      {homeData.contact.social.facebook}
                    </a>
                    <span className="text-white hidden sm:inline">|</span>
                    <a
                      href="https://wa.me/19738869963"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base text-green-400 underline hover:text-green-300 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      WhatsApp
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;