import React, { useEffect, useState } from 'react';

const TimelineItem = ({ item, index }) => {
  return (
    <div 
      className="ease-timeline-item ease-staggered-entrance"
      style={{ '--stagger-delay': `${index * 0.15}s` }}
    >
      {/* The connecting line and dot indicator */}
      <div className="ease-timeline-indicator">
        <div className="ease-timeline-line"></div>
        <div className={`ease-timeline-dot ${item.type}`}>
          {/* Optional inner icon/element could go here */}
        </div>
      </div>

      {/* The content card */}
      <div className="ease-timeline-content ease-hover-lift">
        <div className="ease-timeline-header">
          <span className="ease-timeline-title">{item.title}</span>
          <span className="ease-timeline-time">{item.timestamp}</span>
        </div>
        <p className="ease-timeline-description">{item.description}</p>
        
        {/* Optional User / Meta info */}
        {item.user && (
          <div className="ease-timeline-meta">
            <div className="ease-avatar">{item.user.charAt(0)}</div>
            <span className="ease-user-name">{item.user}</span>
          </div>
        )}
      </div>
    </div>
  );
};

const ActivityTimeline = ({ activities = [] }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animations after mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`ease-activity-timeline ${isVisible ? 'is-visible' : ''}`}>
      {activities.length === 0 ? (
        <div className="ease-timeline-empty">No activity to display.</div>
      ) : (
        activities.map((activity, idx) => (
          <TimelineItem key={activity.id || idx} item={activity} index={idx} />
        ))
      )}
    </div>
  );
};

export default ActivityTimeline;
