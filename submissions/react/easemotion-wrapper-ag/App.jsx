import React, { useState } from 'react';
import { EaseMotion } from './EaseMotion';

export default function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>EaseMotion React Wrapper</h1>
      
      <button onClick={() => setIsVisible(!isVisible)} style={{ marginBottom: '2rem' }}>
        Toggle Card Visibility
      </button>

      <EaseMotion
        animation="slide-up"
        duration={500}
        delay={150}
        hover="lift"
        focus="glow"
        iteration={1}
        isUnmounting={!isVisible}
        unmountAnimation="fade-out"
      >
        <div style={{
          padding: '2rem', 
          border: '1px solid #ccc', 
          borderRadius: '8px', 
          width: '300px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <h2>Animated Card</h2>
          <p>This card uses the declarative EaseMotion wrapper component.</p>
        </div>
      </EaseMotion>
    </div>
  );
}
