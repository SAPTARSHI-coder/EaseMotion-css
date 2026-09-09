import React, { useRef, useState } from 'react';
import './style.css';

/**
 * ============================================================================
 * EaseMotion Hardware-Accelerated Liquid Distortion Image
 * ============================================================================
 * 
 * Replaces heavy Three.js / WebGL fragment shaders with native DOM SVG filters!
 * We inject a <feTurbulence> map to generate noise, and a <feDisplacementMap> 
 * to distort the pixels of the image underneath.
 * 
 * On hover, we animate the scale of the displacement map using requestAnimationFrame 
 * for ultra-smooth 60fps liquid rippling effects.
 */

export const LiquidImage = ({ 
  src, 
  alt = "Liquid Image",
  className = "",
  baseDistortion = 0, // Distortion level when NOT hovering
  hoverDistortion = 40  // Maximum distortion when hovering
}) => {
  const [scale, setScale] = useState(baseDistortion);
  const filterId = useRef(`liquid-filter-${Math.random().toString(36).substr(2, 9)}`);
  const animationRef = useRef(null);
  
  // A simple physics-based lerp for buttery smooth transitions
  const lerp = (start, end, factor) => {
    return start + (end - start) * factor;
  };

  const handleMouseEnter = () => {
    cancelAnimationFrame(animationRef.current);
    const animate = () => {
      setScale(prev => {
        const next = lerp(prev, hoverDistortion, 0.1);
        // Stop animation when we are close enough to the target
        if (Math.abs(hoverDistortion - next) < 0.1) return hoverDistortion;
        animationRef.current = requestAnimationFrame(animate);
        return next;
      });
    };
    animationRef.current = requestAnimationFrame(animate);
  };

  const handleMouseLeave = () => {
    cancelAnimationFrame(animationRef.current);
    const animate = () => {
      setScale(prev => {
        const next = lerp(prev, baseDistortion, 0.05); // Slower ease out
        if (Math.abs(baseDistortion - next) < 0.1) return baseDistortion;
        animationRef.current = requestAnimationFrame(animate);
        return next;
      });
    };
    animationRef.current = requestAnimationFrame(animate);
  };

  return (
    <div 
      className={`ease-liquid-wrapper ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 
        The Invisible SVG Filter Engine
        This is injected directly into the DOM but remains visually hidden.
      */}
      <svg className="ease-liquid-svg-engine">
        <filter id={filterId.current}>
          {/* Generates the organic noise texture */}
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.01 0.015" 
            numOctaves="3" 
            result="noise" 
          />
          {/* Applies the noise to physically push the pixels of the image */}
          <feDisplacementMap 
            in="SourceGraphic" 
            in2="noise" 
            scale={scale} 
            xChannelSelector="R" 
            yChannelSelector="B" 
          />
        </filter>
      </svg>

      {/* The Target Image */}
      <img 
        src={src} 
        alt={alt} 
        className="ease-liquid-image"
        style={{ filter: `url(#${filterId.current})` }}
      />
    </div>
  );
};

export default LiquidImage;
