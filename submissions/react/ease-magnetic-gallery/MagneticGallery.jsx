import React, { useRef } from 'react';
import './style.css';

/**
 * ============================================================================
 * EaseMotion Hardware-Accelerated Magnetic Image
 * ============================================================================
 * 
 * Instead of loading WebGL to create a 3D tilting image, we use React to 
 * track the pointer's coordinates relative to the image's physical center.
 * We calculate a degree of rotation and pass it directly to CSS Variables, 
 * letting the GPU Compositor handle the 3D transforms flawlessly!
 */

export const MagneticImage = ({ src, alt, caption, intensity = 20 }) => {
  const containerRef = useRef(null);

  const handlePointerMove = (e) => {
    if (!containerRef.current) return;

    // We use a fast `requestAnimationFrame` trick inside the move event 
    // to prevent React state thrashing. We update the DOM directly!
    window.requestAnimationFrame(() => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      
      // Calculate cursor position relative to the center of the image (from -1 to 1)
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

      // Invert the Y axis because moving the mouse UP (negative Y) 
      // should tilt the top of the image forwards (positive rotateX)
      const rotateX = y * -intensity;
      const rotateY = x * intensity;

      // Pass the calculated degrees to CSS Natively!
      containerRef.current.style.setProperty('--rotate-x', `${rotateX}deg`);
      containerRef.current.style.setProperty('--rotate-y', `${rotateY}deg`);
      
      // Move a subtle glare effect across the image based on cursor position
      containerRef.current.style.setProperty('--glare-x', `${(x + 1) * 50}%`);
      containerRef.current.style.setProperty('--glare-y', `${(y + 1) * 50}%`);
    });
  };

  const handlePointerLeave = () => {
    // Reset rotations to 0 when the mouse leaves the image
    window.requestAnimationFrame(() => {
      if (containerRef.current) {
        containerRef.current.style.setProperty('--rotate-x', '0deg');
        containerRef.current.style.setProperty('--rotate-y', '0deg');
      }
    });
  };

  return (
    <div 
      className="magnetic-wrapper"
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="magnetic-inner">
        <img src={src} alt={alt} className="magnetic-image" />
        <div className="magnetic-glare"></div>
        {caption && (
          <div className="magnetic-caption">
            {caption}
          </div>
        )}
      </div>
    </div>
  );
};

export default MagneticImage;
