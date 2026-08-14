import React, { useState } from 'react';
import './style.css';

export default function UserProfileCard({
  user,
  onFollow,
  onMessage,
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  if (!user) return null;

  return (
    <div className="ease-flip-container">
      <div className={`ease-flip-card ${isFlipped ? 'ease-flipped' : ''}`}>
        
        {/* Front of the Card */}
        <div className="ease-flip-card-front ease-fade-in">
          <div className="ease-profile-header">
            <img 
              src={user.avatar || 'https://via.placeholder.com/100'} 
              alt={`${user.name}'s avatar`} 
              className="ease-profile-avatar ease-pulse-hover"
            />
          </div>
          <div className="ease-profile-info">
            <h2 className="ease-profile-name">{user.name}</h2>
            <p className="ease-profile-role">{user.role}</p>
            <p className="ease-profile-location">
              <svg viewBox="0 0 24 24" width="14" height="14" className="ease-icon">
                <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 21s-8-4.5-8-11.8A8 8 0 0112 1.2a8 8 0 018 8c0 7.3-8 11.8-8 11.8z" />
                <circle cx="12" cy="9.2" r="2.5" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
              {user.location}
            </p>
          </div>
          <div className="ease-profile-actions">
            <button 
              className="ease-btn ease-btn-primary ease-squish-button" 
              onClick={(e) => { e.stopPropagation(); onFollow && onFollow(user); }}
            >
              Follow
            </button>
            <button 
              className="ease-btn ease-btn-secondary ease-squish-button"
              onClick={() => setIsFlipped(true)}
            >
              View Profile
            </button>
          </div>
        </div>

        {/* Back of the Card */}
        <div className="ease-flip-card-back">
          <button 
            className="ease-btn-back ease-squish-button" 
            onClick={() => setIsFlipped(false)}
            aria-label="Go back"
          >
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          
          <div className="ease-profile-bio">
            <h3>About {user.name.split(' ')[0]}</h3>
            <p>{user.bio}</p>
          </div>
          
          <div className="ease-profile-stats">
            <div className="ease-stat">
              <span className="ease-stat-value">{user.stats?.posts || 0}</span>
              <span className="ease-stat-label">Posts</span>
            </div>
            <div className="ease-stat">
              <span className="ease-stat-value">{user.stats?.followers || 0}</span>
              <span className="ease-stat-label">Followers</span>
            </div>
            <div className="ease-stat">
              <span className="ease-stat-value">{user.stats?.following || 0}</span>
              <span className="ease-stat-label">Following</span>
            </div>
          </div>
          
          <div className="ease-profile-socials">
            <button 
              className="ease-btn ease-btn-outline ease-squish-button"
              onClick={(e) => { e.stopPropagation(); onMessage && onMessage(user); }}
            >
              Message
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
