import React from 'react';
import './AnimatedBlurGradient.css'; // import the CSS file

/**
 * AnimatedBlurGradient – A hero background with a shifting gradient
 * and blurry floating circles.
 *
 * Wrap your content inside this component to get the animated background.
 *
 * @example
 * <AnimatedBlurGradient>
 *   <h1>Welcome!</h1>
 *   <p>This is the hero section.</p>
 * </AnimatedBlurGradient>
 */
export default function AnimatedBlurGradient({ children, className = '' }) {
  return (
    <div className={`animated-blur-gradient ${className}`}>
      <div className="blur-circle blur-circle-1" />
      <div className="blur-circle blur-circle-2" />
      <div className="blur-circle blur-circle-3" />
      <div className="content">{children}</div>
    </div>
  );
}