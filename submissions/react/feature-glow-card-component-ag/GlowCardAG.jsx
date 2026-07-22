import React from 'react';
import './style.css';

const GlowCardAG = ({ isLoading, children }) => {
  return (
    <div 
      className={`glow-card-ag ${isLoading ? 'is-loading-ag' : ''}`}
      aria-busy={isLoading}
      aria-live="polite"
    >
      {isLoading ? (
        <div className="glow-card-placeholder-ag">
          <div className="glow-skeleton-title-ag"></div>
          <div className="glow-skeleton-line-ag"></div>
          <div className="glow-skeleton-line-ag short-ag"></div>
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default GlowCardAG;
