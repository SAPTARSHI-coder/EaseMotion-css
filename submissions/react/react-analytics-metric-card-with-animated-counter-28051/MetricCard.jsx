import React, { useState, useEffect } from 'react';

/**
 * Analytics Metric Card with Animated Counter
 * 
 * @param {string} title - The title of the metric
 * @param {number} value - The final numerical value to animate to
 * @param {string} prefix - Optional prefix (e.g. "$")
 * @param {string} suffix - Optional suffix (e.g. "K")
 * @param {number} trend - Percentage change (positive or negative)
 * @param {number} duration - Animation duration in milliseconds
 */
const MetricCard = ({ 
  title = "Total Revenue", 
  value = 0, 
  prefix = "", 
  suffix = "", 
  trend = 0,
  duration = 2000
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  // Easing function: easeOutExpo (starts fast, slows down smoothly)
  const easeOutExpo = (x) => {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
  };

  useEffect(() => {
    let startTime = null;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easedProgress = easeOutExpo(progress);
      const currentVal = Math.floor(easedProgress * value);
      
      setDisplayValue(currentVal);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value); // Ensure exact final value
      }
    };

    // Delay start slightly to allow entrance animation to trigger first
    const delayTimer = setTimeout(() => {
      animationFrame = requestAnimationFrame(animate);
    }, 300);

    return () => {
      clearTimeout(delayTimer);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [value, duration]);

  const isPositive = trend >= 0;

  return (
    <div className="ease-metric-card">
      <div className="ease-metric-header">
        <h3 className="ease-metric-title">{title}</h3>
        <button className="ease-metric-menu-btn" aria-label="More options">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="12" cy="5" r="1"></circle>
            <circle cx="12" cy="19" r="1"></circle>
          </svg>
        </button>
      </div>

      <div className="ease-metric-content">
        <div className="ease-metric-value-container">
          {prefix && <span className="ease-metric-affix">{prefix}</span>}
          {/* Format number with commas */}
          <span className="ease-metric-value">{displayValue.toLocaleString()}</span>
          {suffix && <span className="ease-metric-affix">{suffix}</span>}
        </div>

        <div className={`ease-metric-trend ${isPositive ? 'is-positive' : 'is-negative'}`}>
          <span className="ease-metric-trend-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              {isPositive ? (
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
              ) : (
                <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
              )}
              {isPositive ? (
                <polyline points="17 6 23 6 23 12"></polyline>
              ) : (
                <polyline points="17 18 23 18 23 12"></polyline>
              )}
            </svg>
          </span>
          <span className="ease-metric-trend-value">
            {Math.abs(trend)}%
          </span>
          <span className="ease-metric-trend-label">vs last month</span>
        </div>
      </div>
      
      {/* Decorative background glow */}
      <div className="ease-metric-glow"></div>
    </div>
  );
};

export default MetricCard;
