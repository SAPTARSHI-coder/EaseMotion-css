import { useCallback, useState } from 'react';

/**
 * useRipple
 * Returns props to spread onto any element to give it a material-style ripple
 * originating at the pointer, plus the ripple nodes to render inside it.
 */
export function useRipple({ disabled = false } = {}) {
  const [ripples, setRipples] = useState([]);

  const onPointerDown = useCallback(
    (event) => {
      if (disabled) return;

      const reduced =
        typeof window !== 'undefined' &&
        typeof window.matchMedia === 'function' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) return;

      const el = event.currentTarget;
      const rect = el.getBoundingClientRect();
      // Radius must reach the farthest corner from the press point.
      const size = Math.max(rect.width, rect.height) * 2;
      const id = Date.now() + Math.random();

      setRipples((prev) => [
        ...prev,
        { id, size, x: event.clientX - rect.left - size / 2, y: event.clientY - rect.top - size / 2 },
      ]);
    },
    [disabled]
  );

  // Remove each ripple when its own animation ends, not on a timer.
  const onRippleEnd = useCallback((id) => {
    setRipples((prev) => prev.filter((r) => r.id !== id));
  }, []);

  const rippleNodes = ripples.map((r) => (
    <span
      key={r.id}
      className="rpl__wave"
      style={{ left: r.x, top: r.y, width: r.size, height: r.size }}
      onAnimationEnd={() => onRippleEnd(r.id)}
    />
  ));

  return { rippleProps: { onPointerDown, className: 'rpl' }, rippleNodes };
}

export default function RippleButton({ children, className = '', ...rest }) {
  const { rippleProps, rippleNodes } = useRipple();
  return (
    <button
      type="button"
      {...rest}
      {...rippleProps}
      className={`rpl-btn ${rippleProps.className} ${className}`.trim()}
    >
      <span className="rpl__label">{children}</span>
      {rippleNodes}
    </button>
  );
}
