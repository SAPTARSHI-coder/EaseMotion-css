import React, { useEffect, useRef, useState } from 'react';

/**
 * EaseMotion Wrapper Component
 * @param {string} animation - The name of the animation (e.g. 'fade-in', 'bounce')
 * @param {boolean} trigger - A boolean that triggers the animation (if not provided, it will animate on mount)
 * @param {boolean} loop - Whether the animation should loop infinitely
 * @param {number} delay - Animation delay in milliseconds
 * @param {string} speed - Speed modifier: 'fast', 'slow', or 'normal' (default)
 * @param {boolean} hover - If true, the animation only triggers on hover
 * @param {React.ElementType} as - The HTML element to render (default is 'div')
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Component children
 */
const Ease = ({
  animation = 'fade-in',
  trigger,
  loop = false,
  delay = 0,
  speed = 'normal',
  hover = false,
  as: Component = 'div',
  className = '',
  children,
  ...props
}) => {
  const [isActive, setIsActive] = useState(false);
  const elementRef = useRef(null);

  // Determine if it should animate automatically on mount
  useEffect(() => {
    if (trigger === undefined && !hover) {
      setIsActive(true);
    } else if (trigger !== undefined) {
      setIsActive(trigger);
    }
  }, [trigger, hover]);

  // Construct the CSS classes based on props
  const animationClass = `ease-${animation}`;
  
  // Handling modifiers
  const modifiers = [];
  if (loop) modifiers.push('ease-loop'); // Assuming we have a loop modifier, or we map it to looping animations
  if (hover) modifiers.push('ease-hover'); 
  if (speed === 'fast') modifiers.push('ease-fast');
  if (speed === 'slow') modifiers.push('ease-slow');

  // We conditionally add the animation class if it's active or if it's a hover animation
  const classes = [
    className,
    (isActive || hover) ? animationClass : '',
    ...modifiers
  ].filter(Boolean).join(' ').trim();

  const inlineStyles = delay > 0 ? { animationDelay: `${delay}ms` } : {};

  return (
    <Component
      ref={elementRef}
      className={classes}
      style={{ ...props.style, ...inlineStyles }}
      onMouseEnter={() => hover && setIsActive(true)}
      onMouseLeave={() => hover && setIsActive(false)}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Ease;
