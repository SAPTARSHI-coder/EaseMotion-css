import React from 'react';
import { Sliders, Zap, MousePointer2 } from 'lucide-react';

function Controls({ config, setConfig }) {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setConfig((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleDurationChange = (e) => {
    setConfig((prev) => ({
      ...prev,
      duration: parseInt(e.target.value, 10),
    }));
  };

  return (
    <div className="controls-panel">
      <div className="control-group">
        <label className="control-label">
          <Zap size={16} /> Animation Type
        </label>
        <select className="control-select" name="type" value={config.type} onChange={handleChange}>
          <option value="fade-in">Fade In</option>
          <option value="zoom-in">Zoom In</option>
          <option value="slide-up">Slide Up</option>
          <option value="slide-down">Slide Down</option>
          <option value="shake">Shake</option>
          <option value="bounce-in">Bounce In</option>
        </select>
      </div>

      <div className="control-group">
        <label className="control-label">
          <Sliders size={16} /> Duration ({config.duration}ms)
        </label>
        <input
          type="range"
          name="duration"
          min="100"
          max="3000"
          step="100"
          value={config.duration}
          onChange={handleDurationChange}
          className="control-slider"
        />
      </div>

      <div className="control-group">
        <label className="control-label">Timing Curve</label>
        <select className="control-select" name="timingCurve" value={config.timingCurve} onChange={handleChange}>
          <option value="ease">Ease (Smooth)</option>
          <option value="linear">Linear (Constant)</option>
          <option value="elastic-bounce">Elastic Bounce</option>
        </select>
      </div>

      <div className="control-group">
        <label className="control-label">
          <MousePointer2 size={16} /> Hover Triggers
        </label>
        <div className="checkbox-group">
          <label className="checkbox-label">
            <input type="checkbox" name="hoverLift" checked={config.hoverLift} onChange={handleChange} />
            Lift
          </label>
          <label className="checkbox-label">
            <input type="checkbox" name="hoverScale" checked={config.hoverScale} onChange={handleChange} />
            Scale
          </label>
          <label className="checkbox-label">
            <input type="checkbox" name="hoverGlow" checked={config.hoverGlow} onChange={handleChange} />
            Glow
          </label>
        </div>
      </div>
    </div>
  );
}

export default Controls;
