import React, { useState, useRef, useEffect } from 'react';
import './style.css';

/**
 * ============================================================================
 * EaseMotion Hardware-Accelerated Elastic Slider
 * ============================================================================
 * 
 * Tracks drag velocity on a range input and maps it directly to a CSS Variable.
 * By piping the math into native CSS `transform: scaleX()`, we bypass heavy 
 * GSAP/Framer physics engines for a raw, GPU-accelerated liquid stretch effect!
 */

export const ElasticSlider = ({ min = 0, max = 100, defaultValue = 50 }) => {
  const [value, setValue] = useState(defaultValue);
  const [velocity, setVelocity] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  
  const previousValueRef = useRef(defaultValue);
  const timeoutRef = useRef(null);
  const sliderRef = useRef(null);

  const handleInput = (e) => {
    const newValue = parseInt(e.target.value, 10);
    setValue(newValue);
    setIsDragging(true);

    // 1. Calculate Velocity: Delta (Change in value)
    const delta = newValue - previousValueRef.current;
    previousValueRef.current = newValue;

    // 2. Clamp the velocity so it doesn't stretch to infinity
    // Max stretch factor of 2.5 (1.5 + 1 base)
    const rawVelocity = Math.abs(delta) * 0.15;
    const clampedVelocity = Math.min(rawVelocity, 1.5);
    
    setVelocity(clampedVelocity);

    // 3. Clear existing snap-back timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // 4. Set a timeout to snap back to a perfect circle when dragging stops
    timeoutRef.current = setTimeout(() => {
      setVelocity(0);
      setIsDragging(false);
    }, 50); // Fast 50ms check
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Calculate the percentage fill for the active track color
  const fillPercentage = ((value - min) / (max - min)) * 100;

  return (
    <div 
      className={`ease-elastic-slider-container ${isDragging ? 'is-dragging' : ''}`}
      ref={sliderRef}
      style={{
        // Pipe the raw math directly into CSS!
        '--drag-velocity': velocity,
        '--fill-percent': `${fillPercentage}%`
      }}
    >
      
      {/* 
        The Custom Track 
        We use a separate div for the track so we can cleanly animate the fill width
      */}
      <div className="slider-track">
        <div className="slider-fill"></div>
      </div>

      {/* 
        The Custom Thumb 
        This is the element that actually stretches horizontally!
      */}
      <div 
        className="slider-thumb"
        style={{ left: `${fillPercentage}%` }}
      >
        <span>{value}</span>
      </div>

      {/* 
        The Invisible Native Input
        We keep the native HTML range input for perfect accessibility and touch physics, 
        but we hide it entirely so our custom UI takes over!
      */}
      <input 
        type="range" 
        className="slider-native-input"
        min={min} 
        max={max} 
        value={value} 
        onInput={handleInput}
        aria-label="Elastic Range Slider"
      />
      
    </div>
  );
};

export default ElasticSlider;
