import React, { ElementType, HTMLAttributes, CSSProperties, ReactNode } from 'react';

/**
 * Valid EaseMotion animation types
 */
export type AnimationType = 
  | 'fade-in' | 'slide-up' | 'slide-down' | 'zoom-in' 
  | 'spin' | 'bounce' | 'shake' | 'pulse' | 'flash' | 'flip';

/**
 * Valid EaseMotion hover micro-interaction types
 */
export type HoverType = 
  | 'lift' | 'glow' | 'scale' | 'shake' | 'pulse';

/**
 * Preset animation duration strings mapping to CSS tokens, 
 * or a raw number representing milliseconds.
 */
export type AnimationDuration = 'fast' | 'medium' | 'slow' | number;

export interface AnimateProps extends HTMLAttributes<HTMLElement> {
  /**
   * The EaseMotion animation type to apply on mount.
   * Compiles to `.ease-animate-{type}`.
   */
  type?: AnimationType;
  
  /**
   * Animation duration. Accepts preset strings mapping to CSS variables 
   * or a raw number in milliseconds to inject as an inline style.
   * @default 'medium'
   */
  duration?: AnimationDuration;
  
  /**
   * Delay in milliseconds before the animation begins. 
   * Dynamically injects `animation-delay` inline styles.
   * @default 0
   */
  delay?: number;
  
  /**
   * The EaseMotion hover micro-interaction class suffix to apply.
   * Compiles to `.ease-hover-{hover}`.
   */
  hover?: HoverType;
  
  /**
   * The HTML tag or React component to render as the root element.
   * @default 'div'
   */
  tag?: ElementType;
  
  /**
   * Additional custom CSS classes to append.
   */
  className?: string;
  
  /**
   * Custom inline styles. Note: `animationDuration` and `animationDelay` 
   * may be overridden by the `duration` and `delay` props.
   */
  style?: CSSProperties;
  
  /**
   * The nested elements or text content to animate.
   */
  children?: ReactNode;
}

/**
 * A strongly-typed React wrapper component for EaseMotion CSS animations.
 * 
 * Maps strict TypeScript props dynamically to underlying `.ease-animate-*` 
 * and `.ease-hover-*` classes while managing inline style overrides for duration and delay.
 */
export const Animate: React.FC<AnimateProps> = ({
  type,
  duration = 'medium',
  delay = 0,
  hover,
  tag: Tag = 'div',
  className = '',
  style = {},
  children,
  ...props
}) => {
  const classes: string[] = [];

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
  const inlineStyle: CSSProperties = { ...style };
  
  if (delay > 0) {
    inlineStyle.animationDelay = `${delay}ms`;
    inlineStyle.transitionDelay = `${delay}ms`;
  }
  
  if (typeof duration === 'number') {
    inlineStyle.animationDuration = `${duration}ms`;
    inlineStyle.transitionDuration = `${duration}ms`;
  }

  return (
    <Tag className={classes.join(' ').trim()} style={inlineStyle} {...props}>
      {children}
    </Tag>
  );
};

export default Animate;
