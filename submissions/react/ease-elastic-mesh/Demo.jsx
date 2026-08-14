import React from 'react';
import ElasticMesh from './ElasticMesh';
import './style.css';

/**
 * ============================================================================
 * EaseMotion Hardware-Accelerated Elastic Mesh Demo
 * ============================================================================
 * 
 * Move your mouse across the screen to interact with the mesh.
 * Notice the elastic, wobbly spring physics as the dots return to their 
 * resting position.
 */

export const Demo = () => {
  return (
    // Wrap the entire app in a fixed, full-screen container
    <div style={{ position: 'fixed', inset: 0, overflow: 'hidden' }}>
      
      {/* 
        The Elastic Mesh Background Component
        We define a 25x25 grid (625 total nodes) with a 200px blast radius.
      */}
      <ElasticMesh 
        columns={25} 
        rows={25} 
        repelRadius={200} 
        repelStrength={60} 
      />
      
      {/* 
        The Hero UI Overlay
        This demonstrates how the mesh sits perfectly behind standard UI elements
        while remaining fully interactive via pointer-events: none on the overlay.
      */}
      <div className="demo-hero-overlay">
        <h1>Elastic Physics.</h1>
        <p>
          Move your cursor across the screen. We mathematically calculate Euclidean 
          repel vectors for 625 independent DOM nodes simultaneously, offloading 
          the elastic spring physics directly to the GPU Compositor.
        </p>
            
      {/* 
        A secondary fixed element to test interaction beneath overlays 
      */}
      <div style={{
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 50,
        pointerEvents: 'none'
      }}>
        <button style={{
          padding: '15px 40px',
          borderRadius: '30px',
          border: 'none',
          backgroundColor: '#38bdf8',
          color: '#020617',
          fontWeight: 'bold',
          fontSize: '1.1rem',
          pointerEvents: 'auto',
          cursor: 'pointer',
          boxShadow: '0 10px 20px rgba(56, 189, 248, 0.3)'
        }}>
          Launch App
        </button>
      </div>
      
    </div>
      
          
      {/* 
        A secondary fixed element to test interaction beneath overlays 
      */}
      <div style={{
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 50,
        pointerEvents: 'none'
      }}>
        <button style={{
          padding: '15px 40px',
          borderRadius: '30px',
          border: 'none',
          backgroundColor: '#38bdf8',
          color: '#020617',
          fontWeight: 'bold',
          fontSize: '1.1rem',
          pointerEvents: 'auto',
          cursor: 'pointer',
          boxShadow: '0 10px 20px rgba(56, 189, 248, 0.3)'
        }}>
          Launch App
        </button>
      </div>
      
    </div>
  );
};

export default Demo;

