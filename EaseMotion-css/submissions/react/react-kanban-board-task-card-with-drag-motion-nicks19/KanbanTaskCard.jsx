import React, { useState } from 'react';
import './style.css';

export default function KanbanTaskCard({
  task,
  onDragStart,
  onDragEnd,
  className = ''
}) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (e) => {
    setIsDragging(true);
    
    // Setting drag data is required for Firefox to actually drag
    e.dataTransfer.setData('text/plain', task.id);
    e.dataTransfer.effectAllowed = 'move';
    
    // Create a drag image if desired, or let the browser handle it.
    // In this case, the browser handles it, and we apply our CSS class to the original element
    // to give it a "ghost" appearance while dragging.

    // A small delay ensures the class is added *after* the browser captures the drag image,
    // so the dragged image looks normal, but the element left behind looks ghosted.
    setTimeout(() => {
      if (onDragStart) onDragStart(e, task);
    }, 0);
  };

  const handleDragEnd = (e) => {
    setIsDragging(false);
    if (onDragEnd) onDragEnd(e, task);
  };

  // Determine priority color
  const getPriorityColor = (priority) => {
    switch (priority?.toLowerCase()) {
      case 'high': return '#ef4444';
      case 'medium': return '#f59e0b';
      case 'low': return '#10b981';
      default: return '#6b7280';
    }
  };

  return (
    <div
      className={`ease-kanban-card ${isDragging ? 'ease-card-dragging' : ''} ${className}`}
      draggable="true"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      aria-grabbed={isDragging}
    >
      <div className="ease-card-header">
        <span className="ease-task-id">{task.id}</span>
        {task.priority && (
          <span 
            className="ease-task-priority"
            style={{ backgroundColor: getPriorityColor(task.priority) }}
          >
            {task.priority}
          </span>
        )}
      </div>
      
      <h3 className="ease-task-title">{task.title}</h3>
      
      {task.description && (
        <p className="ease-task-desc">{task.description}</p>
      )}

      <div className="ease-card-footer">
        <div className="ease-task-tags">
          {task.tags && task.tags.map((tag, index) => (
            <span key={index} className="ease-tag">{tag}</span>
          ))}
        </div>
        
        {task.assignee && (
          <div className="ease-task-assignee" title={task.assignee.name}>
            {task.assignee.avatar ? (
              <img src={task.assignee.avatar} alt={task.assignee.name} />
            ) : (
              <div className="ease-avatar-fallback">
                {task.assignee.name.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
