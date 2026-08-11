import React, { useMemo } from 'react';
import './style.css';

/**
 * ============================================================================
 * EaseMotion 3D Cylinder Carousel
 * ============================================================================
 * 
 * A highly advanced, mathematically calculated 3D Gallery.
 * Standard infinite carousels just slide elements horizontally. 
 * This component uses Trigonometry (Tangent) to calculate the precise Z-axis 
 * radius required to arrange N number of child elements into a perfect 
 * physical 3D cylinder.
 * 
 * It then ties the rotation of the entire cylinder perfectly to the window's 
 * scroll position using the bleeding-edge CSS `animation-timeline: scroll()` 
 * specification. Zero JavaScript scroll listeners are used.
 */

export const CylinderCarousel = ({ 
  children, 
  itemWidth = 300, 
  itemHeight = 400,
  className = ''
}) => {
  // Convert children to array to reliably count them
  const items = React.Children.toArray(children);
  const itemCount = items.length;

  /**
   * The core Trigonometry calculation.
   * To form a perfect polygon out of N flat panels (where each panel is W wide), 
   * we must push each panel away from the center (translateZ) by a specific Radius (apothem).
   * 
   * The formula for the apothem of a regular polygon is:
   * Radius = Width / (2 * Math.tan(PI / N))
   */
  const radius = useMemo(() => {
    // If less than 3 items, we can't really form a 3D volume, just default it.
    if (itemCount < 3) return itemWidth;
    return Math.round((itemWidth / 2) / Math.tan(Math.PI / itemCount));
  }, [itemCount, itemWidth]);

  return (
    <div className={`ease-cylinder-wrapper ${className}`}>
      
      {/* 
        The Stage
        Establishes the 3D perspective for the camera.
      */}
      <div 
        className="ease-cylinder-stage"
        style={{
          perspective: `${radius * 2.5}px` // Dynamic perspective based on cylinder size
        }}
      >
        
        {/* 
          The Cylinder
          This is the element that actually rotates. We tie it to the scroll-timeline!
        */}
        <div 
          className="ease-cylinder"
          style={{
            '--item-width': `${itemWidth}px`,
            '--item-height': `${itemHeight}px`,
            '--radius': `${radius}px`,
            '--item-count': itemCount
          }}
        >
          {items.map((child, index) => {
            // Calculate the exact angle for this specific item
            // e.g., if there are 10 items, they are spaced 36 degrees apart (360/10)
            const angle = (360 / itemCount) * index;
            
            return (
              <div 
                key={index} 
                className="ease-cylinder-item"
                style={{
                  // The Magic: We rotate the item to face outward, THEN push it 
                  // forward along its new local Z-axis by the calculated radius.
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`
                }}
              >
                {child}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

/**
 * A helper wrapper for rendering content inside a cylinder panel.
 * Applies standard styling and inner shadows to simulate lighting curvature.
 */
export const CylinderPanel = ({ children, bgImage }) => {
  return (
    <div className="ease-cylinder-panel">
      {bgImage && (
        <div 
          className="panel-background" 
          style={{ backgroundImage: `url(${bgImage})` }} 
        />
      )}
      
      {/* Lighting overlay to simulate depth. Dark at edges, bright in center. */}
      <div className="panel-lighting"></div>
      
      <div className="panel-content">
        {children}
      </div>
    </div>
  );
};
