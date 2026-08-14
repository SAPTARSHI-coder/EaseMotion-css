import React from 'react';
import DynamicIsland from './DynamicIsland';
import './style.css';

/**
 * ============================================================================
 * EaseMotion Dynamic Island Demo
 * ============================================================================
 */

export const Demo = () => {
  return (
    <main style={{ padding: '60px 20px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '3rem', margin: '0 0 10px 0' }}>Dynamic Island Morph</h1>
        <p style={{ color: '#94a3b8', fontSize: '1.2rem', margin: 0 }}>
          Click the pill below to expand. Click anywhere outside to close.<br/>
          0 JavaScript animation libraries. 100% CSS orchestrated morphing.
        </p>
      </div>

      <DynamicIsland />

    </main>
  );
};

export default Demo;
