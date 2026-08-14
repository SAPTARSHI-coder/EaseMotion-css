import React from 'react';
import './style.css';

/**
 * BounceBadge
 * 
 * A React component representing a small badge or pill.
 * Applies a bouncy hover effect when the user interacts with it.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content of the badge.
 * @param {string} [props.color='primary'] - The color theme of the badge ('primary', 'secondary', 'success', 'danger').
 * @param {boolean} [props.animate=true] - Whether the hover animation is enabled.
 */
const BounceBadge = ({ 
  children, 
  color = 'primary', 
  animate = true,
  ...props 
}) => {
  return (
    <span 
      className={`ease-bounce-badge-ag badge-color-${color}-ag ${animate ? 'ease-animate-bounce-hover-ag' : ''}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default BounceBadge;
