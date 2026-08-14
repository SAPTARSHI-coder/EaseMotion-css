import React from 'react';

/**
 * Avatar Group with Hover Stack Spread Animation
 * 
 * @param {Array} users - Array of user objects { id, name, avatar }
 * @param {number} max - Maximum number of avatars to display before showing a "+X" overflow indicator
 * @param {string} size - Size of the avatars ('sm', 'md', 'lg')
 */
const AvatarGroup = ({ 
  users = [], 
  max = 4,
  size = 'md'
}) => {
  if (!users || users.length === 0) return null;

  // Determine how many users to show based on max limit
  const visibleUsers = users.slice(0, max);
  const overflowCount = users.length - max;

  // Render a single avatar
  const renderAvatar = (user, index, isOverflow = false) => {
    // Generate a fallback color based on the name length for users without avatars
    const fallbackColors = ['#f43f5e', '#8b5cf6', '#3b82f6', '#10b981', '#f59e0b'];
    const colorIndex = user.name ? user.name.length % fallbackColors.length : 0;
    const bgColor = fallbackColors[colorIndex];
    
    // Extract initials for fallback
    const initials = user.name 
      ? user.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() 
      : '?';

    return (
      <div 
        key={user.id || `avatar-${index}`} 
        className="ease-avatar-item"
        style={{ zIndex: 100 - index }} // Stack them so the first is on top
      >
        <div 
          className="ease-avatar-circle"
          style={{ backgroundColor: user.avatar ? 'transparent' : bgColor }}
        >
          {user.avatar ? (
            <img src={user.avatar} alt={user.name} className="ease-avatar-img" />
          ) : (
            <span className="ease-avatar-initials">{initials}</span>
          )}
        </div>
        
        {/* Tooltip on hover */}
        {!isOverflow && (
          <div className="ease-avatar-tooltip">
            {user.name}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={`ease-avatar-group ease-size-${size}`}>
      {visibleUsers.map((user, index) => renderAvatar(user, index))}
      
      {/* Overflow Indicator */}
      {overflowCount > 0 && (
        <div 
          className="ease-avatar-item ease-avatar-overflow"
          style={{ zIndex: 100 - visibleUsers.length }}
        >
          <div className="ease-avatar-circle">
            <span className="ease-avatar-initials">+{overflowCount}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AvatarGroup;
