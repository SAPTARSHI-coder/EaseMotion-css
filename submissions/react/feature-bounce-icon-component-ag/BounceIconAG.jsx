import React, { useState } from 'react';
import './style.css';

const BounceIconAG = ({ icon = '🚀', label = 'Launch', onClick }) => {
  const [isBouncing, setIsBouncing] = useState(false);

  const handleClick = () => {
    setIsBouncing(false);
    // Force reflow to restart animation
    setTimeout(() => {
      setIsBouncing(true);
      setTimeout(() => setIsBouncing(false), 800);
    }, 10);
    onClick && onClick();
  };

  return (
    <button
      className="bounce-icon-btn-ag"
      onClick={handleClick}
      aria-label={label}
    >
      <span
        className={`bounce-icon-ag ${isBouncing ? 'is-bouncing-ag' : ''}`}
        aria-hidden="true"
      >
        {icon}
      </span>
      <span className="bounce-icon-label-ag">{label}</span>
    </button>
  );
};

export default BounceIconAG;
