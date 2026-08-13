import { useEffect, useRef, useState } from 'react';

/**
 * ProgressRing
 * An SVG determinate progress ring driven by stroke-dashoffset.
 *
 * Determinate progress is kept visible under prefers-reduced-motion (the value
 * still matters); only the tween between values is dropped.
 */
export default function ProgressRing({
  value = 0,
  max = 100,
  size = 96,
  thickness = 8,
  label,
  showValue = true,
  className = '',
  ...rest
}) {
  const clamped = Math.min(Math.max(value, 0), max);
  const pct = max === 0 ? 0 : clamped / max;

  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;

  const [display, setDisplay] = useState(pct);
  const reducedRef = useRef(false);

  useEffect(() => {
    reducedRef.current =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  useEffect(() => {
    if (reducedRef.current) {
      setDisplay(pct);
      return undefined;
    }
    // Defer one frame so the browser has a previous offset to transition from.
    const raf = requestAnimationFrame(() => setDisplay(pct));
    return () => cancelAnimationFrame(raf);
  }, [pct]);

  return (
    <div
      className={`prg ${className}`.trim()}
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-label={label}
      {...rest}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
        <circle
          className="prg__track"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={thickness}
        />
        <circle
          className="prg__fill"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={thickness}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - display)}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      {showValue ? (
        <span className="prg__value">{Math.round(pct * 100)}%</span>
      ) : null}
    </div>
  );
}
