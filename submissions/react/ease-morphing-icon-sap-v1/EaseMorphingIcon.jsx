import React from 'react';
import './style.css';

export default function EaseMorphingIcon({ isToggled, onToggle, pathA, pathB }) {
  const defaultPathA = "M4 6h16M4 12h16M4 18h16";
  const defaultPathB = "M6 18L18 6M6 6l12 12";

  return (
    <button className="ease-morphing-btn" onClick={onToggle} aria-label="Toggle icon">
      <svg className="ease-morphing-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path
          className={`ease-morphing-path ${isToggled ? 'is-active' : ''}`}
          d={isToggled ? (pathB || defaultPathB) : (pathA || defaultPathA)}
        />
      </svg>
    </button>
  );
}
