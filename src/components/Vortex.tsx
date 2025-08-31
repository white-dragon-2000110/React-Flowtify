import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface VortexProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  particleCount?: number;
  rangeY?: number;
  baseHue?: number;
  baseSpeed?: number;
  rangeSpeed?: number;
  baseRadius?: number;
  rangeRadius?: number;
  backgroundColor?: string;
}

export const Vortex = (props: VortexProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number | undefined>(undefined);
  const particleCount = props.particleCount || 200;
  const baseHue = props.baseHue || 270;
  const baseSpeed = props.baseSpeed || 0.1;
  const rangeSpeed = props.rangeSpeed || 0.3;
  const baseRadius = props.baseRadius || 0.8;
  const rangeRadius = props.rangeRadius || 1.5;
  const backgroundColor = props.backgroundColor || "transparent";

  // Particle class for better organization
  class Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    maxLife: number;
    radius: number;
    hue: number;
    speed: number;

    constructor(canvas: HTMLCanvasElement) {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 1;
      this.vy = (Math.random() - 0.5) * 1;
      this.life = 0;
      this.maxLife = 150 + Math.random() * 150;
      this.radius = baseRadius + Math.random() * rangeRadius;
      this.hue = baseHue + Math.random() * 40;
      this.speed = baseSpeed + Math.random() * rangeSpeed;
    }

    update(canvas: HTMLCanvasElement) {
      // Add some vortex-like movement
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const dx = this.x - centerX;
      const dy = this.y - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance > 0) {
        // Create circular motion
        const angle = Math.atan2(dy, dx);
        const newAngle = angle + 0.008 * this.speed;
        const newDistance = distance + (Math.random() - 0.5) * 0.8;
        
        this.x = centerX + Math.cos(newAngle) * newDistance;
        this.y = centerY + Math.sin(newAngle) * newDistance;
      }

      this.life++;
      
      // Reset particle when it dies
      if (this.life > this.maxLife) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.life = 0;
        this.maxLife = 150 + Math.random() * 150;
      }
    }

    draw(ctx: CanvasRenderingContext2D) {
      const alpha = (1 - (this.life / this.maxLife)) * 0.6;
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.fillStyle = `hsla(${this.hue}, 50%, 70%, ${alpha})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  let particles: Particle[] = [];

  const initParticles = (canvas: HTMLCanvasElement) => {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(canvas));
    }
  };

  const animate = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Fill background
    if (backgroundColor !== "transparent") {
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // Update and draw particles
    particles.forEach(particle => {
      particle.update(canvas);
      particle.draw(ctx);
    });

    // Continue animation
    animationFrameId.current = requestAnimationFrame(() => animate(canvas, ctx));
  };

  const resizeCanvas = (canvas: HTMLCanvasElement) => {
    const container = canvas.parentElement;
    if (container) {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Initialize
    resizeCanvas(canvas);
    initParticles(canvas);
    animate(canvas, ctx);

    // Handle resize
    const handleResize = () => {
      resizeCanvas(canvas);
      initParticles(canvas);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [particleCount, baseHue, baseSpeed, rangeSpeed, baseRadius, rangeRadius]);

  return (
    <div 
      className={`relative h-full w-full ${props.containerClassName || ''}`}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        pointerEvents: "none"
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 z-0 flex h-full w-full items-center justify-center bg-transparent"
      >
        <canvas ref={canvasRef}></canvas>
      </motion.div>

      <div className={`relative z-10 ${props.className || ''}`}>
        {props.children}
      </div>
    </div>
  );
}; 