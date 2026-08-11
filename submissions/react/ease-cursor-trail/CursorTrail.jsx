import React, { useEffect } from 'react';
import './style.css';

/**
 * ============================================================================
 * EaseMotion Hardware-Accelerated Magnetic Cursor Trail
 * ============================================================================
 * 
 * Tracks global mouse coordinates and maps them to CSS Variables on the Body.
 * We completely bypass heavy JS physics engines (like React-Spring/GSAP) by 
 * handling the trailing physics and magnetic snapping entirely inside CSS!
 */

export const CursorTrail = () => {
  useEffect(() => {
    // 1. A single, globally optimized event listener
    const handleMouseMove = (e) => {
      // 2. Pipe the raw coordinates directly into CSS variables on the root body element!
      // This allows the entire CSS tree to know where the mouse is without React context bridging.
      document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.body.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* 
        The Leading Dot
        This moves instantly 1:1 with the user's physical mouse.
      */}
      <div className="ease-cursor-dot" />

      {/* 
        The Trailing Outline
        This follows the dot using CSS `transition: transform` physics, 
        and magnetically morphs when hovering over links via the `:has()` selector!
      */}
      <div className="ease-cursor-trail" />
    </>
  );
};

export default CursorTrail;
