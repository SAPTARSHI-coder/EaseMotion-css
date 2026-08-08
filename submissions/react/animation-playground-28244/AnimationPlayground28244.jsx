import React, { useState } from 'react';
import './style.css';

export default function AnimationPlayground28244() {
  const [animation, setAnimation] = useState('ease-fade-in');
  const [duration, setDuration] = useState(1000);
  const [curve, setCurve] = useState('cubic-bezier(0.25, 1, 0.5, 1)');
  const [hoverTrigger, setHoverTrigger] = useState('ease-hover-lift');
  const [copied, setCopied] = useState(false);

  const playgroundStyles = {
    '--ease-duration': `${duration}ms`,
    '--ease-timing-curve': curve,
  };

  // Structured multi-line template for crisp syntax presentation
  const generatedCode = `<div 
  className="ease-core ${animation} ${hoverTrigger}"
  style={{
    '--ease-duration': '${duration}ms',
    '--ease-timing-curve': '${curve}'
  }}
>
  <div className="core-node" />
</div>`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="playground-dashboard">
      <div className="playground-glass-grid">
        
        {/* --- LEFT PANEL: CONTROLS --- */}
        <div className="control-panel-pane">
          <h2 className="pane-title">Configuration Terminal</h2>
          
          <div className="control-group">
            <label>Base Animation</label>
            <select value={animation} onChange={(e) => setAnimation(e.target.value)}>
              <option value="ease-fade-in">Fade In</option>
              <option value="ease-zoom-in">Zoom In</option>
              <option value="ease-bounce">Orbital Bounce</option>
              <option value="ease-slide-up">Slide Axis Up</option>
            </select>
          </div>

          <div className="control-group">
            <div className="label-val-row">
              <label>Duration</label>
              <span className="value-badge">{duration}ms</span>
            </div>
            <input 
              type="range" min="100" max="3000" step="50"
              value={duration} onChange={(e) => setDuration(Number(e.target.value))} 
            />
          </div>

          <div className="control-group">
            <label>Timing Function (Curve)</label>
            <select value={curve} onChange={(e) => setCurve(e.target.value)}>
              <option value="linear">Linear</option>
              <option value="ease">Ease</option>
              <option value="cubic-bezier(0.25, 1, 0.5, 1)">Smooth (EaseOut)</option>
              <option value="cubic-bezier(0.68, -0.6, 0.32, 1.6)">Elastic Bounce</option>
            </select>
          </div>

          <div className="control-group">
            <label>Hover Modifier</label>
            <select value={hoverTrigger} onChange={(e) => setHoverTrigger(e.target.value)}>
              <option value="ease-hover-lift">Hover Lift</option>
              <option value="ease-hover-scale">Hover Scale</option>
              <option value="ease-hover-glow">Plasma Glow</option>
              <option value="">None</option>
            </select>
          </div>
        </div>

        {/* --- CENTER PANEL: INTERACTIVE CANVAS --- */}
        <div className="canvas-pane">
          <div className="canvas-header">
            <span className="indicator-dot"></span> LIVE VIEWPORT
          </div>
          <div className="preview-viewport">
            <div 
              key={`${animation}-${hoverTrigger}-${duration}-${curve}`} 
              className={`preview-subject ${animation} ${hoverTrigger}`}
              style={playgroundStyles}
            >
              <div className="subject-internal-core"></div>
            </div>
          </div>
        </div>

        {/* --- RIGHT PANEL: CODE GENERATOR --- */}
        <div className="code-panel-pane">
          <div className="code-header-row">
            <h3 className="pane-title">Generated Code</h3>
            <button className={`copy-btn ${copied ? 'copied' : ''}`} onClick={copyToClipboard}>
              {copied ? 'Copied!' : 'Copy JSX'}
            </button>
          </div>
          <div className="code-output-container">
            <pre><code>{generatedCode}</code></pre>
          </div>
        </div>

      </div>
    </div>
  );
}