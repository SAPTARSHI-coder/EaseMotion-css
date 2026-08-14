import { useEffect, useRef, useState } from 'react';

/**
 * AnimatedCounter
 * Counts from `from` up to `to` the first time the element scrolls into view.
 *
 * Honours prefers-reduced-motion: when reduced motion is requested the final
 * value is shown immediately instead of being tweened.
 */
export default function AnimatedCounter({
  to,
  from = 0,
  duration = 1600,
  format = (n) => n.toLocaleString(),
  className = '',
  ...rest
}) {
  const ref = useRef(null);
  const [value, setValue] = useState(from);
  const [started, setStarted] = useState(false);

  // Start only once visible, so counters below the fold are not wasted.
  useEffect(() => {
    const el = ref.current;
    if (!el || started) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      setStarted(true);
      return undefined;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return undefined;

    const reduced =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced || duration <= 0) {
      setValue(to);
      return undefined;
    }

    let raf = 0;
    let startTime = 0;
    // easeOutCubic: moves quickly, then settles gently onto the final number
    const ease = (t) => 1 - Math.pow(1 - t, 3);

    const tick = (now) => {
      if (!startTime) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      setValue(from + (to - from) * ease(progress));

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setValue(to);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, to, from, duration]);

  return (
    <span ref={ref} className={`ease-fade-in ${className}`} {...rest}>
      {format(Math.round(value))}
    </span>
  );
}
