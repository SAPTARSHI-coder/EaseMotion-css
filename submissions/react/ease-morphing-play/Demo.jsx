import React from 'react';
import MorphingPlay from './MorphingPlay';
import './style.css';

/**
 * ============================================================================
 * EaseMotion Morphing Play Button Demo
 * ============================================================================
 */

export const Demo = () => {
  return (
    <main className="demo-container">
      
      <div className="header">
        <h1>Morphing Play Button</h1>
        <p>
          100% CSS Clip-Path. Zero SVG rendering engines. <br/>
          Click the button to mathematically trigger the GPU transition!
        </p>
      </div>

      <MorphingPlay size={100} />

    </main>
  );
};

export default Demo;
