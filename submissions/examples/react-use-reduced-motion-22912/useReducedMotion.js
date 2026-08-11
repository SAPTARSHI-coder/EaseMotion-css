// submissions/react-use-reduced-motion-22912/useReducedMotion.js
const { useState, useEffect } = React;

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

// Helper to check the current media query safely (SSR compatible)
const getInitialState = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
};

export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(getInitialState);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQueryList = window.matchMedia(REDUCED_MOTION_QUERY);

    // Update state if the user changes their OS setting while the app is running
    const listener = (event) => {
      setPrefersReducedMotion(event.matches);
    };

    // Modern API for adding listeners to MediaQueryList
    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener('change', listener);
    } else {
      // Fallback for older browsers
      mediaQueryList.addListener(listener);
    }

    return () => {
      if (mediaQueryList.removeEventListener) {
        mediaQueryList.removeEventListener('change', listener);
      } else {
        mediaQueryList.removeListener(listener);
      }
    };
  }, []);

  return prefersReducedMotion;
};
