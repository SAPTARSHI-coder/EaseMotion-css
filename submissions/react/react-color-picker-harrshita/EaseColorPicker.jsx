import React, { useState } from 'react';
import './style.css';

const EaseColorPicker = ({ initialColor = '#3b82f6', onChange }) => {
  const [color, setColor] = useState(initialColor);
  const presets = ['#ef4444', '#f97316', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6'];

  const handleSelect = (c) => {
    setColor(c);
    if (onChange) onChange(c);
  };

  return (
    <div className="ease-color-picker">
      <div className="ease-color-preview" style={{ backgroundColor: color }}></div>
      <div className="ease-color-input-group">
        <input 
          type="text" 
          value={color} 
          onChange={(e) => handleSelect(e.target.value)}
          className="ease-color-input"
        />
      </div>
      <div className="ease-color-presets">
        {presets.map(p => (
          <button 
            key={p} 
            className="ease-preset-btn" 
            style={{ backgroundColor: p }}
            onClick={() => handleSelect(p)}
            aria-label={`Select color ${p}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default EaseColorPicker;
