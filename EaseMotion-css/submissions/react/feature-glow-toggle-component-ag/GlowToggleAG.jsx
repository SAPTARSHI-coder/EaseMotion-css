import React, { useState } from 'react';
import './style.css';

const GlowToggleAG = ({ defaultChecked = false, label = 'Enable notifications' }) => {
  const [isOn, setIsOn] = useState(defaultChecked);

  return (
    <label className="glow-toggle-ag" htmlFor="glow-toggle-input-ag">
      <input
        id="glow-toggle-input-ag"
        type="checkbox"
        className="glow-toggle-input-ag"
        checked={isOn}
        onChange={() => setIsOn(!isOn)}
        role="switch"
        aria-checked={isOn}
      />
      <span className={`glow-toggle-track-ag ${isOn ? 'is-on-ag' : ''}`}>
        <span className="glow-toggle-thumb-ag"></span>
      </span>
      <span className="glow-toggle-label-text-ag">{label}</span>
    </label>
  );
};

export default GlowToggleAG;
