import React from 'react';
import { buildAnimateClassName, buildAnimateStyle } from './animationClasses';

/**
 * <Animate> — declarative React wrapper for EaseMotion CSS keyframe animations.
 *
 * Props:
 * - type: animation keyword — 'fade-in', 'fade-out', 'slide-up', 'slide-down',
 *   'slide-in-left', 'slide-in-right', 'zoom-in', 'zoom-out', 'bounce-in',
 *   'bounce', 'flip', 'spin'/'rotate', 'pulse', 'ping', 'shake', 'float',
 *   'wave', 'blur-to-focus'. Unknown values fall back to `ease-<type>`.
 * - duration: 'fast' | 'medium' | 'slow' (utility class) or a number of ms
 *   (inlined as animation-duration). Defaults to 'medium'.
 * - delay: stagger delay in ms (inlined as animation-delay).
 * - iteration: 'infinite' or a positive count (animation-iteration-count).
 * - hover: hover effect keyword — 'lift', 'scale', 'glow', 'shrink',
 *   'lift-shadow', 'underline'. (For richer hover control use <Hover>.)
 * - onStart / onEnd: callbacks bound to the native onAnimationStart /
 *   onAnimationEnd lifecycle events.
 * - tag: element type to render (default 'div').
 * - className / style: merged with the generated class list / styles.
 */
export default function Animate({
  type,
  duration = 'medium',
  delay = 0,
  iteration,
  hover,
  tag: Tag = 'div',
  className = '',
  style = {},
  onStart,
  onEnd,
  children,
  ...props
}) {
  const combinedClassName = buildAnimateClassName({ type, duration, hover, className });
  const combinedStyle = buildAnimateStyle({ duration, delay, iteration, style });

  // Bind lifecycle hooks only when provided so we never clobber a handler
  // the caller passed through `...props`.
  const lifecycle = {};
  if (onStart) lifecycle.onAnimationStart = onStart;
  if (onEnd) lifecycle.onAnimationEnd = onEnd;

  return (
    <Tag className={combinedClassName} style={combinedStyle} {...props} {...lifecycle}>
      {children}
    </Tag>
  );
}
