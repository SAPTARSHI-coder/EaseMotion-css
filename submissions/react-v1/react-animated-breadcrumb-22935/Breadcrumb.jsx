import React from 'react';

const ChevronRight = () => (
  <svg 
    className="breadcrumb-separator" 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const HomeIcon = () => (
  <svg 
    className="breadcrumb-icon" 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const Breadcrumb = ({ 
  items = [], 
  staggerDelay = 50 
}) => {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb-nav">
      <ol className="breadcrumb-list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const delay = index * staggerDelay;
          
          return (
            <li 
              key={index} 
              className="breadcrumb-item ease-slide-up"
              style={{ animationDelay: `${delay}ms` }}
            >
              <div className="breadcrumb-item-content">
                {isLast ? (
                  <span className="breadcrumb-text current" aria-current="page">
                    {index === 0 && <HomeIcon />}
                    {item.label}
                  </span>
                ) : (
                  <a 
                    href={item.href || '#'} 
                    className="breadcrumb-text link ease-hover-glow"
                  >
                    {index === 0 && <HomeIcon />}
                    {item.label}
                  </a>
                )}
                
                {!isLast && <ChevronRight />}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
