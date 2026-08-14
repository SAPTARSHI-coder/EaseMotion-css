import React from 'react';
import './style.css';

/**
 * PulseSkeleton
 * 
 * A React component that renders a placeholder loading skeleton.
 * It applies a smooth, continuous pulsing animation to indicate loading state.
 * Optionally, the pulse effect can be configured to only trigger on hover, 
 * as requested in certain interactive mockups.
 * 
 * @param {Object} props
 * @param {string} [props.variant='rect'] - The shape of the skeleton ('text', 'rect', 'circle').
 * @param {string|number} [props.width] - CSS width of the skeleton.
 * @param {string|number} [props.height] - CSS height of the skeleton.
 * @param {boolean} [props.hoverOnly=false] - If true, the pulse animation only runs when hovered.
 */
const PulseSkeleton = ({ 
  variant = 'text', 
  width, 
  height,
  hoverOnly = false,
  ...props 
}) => {
  const styles = {
    width: width || (variant === 'text' ? '100%' : undefined),
    height: height || (variant === 'text' ? '1em' : undefined),
  };

  const animationClass = hoverOnly ? 'ease-pulse-skeleton-hover-ag' : 'ease-pulse-skeleton-infinite-ag';

  return (
    <div 
      className={`ease-skeleton-base-ag variant-${variant}-ag ${animationClass}`}
      style={styles}
      aria-busy="true"
      aria-hidden="true"
      {...props}
    />
  );
};

export default PulseSkeleton;
