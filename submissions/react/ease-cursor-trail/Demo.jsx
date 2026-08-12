import React from 'react';
import CursorTrail from './CursorTrail';
import './style.css';

/**
 * ============================================================================
 * EaseMotion Cursor Trail Demo
 * ============================================================================
 */

export const Demo = () => {
  return (
    <>
      {/* Inject the global cursor component */}
      <CursorTrail />
      
      <main className="demo-container">
        
        <div className="header">
          <h1>Magnetic Cursor</h1>
          <p>
            Zero physics engines. Powered by CSS transitions and `:has()`! <br/>
            Hover over the buttons below to trigger the magnetic morph.
          </p>
        </div>

        <div className="button-grid">
          <a href="#" className="magnetic-btn">Primary Action</a>
          <a href="#" className="magnetic-btn">Secondary Action</a>
        </div>

      </main>
    </>
  );
};

export default Demo;
