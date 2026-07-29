import React, { useState } from 'react';

/**
 * User Profile Card with Flip Animation
 * 
 * @param {Object} user - User data object containing front and back profile info
 */
const ProfileCard = ({ user }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Handle keyboard interaction for accessibility
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div className="ease-profile-scene">
      <div 
        className={`ease-profile-card ${isFlipped ? 'is-flipped' : ''}`}
        onClick={() => setIsFlipped(!isFlipped)}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-pressed={isFlipped}
        aria-label="Toggle user profile details"
      >
        
        {/* --- FRONT OF CARD --- */}
        <div className="ease-profile-face ease-profile-front">
          <div className="ease-profile-cover" style={{ backgroundImage: `url(${user.coverImage})` }}>
            <button 
              className="ease-profile-flip-btn" 
              aria-label="View details"
              tabIndex={-1} // Prevent double tabbing since parent handles focus
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
            </button>
          </div>
          
          <div className="ease-profile-avatar-wrapper">
            <img src={user.avatar} alt={`${user.name} avatar`} className="ease-profile-avatar" />
            {user.isOnline && <span className="ease-profile-status-dot" title="Online"></span>}
          </div>

          <div className="ease-profile-info">
            <h2 className="ease-profile-name">{user.name}</h2>
            <p className="ease-profile-role">{user.role}</p>
            
            <div className="ease-profile-stats">
              <div className="ease-profile-stat">
                <span className="ease-profile-stat-value">{user.stats.followers}</span>
                <span className="ease-profile-stat-label">Followers</span>
              </div>
              <div className="ease-profile-stat">
                <span className="ease-profile-stat-value">{user.stats.following}</span>
                <span className="ease-profile-stat-label">Following</span>
              </div>
              <div className="ease-profile-stat">
                <span className="ease-profile-stat-value">{user.stats.projects}</span>
                <span className="ease-profile-stat-label">Projects</span>
              </div>
            </div>
            
            <button 
              className="ease-profile-action-btn"
              onClick={(e) => { e.stopPropagation(); alert('Followed!'); }}
            >
              Follow
            </button>
          </div>
        </div>

        {/* --- BACK OF CARD --- */}
        <div className="ease-profile-face ease-profile-back">
          <div className="ease-profile-back-header">
            <h3>About</h3>
            <button 
              className="ease-profile-flip-btn back-btn" 
              aria-label="Go back"
              tabIndex={-1}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
          </div>
          
          <div className="ease-profile-bio">
            <p>{user.bio}</p>
          </div>
          
          <div className="ease-profile-skills">
            <h4>Top Skills</h4>
            <div className="ease-profile-tags">
              {user.skills.map((skill, index) => (
                <span key={index} className="ease-profile-tag">{skill}</span>
              ))}
            </div>
          </div>
          
          <div className="ease-profile-socials">
            <button className="ease-social-btn" aria-label="Twitter" onClick={(e) => e.stopPropagation()}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </button>
            <button className="ease-social-btn" aria-label="GitHub" onClick={(e) => e.stopPropagation()}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </button>
            <button className="ease-social-btn" aria-label="Mail" onClick={(e) => e.stopPropagation()}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProfileCard;
