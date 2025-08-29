import { useState, useEffect, useCallback } from 'react';

interface LoadingState {
  isLoading: boolean;
  progress: number;
  loadedVideos: number;
  totalVideos: number;
  loadedData: number;
  totalData: number;
}

export const useLoadingState = () => {
  const [loadingState, setLoadingState] = useState<LoadingState>({
    isLoading: true,
    progress: 0,
    loadedVideos: 0,
    totalVideos: 0,
    loadedData: 0,
    totalData: 0,
  });

  // Video loading tracking
  const [videoLoadPromises, setVideoLoadPromises] = useState<Promise<void>[]>([]);
  
  // Data loading tracking
  const [dataLoadPromises, setDataLoadPromises] = useState<Promise<void>[]>([]);

  // Add a video to track
  const addVideoToTrack = useCallback((videoPromise: Promise<void>) => {
    setVideoLoadPromises(prev => [...prev, videoPromise]);
  }, []);

  // Add data to track
  const addDataToTrack = useCallback((dataPromise: Promise<void>) => {
    setDataLoadPromises(prev => [...prev, dataPromise]);
  }, []);

  // Calculate total progress
  useEffect(() => {
    const totalPromises = videoLoadPromises.length + dataLoadPromises.length;
    
    if (totalPromises === 0) {
      setLoadingState(prev => ({ ...prev, progress: 100, isLoading: false }));
      return;
    }

    let completedPromises = 0;
    let totalProgress = 0;

    // Track video loading
    videoLoadPromises.forEach((promise) => {
      promise
        .then(() => {
          completedPromises++;
          totalProgress = (completedPromises / totalPromises) * 100;
          
          setLoadingState(prev => ({
            ...prev,
            loadedVideos: prev.loadedVideos + 1,
            progress: Math.round(totalProgress),
          }));
        })
        .catch(() => {
          completedPromises++;
          totalProgress = (completedPromises / totalPromises) * 100;
          
          setLoadingState(prev => ({
            ...prev,
            loadedVideos: prev.loadedVideos + 1,
            progress: Math.round(totalProgress),
          }));
        });
    });

    // Track data loading
    dataLoadPromises.forEach((promise) => {
      promise
        .then(() => {
          completedPromises++;
          totalProgress = (completedPromises / totalPromises) * 100;
          
          setLoadingState(prev => ({
            ...prev,
            loadedData: prev.loadedData + 1,
            progress: Math.round(totalProgress),
          }));
        })
        .catch(() => {
          completedPromises++;
          totalProgress = (completedPromises / totalPromises) * 100;
          
          setLoadingState(prev => ({
            ...prev,
            loadedData: prev.loadedData + 1,
            progress: Math.round(totalProgress),
          }));
        });
    });

    // Update total counts
    setLoadingState(prev => ({
      ...prev,
      totalVideos: videoLoadPromises.length,
      totalData: dataLoadPromises.length,
    }));

  }, [videoLoadPromises, dataLoadPromises]);

  // Hide loading screen when complete
  useEffect(() => {
    if (loadingState.progress >= 100) {
      const timer = setTimeout(() => {
        setLoadingState(prev => ({ ...prev, isLoading: false }));
      }, 500); // Small delay for smooth transition

      return () => clearTimeout(timer);
    }
  }, [loadingState.progress]);

  // Simulate initial loading progress
  useEffect(() => {
    if (loadingState.isLoading && loadingState.progress === 0) {
      const timer = setTimeout(() => {
        setLoadingState(prev => ({ ...prev, progress: 15 }));
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [loadingState.isLoading, loadingState.progress]);

  return {
    ...loadingState,
    addVideoToTrack,
    addDataToTrack,
  };
}; 