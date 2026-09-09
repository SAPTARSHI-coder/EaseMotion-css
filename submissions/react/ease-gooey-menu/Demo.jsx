import React from 'react';
import GooeyMenu from './GooeyMenu';
import './style.css';

/**
 * ============================================================================
 * EaseMotion Gooey Menu Demo
 * ============================================================================
 */

export const Demo = () => {
  return (
    <main className="demo-container">
      
      <div className="header">
        <h1>Fluid Gooey Menu</h1>
        <p>
          Click the Floating Action Button. Watch how the physics Engine <br/>
          is completely replaced by a mathematical SVG Filter injected into CSS!
        </p>
      </div>

      <GooeyMenu />

    </main>
  );
};

export default Demo;
