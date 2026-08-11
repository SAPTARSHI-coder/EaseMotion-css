import React, { useState } from 'react';

/**
 * KanbanTaskCard
 * A modular Kanban task card component that tilts and slightly scales up during drag, 
 * utilizing EaseMotion CSS for smooth interactive drag motion feedback.
 *
 * Props:
 * - id: string - unique identifier for the task
 * - title: string - the task title
 * - description: string - brief description of the task
 * - tags: Array<{ label: string, color: string }> - labels for the task
 * - avatar: string - URL for the assignee avatar
 */
export default function KanbanTaskCard({
  id,
  title = "New Task",
  description = "Task description goes here...",
  tags = [],
  avatar = "https://i.pravatar.cc/150?img=11"
}) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (e) => {
    setIsDragging(true);
    // Required for Firefox to enable dragging
    e.dataTransfer.setData('text/plain', id);
    // Set a custom drag image or effect if necessary
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div 
      className={`ease-kanban-card ${isDragging ? 'ease-card-dragging' : ''}`}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="ease-card-tags">
        {tags.map((tag, idx) => (
          <span 
            key={idx} 
            className="ease-tag" 
            style={{ backgroundColor: tag.color || '#e5e7eb' }}
          >
            {tag.label}
          </span>
        ))}
      </div>
      <h3 className="ease-card-title">{title}</h3>
      <p className="ease-card-desc">{description}</p>
      
      <div className="ease-card-footer">
        <div className="ease-card-icons">
          <span className="ease-icon-group">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span className="ease-icon-text">3</span>
          </span>
          <span className="ease-icon-group">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13.293 7.293l-8 8A1 1 0 0 0 5.293 16h6l8-8a1 1 0 0 0 0-1.414l-6-6a1 1 0 0 0-1.414 0l-1.586 1.586A1 1 0 0 0 10.293 6.707z"></path>
            </svg>
            <span className="ease-icon-text">2</span>
          </span>
        </div>
        <img src={avatar} alt="Assignee" className="ease-card-avatar" />
      </div>
    </div>
  );
}
