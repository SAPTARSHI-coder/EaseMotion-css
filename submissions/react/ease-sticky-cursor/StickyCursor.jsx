import React, { useState, useEffect, useRef } from 'react';
import './style.css';

/**
 * ============================================================================
 * EaseMotion Hardware-Accelerated Sticky Magnetic Cursor
 * ============================================================================
 * 
 * Replaces expensive GSAP cursor libraries.
 * We use `requestAnimationFrame` and CSS custom properties to smoothly track 
 * the mouse. When the mouse hovers an element with `data-magnetic`, we read 
 * its exact DOM geometry and stretch the cursor to fit it perfectly!
 */

export const StickyCursor = () => {
  const cursorRef = useRef(null);
  
  // Track the raw mouse position
  const mouse = useRef({ x: 0, y: 0 });
  
  // Track the interpolated cursor position (for the smooth delay)
  const cursor = useRef({ x: 0, y: 0 });
  
  // State to manage when the cursor is "snapped" to a button
  const [isHovering, setIsHovering] = useState(false);
  const [targetBounds, setTargetBounds] = useState({ width: 20, height: 20, x: 0, y: 0, borderRadius: '50%' });

  useEffect(() => {
    let animationFrameId;

    // 1. Update raw mouse coordinates on mousemove
    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    // 2. The Physics Render Loop
    const render = () => {
      // If we are hovering a magnetic element, we STOP interpolating to the raw mouse.
      // Instead, we lock the cursor exactly to the center of the hovered element!
      if (isHovering) {
        cursor.current.x = targetBounds.x + targetBounds.width / 2;
        cursor.current.y = targetBounds.y + targetBounds.height / 2;
      } else {
        // Standard smooth interpolation (lerp) towards the raw mouse position
        const ease = 0.15; // Lower = smoother/slower, Higher = snappier
        cursor.current.x += (mouse.current.x - cursor.current.x) * ease;
        cursor.current.y += (mouse.current.y - cursor.current.y) * ease;
      }

      // 3. Inject variables directly into the DOM node to bypass React re-renders!
      if (cursorRef.current) {
        cursorRef.current.style.setProperty('--cursor-x', `${cursor.current.x}px`);
        cursorRef.current.style.setProperty('--cursor-y', `${cursor.current.y}px`);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // 4. Global Hover Detection
    // We attach listeners to the document to detect when the mouse enters/leaves 
    // any element marked with `data-magnetic="true"`.
    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-magnetic="true"]');
      if (target) {
        // Get the exact dimensions and position of the button on the screen!
        const bounds = target.getBoundingClientRect();
        const style = window.getComputedStyle(target);
        
        setIsHovering(true);
        setTargetBounds({
          width: bounds.width,
          height: bounds.height,
          x: bounds.left,
          y: bounds.top,
          // We even steal the border-radius of the button so the cursor wraps it perfectly!
          borderRadius: style.borderRadius 
        });
      }
    };

    const handleMouseOut = (e) => {
      // If we leave a magnetic element, reset everything
      const target = e.target.closest('[data-magnetic="true"]');
      if (target) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    
    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isHovering, targetBounds]);

  return (
    <div 
      ref={cursorRef} 
      className={`ease-sticky-cursor ${isHovering ? 'is-snapped' : ''}`}
      style={{
        // When NOT hovering, the cursor is a small 20x20 circle.
        // When hovering, it dynamically stretches to the exact size of the button!
        width: isHovering ? targetBounds.width : 20,
        height: isHovering ? targetBounds.height : 20,
        borderRadius: isHovering ? targetBounds.borderRadius : '50%'
      }}
    />
  );
};

export default StickyCursor;
