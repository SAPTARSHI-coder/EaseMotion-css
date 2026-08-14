import React, { useState, useEffect } from 'react';

const Chip = ({ 
  label, 
  variant = 'primary', 
  dismissible = true, 
  onDismiss, 
  icon,
  style = {},
  animationDelay = '0ms'
}) => {
  const [isExiting, setIsExiting] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleDismiss = (e) => {
    e.stopPropagation();
    setIsExiting(true);
  };

  const handleAnimationEnd = (e) => {
    // Only trigger onDismiss when the exit animation completes
    if (isExiting && e.animationName.includes('ease-zoom-out')) {
      if (onDismiss) {
        onDismiss();
      }
    }
  };

  // Construct class names based on state
  let className = `chip chip-${variant} ease-zoom-in`;
  if (isExiting) {
    className = `chip chip-${variant} is-exiting ease-zoom-out`;
  }
  if (isHovered && dismissible && !isExiting) {
    className += ' ease-hover-scale';
  }

  return (
    <div 
      className={className} 
      style={{ ...style, animationDelay: isExiting ? '0ms' : animationDelay }}
      onAnimationEnd={handleAnimationEnd}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon && (
        <span className="chip-icon">
          {icon}
        </span>
      )}
      
      <span className="chip-label">{label}</span>
      
      {dismissible && (
        <button 
          className="chip-dismiss-btn ease-hover-glow" 
          onClick={handleDismiss}
          aria-label={`Dismiss ${label}`}
          title="Remove tag"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      )}
    </div>
  );
};

export default Chip;
