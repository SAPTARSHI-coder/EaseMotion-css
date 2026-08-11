import React from 'react';
import StaggeredText from './StaggeredText';
import './style.css';

/**
 * ============================================================================
 * EaseMotion Hardware-Accelerated Staggered Reveal Demo
 * ============================================================================
 * 
 * Scroll down to trigger the IntersectionObserver reveal, 
 * or hover over the bottom box to trigger a rapid replay!
 */

export const Demo = () => {
  return (
    <div className="demo-container">
      
      <div className="spacer">
        <p>Scroll down to reveal</p>
      </div>

      <StaggeredText 
        text="Experience Next Generation UI."
        className="hero-text"
        staggerDelay={0.04}
      />
      
      <StaggeredText 
        text="A premium text reveal animation where each letter slides up and fades in with a calculated delay. Built entirely without JavaScript animation libraries like GSAP, utilizing native CSS calc() for perfect GPU interpolation."
        className="subtitle-text"
        staggerDelay={0.015} // Faster stagger for longer paragraphs!
      />

      <div className="hover-trigger-box">
        <p style={{ color: '#64748b', marginBottom: '20px' }}>Hover to trigger</p>
        
        <StaggeredText 
          text="Hardware Accelerated."
          className="hover-text"
          staggerDelay={0.05}
          triggerOnHover={true}
        />
      </div>

    </div>
  );
};

export default Demo;
