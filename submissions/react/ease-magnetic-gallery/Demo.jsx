import React from 'react';
import MagneticImage from './MagneticGallery';
import './style.css';

/**
 * ============================================================================
 * EaseMotion Hardware-Accelerated Magnetic Gallery Demo
 * ============================================================================
 * 
 * Hover over the images below to see the 3D tilting effect.
 * Notice how the caption physically floats above the image, and the glare 
 * moves contrary to your cursor to simulate physical glass reflections.
 */

export const Demo = () => {
  return (
    <div style={{ padding: '60px 20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Magnetic Gallery</h1>
      <p style={{ color: '#94a3b8', marginBottom: '60px', fontSize: '1.2rem' }}>
        Hover over the images to experience hardware-accelerated 3D tilts natively on the GPU.
      </p>

      <div style={{ 
        display: 'flex', 
        gap: '40px', 
        justifyContent: 'center', 
        flexWrap: 'wrap' 
      }}>
        
        <MagneticImage 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800"
          alt="Abstract Liquid Art"
          caption="Fluid Dynamics"
          intensity={15}
        />
        
        <MagneticImage 
          src="https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&q=80&w=800"
          alt="Abstract 3D Shapes"
          caption="Geometric Render"
          intensity={25} /* Higher intensity means a deeper tilt! */
        />

        <MagneticImage 
          src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800"
          alt="Abstract Architecture"
          caption="Spatial Construct"
          intensity={15}
        />

      </div>
    </div>
  );
};

export default Demo;
