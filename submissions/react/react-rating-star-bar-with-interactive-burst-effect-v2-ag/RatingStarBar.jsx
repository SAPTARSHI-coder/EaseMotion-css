import React, { useState } from 'react';
import './style.css';

/**
 * Individual Star Component
 * Handles the visual states (filled, half, empty) and the particle burst logic.
 */
const Star = ({ filled, half, onClick, onMouseEnter, onMouseLeave, isBursting }) => {
  return (
    <div 
      className={`star-wrapper ${isBursting ? 'burst-active' : ''} ease-hover-scale`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <svg 
        className={`star-icon ${filled ? 'filled' : ''} ${half ? 'half' : ''}`} 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        strokeWidth="2"
      >
        <defs>
          <linearGradient id="half-fill">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="transparent" stopOpacity="1" />
          </linearGradient>
        </defs>
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" 
        />
      </svg>
      {/* Burst Particles */}
      {isBursting && (
        <div className="burst-particles">
          <span style={{"--i": 1}}></span>
          <span style={{"--i": 2}}></span>
          <span style={{"--i": 3}}></span>
          <span style={{"--i": 4}}></span>
          <span style={{"--i": 5}}></span>
        </div>
      )}
    </div>
  );
};

/**
 * Rating Star Bar
 * A highly interactive React component utilizing custom EaseMotion burst animations.
 */
const RatingStarBar = ({ 
  maxStars = 5, 
  defaultRating = 0, 
  readOnly = false,
  onChange 
}) => {
  const [rating, setRating] = useState(defaultRating);
  const [hoverRating, setHoverRating] = useState(0);
  const [burstIndex, setBurstIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    if (!readOnly) setHoverRating(index);
  };

  const handleMouseLeave = () => {
    if (!readOnly) setHoverRating(0);
  };

  const handleClick = (index) => {
    if (readOnly) return;
    setRating(index);
    setBurstIndex(index);
    
    // Reset burst effect state after animation completes
    setTimeout(() => {
      setBurstIndex(-1);
    }, 600);

    if (onChange) onChange(index);
  };

  // Determine what rating to display based on hover state vs committed state
  const currentDisplay = hoverRating || rating;

  return (
    <div className="rating-container ease-fade-in">
      <div className="stars-flex" onMouseLeave={handleMouseLeave}>
        {[...Array(maxStars)].map((_, i) => {
          const starValue = i + 1;
          const isFilled = starValue <= currentDisplay;
          // Handles decimal default ratings if provided (e.g. 4.5)
          const isHalf = !isFilled && starValue - 0.5 <= currentDisplay;
          
          return (
            <Star
              key={i}
              filled={isFilled}
              half={isHalf}
              isBursting={burstIndex === starValue}
              onClick={() => handleClick(starValue)}
              onMouseEnter={() => handleMouseEnter(starValue)}
            />
          );
        })}
      </div>
      <div className="rating-text ease-slide-up">
        {currentDisplay > 0 ? `${currentDisplay} out of ${maxStars}` : 'Select a rating'}
      </div>
    </div>
  );
};

export default RatingStarBar;
