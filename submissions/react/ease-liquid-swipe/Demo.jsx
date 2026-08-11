import React from 'react';
import LiquidSwipe from './LiquidSwipe';
import './style.css';

/**
 * ============================================================================
 * EaseMotion Hardware-Accelerated Liquid Swipe Demo
 * ============================================================================
 * 
 * To test the elastic liquid swipe, click and drag from the right edge of 
 * the screen towards the left. 
 * 
 * If you let go early, the bubble snaps back elastically.
 * If you drag far enough, it physically snaps across the screen, 
 * consuming the view.
 */

export const Demo = () => {
  
  // Define the slides we want to swipe through
  const MOCK_SLIDES = [
    {
      bg: '#0f172a', // Slate 900
      content: (
        <div className="slide-content-wrapper">
          <h1 className="slide-title">Liquid<br/>Swipe.</h1>
          <p className="slide-subtitle">
            Drag from the right edge of the screen to reveal the next slide. 
            Notice how the bubble mathematically stretches based on your velocity.
          </p>
        </div>
      )
    },
    {
      bg: '#c2410c', // Orange 700
      content: (
        <div className="slide-content-wrapper">
          <h1 className="slide-title" style={{ color: '#fffbeb' }}>Hardware<br/>Physics.</h1>
          <p className="slide-subtitle" style={{ color: 'rgba(255,255,255,0.9)' }}>
            There are no Canvas rendering engines running here. The physics are 
            calculated natively using a CSS `clip-path: path()` equation 
            running on the GPU compositor!
          </p>
        </div>
      )
    },
    {
      bg: '#047857', // Emerald 700
      content: (
        <div className="slide-content-wrapper">
          <h1 className="slide-title" style={{ color: '#ecfdf5' }}>Zero<br/>Lag.</h1>
          <p className="slide-subtitle" style={{ color: 'rgba(255,255,255,0.9)' }}>
            By updating CSS Variables inside a strictly throttled 
            `requestAnimationFrame` loop, we achieve flawless 60fps tracking 
            without ever blocking the browser's Main Thread.
          </p>
        </div>
      )
    },
    {
      bg: '#4338ca', // Indigo 700
      content: (
        <div className="slide-content-wrapper">
          <h1 className="slide-title" style={{ color: '#e0e7ff' }}>You've<br/>Arrived.</h1>
          <p className="slide-subtitle" style={{ color: 'rgba(255,255,255,0.9)' }}>
            This is the final slide. The elastic swipe is automatically disabled 
            if there are no more components in the array!
          </p>
        </div>
      )
    }
  ];

  return (
    // Wrap the entire app in a fixed, full-screen container
    <div style={{ position: 'fixed', inset: 0, overflow: 'hidden' }}>
      
      {/* 
        A subtle helper text that will be permanently covered up 
        by the slides sitting above it. 
      */}
      <div style={{ 
        position: 'absolute', top: '20px', left: '20px', zIndex: 100, 
        color: 'white', opacity: 0.5, pointerEvents: 'none' 
      }}>
        EaseMotion Interactive Demo
      </div>

      <LiquidSwipe slides={MOCK_SLIDES} />
      
    </div>
  );
};

export default Demo;
