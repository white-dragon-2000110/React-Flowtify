import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface VideoLoaderProps {
  src: string;
  onLoad: () => void;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  onEnded?: () => void;
  [key: string]: any;
}

const VideoLoader: React.FC<VideoLoaderProps> = ({
  src,
  onLoad,
  className = '',
  autoPlay = false,
  loop = false,
  muted = true,
  playsInline = true,
  onEnded,
  ...props
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      onLoad();
    };

    const handleLoadedData = () => {
      onLoad();
    };

    const handleError = () => {
      // Even if video fails to load, we consider it "loaded" for progress tracking
      onLoad();
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
    };
  }, [onLoad]);

  return (
    <motion.video
      ref={videoRef}
      src={src}
      className={className}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      onEnded={onEnded}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      {...props}
    />
  );
};

export default VideoLoader; 