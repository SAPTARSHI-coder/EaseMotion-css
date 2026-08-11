import React, { useRef, useState } from 'react';
import './style.css';

/**
 * ============================================================================
 * EaseMotion Hardware-Accelerated Magnetic Button
 * ============================================================================
 * 
 * Replaces heavy physics engines like GSAP or Framer Motion.
 * We calculate the geometric distance between the cursor and the exact center
 * of the button natively. We then inject that distance into CSS custom properties
 * to mathematically pull the button towards the cursor!
 */

export const MagneticButton = ({ children, className = '', strength = 40 }) => {
  const buttonRef = useRef(null);
  
  // We track local transform state to avoid heavy requestAnimationFrame loops
  // for a simple hover effect.
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    
    // 1. Get the exact dimensions and position of the button on the screen
    const rect = buttonRef.current.getBoundingClientRect();
    
    // 2. Calculate the exact center point of the button
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // 3. Calculate the distance from the cursor to the center of the button
    // We divide by 'strength' to ensure the button doesn't fly entirely off the screen!
    const distanceX = (e.clientX - centerX) / (100 / strength);
    const distanceY = (e.clientY - centerY) / (100 / strength);
    
    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    // When the mouse leaves, we reset the translation to 0, 
    // and the CSS transition physically springs the button back to center!
    setPosition({ x: 0, y: 0 });
  };

  return (
    <button
      ref={buttonRef}
      className={`ease-magnetic-button ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        // We inject the translation distance directly into CSS variables.
        // The CSS engine handles the actual DOM movement via transform!
        '--tx': `${position.x}px`,
        '--ty': `${position.y}px`
      }}
    >
      {/* 
        Optional: We can also add a secondary inner span that moves slightly MORE 
        than the button itself to create a 3D parallax effect on the text!
      */}
      <span 
        className="magnetic-text"
        style={{
          '--tx': `${position.x * 0.5}px`,
          '--ty': `${position.y * 0.5}px`
        }}
      >
        {children}
      </span>
    </button>
  );
};

export default MagneticButton;
