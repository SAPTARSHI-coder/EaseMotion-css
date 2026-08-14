import React, { useState } from 'react';

const StarIcon = ({ filled, half, className = '' }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="32" 
    height="32" 
    viewBox="0 0 24 24" 
    fill={filled ? "currentColor" : "none"} 
    stroke="currentColor" 
    strokeWidth={filled ? "0" : "1.5"}
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={`star-icon ${className} ${filled ? 'is-filled' : ''} ${half ? 'is-half' : ''}`}
  >
    <defs>
      <linearGradient id="halfGradient" x1="0" x2="100%" y1="0" y2="0">
        <stop offset="50%" stopColor="currentColor" />
        <stop offset="50%" stopColor="transparent" stopOpacity="1" />
      </linearGradient>
    </defs>
    <polygon 
      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" 
      fill={half ? "url(#halfGradient)" : undefined}
      strokeWidth={half ? "1.5" : undefined}
    />
  </svg>
);

const RatingStars = ({ 
  maxStars = 5, 
  value = 0, 
  onChange, 
  readonly = false, 
  allowHalf = false,
  size = 'md' 
}) => {
  const [hoverValue, setHoverValue] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Calculate the effective value to display (hover takes precedence)
  const displayValue = hoverValue !== null ? hoverValue : value;

  const handleMouseMove = (e, index) => {
    if (readonly) return;
    
    let newValue = index + 1;
    if (allowHalf) {
      const { left, width } = e.currentTarget.getBoundingClientRect();
      const percent = (e.clientX - left) / width;
      if (percent < 0.5) {
        newValue -= 0.5;
      }
    }
    setHoverValue(newValue);
  };

  const handleMouseLeave = () => {
    if (readonly) return;
    setHoverValue(null);
  };

  const handleClick = (index, e) => {
    if (readonly) return;
    
    let newValue = index + 1;
    if (allowHalf) {
      const { left, width } = e.currentTarget.getBoundingClientRect();
      const percent = (e.clientX - left) / width;
      if (percent < 0.5) {
        newValue -= 0.5;
      }
    }

    if (onChange) {
      onChange(newValue);
    }

    // Trigger pulse animation on the container
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div 
      className={`rating-container size-${size} ${readonly ? 'is-readonly' : ''}`}
      onMouseLeave={handleMouseLeave}
      role="radiogroup"
      aria-label="Rating"
    >
      {[...Array(maxStars)].map((_, index) => {
        const starValue = index + 1;
        const isFilled = displayValue >= starValue;
        const isHalf = allowHalf && displayValue === starValue - 0.5;
        const isHovered = hoverValue !== null && hoverValue >= starValue;
        const isHoveredHalf = hoverValue !== null && allowHalf && hoverValue === starValue - 0.5;

        // Determine classes for interaction and animation
        let starClass = 'rating-star ease-zoom-in';
        if (isFilled || isHalf) starClass += ' active';
        if (isHovered || isHoveredHalf) starClass += ' ease-hover-scale';
        if (isAnimating && (isFilled || isHalf)) starClass += ' ease-pulse'; // Micro-interaction on click

        return (
          <button
            key={index}
            type="button"
            className={starClass}
            style={{ animationDelay: `${index * 50}ms` }}
            onClick={(e) => handleClick(index, e)}
            onMouseMove={(e) => handleMouseMove(e, index)}
            disabled={readonly}
            aria-label={`${starValue} Star${starValue !== 1 ? 's' : ''}`}
            aria-checked={value === starValue}
            role="radio"
          >
            <StarIcon 
              filled={isFilled} 
              half={isHalf} 
              className={isFilled || isHalf ? 'active-icon' : 'inactive-icon'} 
            />
          </button>
        );
      })}
    </div>
  );
};

export default RatingStars;
