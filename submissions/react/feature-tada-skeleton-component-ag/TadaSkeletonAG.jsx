import React from 'react';
import './style.css';

const TadaSkeletonAG = ({ 
  width = '100%', 
  height = '20px', 
  borderRadius = '4px',
  className = '' 
}) => {
  const skeletonStyle = {
    width,
    height,
    borderRadius,
    backgroundColor: '#cbd5e1',
  };

  return (
    <div 
      className={`tada-skeleton-ag ${className}`}
      style={skeletonStyle}
      role="status"
      aria-label="Loading content"
      aria-live="polite"
    />
  );
};

export default TadaSkeletonAG;
