import React, { useState, useEffect } from 'react';

/**
 * AnalyticsMetricCard Component
 * Displays a metric block with a dynamically animated counter that increments
 * from 0 to the target value over a set duration using easing logic.
 * 
 * @param {Object} props
 * @param {string} props.title - Metric title/label
 * @param {number} props.value - Target numeric value to count up to
 * @param {number} [props.duration=1500] - Duration of the count animation (in ms)
 * @param {string} [props.trend] - Trend percentage (e.g. '12.4%')
 * @param {string} [props.trendDirection='up'] - Trend direction: 'up' | 'down' | 'neutral'
 * @param {string} [props.prefix=''] - Prefix for the metric value (e.g. '$')
 * @param {string} [props.suffix=''] - Suffix for the metric value (e.g. '%')
 * @param {React.ReactNode} [props.icon] - Visual icon elements
 * @param {string} [props.accentColor='#8b5cf6'] - Accent border/icon theme color
 */
export default function AnalyticsMetricCard({
  title,
  value,
  duration = 1500,
  trend,
  trendDirection = 'up',
  prefix = '',
  suffix = '',
  icon,
  accentColor = '#8b5cf6'
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Cubic-out easing function: f(t) = 1 - (1 - t)^3
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      
      setDisplayValue(easeProgress * value);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [value, duration]);

  // Format value to display commas, decimal points, and prefixes/suffixes
  const formatValue = (num) => {
    // If target value is float/decimal, display with one decimal place
    const hasDecimals = value % 1 !== 0;
    const formattedNum = hasDecimals
      ? num.toFixed(1)
      : Math.floor(num).toLocaleString();
      
    return `${prefix}${formattedNum}${suffix}`;
  };

  const getTrendColor = () => {
    if (trendDirection === 'up') return '#10b981'; // emerald green
    if (trendDirection === 'down') return '#f43f5e'; // rose red
    return '#9ca3af'; // neutral gray
  };

  return (
    <div
      className="analytics-metric-card ease-hover-float"
      style={{
        backgroundColor: '#0b0f19',
        border: '1px solid #1f2937',
        borderRadius: '12px',
        padding: '1.5rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        textAlign: 'left'
      }}
    >
      {/* Visual Accent Top Bar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          backgroundColor: accentColor
        }}
      />

      {/* Header Info */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          {title}
        </span>
        {icon && (
          <div
            style={{
              padding: '0.5rem',
              borderRadius: '8px',
              backgroundColor: 'rgba(31, 41, 55, 0.5)',
              color: accentColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem'
            }}
          >
            {icon}
          </div>
        )}
      </div>

      {/* Counter & Trend */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
        <h2
          style={{
            fontSize: '2.25rem',
            fontWeight: 800,
            color: '#f9fafb',
            margin: 0,
            letterSpacing: '-0.02em',
            fontFamily: '"Fira Code", monospace'
          }}
        >
          {formatValue(displayValue)}
        </h2>

        {/* Trend Indicator */}
        {trend && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.25rem' }}>
            <span
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                color: getTrendColor(),
                display: 'inline-flex',
                alignItems: 'center'
              }}
            >
              {trendDirection === 'up' && '↑'}
              {trendDirection === 'down' && '↓'}
              {trendDirection === 'neutral' && '•'}
              {trend}
            </span>
            <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>vs last month</span>
          </div>
        )}
      </div>

      {/* Decorative sparkline simulation backing */}
      <div 
        className="sparkline-container"
        style={{ 
          height: '24px', 
          width: '100%', 
          marginTop: '0.5rem',
          opacity: 0.3,
          position: 'relative'
        }}
      >
        <svg viewBox="0 0 100 20" style={{ width: '100%', height: '100%' }}>
          <path
            d="M0,15 Q15,5 30,12 T60,5 T90,15 L100,10"
            fill="none"
            stroke={accentColor}
            strokeWidth="2"
            strokeLinecap="round"
            style={{
              strokeDasharray: 100,
              strokeDashoffset: 100,
              animation: 'drawSparkline 2s cubic-bezier(0.4, 0, 0.2, 1) forwards'
            }}
          />
        </svg>
      </div>

      <style>{`
        @keyframes drawSparkline {
          to { strokeDashoffset: 0; }
        }
      `}</style>
    </div>
  );
}
