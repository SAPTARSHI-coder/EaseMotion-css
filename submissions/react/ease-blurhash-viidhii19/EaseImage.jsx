import React, { useState } from 'react';
import './style.css';

export const EaseImage = ({ src, placeholder, alt, className = '' }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`ease-progressive-wrapper-viidhii19 ${className}`}>
      <img
        src={placeholder}
        alt={alt ? `${alt} placeholder` : ''}
        className="ease-placeholder-img-viidhii19"
        aria-hidden="true"
      />
      {src && (
        <img
          src={src}
          alt={alt}
          className={`ease-highres-img-viidhii19 ${isLoaded ? 'ease-fade-in' : ''}`}
          onLoad={() => setIsLoaded(true)}
        />
      )}
    </div>
  );
};

export default EaseImage;
