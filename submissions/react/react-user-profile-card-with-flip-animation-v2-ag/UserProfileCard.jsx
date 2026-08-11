import React, { useState } from 'react';
import './style.css'; // Structural styles for 3D flip and layout

/**
 * User Profile Card with Flip Animation
 * A React component demonstrating 3D CSS flips and EaseMotion micro-interactions.
 */
const UserProfileCard = ({ 
  user = {
    name: 'Jane Doe',
    role: 'Senior UI Engineer',
    avatar: 'https://i.pravatar.cc/150?u=jane',
    bio: 'Passionate about creating fluid, motion-rich user experiences and pushing the boundaries of web animation.',
    stats: { projects: 42, followers: '12k', rating: 4.9 }
  }
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="profile-card-container ease-fade-in-up">
      <div 
        className={`profile-card-inner ${isFlipped ? 'is-flipped' : ''} ease-hover-lift`}
        onClick={() => setIsFlipped(!isFlipped)}
        role="button"
        tabIndex="0"
        aria-label="Toggle profile details"
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsFlipped(!isFlipped); }}
      >
        {/* Front of Card */}
        <div className="profile-card-front">
          <div className="avatar-wrapper ease-pulse-slow">
            <img src={user.avatar} alt={user.name} className="avatar-img" />
          </div>
          <h2 className="user-name">{user.name}</h2>
          <p className="user-role">{user.role}</p>
          <p className="flip-hint ease-bounce">Click to view details</p>
        </div>

        {/* Back of Card */}
        <div className="profile-card-back">
          <h3 className="back-title">About {user.name.split(' ')[0]}</h3>
          <p className="user-bio">{user.bio}</p>
          
          <div className="stats-grid">
            <div className="stat-box ease-slide-up" style={{ animationDelay: '0.1s' }}>
              <span className="stat-value">{user.stats.projects}</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-box ease-slide-up" style={{ animationDelay: '0.2s' }}>
              <span className="stat-value">{user.stats.followers}</span>
              <span className="stat-label">Followers</span>
            </div>
            <div className="stat-box ease-slide-up" style={{ animationDelay: '0.3s' }}>
              <span className="stat-value">{user.stats.rating}</span>
              <span className="stat-label">Rating</span>
            </div>
          </div>
          
          {/* Prevent the button click from triggering the card flip */}
          <button 
            className="contact-btn ease-hover-glow"
            onClick={(e) => e.stopPropagation()}
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
