import React, { useState } from 'react';
import './style.css';

/**
 * Medical Dashboard Tooltip Component
 * Incorporates EaseMotion animation utilities with a smooth Shimmer Pulse transition.
 * 
 * @param {string} text - The content to be displayed inside the tooltip box.
 * @param {string} position - Layout alignment ('top' | 'bottom'). Defaults to 'top'.
 * @param {string} status - Medical severity theme ('normal' | 'warning' | 'critical').
 * @param {React.ReactNode} children - The dashboard metric/element that triggers the tooltip.
 */
const Tooltip = ({ text, children, position = 'top', status = 'normal' }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Medical Dashboard Theme mappings (Tailwind CSS matching medical UI norms)
  const statusStyles = {
    normal: {
      border: 'border-teal-500',
      bg: 'bg-emerald-50/90',
      text: 'text-emerald-900',
      badge: 'bg-emerald-200 text-emerald-800'
    },
    warning: {
      border: 'border-amber-500',
      bg: 'bg-amber-50/90',
      text: 'text-amber-900',
      badge: 'bg-amber-200 text-amber-800'
    },
    critical: {
      border: 'border-rose-600',
      bg: 'bg-rose-50/90',
      text: 'text-rose-950 font-medium',
      badge: 'bg-rose-200 text-rose-700 uppercase tracking-wider'
    }
  };

  // Positional configuration mappings
  const positionStyles = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-3',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-3'
  };

  const currentTheme = statusStyles[status] || statusStyles.normal;

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {/* Target Trigger Element (e.g., Pulse Oximeter, Heart Rate metric card) */}
      <div className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 rounded-md">
        {children}
      </div>

      {/* Tooltip Wrapper */}
      {isVisible && (
        <div 
          role="tooltip"
          className={`absolute z-50 min-w-[220px] max-w-[300px] p-3.5 rounded-xl backdrop-blur-md shadow-lg border-l-4 transition-all duration-300
            ease-fade-in ease-hover-lift ease-shimmer-pulse
            ${currentTheme.border} 
            ${currentTheme.bg} 
            ${currentTheme.text}
            ${positionStyles[position]}
          `}
        >
          {/* Shimmer Telemetry Animation Overlay Line */}
          <div className="absolute inset-0 w-full h-full overflow-hidden rounded-xl pointer-events-none">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer ease-pulse" />
          </div>

          {/* Medical Component Layout Content */}
          <div className="relative z-10 flex flex-col gap-1.5 pointer-events-none select-none">
            <div className="flex items-center justify-between gap-2">
              <span className={`text-[10px] px-1.5 py-0.5 rounded font-semibold ${currentTheme.badge}`}>
                {status === 'normal' ? 'System OK' : status}
              </span>
              <span className="text-[9px] opacity-60 font-mono">Live Telemetry</span>
            </div>
            <p className="text-xs leading-relaxed break-words">
              {text}
            </p>
          </div>

          {/* Small Tooltip Arrow */}
          <div 
            className={`absolute w-2.5 h-2.5 rotate-45 border-inherit ${currentTheme.bg}
              ${position === 'top' ? 'top-full left-1/2 -translate-x-1/2 -mt-1.5 border-r border-b' : ''}
              ${position === 'bottom' ? 'bottom-full left-1/2 -translate-x-1/2 -mb-1.5 border-l border-t' : ''}
            `}
          />
        </div>
      )}
    </div>
  );
};

export default Tooltip;