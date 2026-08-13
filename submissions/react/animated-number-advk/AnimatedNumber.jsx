import { useEffect, useRef, useState } from 'react';

/**
 * AnimatedNumber
 * Tweens its displayed value toward `value` using requestAnimationFrame,
 * easing on the delta rather than on elapsed time so a value change mid-tween
 * restarts smoothly from the current on-screen number instead of jumping.
 */
export function AnimatedNumber({
  value,
  duration = 500,
  format = (n) => Math.round(n).toLocaleString(),
  className,
}) {
  const [display, setDisplay] = useState(value);
  const frameRef = useRef(null);
  const fromRef = useRef(value);
  const startRef = useRef(null);
  const prefersReducedMotion = useRef(
    typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    if (prefersReducedMotion.current) {
      setDisplay(value);
      return;
    }

    fromRef.current = display;
    startRef.current = null;
    const from = fromRef.current;
    const delta = value - from;

    function tick(timestamp) {
      if (startRef.current === null) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(from + delta * eased);
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      }
    }

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration]);

  return <span className={className}>{format(display)}</span>;
}

export default AnimatedNumber;
