import { useEffect, useState } from 'react';

/**
 * useWindowSize
 * Tracks the window's inner dimensions, updating on resize. Reads the
 * initial size synchronously via a lazy useState initializer, avoiding a
 * 0x0-on-first-render flash that a useEffect-only version produces.
 */
export function useWindowSize() {
  const [size, setSize] = useState(() =>
    typeof window !== 'undefined'
      ? { width: window.innerWidth, height: window.innerHeight }
      : { width: 0, height: 0 }
  );

  useEffect(() => {
    function onResize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return size;
}

export default useWindowSize;
