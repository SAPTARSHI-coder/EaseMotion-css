import React from 'react';
import LiquidImage from './LiquidImage';
import './style.css';

/**
 * ============================================================================
 * EaseMotion SVG Liquid Distortion Demo
 * ============================================================================
 */

export const Demo = () => {
  return (
    <main className="demo-container">
      
      <header className="header">
        <h1>SVG Liquid Distortion</h1>
        <p>Hover the images below. We achieve WebGL-level liquid physics natively in the DOM using injected SVG feDisplacementMaps.</p>
      </header>

      <div className="gallery-grid">
        
        {/* Subtle Water Ripple */}
        <div className="gallery-item">
          <LiquidImage 
            src="https://images.unsplash.com/photo-1498429089284-41f8cf3ffd39?auto=format&fit=crop&q=80&w=1200"
            alt="Mountain Lake"
            hoverDistortion={30}
          />
        </div>
        
        {/* Aggressive Sci-Fi Warp */}
        <div className="gallery-item">
          <LiquidImage 
            src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1200"
            alt="Cyberpunk City"
            hoverDistortion={80} // Much higher distortion!
          />
        </div>

      </div>
      
    </main>
  );
};

export default Demo;
