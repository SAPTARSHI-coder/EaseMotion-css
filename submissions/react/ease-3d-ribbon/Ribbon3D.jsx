import React from 'react';
import './style.css';

/**
 * ============================================================================
 * EaseMotion Hardware-Accelerated 3D Typography Ribbon
 * ============================================================================
 * 
 * Replaces expensive WebGL canvases and Three.js typography meshes.
 * We construct a 3D cylinder natively in the DOM by placing multiple text 
 * tracks inside a `transform-style: preserve-3d` container, and rotate them!
 */

export const Ribbon3D = ({ text = "EASEMOTION CSS", speed = "10s" }) => {
  // We repeat the text string several times to ensure it fills the viewport width 
  // before the infinite animation loops back to the start.
  const repeatedText = `${text} • ${text} • ${text} • ${text} • `;

  return (
    <div className="ease-3d-ribbon-container">
      {/* 
        This is the 3D rotating axis! 
        It spins around the X-axis continuously to simulate the ribbon twisting.
      */}
      <div 
        className="ribbon-axis"
        style={{ '--spin-speed': speed }}
      >
        
        {/* 
          Face 1: The Front of the Ribbon
          This text scrolls to the left.
        */}
        <div className="ribbon-face face-front">
          <div className="marquee-track scroll-left">
            <span>{repeatedText}</span>
            <span>{repeatedText}</span>
          </div>
        </div>

        {/* 
          Face 2: The Back of the Ribbon
          Because it is flipped 180 degrees in 3D space, we must scroll the text 
          to the right, otherwise it will appear to scroll backwards to the viewer!
        */}
        <div className="ribbon-face face-back">
          <div className="marquee-track scroll-right">
            <span>{repeatedText}</span>
            <span>{repeatedText}</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Ribbon3D;
