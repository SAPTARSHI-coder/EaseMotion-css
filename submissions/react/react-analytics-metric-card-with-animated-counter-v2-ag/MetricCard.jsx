import React, { useState, useEffect } from 'react';
import './style.css'; 

/**
 * Analytics Metric Card
 * Features a zero-dependency number counter and EaseMotion entrance animations.
 */
const MetricCard = ({
  title = "Total Revenue",
  value = 124500,
  prefix = "$",
  suffix = "",
  trend = "up", // "up", "down", "neutral"
  trendValue = "12.5%",
  duration = 2000 // count up duration in ms
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrame;

    // Exponential ease-out function for smooth deceleration
    const easeOutExpo = (t) => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percent = Math.min(progress / duration, 1);
      
      const easedPercent = easeOutExpo(percent);
      setDisplayValue(Math.floor(easedPercent * value));

      if (percent < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  // Format large numbers cleanly
  const formattedValue = displayValue.toLocaleString();

  const getTrendColor = () => {
    switch (trend) {
      case 'up': return 'text-green';
      case 'down': return 'text-red';
      default: return 'text-gray';
    }
  };

  const getTrendIcon = () => {
    switch (trend) {
      case 'up': return '↑';
      case 'down': return '↓';
      default: return '→';
    }
  };

  return (
    <div className="metric-card ease-fade-in-up ease-hover-lift">
      <div className="metric-header">
        <h3 className="metric-title">{title}</h3>
        <div className="metric-icon ease-pulse-slow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon-svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
      </div>
      
      <div className="metric-content">
        <div className="metric-value-wrapper ease-slide-right">
          <span className="metric-prefix">{prefix}</span>
          <span className="metric-value">{formattedValue}</span>
          <span className="metric-suffix">{suffix}</span>
        </div>
        
        <div className={`metric-trend ${getTrendColor()} ease-fade-in`}>
          <span className="trend-icon">{getTrendIcon()}</span>
          <span className="trend-value">{trendValue}</span>
          <span className="trend-text">vs last month</span>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
