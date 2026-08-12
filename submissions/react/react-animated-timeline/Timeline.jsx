import React from 'react';

const Timeline = ({ items = [] }) => {
  if (!items || items.length === 0) {
    return <div className="timeline-empty">No timeline events to display.</div>;
  }

  const getStatusClass = (status) => {
    switch (status?.toLowerCase()) {
      case 'completed': return 'status-completed';
      case 'in progress': return 'status-progress';
      case 'planned': return 'status-planned';
      default: return 'status-default';
    }
  };

  return (
    <div className="timeline-container">
      <div className="timeline-line"></div>
      <div className="timeline-list">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="timeline-item ease-fade-in ease-hover-lift"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className={`timeline-marker ${getStatusClass(item.status)}`}>
              {item.icon ? (
                <span className="timeline-icon">{item.icon}</span>
              ) : (
                <div className="timeline-dot-inner" />
              )}
            </div>

            <div className="timeline-content">
              <div className="timeline-header">
                <h3 className="timeline-title">{item.title}</h3>
                <span className="timeline-date">{item.date}</span>
              </div>
              
              {item.description && (
                <p className="timeline-description">{item.description}</p>
              )}

              {item.status && (
                <span className={`timeline-status-badge ${getStatusClass(item.status)}`}>
                  {item.status}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
