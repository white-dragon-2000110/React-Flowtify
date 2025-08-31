import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface AnimatedBeamProps {
  fromRef: React.RefObject<HTMLDivElement | null>;
  toRef: React.RefObject<HTMLDivElement | null>;
  containerRef: React.RefObject<HTMLDivElement | null>;
  curvature?: number;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
  className?: string;
  intendedWidth?: number;
  intendedHeight?: number;
}

const AnimatedBeam: React.FC<AnimatedBeamProps> = ({ 
  fromRef, 
  toRef, 
  containerRef,
  curvature = 0,
  reverse = false,
  duration = Math.random() * 3 + 4,
  delay = 0,
  pathColor = "gray",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "#ffaa40",
  gradientStopColor = "#9c40ff",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
  className = "",
  intendedWidth,
  intendedHeight
}) => {
  const [pathD, setPathD] = useState<string>('');
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });
  const id = useRef(crypto.randomUUID().slice(0, 8));

  // Calculate the gradient coordinates based on the reverse prop
  const gradientCoordinates = reverse
    ? {
        x1: ["90%", "-10%"],
        x2: ["100%", "0%"],
        y1: ["0%", "0%"],
        y2: ["0%", "0%"],
      }
    : {
        x1: ["10%", "110%"],
        x2: ["0%", "100%"],
        y1: ["0%", "0%"],
        y2: ["0%", "0%"],
      };

  const updatePath = () => {
    if (!containerRef?.current || !fromRef?.current || !toRef?.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const rectA = fromRef.current.getBoundingClientRect();
    const rectB = toRef.current.getBoundingClientRect();

    // Use intended dimensions if provided, otherwise fall back to container dimensions
    // This ensures the SVG maintains the expected dimensions even during initial load
    const svgWidth = intendedWidth || containerRect.width;
    const svgHeight = intendedHeight || containerRect.height;
    setSvgDimensions({ width: svgWidth, height: svgHeight });

    // If we have intended dimensions, use them for coordinate calculation
    if (intendedWidth && intendedHeight) {
      // Calculate path coordinates using intended dimensions
      // Scale the coordinates proportionally to the intended dimensions
      const startX = (rectA.left - containerRect.left + rectA.width / 2 + startXOffset) * (intendedWidth / Math.max(containerRect.width, 1));
      const startY = (rectA.top - containerRect.top + rectA.height / 2 + startYOffset) * (intendedHeight / Math.max(containerRect.height, 1));
      const endX = (rectB.left - containerRect.left + rectB.width / 2 + endXOffset) * (intendedWidth / Math.max(containerRect.width, 1));
      const endY = (rectB.top - containerRect.top + rectB.height / 2 + endYOffset) * (intendedHeight / Math.max(containerRect.height, 1));

      const controlY = startY - curvature;
      const d = `M ${startX},${startY} Q ${(startX + endX) / 2},${controlY} ${endX},${endY}`;
      setPathD(d);
    } else {
      // Fall back to original calculation if no intended dimensions
      const startX = rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
      const startY = rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
      const endX = rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
      const endY = rectB.top - containerRect.top + rectB.height / 2 + endYOffset;

      const controlY = startY - curvature;
      const d = `M ${startX},${startY} Q ${(startX + endX) / 2},${controlY} ${endX},${endY}`;
      setPathD(d);
    }
  };

  useEffect(() => {
    // If we have intended dimensions, set them immediately
    if (intendedWidth && intendedHeight) {
      setSvgDimensions({ width: intendedWidth, height: intendedHeight });
    }
    
    // Add a small delay to ensure the container is fully rendered
    const timer = setTimeout(() => {
      updatePath();
    }, 100);
    
    const resizeObserver = new ResizeObserver(() => {
      updatePath();
    });

    if (containerRef?.current) {
      resizeObserver.observe(containerRef.current);
    }

    window.addEventListener('resize', updatePath);
    
    return () => {
      clearTimeout(timer);
      resizeObserver.disconnect();
      window.removeEventListener('resize', updatePath);
    };
  }, [fromRef, toRef, containerRef, curvature, startXOffset, startYOffset, endXOffset, endYOffset, intendedWidth, intendedHeight]);

  if (!pathD || svgDimensions.width === 0) return null;

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none absolute left-0 top-0 transform-gpu stroke-2 ${className}`}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
      />
      <path
        d={pathD}
        strokeWidth={pathWidth}
        stroke={`url(#${id.current})`}
        strokeOpacity="1"
        strokeLinecap="round"
      />
      <defs>
        <motion.linearGradient
          id={id.current}
          gradientUnits="userSpaceOnUse"
          className="transform-gpu"
          initial={{
            x1: "0%",
            x2: "0%",
            y1: "0%",
            y2: "0%",
          }}
          animate={{
            x1: gradientCoordinates.x1,
            x2: gradientCoordinates.x2,
            y1: gradientCoordinates.y1,
            y2: gradientCoordinates.y2,
          }}
          transition={{
            delay,
            duration,
            ease: [0.16, 1, 0.3, 1], // https://easings.net/#easeOutExpo
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0" />
          <stop stopColor={gradientStartColor} />
          <stop offset="32.5%" stopColor={gradientStopColor} />
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
};

export default AnimatedBeam; 