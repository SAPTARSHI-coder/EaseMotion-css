import React, { useEffect, useRef } from 'react';

/**
 * Animate component is a React wrapper for EaseMotion CSS animations.
 * It dynamically applies keyframe animations and transition behaviors.
 *
 * Props:
 * - type: The animation type (e.g. 'fade-in', 'slide-up', 'zoom-in', 'rotate', 'bounce-in')
 *         -> `ease-{type}` (confirmed against animations.css — no '-animate-' infix)
 * - duration: 'fast' | 'medium' | 'slow' | number (ms) — defaults to 'medium'.
 *         Keywords add the real `ease-duration-{duration}` class (confirmed to
 *         exist in animations.css under "Duration Overrides"). A numeric value
 *         sets `animationDuration` directly as an inline style instead.
 * - delay: Delay in ms (e.g. 100, 200, 300 for staggered lists)
 * - iteration: Number of times the animation repeats, or 'infinite' (defaults to 1)
 * - hover: Hover effect suffix (e.g. 'lift', 'glow', 'grow', 'shrink') -> `ease-hover-{hover}`
 *          (confirmed against hover.css)
 * - onStart: Callback fired on the native `animationstart` event
 * - onEnd: Callback fired on the native `animationend` event
 * - tag: HTML tag to render (defaults to 'div')
 * - className: Additional custom classes
 */
export default function Animate({
  type,
  duration = 'medium',
  delay = 0,
  iteration = 1,
  hover,
  onStart,
  onEnd,
  tag: Tag = 'div',
  className = '',
  style = {},
  children,
  ...props
}) {
  const ref = useRef(null);

  // Attach real native listeners instead of React's onAnimationStart/
  // onAnimationEnd JSX props. This guarantees the callbacks fire on the
  // actual `animationstart`/`animationend` DOM events regardless of how
  // the host environment's React build registers (or fails to register)
  // its own synthetic animation-event delegation.
  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const handleStart = (event) => {
      if (onStart) onStart(event);
    };
    const handleEnd = (event) => {
      if (onEnd) onEnd(event);
    };

    node.addEventListener('animationstart', handleStart);
    node.addEventListener('animationend', handleEnd);

    return () => {
      node.removeEventListener('animationstart', handleStart);
      node.removeEventListener('animationend', handleEnd);
    };
  }, [onStart, onEnd]);

  const classes = [];

  // Core animation class — matches the real "ease-{type}" naming.
  if (type) {
    classes.push(`ease-${type}`);
  }

  // Duration keyword class — confirmed to exist in animations.css.
  if (duration === 'fast' || duration === 'medium' || duration === 'slow') {
    classes.push(`ease-duration-${duration}`);
  }

  // Hover effect class — confirmed 1:1 against hover.css.
  if (hover) {
    classes.push(`ease-hover-${hover}`);
  }

  // Additional classes
  if (className) {
    classes.push(className);
  }

  const inlineStyle = { ...style };

  // Numeric duration bypasses the class system entirely with a literal value.
  if (typeof duration === 'number') {
    inlineStyle.animationDuration = `${duration}ms`;
    inlineStyle.transitionDuration = `${duration}ms`;
  }

  if (delay > 0) {
    inlineStyle.animationDelay = `${delay}ms`;
    inlineStyle.transitionDelay = `${delay}ms`;
  }

  if (iteration !== undefined && iteration !== null) {
    inlineStyle.animationIterationCount = iteration;
  }

  return (
    <Tag
      ref={ref}
      className={classes.join(' ')}
      style={inlineStyle}
      {...props}
    >
      {children}
    </Tag>
  );
}