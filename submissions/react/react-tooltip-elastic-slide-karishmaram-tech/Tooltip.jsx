import React, { useState } from 'react';
import './style.css';

/**
 * Tooltip Component with Elastic Slide Transition for EaseMotion
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Element that triggers the tooltip.
 * @param {React.ReactNode} props.content - Text or elements inside the tooltip.
 * @param {'top' | 'bottom' | 'left' | 'right'} [props.position='top'] - Position of tooltip.
 * @param {string} [props.className=''] - Custom styling class for the tooltip container.
 */
export const Tooltip = ({
  children,
  content,
  position = 'top',
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="ease-tooltip-wrapper"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          role="tooltip"
          className={`ease-tooltip ease-tooltip-${position} ease-elastic-slide ${className}`}
        >
          {content}
          <span className="ease-tooltip-arrow" />
        </div>
      )}
    </div>
  );
};

export default Tooltip;
