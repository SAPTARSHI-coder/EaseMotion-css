import { useEffect, useMemo, useState } from 'react';

/**
 * Returns true when the user prefers reduced motion.
 */
function getPrefersReducedMotion() {
  if (typeof window === 'undefined' || !window.matchMedia) {
    return false;
  }
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Build EaseMotion-style delay class for a millisecond value.
 * @param {number} ms
 * @returns {string}
 */
function easeDelayClass(ms) {
  return `ease-delay-${ms}`;
}

/**
 * Generate stagger delays, class names, and style maps for a list of items.
 *
 * @param {number} count - Number of staggered items
 * @param {number} [baseDelay=80] - Milliseconds added per index (index 0 uses 0)
 * @returns {{
 *   classNames: string[],
 *   styleMaps: Array<{ animationDelay: string, transitionDelay: string }>,
 *   delays: number[],
 *   prefersReducedMotion: boolean
 * }}
 */
export default function useEaseStagger(count, baseDelay = 80) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(getPrefersReducedMotion);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) {
      return undefined;
    }

    const media = window.matchMedia('(prefers-reduced-motion: reduce)');

    const onChange = (event) => {
      setPrefersReducedMotion(event.matches);
    };

    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', onChange);
      return () => media.removeEventListener('change', onChange);
    }

    media.addListener(onChange);
    return () => media.removeListener(onChange);
  }, []);

  return useMemo(() => {
    const safeCount = Math.max(0, count);
    const delays = [];
    const classNames = [];
    const styleMaps = [];

    for (let index = 0; index < safeCount; index += 1) {
      const delayMs = prefersReducedMotion ? 0 : index * baseDelay;
      delays.push(delayMs);
      classNames.push(delayMs === 0 ? '' : easeDelayClass(delayMs));
      styleMaps.push({
        animationDelay: `${delayMs}ms`,
        transitionDelay: `${delayMs}ms`,
      });
    }

    return {
      classNames,
      styleMaps,
      delays,
      prefersReducedMotion,
    };
  }, [count, baseDelay, prefersReducedMotion]);
}
