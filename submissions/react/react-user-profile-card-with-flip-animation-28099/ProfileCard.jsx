import React, { useState } from 'react';

/**
 * ProfileCard — A user profile card with a 3D flip animation revealing back content.
 *
 * @param {string} avatarUrl - URL to user avatar image
 * @param {string} name      - User's full name
 * @param {string} role      - User's role/job title
 * @param {string} bio       - User's bio text
 * @param {Array}  stats     - Array of { label, value } objects
 * @param {Array}  socials   - Array of { platform, link, icon } objects
 * @param {string} color     - Theme color for buttons and accents
 */
const ProfileCard = ({
  avatarUrl,
  name,
  role,
  bio,
  stats = [],
  socials = [],
  color = '#3b82f6',
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => setIsFlipped(prev => !prev);

  return (
    <div 
      className="ease-profile-card-scene"
      style={{ '--ease-pc-color': color }}
    >
      <div className={`ease-profile-card-inner ${isFlipped ? 'is-flipped' : ''}`}>
        
        {/* ── Front Face ── */}
        <div className="ease-profile-card-face ease-profile-card-front">
          <div className="ease-pc-header">
            <div className="ease-pc-avatar">
              <img src={avatarUrl} alt={`${name}'s avatar`} />
            </div>
          </div>
          
          <div className="ease-pc-body">
            <h2 className="ease-pc-name">{name}</h2>
            <span className="ease-pc-role">{role}</span>
            <p className="ease-pc-bio">{bio}</p>
            
            {stats.length > 0 && (
              <div className="ease-pc-stats">
                {stats.map((stat, i) => (
                  <div key={i} className="ease-pc-stat">
                    <span className="ease-pc-stat-val">{stat.value}</span>
                    <span className="ease-pc-stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="ease-pc-footer">
            <button className="ease-pc-btn-primary">Follow</button>
            <button className="ease-pc-btn-secondary" onClick={toggleFlip} aria-label="View more details">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
              </svg>
            </button>
          </div>
        </div>

        {/* ── Back Face ── */}
        <div className="ease-profile-card-face ease-profile-card-back">
          <div className="ease-pc-back-header">
            <button className="ease-pc-btn-back" onClick={toggleFlip} aria-label="Go back">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
            <h3 className="ease-pc-back-title">Connect</h3>
          </div>

          <div className="ease-pc-back-body">
            <div className="ease-pc-socials">
              {socials.map((social, i) => (
                <a 
                  key={i} 
                  href={social.link}
                  className="ease-pc-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ '--social-delay': `${i * 0.1}s` }}
                >
                  {social.icon}
                  <span className="ease-pc-social-name">{social.platform}</span>
                </a>
              ))}
            </div>
            
            <div className="ease-pc-contact">
              <button className="ease-pc-btn-primary ease-pc-btn-full">
                Send Message
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProfileCard;
