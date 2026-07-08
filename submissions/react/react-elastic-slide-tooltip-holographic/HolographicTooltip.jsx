import React, { useState } from 'react';
import './style.css';
export const HolographicTooltip = ({
  content,
  children,
  position = 'top',
  delay = '0s'
}) => {
  const [isVisible, setIsVisible] = useState(false);

  // Accessible Trigger Controls mapping key activities
  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  return (
    <div 
      className="ease-holo-wrapper"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {/* Target Trigger Node injected directly into children stream */}
      <span className="ease-holo-target">
        {children}
      </span>

      {/* Accessible Tooltip Portal Frame */}
      <div 
        className={`ease-holo-content ease-holo-${position} ${isVisible ? 'is-active' : ''}`}
        role="tooltip"
        aria-hidden={!isVisible}
        style={{ '--holo-delay': delay }}
      >
        <div className="ease-holo-glass-mesh">
          {content}
        </div>
      </div>
    </div>
  );
};

export default HolographicTooltip;