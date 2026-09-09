import React from 'react';
import './style.css';

/**
 * EaseAnimate — React Wrapper Component for EaseMotion CSS
 * Submitted by: @Ishita-Katiyar-06 (-ik)
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child elements to animate
 * @param {'fade-in' | 'slide-up' | 'slide-down' | 'bounce' | 'zoom-in'} [props.animation='fade-in'] - Animation type
 * @param {string} [props.duration='300ms'] - Transition duration
 * @param {string} [props.delay='0ms'] - Animation delay
 * @param {boolean} [props.hoverLift=false] - Apply interactive hover lift effect
 * @param {string} [props.className=''] - Additional custom CSS classes
 */
export const EaseAnimate = ({
  children,
  animation = 'fade-in',
  duration = '300ms',
  delay = '0ms',
  hoverLift = false,
  className = '',
  style = {},
  ...restProps
}) => {
  const animationClass = `ease-${animation}`;
  const hoverClass = hoverLift ? 'ease-hover-lift' : '';
  const combinedClasses = `ease-react-animated-wrapper ${animationClass} ${hoverClass} ${className}`.trim();

  const customStyle = {
    animationDuration: duration,
    animationDelay: delay,
    ...style,
  };

  return (
    <div className={combinedClasses} style={customStyle} {...restProps}>
      {children}
    </div>
  );
};

export default EaseAnimate;
