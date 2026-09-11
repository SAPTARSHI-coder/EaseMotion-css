import React from 'react';
import SpotlightCard from './SpotlightCard';
import './style.css';

/**
 * ============================================================================
 * EaseMotion Spotlight Grid Demo
 * ============================================================================
 */

export const Demo = () => {
  return (
    <main className="demo-container">
      
      <div className="header">
        <h1>Spotlight Illumination Grid</h1>
        <p>
          Hover over the cards below. The soft glow perfectly tracks your mouse, <br/>
          illuminating the card borders and backgrounds without WebGL.
        </p>
      </div>

      <div className="spotlight-grid">
        
        <SpotlightCard>
          <h3>Architecture</h3>
          <p>
            Instead of calculating complex intersections in JavaScript, we pass local mouse coordinates to CSS variables.
          </p>
        </SpotlightCard>

        <SpotlightCard>
          <h3>Radial Gradients</h3>
          <p>
            The CSS engine handles the heavy lifting, rendering a dynamic radial-gradient centered exactly on the injected coordinates.
          </p>
        </SpotlightCard>

        <SpotlightCard>
          <h3>Performance</h3>
          <p>
            By relying on native DOM events and avoiding complex WebGL fragment shaders, this grid runs flawlessly even on mobile devices.
          </p>
        </SpotlightCard>
        
        <SpotlightCard>
          <h3>Zero Dependencies</h3>
          <p>
            Completely built using React state and native CSS. No Framer Motion, no Three.js, just modern web standards.
          </p>
        </SpotlightCard>

      </div>

    </main>
  );
};

export default Demo;
