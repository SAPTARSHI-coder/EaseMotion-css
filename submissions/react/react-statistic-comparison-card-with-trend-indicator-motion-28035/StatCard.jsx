import React, { useState, useEffect } from 'react';

/**
 * Statistic Comparison Card with Trend Indicator Motion
 * 
 * @param {string} title - The title of the metric
 * @param {number} value - Current value
 * @param {number} previousValue - Previous period value for comparison
 * @param {string} prefix - Optional prefix (e.g. "$")
 * @param {string} suffix - Optional suffix (e.g. "K")
 */
const StatCard = ({ 
  title = "Monthly Active Users", 
  value = 0, 
  previousValue = 0,
  prefix = "", 
  suffix = ""
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Small delay to trigger entrance animations
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Calculate percentage change
  const percentChange = previousValue === 0 
    ? 100 // if prev was 0, it's 100% growth (assuming value > 0)
    : ((value - previousValue) / previousValue) * 100;
  
  const isPositive = percentChange >= 0;
  const absChange = Math.abs(percentChange).toFixed(1);

  return (
    <div 
      className={`ease-stat-card ${mounted ? 'is-mounted' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="ease-stat-header">
        <h3 className="ease-stat-title">{title}</h3>
        <button className="ease-stat-options" aria-label="More options">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="12" cy="5" r="1"></circle>
            <circle cx="12" cy="19" r="1"></circle>
          </svg>
        </button>
      </div>

      <div className="ease-stat-main">
        <div className="ease-stat-value-container">
          <span className="ease-stat-value">
            {prefix}{value.toLocaleString()}{suffix}
          </span>
        </div>
      </div>

      <div className="ease-stat-footer">
        <div className={`ease-stat-trend ${isPositive ? 'is-positive' : 'is-negative'} ${isHovered ? 'is-hovered' : ''}`}>
          <div className="ease-stat-trend-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              {isPositive ? (
                <>
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </>
              ) : (
                <>
                  <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
                  <polyline points="17 18 23 18 23 12"></polyline>
                </>
              )}
            </svg>
            
            {/* Animated particles that fly out of the arrow on hover */}
            {isHovered && (
              <div className="ease-stat-particles">
                <span className="particle" />
                <span className="particle" />
                <span className="particle" />
              </div>
            )}
          </div>
          <span className="ease-stat-trend-percent">{absChange}%</span>
        </div>
        <span className="ease-stat-comparison-text">
          vs previous period
        </span>
      </div>
      
      {/* Background decoration line chart */}
      <div className="ease-stat-bg-chart">
        <svg viewBox="0 0 100 40" preserveAspectRatio="none">
          {isPositive ? (
            <path 
              d="M0 40 Q20 35 30 25 T60 20 T100 5 L100 40 Z" 
              fill="rgba(34, 197, 94, 0.05)" 
            />
          ) : (
            <path 
              d="M0 5 Q20 10 30 20 T60 25 T100 35 L100 40 L0 40 Z" 
              fill="rgba(239, 68, 68, 0.05)" 
            />
          )}
        </svg>
      </div>
    </div>
  );
};

export default StatCard;
