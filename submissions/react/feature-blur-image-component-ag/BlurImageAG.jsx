import React, { useState } from 'react';
import './style.css';

const BlurImageAG = ({ src, alt, className = '', ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`blur-image-wrapper-ag ${className}`} {...props}>
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={`blur-image-ag ${isLoaded ? 'is-loaded-ag' : ''}`}
      />
    </div>
  );
};

export default BlurImageAG;
