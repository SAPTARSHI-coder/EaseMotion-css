import React, { useState, useRef, useEffect } from 'react';

/**
 * Tooltip Component
 * 
 * A React Tooltip component utilizing a smooth Elastic Slide interaction 
 * transition, designed for Modern Corporate interfaces.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - The element that triggers the tooltip.
 * @param {string} props.content - The text content to display inside the tooltip.
 * @param {number} [props.delay=100] - Delay in milliseconds before showing the tooltip.
 */
const Tooltip = ({ children, content, delay = 100 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef(null);

  const showTooltip = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <style>{`
        /* Corporate UI Variables */
        :root {
          --ease-corp-bg: #ffffff;
          --ease-corp-border: #e2e8f0;
          --ease-corp-text: #0f172a;
          --ease-corp-primary: #2563eb;
          
          --ease-corp-tooltip-bg: #1e293b;
          --ease-corp-tooltip-text: #f8fafc;
          --ease-corp-radius: 6px;
          
          --ease-tooltip-timing: 0.4s;
          --ease-tooltip-easing-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
          --ease-tooltip-easing-fade: ease-out;
          
          --ease-corp-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }

        .ease-corp-tooltip-wrapper {
          position: relative;
          display: inline-block;
          font-family: 'Inter', sans-serif;
        }

        .ease-corp-tooltip {
          position: absolute;
          bottom: calc(100% + 12px);
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          background: var(--ease-corp-tooltip-bg);
          color: var(--ease-corp-tooltip-text);
          padding: 8px 12px;
          border-radius: var(--ease-corp-radius);
          font-size: 0.85rem;
          font-weight: 500;
          white-space: nowrap;
          box-shadow: var(--ease-corp-shadow);
          z-index: 1000;
          pointer-events: none;
          
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.2s var(--ease-tooltip-easing-fade),
                      visibility 0.2s var(--ease-tooltip-easing-fade),
                      transform var(--ease-tooltip-timing) var(--ease-tooltip-easing-bounce);
        }

        .ease-corp-tooltip::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          margin-left: -5px;
          border-width: 5px;
          border-style: solid;
          border-color: var(--ease-corp-tooltip-bg) transparent transparent transparent;
        }

        .ease-corp-tooltip.is-active {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }

        /* Demo trigger element styles */
        .ease-corp-tooltip-trigger {
          display: inline-flex;
          align-items: center;
          padding: 10px 20px;
          background: var(--ease-corp-bg);
          color: var(--ease-corp-text);
          border: 1px solid var(--ease-corp-border);
          border-radius: var(--ease-corp-radius);
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .ease-corp-tooltip-trigger:hover,
        .ease-corp-tooltip-trigger:focus-visible {
          border-color: var(--ease-corp-primary);
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
          outline: none;
        }
      `}</style>
      <div 
        className="ease-corp-tooltip-wrapper"
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
      >
        {children}
        <div 
          className={`ease-corp-tooltip ${isVisible ? 'is-active' : ''}`}
          role="tooltip"
          aria-hidden={!isVisible}
        >
          {content}
        </div>
      </div>
    </>
  );
};

export default Tooltip;
