import React, { useRef, useState, useCallback } from 'react';
import './style.css';

/**
 * A wrapper component that applies a highly performant 3D tilt/parallax effect
 * to its children based on the user's mouse position.
 */
export const ParallaxCard = ({ 
  children, 
  tiltMaxAngleX = 15, // Maximum rotation on the X axis in degrees
  tiltMaxAngleY = 15, // Maximum rotation on the Y axis in degrees
  className = ''
}) => {
  const cardRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [rotations, setRotations] = useState({ x: 0, y: 0 });

  // Calculate the tilt angles based on mouse position relative to the center
  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    
    // Get the exact dimensions and position of the card on the screen
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate geometric center of the card
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate cursor distance from center, normalized to a range of -1 to 1
    const normalizedX = (e.clientX - centerX) / (rect.width / 2);
    const normalizedY = (e.clientY - centerY) / (rect.height / 2);
    
    // Multiply by the max tilt angles (Invert Y so it tilts *towards* the mouse)
    const rotateX = (normalizedY * -tiltMaxAngleX).toFixed(2);
    const rotateY = (normalizedX * tiltMaxAngleY).toFixed(2);
    
    setRotations({ x: rotateX, y: rotateY });
  }, [tiltMaxAngleX, tiltMaxAngleY]);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    // Smoothly snap back to flat when the cursor leaves
    setRotations({ x: 0, y: 0 });
  };

  return (
    <div 
      className={`ease-parallax-wrapper ${className}`}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        // Pass the raw mathematical degrees down to native CSS
        '--rx': `${rotations.x}deg`,
        '--ry': `${rotations.y}deg`,
        // Toggle the transition: snappy while tracking, springy while snapping back
        '--parallax-transition': isHovering 
          ? 'transform 0.1s cubic-bezier(0.2, 0, 0, 1)' 
          : 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)'
      }}
    >
      <div className="ease-parallax-inner">
        {children}
      </div>
    </div>
  );
};

export default ParallaxCard;
