import React from 'react';
import PropTypes from 'prop-types';

/**
 * Valid Animation Types
 * @type {string[]}
 */
const ANIMATION_TYPES = [
  'fade-in', 'slide-up', 'slide-down', 'slide-left', 'slide-right',
  'zoom-in', 'zoom-out', 'spin', 'spin-reverse',
  'bounce', 'shake', 'pulse', 'flash', 'flip'
];

/**
 * Valid Hover Micro-Interactions
 * @type {string[]}
 */
const HOVER_TYPES = [
  'lift', 'glow', 'scale', 'shake', 'pulse'
];

/**
 * A robust React wrapper component for integrating EaseMotion CSS utility classes.
 * 
 * @param {Object} props
 * @param {string} [props.type] - The core animation type (e.g. 'fade-in', 'slide-up').
 * @param {string|number} [props.duration='medium'] - Animation duration. Can be 'fast', 'medium', 'slow', or a number in ms.
 * @param {number} [props.delay=0] - Delay in ms before the animation begins.
 * @param {string} [props.hover] - Hover micro-interaction class (e.g. 'glow', 'lift').
 * @param {string|React.ElementType} [props.tag='div'] - The HTML tag to render.
 * @param {string} [props.className=''] - Additional custom CSS classes.
 * @param {Object} [props.style={}] - Custom inline styles.
 * @param {React.ReactNode} [props.children] - Child elements.
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

  if (type) classes.push(`ease-animate-${type}`);
  if (['fast', 'medium', 'slow'].includes(duration)) classes.push(`ease-duration-${duration}`);
  if (hover) classes.push(`ease-hover-${hover}`);
  if (className) classes.push(className);

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
    <Tag className={classes.join(' ').trim()} style={inlineStyle} {...props}>
      {children}
    </Tag>
  );
}

Animate.propTypes = {
  /**
   * The explicit EaseMotion animation type.
   * Compiles directly to `.ease-animate-{type}`.
   */
  type: PropTypes.oneOf(ANIMATION_TYPES),

  /**
   * Animation duration. Accepts preset strings mapping to CSS variables 
   * or a raw number in milliseconds to inject as an inline style.
   */
  duration: PropTypes.oneOfType([
    PropTypes.oneOf(['fast', 'medium', 'slow']),
    PropTypes.number
  ]),

  /**
   * Delay in milliseconds before the animation begins. 
   * Dynamically injects `animation-delay` and `transition-delay` inline styles.
   */
  delay: PropTypes.number,

  /**
   * The EaseMotion hover micro-interaction class suffix to apply.
   */
  hover: PropTypes.oneOf(HOVER_TYPES),

  /**
   * The HTML tag or React component to render as the root element.
   */
  tag: PropTypes.elementType,

  /**
   * Additional custom CSS classes to append.
   */
  className: PropTypes.string,

  /**
   * Custom inline styles.
   */
  style: PropTypes.object,

  /**
   * The nested elements or text content to animate.
   */
  children: PropTypes.node
};

Animate.defaultProps = {
  duration: 'medium',
  delay: 0,
  tag: 'div',
  className: '',
  style: {}
};
