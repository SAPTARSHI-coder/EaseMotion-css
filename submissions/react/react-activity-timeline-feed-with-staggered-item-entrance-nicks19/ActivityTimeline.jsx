import React, { useEffect, useState } from 'react';
import './style.css';

export default function ActivityTimeline({ 
  activities = [], 
  className = ''
}) {
  const [isMounted, setIsMounted] = useState(false);

  // Trigger animations after mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!activities || activities.length === 0) return null;

  return (
    <div className={`ease-timeline-container ${className}`}>
      {activities.map((activity, index) => {
        // We set the animation delay inline so we can support any number of items
        // The delay increments by 100ms per item.
        const animationDelay = `${index * 0.1}s`;

        return (
          <div 
            key={activity.id || index}
            className={`ease-timeline-item ${isMounted ? 'ease-timeline-item-animate' : ''}`}
            style={{ animationDelay }}
          >
            {/* The vertical line connecting items */}
            <div className="ease-timeline-track" aria-hidden="true" />
            
            {/* The dot or icon container */}
            <div className="ease-timeline-marker">
              {activity.icon ? (
                <span className="ease-timeline-icon">{activity.icon}</span>
              ) : (
                <span className="ease-timeline-dot" />
              )}
            </div>

            {/* The content body */}
            <div className="ease-timeline-content">
              <div className="ease-timeline-header">
                <h4 className="ease-timeline-title">{activity.title}</h4>
                <span className="ease-timeline-time">{activity.time}</span>
              </div>
              
              {activity.description && (
                <p className="ease-timeline-desc">{activity.description}</p>
              )}
              
              {/* Optional user info or avatar */}
              {activity.user && (
                <div className="ease-timeline-user">
                  {activity.user.avatar && (
                    <img src={activity.user.avatar} alt={activity.user.name} className="ease-timeline-avatar" />
                  )}
                  <span className="ease-timeline-username">{activity.user.name}</span>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
