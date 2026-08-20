import React from 'react';
import './style.css';

/**
 * ============================================================================
 * EaseMotion 3D Exploded View
 * ============================================================================
 * 
 * This advanced React wrapper accepts an array of 2D image layers and 
 * physically maps them onto the Z-axis in CSS space. By leveraging 
 * `animation-timeline: scroll()`, we tie the expansion and collapse 
 * of the explosion natively to the browser's scrollbar.
 * 
 * No WebGL. No JavaScript scroll event listeners. 100% GPU Hardware Accelerated.
 */

export const ExplodedView = ({ 
  layers = [], 
  maxExplosionDistance = 500, // The maximum Z-axis distance between the back and front layer
  baseRotationX = 60, // The physical camera tilt
  baseRotationZ = -45, // The physical camera spin
  height = '500px',
  width = '300px'
}) => {
  
  // Calculate the distance each layer should travel.
  // Layer 0 (the bottom) travels 0px.
  // Layer N (the top) travels `maxExplosionDistance`px.
  // The layers in between interpolate evenly.
  
  return (
    <div className="ease-exploded-wrapper">
      <div 
        className="ease-exploded-stage"
        style={{
          '--camera-rx': `${baseRotationX}deg`,
          '--camera-rz': `${baseRotationZ}deg`,
          width,
          height
        }}
      >
        {layers.map((layer, index) => {
          
          // Calculate how far this specific layer pushes out during the explosion
          const explodeRatio = index / (layers.length - 1 || 1);
          const zDistance = maxExplosionDistance * explodeRatio;
          
          return (
            <div 
              key={index}
              className="ease-exploded-layer"
              style={{
                // Pass the mathematical Z-distance natively to CSS
                '--explode-z': `${zDistance}px`,
                // Ensure correct stacking natively
                zIndex: index,
                // Assign the image layer
                backgroundImage: `url(${layer.image})`
              }}
            >
              {/* Optional: Add glowing labels or internal tooltips to specific layers */}
              {layer.label && (
                <div className="layer-label">
                  <span className="label-line"></span>
                  <p>{layer.label}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExplodedView;
