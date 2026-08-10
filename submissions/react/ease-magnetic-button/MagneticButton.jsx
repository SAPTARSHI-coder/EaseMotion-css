import React, { useRef, useState } from 'react';
import './style.css';

/**
 * A wrapper component that adds a premium "magnetic" pull effect to any child button.
 * It tracks the cursor's position relative to the element's center, and translates
 * those coordinates into CSS variables, allowing native CSS to handle the actual rendering.
 */
export const MagneticButton = ({ 
  children, 
  pullStrength = 0.3, // How strongly the button is pulled towards the cursor (0.1 to 1)
  className = ''
}) => {
  const buttonRef = useRef(null);
  
  // We use state to track if we are hovering so we can toggle the transition style.
  // When hovering, we want 0 transition so it tracks instantly.
  // When leaving, we want a transition so it springs back to center smoothly.
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    
    // Get the bounding rectangle of the button
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    
    // Calculate the center point of the button
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Calculate how far the cursor is from the center
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    // Apply the pull strength multiplier
    setPosition({
      x: distanceX * pullStrength,
      y: distanceY * pullStrength
    });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    // Reset to center
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div 
      className={`ease-magnetic-wrapper ${className}`}
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        // Pass the calculated positions to CSS
        '--mx': `${position.x}px`,
        '--my': `${position.y}px`,
        // Toggle the transition based on hover state
        '--magnetic-transition': isHovering 
          ? 'transform 0.1s cubic-bezier(0.2, 0, 0, 1)' // Extremely snappy while tracking
          : 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)' // Springy snap-back when leaving
      }}
    >
      <div className="ease-magnetic-content">
        {children}
      </div>
    </div>
  );
};

export default MagneticButton;
