import React, { useState, useEffect, useRef } from 'react';
import './style.css';

export default function AnalyticsMetricCard({
  title,
  value,
  prefix = '',
  suffix = '',
  trend = 0,
  duration = 1500,
  icon,
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const startTime = useRef(null);

  useEffect(() => {
    let animationFrame;
    const endValue = parseFloat(value) || 0;

    const animate = (timestamp) => {
      if (!startTime.current) startTime.current = timestamp;
      const progress = timestamp - startTime.current;
      
      // easeOutExpo easing function
      const easeProgress = progress === duration ? 1 : 1 - Math.pow(2, -10 * progress / duration);
      
      if (progress < duration) {
        setDisplayValue(endValue * easeProgress);
        animationFrame = requestAnimationFrame(animate);
      } else {
        setDisplayValue(endValue);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [value, duration]);

  const formatNumber = (num) => {
    return Number.isInteger(parseFloat(value)) ? Math.floor(num) : num.toFixed(1);
  };

  const isPositive = trend >= 0;

  return (
    <div className="ease-metric-card ease-hover-lift">
      <div className="ease-metric-card__header">
        <h3 className="ease-metric-card__title">{title}</h3>
        {icon && <div className="ease-metric-card__icon">{icon}</div>}
      </div>
      
      <div className="ease-metric-card__content">
        <div className="ease-metric-card__value-container">
          <span className="ease-metric-card__prefix">{prefix}</span>
          <span className="ease-metric-card__value ease-count-up">
            {formatNumber(displayValue)}
          </span>
          <span className="ease-metric-card__suffix">{suffix}</span>
        </div>
        
        {trend !== 0 && (
          <div className={`ease-metric-card__trend ${isPositive ? 'ease-metric-card__trend--up' : 'ease-metric-card__trend--down'}`}>
            <span className="ease-metric-card__trend-icon" aria-hidden="true">
              {isPositive ? '↑' : '↓'}
            </span>
            <span className="ease-metric-card__trend-value">
              {Math.abs(trend)}%
            </span>
            <span className="ease-metric-card__trend-label">vs last month</span>
          </div>
        )}
      </div>
    </div>
  );
}
