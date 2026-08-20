import React, { useState, useRef, useEffect } from 'react';
import './style.css';

/**
 * CollapseBanner
 * 
 * A React component for a dismissible top/bottom banner.
 * It uses a CSS transition on max-height, opacity, and margin to smoothly collapse out of the DOM.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content of the banner.
 * @param {boolean} [props.defaultVisible=true] - Whether the banner is initially visible.
 * @param {function} [props.onDismiss] - Callback when the banner finishes collapsing.
 * @param {string} [props.type='info'] - Banner styling type: 'info', 'success', 'warning', 'error'.
 */
const CollapseBanner = ({ 
  children, 
  defaultVisible = true, 
  onDismiss,
  type = 'info'
}) => {
  const [isVisible, setIsVisible] = useState(defaultVisible);
  const [isCollapsing, setIsCollapsing] = useState(false);
  const bannerRef = useRef(null);

  const handleDismiss = () => {
    setIsCollapsing(true);
  };

  const handleTransitionEnd = (e) => {
    // Only trigger removal when the max-height transition finishes
    if (e.propertyName === 'max-height' && isCollapsing) {
      setIsVisible(false);
      if (onDismiss) {
        onDismiss();
      }
    }
  };

  if (!isVisible) return null;

  return (
    <div
      ref={bannerRef}
      className={`ease-collapse-banner-ag banner-type-${type}-ag ${isCollapsing ? 'collapsing-ag' : ''}`}
      onTransitionEnd={handleTransitionEnd}
      role="alert"
    >
      <div className="ease-collapse-banner-content-ag">
        <div className="ease-collapse-banner-message-ag">
          {children}
        </div>
        <button 
          className="ease-collapse-banner-close-ag" 
          onClick={handleDismiss}
          aria-label="Dismiss banner"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CollapseBanner;
