import React, { useState } from 'react';
import './style.css';

const PulseImageAG = ({ src, alt, isActive, onToggle }) => {
  return (
    <div 
      className={`pulse-image-wrapper-ag ${isActive ? 'is-active-ag' : ''}`}
      onClick={onToggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onToggle(); }}
      aria-pressed={isActive}
    >
      <img src={src} alt={alt} className="pulse-image-ag" />
    </div>
  );
};

export default PulseImageAG;
