import React from 'react';
import './style.css';

const GlitchCardAG = ({ isLoading, children }) => {
  return (
    <div 
      className={`glitch-card-ag ${isLoading ? 'is-loading-ag' : ''}`}
      aria-busy={isLoading}
      aria-live="polite"
    >
      {isLoading ? (
        <div className="glitch-card-placeholder-ag">
          <div className="glitch-skeleton-title-ag"></div>
          <div className="glitch-skeleton-line-ag"></div>
          <div className="glitch-skeleton-line-ag short-ag"></div>
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default GlitchCardAG;
