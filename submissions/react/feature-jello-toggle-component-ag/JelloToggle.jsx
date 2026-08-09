import React, { useState } from 'react';
import './style.css';

/**
 * JelloToggle
 * 
 * A toggle switch component that plays a jello wobble animation
 * on the knob when toggled, creating a playful, bouncy effect.
 */
const JelloToggle = ({
  label,
  initialValue = false,
  onChange,
}) => {
  const [isOn, setIsOn] = useState(initialValue);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    const newValue = !isOn;
    setIsOn(newValue);
    setIsAnimating(true);
    if (onChange) onChange(newValue);
  };

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  return (
    <div className="jello-toggle-wrapper-ag">
      <button
        type="button"
        role="switch"
        aria-checked={isOn}
        aria-label={label || 'Toggle switch'}
        className={`jello-toggle-track-ag ${isOn ? 'is-on-ag' : ''}`}
        onClick={handleToggle}
      >
        <span
          className={`jello-toggle-knob-ag ${isAnimating ? 'jello-ag' : ''}`}
          onAnimationEnd={handleAnimationEnd}
          aria-hidden="true"
        />
      </button>
      {label && <span className="jello-toggle-label-ag">{label}</span>}
    </div>
  );
};

export default JelloToggle;
