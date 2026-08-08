import React, { useState, useEffect } from 'react';
import './style.css';

const BreadcrumbTrail = ({ items, onNavigate }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Small delay to trigger mount animations
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className={`breadcrumb-container ${mounted ? 'is-mounted' : ''}`}>
      <ol className="breadcrumb-list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <React.Fragment key={index}>
              <li 
                className="breadcrumb-item ease-fade-in ease-slide-right"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {isLast ? (
                  <span className="breadcrumb-text active ease-pulse" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <button 
                    className="breadcrumb-btn ease-hover-lift" 
                    onClick={() => onNavigate && onNavigate(item)}
                  >
                    {item.icon && <span className="breadcrumb-icon">{item.icon}</span>}
                    <span className="breadcrumb-text">{item.label}</span>
                  </button>
                )}
              </li>
              
              {!isLast && (
                <li 
                  className="breadcrumb-divider ease-fade-in"
                  style={{ animationDelay: `${(index * 0.1) + 0.05}s` }}
                  aria-hidden="true"
                >
                  <svg 
                    className="chevron-icon ease-slide-right" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadcrumbTrail;
