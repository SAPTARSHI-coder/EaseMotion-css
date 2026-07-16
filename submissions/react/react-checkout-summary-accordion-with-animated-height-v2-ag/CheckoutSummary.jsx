import React, { useState, useRef, useEffect } from 'react';
import './style.css';

/**
 * Checkout Summary Accordion
 * Features smooth height animations and EaseMotion staggered list transitions.
 */
const CheckoutSummary = ({ 
  cartItems = [], 
  subtotal = 0,
  tax = 0,
  shipping = 0,
  total = 0,
  currency = "$"
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  // Dynamic height calculation for the accordion body
  // This allows us to animate from 0 to 'auto' cleanly using CSS height transitions
  useEffect(() => {
    if (isExpanded && contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    } else {
      setContentHeight(0);
    }
  }, [isExpanded, cartItems]);

  const formatPrice = (amount) => {
    return `${currency}${Number(amount).toFixed(2)}`;
  };

  return (
    <div className="checkout-accordion-container ease-fade-in-up">
      <button 
        className="accordion-header ease-hover-glow" 
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        <div className="header-left">
          <svg className="cart-icon ease-bounce-hover" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="summary-title">{isExpanded ? "Hide order summary" : "Show order summary"}</span>
          <svg className={`chevron-icon ${isExpanded ? 'rotated' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div className="header-right">
          <span className="summary-total">{formatPrice(total)}</span>
        </div>
      </button>

      {/* Accordion Wrapper that controls the animated height */}
      <div 
        className="accordion-body-wrapper" 
        style={{ height: `${contentHeight}px` }}
        aria-hidden={!isExpanded}
      >
        <div className="accordion-content" ref={contentRef}>
          {/* List of Cart Items */}
          <ul className="cart-item-list">
            {cartItems.map((item, idx) => (
              <li 
                key={idx} 
                className="cart-item ease-slide-right" 
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="item-image-wrapper ease-hover-scale">
                  <img src={item.image} alt={item.name} className="item-image" />
                  <span className="item-quantity">{item.quantity}</span>
                </div>
                <div className="item-details">
                  <h4 className="item-name">{item.name}</h4>
                  <p className="item-variant">{item.variant}</p>
                </div>
                <div className="item-price">
                  {formatPrice(item.price * item.quantity)}
                </div>
              </li>
            ))}
          </ul>

          {/* Checkout Breakdown */}
          <div className="pricing-breakdown">
            <div className="pricing-row ease-fade-in" style={{ animationDelay: '0.2s' }}>
              <span className="pricing-label">Subtotal</span>
              <span className="pricing-value">{formatPrice(subtotal)}</span>
            </div>
            <div className="pricing-row ease-fade-in" style={{ animationDelay: '0.3s' }}>
              <span className="pricing-label">Shipping</span>
              <span className="pricing-value">{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
            </div>
            <div className="pricing-row ease-fade-in" style={{ animationDelay: '0.4s' }}>
              <span className="pricing-label">Estimated taxes</span>
              <span className="pricing-value">{formatPrice(tax)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSummary;
