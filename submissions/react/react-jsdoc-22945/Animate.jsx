import React from 'react';

/**
 * @typedef {Object} AnimateProps
 * @property {string} [type] - The EaseMotion animation type to apply on mount (e.g., 'fade-in', 'slide-up', 'zoom-in', 'spin', 'bounce').
 * @property {'fast' | 'medium' | 'slow' | number} [duration='medium'] - Animation duration. Accepts preset strings mapping to CSS variables or a raw number in milliseconds to inject as an inline style.
 * @property {number} [delay=0] - Delay in milliseconds before the animation begins. This dynamically calculates and injects `animation-delay` and `transition-delay` inline styles.
 * @property {string} [hover] - The EaseMotion hover micro-interaction class suffix to apply (e.g., 'lift', 'glow', 'scale', 'shake').
 * @property {keyof JSX.IntrinsicElements | React.ElementType} [tag='div'] - The HTML tag or React component to render as the root element. Defaults to 'div'.
 * @property {string} [className=''] - Additional custom CSS classes to append to the rendered element.
 * @property {React.CSSProperties} [style={}] - Custom inline styles. Note: `animationDuration` and `animationDelay` may be overridden by the `duration` and `delay` props.
 * @property {React.ReactNode} [children] - The nested elements or text content to animate.
 */

/**
 * A robust React wrapper component for integrating EaseMotion CSS utility classes.
 * 
 * This component acts as a bridge between React's dynamic props and EaseMotion's static CSS,
 * automatically calculating class arrays and intelligently mapping numeric duration/delay props 
 * into performant inline style overrides.
 * 
 * @example
 * // Basic Fade-In
 * <Animate type="fade-in">Hello World</Animate>
 * 
 * @example
 * // Complex Staggered List Item with Hover Micro-Interactions
 * <Animate type="slide-up" delay={150} duration={500} hover="scale" tag="li">
 *   List Item
 * </Animate>
 * 
 * @param {AnimateProps & React.HTMLAttributes<HTMLElement>} props - Component properties.
 * @returns {React.ReactElement} The configured animated wrapper element.
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
