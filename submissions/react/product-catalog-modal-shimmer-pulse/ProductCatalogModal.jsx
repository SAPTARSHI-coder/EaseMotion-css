import React, { useEffect } from 'react';
import './style.css';

export const ProductCatalogModal = ({
  isOpen,
  onClose,
  title = 'Product Details',
  children,
  className = ''
}) => {
  // Manage body scroll lock when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key closure for accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="product-modal-overlay" onClick={onClose}>
      <div
        className={`product-modal-container ${className}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
      >
        {/* Shimmer Pulse Animation Track */}
        <div className="product-shimmer-pulse-track"></div>

        <div className="product-modal-header ease-flex ease-justify-between ease-items-center">
          <h2 id="product-modal-title" className="product-modal-title">
            {title}
          </h2>
          <button
            className="product-modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
            type="button"
          >
            ×
          </button>
        </div>

        <div className="product-modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

// Sample product layout component for demonstration
export const ProductCatalogSample = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <button
        className="product-modal-trigger-btn"
        onClick={() => setIsOpen(true)}
      >
        View Product Details
      </button>

      <ProductCatalogModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Premium Wireless Headphones"
      >
        <div className="product-catalog-content ease-flex ease-flex-col">
          {/* Product Image Placeholder */}
          <div className="product-image-container ease-skeleton-shimmer">
            <div className="product-image-placeholder">
              <span className="ease-sr-only">Product image</span>
            </div>
          </div>

          {/* Product Details Section */}
          <div className="product-details ease-stack">
            <div className="product-header">
              <h3 className="product-name">Premium Wireless Headphones</h3>
              <p className="product-price">$129.99</p>
            </div>

            <p className="product-description">
              High-quality audio with active noise cancellation. Perfect for music enthusiasts
              and professionals. Features 30-hour battery life and premium comfort design.
            </p>

            {/* Product Specs */}
            <div className="product-specs ease-flex ease-flex-wrap ease-gap-4">
              <div className="spec-item">
                <span className="spec-label">Battery:</span>
                <span className="spec-value">30 hours</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Weight:</span>
                <span className="spec-value">250g</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Connection:</span>
                <span className="spec-value">Bluetooth 5.0</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Color:</span>
                <span className="spec-value">Midnight Black</span>
              </div>
            </div>

            {/* Rating Section */}
            <div className="product-rating ease-flex ease-items-center ease-gap-2">
              <div className="rating-stars">★★★★★</div>
              <span className="rating-count">(2,847 reviews)</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="product-actions ease-flex ease-gap-3">
            <button className="btn-primary ease-flex-1">
              Add to Cart
            </button>
            <button className="btn-secondary ease-flex-1">
              Save for Later
            </button>
          </div>
        </div>
      </ProductCatalogModal>
    </>
  );
};
