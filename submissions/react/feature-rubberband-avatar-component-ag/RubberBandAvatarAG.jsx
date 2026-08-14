import React from 'react';
import './style.css';

const RubberBandAvatarAG = ({ 
  src, 
  alt = "Loading Avatar", 
  size = 64, 
  isLoading = true,
  className = '' 
}) => {
  const containerStyle = {
    width: size,
    height: size,
    borderRadius: '50%',
    overflow: 'hidden',
    backgroundColor: '#e2e8f0', // Skeleton background color
  };

  return (
    <div 
      className={`rubberband-avatar-container-ag ${isLoading ? 'is-loading-ag' : ''} ${className}`}
      style={containerStyle}
      role="img"
      aria-label={isLoading ? "Loading avatar" : alt}
      aria-busy={isLoading}
    >
      {!isLoading && src ? (
        <img 
          src={src} 
          alt={alt} 
          className="rubberband-avatar-image-ag" 
        />
      ) : null}
    </div>
  );
};

export default RubberBandAvatarAG;
