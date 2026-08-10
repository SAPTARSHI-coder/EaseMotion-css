import React from 'react';
import './style.css';

const GlowIconAG = ({ icon: Icon, label, onClick }) => {
  return (
    <button 
      className="glow-icon-button-ag" 
      onClick={onClick}
      aria-label={label}
      title={label}
    >
      <div className="glow-icon-wrapper-ag" aria-hidden="true">
        <Icon className="glow-icon-svg-ag" />
      </div>
    </button>
  );
};

export default GlowIconAG;
