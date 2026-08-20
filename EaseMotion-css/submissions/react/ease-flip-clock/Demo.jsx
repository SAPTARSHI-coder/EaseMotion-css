import React from 'react';
import FlipClock from './FlipClock';
import './style.css';

/**
 * ============================================================================
 * EaseMotion Split-Flap Clock Demo
 * ============================================================================
 */

export const Demo = () => {
  return (
    <main className="demo-container">
      
      <div className="header">
        <h1>Retro Split-Flap Clock</h1>
        <p>
          100% CSS 3D Transforms. Zero HTML5 Canvas required. <br/>
          Watch the mechanical fold on the seconds digit!
        </p>
      </div>

      <FlipClock />

    </main>
  );
};

export default Demo;
