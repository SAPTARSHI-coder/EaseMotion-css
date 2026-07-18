import React from 'react';
import './style.css';

const NeumorphicCard = ({ title, description, tags }) => {
  return (
    <div className="nm-card">
      <div className="nm-card-image-placeholder">
        <span className="nm-icon">✦</span>
      </div>
      <div className="nm-card-content">
        <span className="nm-card-tag">{tags || 'Design'}</span>
        <h3 className="nm-card-title">{title || 'Neumorphism UI'}</h3>
        <p className="nm-card-text">
          {description || 'A beautiful soft UI card component featuring clean dual-shadow extrusion effects.'}
        </p>
        <button className="nm-btn">Explore</button>
      </div>
    </div>
  );
};

export default NeumorphicCard;