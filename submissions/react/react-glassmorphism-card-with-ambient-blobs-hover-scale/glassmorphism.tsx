import React from 'react';
import './style.css'; // Adjust path based on your folder structure

export default function GlassmorphismCard(): React.JSX.Element {
  return (
    <div className="glass-card">
      <span className="tag">Next-Gen UI</span>
      <h2 className="title">Glassmorphism</h2>
      <p className="description">
        A sleek, modern design style featuring a translucent, frosted-glass aesthetic with soft borders and vibrant background bleeds.
      </p>
      <button className="btn">Explore Features</button>
    </div>
  );
}
