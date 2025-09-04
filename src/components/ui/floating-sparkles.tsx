"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "../../lib/utils";

interface FloatingSparklesProps {
  id?: string;
  className?: string;
  particleColor?: string;
  particleCount?: number;
  speed?: number;
  size?: number;
}

export const FloatingSparkles: React.FC<FloatingSparklesProps> = ({
  id,
  className,
  particleColor = "#FFFFFF",
  particleCount = 50,
  speed = 0.5,
  size = 1,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const particlesRef = useRef<any[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * size + 0.5,
          speedX: (Math.random() - 0.5) * speed,
          speedY: (Math.random() - 0.5) * speed,
          opacity: Math.random() * 0.6 + 0.2,
          twinkle: Math.random() * Math.PI * 2,
          life: Math.random() * 100,
          maxLife: 100 + Math.random() * 200,
        });
      }
    };

    initParticles();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.twinkle += 0.02;
        particle.life++;

        // Reset particle if it goes off screen or dies
        if (particle.x < -10 || particle.x > canvas.width + 10 || 
            particle.y < -10 || particle.y > canvas.height + 10 ||
            particle.life > particle.maxLife) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = 0;
          particle.maxLife = 100 + Math.random() * 200;
        }

        // Calculate twinkling opacity
        const twinkleOpacity = (Math.sin(particle.twinkle) + 1) * 0.5;
        const lifeOpacity = Math.min(particle.life / 50, 1) * Math.min((particle.maxLife - particle.life) / 50, 1);
        const finalOpacity = particle.opacity * twinkleOpacity * lifeOpacity;

        // Draw particle with glow effect
        ctx.save();
        ctx.globalAlpha = finalOpacity * 0.3;
        ctx.fillStyle = particleColor;
        ctx.shadowBlur = 10;
        ctx.shadowColor = particleColor;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw main particle
        ctx.globalAlpha = finalOpacity;
        ctx.shadowBlur = 0;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [particleCount, speed, size, particleColor]);

  return (
    <canvas
      ref={canvasRef}
      id={id}
      className={cn("absolute inset-0 w-full h-full pointer-events-none", className)}
    />
  );
};