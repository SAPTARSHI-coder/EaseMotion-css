import React, { useState } from 'react';

/**
 * UserProfileCard
 * A modular React component that displays a user profile card with a 3D flip animation on hover or click.
 *
 * Props:
 * - name: string - User's name
 * - role: string - User's job title or role
 * - avatar: string - URL to the user's avatar image
 * - bio: string - Short biography displayed on the back
 * - clickToFlip: boolean - If true, flipping is triggered by click instead of hover
 */
export default function UserProfileCard({
  name = "John Doe",
  role = "Frontend Developer",
  avatar = "https://i.pravatar.cc/150?img=11",
  bio = "Passionate about creating beautiful and intuitive user interfaces. Love to experiment with CSS animations.",
  clickToFlip = false
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleInteraction = () => {
    if (clickToFlip) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div 
      className={`ease-flip-card-container ${clickToFlip ? 'clickable' : 'hoverable'} ${isFlipped && clickToFlip ? 'flipped' : ''}`}
      onClick={handleInteraction}
    >
      <div className="ease-flip-card-inner">
        {/* Front of the card */}
        <div className="ease-flip-card-front">
          <div className="ease-profile-header">
            <img src={avatar} alt={`${name}'s avatar`} className="ease-profile-avatar" />
          </div>
          <div className="ease-profile-body">
            <h3 className="ease-profile-name">{name}</h3>
            <p className="ease-profile-role">{role}</p>
          </div>
        </div>

        {/* Back of the card */}
        <div className="ease-flip-card-back">
          <div className="ease-profile-body">
            <h3 className="ease-profile-name">About {name.split(' ')[0]}</h3>
            <p className="ease-profile-bio">{bio}</p>
            <div className="ease-profile-actions">
              <button className="ease-btn">Message</button>
              <button className="ease-btn ease-btn-outline">Follow</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
