import React from 'react';

/**
 * Animate component is a React wrapper for EaseMotion CSS animations.
 * It dynamically applies keyframe animations and transition behaviors.
 * 
 * Props:
 * - type: The animation type (e.g. 'fade-in', 'slide-up', 'zoom-in', 'spin', 'bounce')
 * - duration: Custom duration in ms or one of 'fast', 'medium', 'slow' (defaults to 'medium')
 * - delay: Delay in ms (e.g. 100, 200, 300 for staggered lists)
 * - hover: Hover effect class (e.g. 'lift', 'glow', 'scale', 'shake')
 * - tag: HTML tag to render (defaults to 'div')
 * - className: Additional custom classes
 */
export default function Animate({
  type,
  duration = 'medium',
  delay = 0,
  hover,
  tag: Tag = 'div',
  className = '',
  style = {},
  children,
  ...props
}) {
  const classes = [];

  // Core animation class
  if (type) {
    classes.push(`ease-animate-${type}`);
  }

  // Duration override class if standard token
  if (duration === 'fast' || duration === 'medium' || duration === 'slow') {
    classes.push(`ease-duration-${duration}`);
  }

  // Hover effect class
  if (hover) {
    classes.push(`ease-hover-${hover}`);
  }

  // Additional classes
  if (className) {
    classes.push(className);
  }

  // Inline style for custom duration (in ms) and delay
  const inlineStyle = { ...style };
  if (delay > 0) {
    inlineStyle.animationDelay = `${delay}ms`;
    inlineStyle.transitionDelay = `${delay}ms`;
  }
  if (typeof duration === 'number') {
    inlineStyle.animationDuration = `${duration}ms`;
    inlineStyle.transitionDuration = `${duration}ms`;
  }

  return (
    <Tag className={classes.join(' ')} style={inlineStyle} {...props}>
      {children}
    </Tag>
  );
}
