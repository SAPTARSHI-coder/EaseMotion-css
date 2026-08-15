import React, { useState } from 'react';
import './style.css';

/**
 * ============================================================================
 * EaseMotion Hardware-Accelerated Gooey Menu
 * ============================================================================
 * 
 * Replaces expensive physics engines like Framer Motion.
 * We inject a hidden SVG filter into the DOM and apply it to the parent 
 * container via CSS `filter: url(#gooey)`.
 * This mathematically forces the child DOM nodes to "melt" together when 
 * their blurred edges overlap during native CSS transform animations!
 */

export const GooeyMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 
        1. The Invisible SVG Filter
        We inject this anywhere in the DOM. It has no visual height or width.
        The `<feGaussianBlur>` blurs the elements, and the `<feColorMatrix>` 
        drastically increases the alpha contrast, snapping the blurred edges 
        back into a solid shape, which creates the liquid "melt" effect!
      */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
        <defs>
          <filter id="ease-gooey-filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix 
              in="blur" 
              mode="matrix" 
              values="1 0 0 0 0  
                      0 1 0 0 0  
                      0 0 1 0 0  
                      0 0 0 18 -7" 
              result="gooey" 
            />
            <feBlend in="SourceGraphic" in2="gooey" />
          </filter>
        </defs>
      </svg>

      {/* 
        2. The Menu Container
        This container has the `filter: url(#ease-gooey-filter)` applied in CSS!
        Any child elements inside this container will melt together.
      */}
      <div className="ease-gooey-container">
        
        {/* The Action Items (The smaller buttons that shoot out) */}
        <button 
          className={`gooey-item item-1 ${isOpen ? 'is-open' : ''}`}
          aria-label="Action 1"
        >
          <span>✏️</span>
        </button>
        
        <button 
          className={`gooey-item item-2 ${isOpen ? 'is-open' : ''}`}
          aria-label="Action 2"
        >
          <span>📸</span>
        </button>
        
        <button 
          className={`gooey-item item-3 ${isOpen ? 'is-open' : ''}`}
          aria-label="Action 3"
        >
          <span>⚙️</span>
        </button>

        {/* The Main Toggle Button (Sits on top) */}
        <button 
          className={`gooey-toggle ${isOpen ? 'is-open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          <span className="toggle-icon">＋</span>
        </button>

      </div>
    </>
  );
};

export default GooeyMenu;
