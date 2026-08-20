import React, { useState, useRef, useEffect } from 'react';

/**
 * ProductTooltip Component
 * 
 * A React Tooltip component utilizing a smooth Elastic Slide interaction 
 * transition, designed specifically for Product Catalog Layouts.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - The target element (e.g. an info icon or product name).
 * @param {string} props.productName - The name of the product.
 * @param {string} props.description - A short description of the product.
 * @param {string} props.price - The price of the product.
 * @param {boolean} [props.inStock=true] - Whether the product is in stock.
 */
const ProductTooltip = ({ 
  children, 
  productName = "Premium Wireless Headphones", 
  description = "Active noise cancelling with 30-hour battery life.",
  price = "$299.99",
  inStock = true
}) => {
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
        /* Product Catalog Theme Variables */
        :root {
          --ease-catalog-bg: #ffffff;
          --ease-catalog-text-primary: #1a1a1a;
          --ease-catalog-text-secondary: #666666;
          --ease-catalog-border: #e0e0e0;
          --ease-catalog-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
          
          --ease-catalog-stock-green: #059669;
          --ease-catalog-stock-red: #dc2626;
          
          --ease-slide-timing: 0.5s;
          --ease-slide-easing-elastic: cubic-bezier(0.34, 1.56, 0.64, 1);
          --ease-slide-easing-fade: ease-out;
        }

        .ease-catalog-tooltip-wrapper {
          position: relative;
          display: inline-block;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }

        /* The Tooltip Card */
        .ease-catalog-tooltip {
          position: absolute;
          bottom: calc(100% + 12px);
          left: 50%;
          transform: translateX(-50%) translateY(20px);
          background-color: var(--ease-catalog-bg);
          padding: 16px;
          border-radius: 8px;
          border: 1px solid var(--ease-catalog-border);
          min-width: 220px;
          width: max-content;
          max-width: 280px;
          text-align: left;
          z-index: 1000;
          pointer-events: none;
          box-shadow: var(--ease-catalog-shadow);
          
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.25s var(--ease-slide-easing-fade),
                      visibility 0.25s var(--ease-slide-easing-fade),
                      transform var(--ease-slide-timing) var(--ease-slide-easing-elastic);
        }

        /* Tooltip Arrow */
        .ease-catalog-tooltip::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          margin-left: -8px;
          border-width: 8px;
          border-style: solid;
          border-color: var(--ease-catalog-border) transparent transparent transparent;
        }
        
        /* Inner arrow to overlap border */
        .ease-catalog-tooltip::before {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          margin-left: -7px;
          margin-top: -2px;
          border-width: 7px;
          border-style: solid;
          border-color: var(--ease-catalog-bg) transparent transparent transparent;
          z-index: 1;
        }

        /* Active state for Elastic Slide */
        .ease-catalog-tooltip.is-active {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }

        /* Product Content Styling */
        .ease-catalog-product-name {
          font-size: 1rem;
          font-weight: 600;
          color: var(--ease-catalog-text-primary);
          margin: 0 0 4px 0;
          line-height: 1.2;
        }

        .ease-catalog-product-desc {
          font-size: 0.85rem;
          color: var(--ease-catalog-text-secondary);
          margin: 0 0 12px 0;
          line-height: 1.4;
        }
        
        .ease-catalog-product-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid var(--ease-catalog-border);
          padding-top: 8px;
        }

        .ease-catalog-product-price {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--ease-catalog-text-primary);
        }
        
        .ease-catalog-product-stock {
          font-size: 0.75rem;
          font-weight: 600;
          padding: 2px 6px;
          border-radius: 4px;
        }
        
        .ease-catalog-product-stock.in-stock {
          background-color: rgba(5, 150, 105, 0.1);
          color: var(--ease-catalog-stock-green);
        }
        
        .ease-catalog-product-stock.out-of-stock {
          background-color: rgba(220, 38, 38, 0.1);
          color: var(--ease-catalog-stock-red);
        }

        /* Trigger Styles for Demo */
        .ease-catalog-trigger {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #2563eb;
          font-weight: 500;
          cursor: pointer;
          text-decoration: underline;
          text-decoration-style: dotted;
          text-underline-offset: 4px;
        }

        .ease-catalog-trigger:hover {
          color: #1d4ed8;
        }
      `}</style>
      <div 
        className="ease-catalog-tooltip-wrapper"
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
      >
        {children}
        <div 
          className={`ease-catalog-tooltip ${isVisible ? 'is-active' : ''}`}
          role="tooltip"
          aria-hidden={!isVisible}
        >
          <h4 className="ease-catalog-product-name">{productName}</h4>
          <p className="ease-catalog-product-desc">{description}</p>
          <div className="ease-catalog-product-footer">
            <span className="ease-catalog-product-price">{price}</span>
            <span className={`ease-catalog-product-stock ${inStock ? 'in-stock' : 'out-of-stock'}`}>
              {inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductTooltip;
