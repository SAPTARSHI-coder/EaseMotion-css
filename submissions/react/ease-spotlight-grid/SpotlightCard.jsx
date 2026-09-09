import React, { useRef, useState, useEffect } from 'react';
import './style.css';

/**
 * ============================================================================
 * EaseMotion Hardware-Accelerated Spotlight Card
 * ============================================================================
 * 
 * Replaces expensive WebGL shaders for glow effects.
 * We track the mouse natively and pass `--mouse-x` and `--mouse-y` to CSS.
 * CSS then applies a `radial-gradient` that physically follows the cursor!
 */

export const SpotlightCard = ({ children, className = '' }) => {
  const cardRef = useRef(null);
  
  // Track mouse coordinates relative to this specific card
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    // We need the exact dimensions and position of the card on the screen
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to the top-left corner of the card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  };

  return (
    <div 
      ref={cardRef}
      className={`ease-spotlight-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        // We pass the local mouse coordinates natively to the CSS engine
        '--mouse-x': `${mousePosition.x}px`,
        '--mouse-y': `${mousePosition.y}px`,
        // We fade the spotlight opacity in and out based on hover state
        '--spotlight-opacity': isHovered ? 1 : 0
      }}
    >
      {/* 
        The Glow Border Layer 
        This div is slightly larger than the card content. 
        It catches the spotlight to create a glowing border! 
      */}
      <div className="spotlight-border"></div>
      
      {/* 
        The Glow Background Layer
        This div sits underneath the content and creates the soft internal glow.
      */}
      <div className="spotlight-background"></div>

      {/* The Actual Content */}
      <div className="card-content">
        {children}
      </div>
    </div>
  );
};

export default SpotlightCard;
