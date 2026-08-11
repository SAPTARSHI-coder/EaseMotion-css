import React from 'react';
import MagneticButton from './MagneticButton';
import './style.css';

/**
 * ============================================================================
 * EaseMotion Magnetic Physics Button Demo
 * ============================================================================
 */

export const Demo = () => {
  return (
    <main className="demo-container">
      
      <div className="header">
        <h1>Magnetic Physics</h1>
        <p>
          Hover over the button below. Watch how it physically pulls <br/>
          towards your cursor using native DOM geometry and CSS spring math!
        </p>
      </div>

      <div style={{ padding: '60px' }}>
        <MagneticButton strength={50}>
          Get Started
        </MagneticButton>
      </div>

    </main>
  );
};

export default Demo;
