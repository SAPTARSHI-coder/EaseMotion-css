import React from 'react';
import Ribbon3D from './Ribbon3D';
import './style.css';

/**
 * ============================================================================
 * EaseMotion 3D Ribbon Demo
 * ============================================================================
 */

export const Demo = () => {
  return (
    <main className="demo-container">
      
      <div className="header">
        <h1>3D Typography Ribbon</h1>
        <p>
          100% CSS 3D Transforms. <br/>
          Watch how the browser naturally handles the Z-index occlusion!
        </p>
      </div>

      <div style={{ width: '100%', padding: '60px 0' }}>
        <Ribbon3D text="HARDWARE ACCELERATED" speed="8s" />
      </div>

    </main>
  );
};

export default Demo;
