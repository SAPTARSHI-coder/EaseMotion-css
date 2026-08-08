import React, { useState } from 'react';

/**
 * ProfileCardFlip
 * A user profile card with a smooth 3D flip animation revealing additional
 * details on the back, powered by EaseMotion CSS.
 *
 * Props:
 * - name: string - User's display name
 * - role: string - User's role or job title
 * - avatar: string - URL for the profile avatar image
 * - bio: string - Short bio shown on the back of the card
 * - email: string - Contact email shown on the back
 * - stats: Array<{ label: string, value: string }> - Stats shown on the front
 */
export default function ProfileCardFlip({
  name = "Alex Johnson",
  role = "Frontend Developer",
  avatar = "https://i.pravatar.cc/150?img=33",
  bio = "Passionate about building beautiful, accessible interfaces and clean component systems.",
  email = "alex@example.com",
  stats = [
    { label: "Projects", value: "42" },
    { label: "Followers", value: "1.2k" },
    { label: "Stars", value: "389" },
  ],
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="ease-flip-scene"
      onClick={() => setFlipped((f) => !f)}
      title="Click to flip"
    >
      <div className={`ease-flip-card ${flipped ? "ease-flip-card--flipped" : ""}`}>
        {/* FRONT */}
        <div className="ease-flip-face ease-flip-face--front">
          <img src={avatar} alt={name} className="ease-profile-avatar" />
          <h2 className="ease-profile-name">{name}</h2>
          <p className="ease-profile-role">{role}</p>
          <div className="ease-profile-stats">
            {stats.map((s, i) => (
              <div key={i} className="ease-stat">
                <span className="ease-stat-value">{s.value}</span>
                <span className="ease-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
          <span className="ease-flip-hint">Click to see more →</span>
        </div>

        {/* BACK */}
        <div className="ease-flip-face ease-flip-face--back">
          <h3 className="ease-back-title">About</h3>
          <p className="ease-back-bio">{bio}</p>
          <a href={`mailto:${email}`} className="ease-back-email" onClick={(e) => e.stopPropagation()}>
            {email}
          </a>
          <span className="ease-flip-hint">← Click to go back</span>
        </div>
      </div>
    </div>
  );
}
