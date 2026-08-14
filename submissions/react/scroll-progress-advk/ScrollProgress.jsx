import { useEffect, useRef, useState } from 'react';

/**
 * ScrollProgress
 * A reading-progress bar. Prefers the native CSS scroll timeline when the
 * browser supports it, and only falls back to a throttled listener otherwise.
 */
export default function ScrollProgress({
  target,
  height = 4,
  color = '#4c6ef5',
  className = '',
  ...rest
}) {
  const supportsTimeline =
    typeof CSS !== 'undefined' &&
    typeof CSS.supports === 'function' &&
    CSS.supports('animation-timeline', 'scroll()');

  const [progress, setProgress] = useState(0);
  const frame = useRef(0);

  useEffect(() => {
    // Native timeline handles it in CSS; no listener needed.
    if (supportsTimeline) return undefined;

    const el = target?.current ?? null;

    const read = () => {
      frame.current = 0;
      const scrollTop = el ? el.scrollTop : window.scrollY;
      const scrollMax = el
        ? el.scrollHeight - el.clientHeight
        : document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollMax > 0 ? Math.min(scrollTop / scrollMax, 1) : 0);
    };

    // Coalesce bursts of scroll events into one read per frame.
    const onScroll = () => {
      if (!frame.current) frame.current = requestAnimationFrame(read);
    };

    const node = el ?? window;
    node.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    read();

    return () => {
      node.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [supportsTimeline, target]);

  return (
    <div
      className={`sprog ${supportsTimeline ? 'sprog--native' : ''} ${className}`.trim()}
      style={{
        '--sprog-h': `${height}px`,
        '--sprog-c': color,
        ...(supportsTimeline ? null : { transform: `scaleX(${progress})` }),
      }}
      role="presentation"
      {...rest}
    />
  );
}
