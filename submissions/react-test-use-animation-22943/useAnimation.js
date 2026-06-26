import { useState, useEffect, useRef, useCallback } from 'react';

export const useAnimation = ({
  animation = "ease-fade-in",
  duration = "ease-duration-normal",
  curve = "ease-curve-ease",
  fill = "ease-fill-both"
} = {}) => {
  const ref = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Expose methods to control the animation state
  const play = useCallback(() => setIsPlaying(true), []);
  const reset = useCallback(() => setIsPlaying(false), []);

  // Automatically listen to the native animationend event to reset state
  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const handleAnimationEnd = (e) => {
      // Ensure the event target is exactly our element, not a child bubbling up
      if (e.target === node) {
        setIsPlaying(false);
      }
    };
    
    node.addEventListener('animationend', handleAnimationEnd);
    
    return () => {
      node.removeEventListener('animationend', handleAnimationEnd);
    };
  }, []);

  // Generate the class string based on the playing state
  const className = isPlaying 
    ? `${animation} ${duration} ${curve} ${fill}`.trim() 
    : "";

  return { ref, play, reset, isPlaying, className };
};
