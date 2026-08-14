import React, { useEffect, useState } from 'react';
import './style.css';

/**
 * A highly optimized Number Counter component.
 * Instead of running a JS requestAnimationFrame loop which causes constant React re-renders,
 * this component leverages modern CSS `@property` syntax to animate the number natively in the browser's CSS engine.
 */
export const NumberCounter = ({ 
  to = 100, 
  duration = 2, 
  prefix = '', 
  suffix = '',
  className = ''
}) => {
  // We start at 0, and after mounting, we trigger the CSS transition to the target number
  const [targetNumber, setTargetNumber] = useState(0);

  useEffect(() => {
    // A small timeout ensures the component has mounted with 0 before transitioning
    const timer = setTimeout(() => {
      setTargetNumber(to);
    }, 100);
    return () => clearTimeout(timer);
  }, [to]);

  return (
    <div 
      className={`ease-number-counter ${className}`}
      style={{
        // Pass the target number as a custom property to trigger the CSS transition
        '--ease-num': targetNumber,
        // Optional: customize the duration dynamically
        '--ease-duration': `${duration}s`
      }}
    >
      {prefix && <span className="counter-prefix">{prefix}</span>}
      
      {/* 
        The actual number is rendered purely via CSS content generation 
        based on the animated --ease-num variable.
      */}
      <span className="counter-value"></span>
      
      {suffix && <span className="counter-suffix">{suffix}</span>}
    </div>
  );
};

export default NumberCounter;
