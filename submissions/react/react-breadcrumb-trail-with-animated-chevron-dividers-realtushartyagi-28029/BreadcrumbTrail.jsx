import React from 'react';
import './BreadcrumbTrail.css';

/**
 * Breadcrumb Trail with Animated Chevron Dividers
 * 
 * A semantic React component that renders a navigation breadcrumb trail.
 * The chevron dividers between links animate subtly on hover,
 * providing modern, tactile visual feedback.
 * 
 * @param {Array<Object>} items - Array of navigation nodes { label: string, href: string }
 * @param {string} ariaLabel - Accessibility label for the navigation nav block
 */
const BreadcrumbTrail = ({ 
  items = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Electronics', href: '/products/electronics' },
    { label: 'Smartphones', href: '/products/electronics/smartphones' }
  ],
  ariaLabel = 'Breadcrumb Navigation'
}) => {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label={ariaLabel} className="ease-breadcrumb-nav">
      <ol className="ease-breadcrumb-list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li 
              key={`${item.label}-${index}`} 
              className="ease-breadcrumb-item"
              aria-current={isLast ? 'page' : undefined}
            >
              {/* Breadcrumb Link / Text */}
              {isLast ? (
                <span className="ease-breadcrumb-text ease-breadcrumb-active">
                  {item.label}
                </span>
              ) : (
                <a href={item.href} className="ease-breadcrumb-link">
                  {item.label}
                </a>
              )}

              {/* Animated Chevron Divider */}
              {!isLast && (
                <span className="ease-breadcrumb-separator" aria-hidden="true">
                  <svg 
                    className="ease-chevron-icon" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadcrumbTrail;
