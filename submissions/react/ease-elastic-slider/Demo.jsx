import React from 'react';
import ElasticSlider from './ElasticSlider';
import './style.css';

/**
 * ============================================================================
 * EaseMotion Elastic Slider Demo
 * ============================================================================
 */

export const Demo = () => {
  return (
    <main className="demo-container">
      
      <div className="header">
        <h1>Elastic Range Slider</h1>
        <p>
          Drag the thumb to see the physics engine in action! <br/>
          0-GSAP. 100% CSS Transforms mapped to React velocity.
        </p>
      </div>

      <ElasticSlider min={0} max={100} defaultValue={50} />

    </main>
  );
};

export default Demo;
