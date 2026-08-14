import React, { useState } from 'react';
import './style.css';

/**
 * ============================================================================
 * EaseMotion Hardware-Accelerated Morphing Play Button
 * ============================================================================
 * 
 * Morphs a triangular "Play" icon into two vertical "Pause" bars.
 * We completely bypass heavy vector animation libraries (like Lottie) by 
 * rendering two generic `div` elements and mathematically altering their 
 * `clip-path: polygon()` coordinates via native CSS transitions!
 */

export const MorphingPlay = ({ 
  initialState = false, 
  onToggle = () => {},
  size = 80
}) => {
  const [isPlaying, setIsPlaying] = useState(initialState);

  const handleToggle = () => {
    const newState = !isPlaying;
    setIsPlaying(newState);
    onToggle(newState);
  };

  return (
    <button 
      className={`ease-morph-btn ${isPlaying ? 'is-playing' : 'is-paused'}`}
      onClick={handleToggle}
      aria-label={isPlaying ? "Pause" : "Play"}
      style={{
        width: `${size}px`,
        height: `${size}px`
      }}
    >
      {/* 
        The Icon Container 
        This wrapper rotates 90 degrees during the transition to add a fluid, 
        snappy physical momentum to the morph!
      */}
      <div className="morph-icon-wrapper">
        
        {/* 
          Shape 1: 
          - Paused: The TOP half of the Play triangle.
          - Playing: The LEFT vertical Pause bar.
        */}
        <div className="morph-shape shape-1"></div>
        
        {/* 
          Shape 2:
          - Paused: The BOTTOM half of the Play triangle.
          - Playing: The RIGHT vertical Pause bar.
        */}
        <div className="morph-shape shape-2"></div>
        
      </div>
    </button>
  );
};

export default MorphingPlay;
