import React, { useState, useRef, useEffect } from 'react';

/**
 * AccessibleTooltip Component
 * 
 * A React Tooltip component utilizing a smooth Elastic Slide interaction 
 * transition, designed specifically for Accessible Web Layouts.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - The target element (must be focusable).
 * @param {string} props.content - The text content of the tooltip.
 * @param {string} [props.id] - Optional ID for aria-describedby binding.
 */
const AccessibleTooltip = ({ children, content, id = 'accessible-tooltip-id' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef(null);

  const showTooltip = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsVisible(true);
  };

  const hideTooltip = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 150); // slight delay to prevent flickering
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <>
      <style>{`
        /* Accessible Web Theme Variables */
        :root {
          --ease-a11y-bg: #ffffff;
          --ease-a11y-text: #111111;
          --ease-a11y-focus-ring: #005a9c;
          --ease-a11y-tooltip-bg: #111111;
          --ease-a11y-tooltip-text: #ffffff;
          --ease-a11y-tooltip-border: #444444;
          
          --ease-slide-timing: 0.4s;
          --ease-slide-easing-elastic: cubic-bezier(0.34, 1.56, 0.64, 1);
          --ease-slide-easing-fade: ease-out;
        }

        .ease-a11y-tooltip-wrapper {
          position: relative;
          display: inline-block;
          font-family: system-ui, -apple-system, sans-serif;
        }

        /* The Tooltip Bubble */
        .ease-a11y-tooltip {
          position: absolute;
          bottom: calc(100% + 14px);
          left: 50%;
          transform: translateX(-50%) translateY(15px);
          background-color: var(--ease-a11y-tooltip-bg);
          color: var(--ease-a11y-tooltip-text);
          padding: 12px 16px;
          border-radius: 6px;
          border: 2px solid var(--ease-a11y-tooltip-border);
          font-size: 1rem;
          font-weight: 500;
          line-height: 1.4;
          white-space: normal;
          min-width: max-content;
          max-width: 300px;
          text-align: center;
          z-index: 1000;
          pointer-events: none;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.2s var(--ease-slide-easing-fade),
                      visibility 0.2s var(--ease-slide-easing-fade),
                      transform var(--ease-slide-timing) var(--ease-slide-easing-elastic);
        }

        /* Tooltip Arrow */
        .ease-a11y-tooltip::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          margin-left: -8px;
          border-width: 8px;
          border-style: solid;
          border-color: var(--ease-a11y-tooltip-border) transparent transparent transparent;
        }
        
        /* Inner arrow to overlap border */
        .ease-a11y-tooltip::before {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          margin-left: -6px;
          margin-top: -2px;
          border-width: 6px;
          border-style: solid;
          border-color: var(--ease-a11y-tooltip-bg) transparent transparent transparent;
          z-index: 1;
        }

        /* Active state for Elastic Slide */
        .ease-a11y-tooltip.is-active {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }

        /* Accessible Trigger Styles for Demo */
        .ease-a11y-trigger {
          display: inline-block;
          background: #eeeeee;
          color: var(--ease-a11y-text);
          border: 2px solid #555555;
          padding: 12px 24px;
          font-size: 1.1rem;
          font-weight: 600;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .ease-a11y-trigger:hover {
          background: #dddddd;
          border-color: #111111;
        }

        /* High contrast focus indicator */
        .ease-a11y-trigger:focus-visible {
          outline: 3px solid var(--ease-a11y-focus-ring);
          outline-offset: 3px;
          background: #dddddd;
          border-color: #111111;
        }
        
        /* Reduce motion support */
        @media (prefers-reduced-motion: reduce) {
          .ease-a11y-tooltip {
            transition: opacity 0.2s ease, visibility 0.2s ease;
            transform: translateX(-50%) translateY(0);
          }
        }
      `}</style>
      <div 
        className="ease-a11y-tooltip-wrapper"
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
      >
        {/* Clone the child to attach aria-describedby for screen readers */}
        {React.Children.map(children, child => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              'aria-describedby': isVisible ? id : undefined
            });
          }
          return child;
        })}
        <div 
          id={id}
          className={`ease-a11y-tooltip ${isVisible ? 'is-active' : ''}`}
          role="tooltip"
          aria-hidden={!isVisible}
        >
          {content}
        </div>
      </div>
    </>
  );
};

export default AccessibleTooltip;
