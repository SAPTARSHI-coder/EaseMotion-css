import React, { useState } from 'react';

/**
 * AudioTooltip component with an Elastic Slide animation engineered for dense Audio Player interfaces.
 * Integrates directly into EaseMotion's timing and easing tokens.
 */
export const AudioTooltip = ({ 
  children, 
  content, 
  position = 'top', 
  delay = 50 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  let timeoutId = null;

  const showTooltip = () => {
    timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, delay); // Shorter delay defaults for highly interactive media decks
  };

  const hideTooltip = () => {
    clearTimeout(timeoutId);
    setIsVisible(false);
  };

  // Elastic animation configurations optimized for small audio control contexts
  const positionStyles = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: isVisible 
        ? 'translateX(-50%) translateY(-6px) scale(1)' 
        : 'translateX(-50%) translateY(6px) scale(0.8)',
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: isVisible 
        ? 'translateX(-50%) translateY(6px) scale(1)' 
        : 'translateX(-50%) translateY(-6px) scale(0.8)',
    },
    left: {
      top: '50%',
      right: '100%',
      transform: isVisible 
        ? 'translateY(-50%) translateX(-6px) scale(1)' 
        : 'translateY(-50%) translateX(6px) scale(0.8)',
    },
    right: {
      top: '50%',
      left: '100%',
      transform: isVisible 
        ? 'translateY(-50%) translateX(6px) scale(1)' 
        : 'translateY(-50%) translateX(-6px) scale(0.8)',
    }
  };

  return (
    <div 
      className="ease-audio-tooltip-wrapper"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
      style={{ display: 'inline-block', position: 'relative' }}
    >
      {children}
      
      <div
        className={`ease-audio-tooltip-box ease-tooltip-${position}`}
        style={{
          position: 'absolute',
          zIndex: 150,
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          backgroundColor: 'var(--ease-audio-tooltip-bg, #09090b)',
          color: 'var(--ease-audio-tooltip-color, #ffffff)',
          padding: '0.35rem 0.6rem',
          borderRadius: 'var(--ease-radius-sm, 0.25rem)',
          fontSize: '0.75rem',
          fontWeight: '600',
          letterSpacing: '0.025em',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
          opacity: isVisible ? 1 : 0,
          visibility: isVisible ? 'visible' : 'hidden',
          ...positionStyles[position],
          // Aggressive, playful elastic curve suited for rapid music control snapping
          transition: `
            opacity var(--ease-speed-fast, 150ms) ease,
            visibility var(--ease-speed-fast, 150ms) ease,
            transform var(--ease-speed-medium, 300ms) cubic-bezier(0.34, 1.56, 0.64, 1)
          `
        }}
      >
        {content}
      </div>
    </div>
  );
};

export default AudioTooltip;
