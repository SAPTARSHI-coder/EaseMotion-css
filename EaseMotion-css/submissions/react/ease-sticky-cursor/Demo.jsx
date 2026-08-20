import React from 'react';
import StickyCursor from './StickyCursor';
import './style.css';

/**
 * ============================================================================
 * EaseMotion Sticky Cursor Demo
 * ============================================================================
 */

export const Demo = () => {
  return (
    <main style={{ padding: '60px 20px', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      {/* Mount the Global Cursor Component once at the top of the app */}
      <StickyCursor />
      
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <h1 style={{ fontSize: '3rem', margin: '0 0 10px 0' }}>Sticky Magnetic Cursor</h1>
        <p style={{ color: '#94a3b8', fontSize: '1.2rem', margin: 0 }}>
          Hover the buttons below to see the cursor dynamically read the DOM <br/>
          and physically snap its exact width, height, and border-radius!
        </p>
      </div>

      <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', justifyContent: 'center' }}>
        
        {/* 
          To make an element magnetic, all we have to do is add `data-magnetic="true"`.
          The global cursor component will detect it automatically!
        */}
        <button className="magnetic-button pill-shape" data-magnetic="true">
          Pill Button
        </button>
        
        <button className="magnetic-button square-shape" data-magnetic="true">
          Square Button
        </button>
        
      </div>

    </main>
  );
};

export default Demo;
