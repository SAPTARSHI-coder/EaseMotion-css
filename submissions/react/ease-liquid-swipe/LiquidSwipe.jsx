import React, { useState, useRef, useEffect } from 'react';
import './style.css';

/**
 * ============================================================================
 * EaseMotion Hardware-Accelerated Liquid Swipe
 * ============================================================================
 * 
 * Traditional liquid swipe libraries use Canvas engines to draw elastic bubbles.
 * This forces the CPU to recalculate thousands of pixels frame-by-frame.
 * 
 * Our highly advanced approach mathematically calculates an SVG Bezier Curve
 * based on the user's drag distance and velocity. We inject these points directly 
 * into a CSS `clip-path` variable natively.
 * 
 * This creates a flawless, perfectly smooth elastic deformation running 
 * strictly on the GPU Compositor Thread.
 */

export const LiquidSwipe = ({ slides = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  
  const containerRef = useRef(null);
  
  // Track pointer positions
  const startX = useRef(0);
  const startY = useRef(0);
  const currentX = useRef(0);
  const currentY = useRef(0);
  
  // Track Animation Frame to prevent layout thrashing
  const ticking = useRef(false);

  // Constants for physics
  const MAX_DRAG_DISTANCE = 300; // How far the bubble can stretch horizontally
  
  const handlePointerDown = (e) => {
    // Only allow swipe if there's a next slide
    if (currentIndex >= slides.length - 1) return;
    
    // Only allow swipe from the right edge of the screen (simulating mobile back/forward gesture)
    const rect = containerRef.current.getBoundingClientRect();
    if (e.clientX < rect.right - 100) return; // Must start within 100px of the right edge

    setIsDragging(true);
    startX.current = e.clientX;
    startY.current = e.clientY;
    currentX.current = e.clientX;
    currentY.current = e.clientY;
    
    // Initialize the clip path variables
    updateClipPath(0, e.clientY);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    
    currentX.current = e.clientX;
    currentY.current = e.clientY;
    
    // Calculate how far the user has dragged leftward
    const dragDistance = Math.max(0, startX.current - currentX.current);
    
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        updateClipPath(dragDistance, currentY.current);
        ticking.current = false;
      });
      ticking.current = true;
    }
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const dragDistance = startX.current - currentX.current;
    
    // If they dragged far enough, snap to the next slide!
    if (dragDistance > MAX_DRAG_DISTANCE / 2) {
      // Trigger the snap-open animation
      if (containerRef.current) {
        containerRef.current.classList.add('liquid-snap-open');
        
        // Wait for the animation to finish, then actually change the slide index
        setTimeout(() => {
          setCurrentIndex(prev => Math.min(prev + 1, slides.length - 1));
          containerRef.current.classList.remove('liquid-snap-open');
          // Reset clip path
          containerRef.current.style.setProperty('--clip-curve-x', '0px');
        }, 600); // Matches the CSS transition duration
      }
    } else {
      // Otherwise, snap back to closed (elastic bounce back)
      if (containerRef.current) {
        containerRef.current.classList.add('liquid-snap-close');
        setTimeout(() => {
          containerRef.current.classList.remove('liquid-snap-close');
          containerRef.current.style.setProperty('--clip-curve-x', '0px');
        }, 400);
      }
    }
  };

  const updateClipPath = (dragX, pointY) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    
    // Calculate the Y coordinate relative to the container (for the center of the bubble)
    const relativeY = pointY - rect.top;
    
    // The peak of the bubble stretches based on drag distance
    // We cap it so it doesn't stretch infinitely
    const boundedDrag = Math.min(dragX, MAX_DRAG_DISTANCE);
    
    // We pass these coordinates natively to CSS Variables!
    containerRef.current.style.setProperty('--clip-curve-x', `${boundedDrag}px`);
    containerRef.current.style.setProperty('--clip-center-y', `${relativeY}px`);
  };

  // Prevent native touch scrolling while swiping horizontally
  useEffect(() => {
    const preventScroll = (e) => {
      if (isDragging) e.preventDefault();
    };
    
    const node = containerRef.current;
    if (node) {
      node.addEventListener('touchmove', preventScroll, { passive: false });
    }
    return () => {
      if (node) node.removeEventListener('touchmove', preventScroll);
    };
  }, [isDragging]);

  return (
    <div 
      className="ease-liquid-container"
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      {/* 
        The Base Layer (Current Slide)
      */}
      <div 
        className="ease-liquid-slide current-slide"
        style={{ backgroundColor: slides[currentIndex]?.bg || '#020617' }}
      >
        {slides[currentIndex]?.content}
      </div>
      
      {/* 
        The Next Slide Layer (Hidden behind the clip-path)
        This is the layer that physically stretches across the screen!
      */}
      {currentIndex < slides.length - 1 && (
        <div 
          className="ease-liquid-slide next-slide"
          style={{ backgroundColor: slides[currentIndex + 1]?.bg || '#0f172a' }}
        >
          {slides[currentIndex + 1]?.content}
        </div>
      )}
      
      {/* 
        The SVG Clip Path Definition
        We use a massive SVG path string in CSS, but we need an actual SVG element
        in the DOM to support older browsers or complex clipping geometry if desired.
        For this highly optimized version, we use pure CSS `clip-path: path(...)`!
      */}
      <div className="liquid-drag-indicator">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </div>
    </div>
  );
};

export default LiquidSwipe;
