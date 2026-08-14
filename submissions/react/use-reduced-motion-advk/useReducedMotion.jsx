import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

/**
 * useReducedMotion
 * Subscribes to the user's motion preference and re-renders when it CHANGES.
 * Most implementations read the value once on mount and never update.
 */
export function useReducedMotion() {
  // Lazy initial state avoids a first-render flash of the animated variant.
  const [reduced, setReduced] = useState(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return false;
    }
    return window.matchMedia(QUERY).matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return undefined;
    }

    const mql = window.matchMedia(QUERY);
    const onChange = (event) => setReduced(event.matches);

    // Safari < 14 exposes only the deprecated addListener API.
    if (typeof mql.addEventListener === 'function') {
      mql.addEventListener('change', onChange);
      return () => mql.removeEventListener('change', onChange);
    }

    mql.addListener(onChange);
    return () => mql.removeListener(onChange);
  }, []);

  return reduced;
}

/**
 * MotionSafe
 * Renders `children` normally, or `fallback` when reduced motion is requested.
 */
export function MotionSafe({ children, fallback = null }) {
  const reduced = useReducedMotion();
  return reduced ? fallback : children;
}

export default useReducedMotion;
