import React, { useState } from 'react';
import './ColorPickerPalette.css';

/**
 * ColorPickerPalette Grid with Active Border Pulse
 * 
 * A modular React component displaying a grid of color swatches.
 * When a user selects a color, the active swatch triggers a continuous
 * CSS keyframe border pulse animation.
 * 
 * @param {Array<string>} colors - Array of hex/rgb/hsl color strings.
 * @param {string} initialColor - The color to be selected on mount.
 * @param {function} onChange - Callback function triggered when a color is selected.
 */
const ColorPickerPalette = ({ 
  colors = [
    '#ef4444', '#f97316', '#f59e0b', '#84cc16', 
    '#22c55e', '#14b8a6', '#0ea5e9', '#3b82f6', 
    '#6366f1', '#8b5cf6', '#d946ef', '#f43f5e'
  ], 
  initialColor = '#3b82f6',
  onChange = () => {} 
}) => {
  const [activeColor, setActiveColor] = useState(initialColor);

  const handleSelectColor = (color) => {
    setActiveColor(color);
    if (onChange) {
      onChange(color);
    }
  };

  return (
    <div className="ease-color-picker-container">
      <div 
        className="ease-color-picker-grid"
        role="radiogroup" 
        aria-label="Color Picker Palette"
      >
        {colors.map((color) => {
          const isActive = color === activeColor;
          return (
            <button
              key={color}
              type="button"
              role="radio"
              aria-checked={isActive}
              aria-label={`Select color ${color}`}
              className={`ease-color-swatch ${isActive ? 'ease-swatch-active' : ''}`}
              style={{ 
                backgroundColor: color,
                // We pass the raw color to a CSS variable so the pulse keyframe
                // can utilize the exact color for its box-shadow glow.
                '--swatch-glow-color': color 
              }}
              onClick={() => handleSelectColor(color)}
            >
              {isActive && (
                <svg 
                  className="ease-swatch-check" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              )}
            </button>
          );
        })}
      </div>
      <div className="ease-color-picker-footer">
        Selected: <span className="ease-selected-hex" style={{ color: activeColor }}>{activeColor}</span>
      </div>
    </div>
  );
};

export default ColorPickerPalette;
