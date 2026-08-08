import React from 'react';
import './style.css';

export default function BreadcrumbTrail({ 
  items = [], 
  onNavigate,
  className = ''
}) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className={`ease-breadcrumb-nav ${className}`}>
      <ol className="ease-breadcrumb-list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li 
              key={item.id || index} 
              className="ease-breadcrumb-item"
              aria-current={isLast ? 'page' : undefined}
            >
              <div className="ease-breadcrumb-content">
                {isLast ? (
                  // Active (last) item is usually just text, not a link
                  <span className="ease-breadcrumb-text ease-breadcrumb-active">
                    {item.icon && <span className="ease-breadcrumb-icon">{item.icon}</span>}
                    {item.label}
                  </span>
                ) : (
                  // Inactive items are clickable
                  <a 
                    href={item.href || '#'} 
                    className="ease-breadcrumb-link"
                    onClick={(e) => {
                      if (onNavigate) {
                        e.preventDefault();
                        onNavigate(item);
                      }
                    }}
                  >
                    {item.icon && <span className="ease-breadcrumb-icon">{item.icon}</span>}
                    {item.label}
                  </a>
                )}
              </div>

              {/* The Animated Chevron Divider */}
              {!isLast && (
                <div className="ease-breadcrumb-divider" aria-hidden="true">
                  <svg 
                    viewBox="0 0 24 24" 
                    width="16" 
                    height="16" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="ease-chevron-icon"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
