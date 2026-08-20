import React, { useState } from 'react';

/**
 * Avatar Group with Hover Stack Spread Animation
 * 
 * @param {Array} avatars - Array of objects { id, name, imageUrl }
 * @param {Number} max - Maximum number of avatars to display before showing a "+X" overflow indicator
 * @param {String} size - Size variant ('sm', 'md', 'lg')
 */
const AvatarGroup = ({ avatars = [], max = 4, size = 'md' }) => {
  const [isHovered, setIsHovered] = useState(false);

  const visibleAvatars = avatars.slice(0, max);
  const overflowCount = avatars.length - max;
  const hasOverflow = overflowCount > 0;

  return (
    <div 
      className={`ease-avatar-group size-${size} ${isHovered ? 'is-hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      tabIndex={0}
      aria-label={`${avatars.length} users`}
    >
      {/* 
        We map through visible avatars. The key is their index.
        CSS will use standard sibling selectors and nth-child to push them apart on hover.
      */}
      {visibleAvatars.map((avatar, index) => {
        return (
          <div 
            key={avatar.id || index} 
            className="ease-avatar-wrapper"
            style={{ 
              zIndex: visibleAvatars.length - index, // Ensure left avatars stack on top of right ones
            }}
          >
            <img 
              src={avatar.imageUrl} 
              alt={avatar.name} 
              className="ease-avatar-image"
              onError={(e) => {
                // Fallback to initials if image fails to load
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback Initials (Hidden by default, shown via CSS/JS if no image) */}
            <div className="ease-avatar-fallback">
              {avatar.name ? avatar.name.charAt(0).toUpperCase() : '?'}
            </div>

            {/* Hover Tooltip */}
            <div className="ease-avatar-tooltip">
              {avatar.name}
            </div>
          </div>
        );
      })}

      {hasOverflow && (
        <div 
          className="ease-avatar-wrapper ease-avatar-overflow"
          style={{ zIndex: 0 }}
        >
          <span className="ease-avatar-fallback">+{overflowCount}</span>
        </div>
      )}
    </div>
  );
};

export default AvatarGroup;
