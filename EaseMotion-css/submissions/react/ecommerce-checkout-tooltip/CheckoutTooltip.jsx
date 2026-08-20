import React, { useState } from 'react';
import './style.css';

/**
 * CheckoutTooltip Component
 * Features a Shimmer Pulse effect designed to highlight trust signals 
 * and vital info in E-Commerce Checkout Layouts.
 */
const CheckoutTooltip = ({ 
  children, 
  content, 
  position = 'top', 
  theme = 'blue' 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  return (
    <div 
      className="checkout-tooltip-container"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {children}
      
      {isVisible && (
        <div 
          className={`checkout-tooltip-box tooltip-${position} theme-${theme} ease-fade-in ease-zoom-in`}
          role="tooltip"
        >
          {/* The E-Commerce Shimmer Pulse Element */}
          <div className="checkout-shimmer-overlay"></div>
          
          <div className="tooltip-content">
            {content}
          </div>
          
          <div className={`tooltip-arrow arrow-${position}`}></div>
        </div>
      )}
    </div>
  );
};

export default CheckoutTooltip;