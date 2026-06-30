import React from 'react';
import './style.css';

export default function ProfileFlipCard({ name = 'Jane Doe', role = 'Developer', avatar = '', bio = 'Passionate about building great experiences.' }) {
  return (
    <div className="ease-flip-card">
      <div className="ease-flip-inner">
        <div className="ease-flip-front">
          <div className="ease-flip-avatar">{avatar ? <img src={avatar} alt={name} /> : name.charAt(0)}</div>
          <h3>{name}</h3>
          <p>{role}</p>
          <span className="ease-flip-hint">Hover to flip</span>
        </div>
        <div className="ease-flip-back">
          <h3>{name}</h3>
          <p>{bio}</p>
          <div className="ease-flip-social">
            <span>🐦</span><span>💼</span><span>📧</span>
          </div>
        </div>
      </div>
    </div>
  );
}
