import React, { useState, useRef } from 'react';

/**
 * Kanban Board Task Card with Drag Motion
 * 
 * @param {Object} task - Task data object
 * @param {Function} onDragStart - Callback when drag begins
 * @param {Function} onDragEnd - Callback when drag ends
 */
const KanbanCard = ({ task, onDragStart, onDragEnd }) => {
  const [isDragging, setIsDragging] = useState(false);
  // Store the precise offset of where the user grabbed the card
  const dragOffset = useRef({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleDragStart = (e) => {
    // Only allow left-click drags
    if (e.button !== 0) return;

    // Optional: prevent default if you want to implement custom JS drag logic entirely, 
    // but here we use HTML5 native drag and drop combined with React state for styling
    setIsDragging(true);

    if (onDragStart) {
      onDragStart(task.id);
    }

    // Set a custom drag image (optional, but removes the ghosting effect)
    // We let the native ghost happen but style the original card to look "lifted"
    e.dataTransfer.effectAllowed = 'move';
    
    // Slight delay to allow the native drag image to capture the non-dragging state
    setTimeout(() => {
      if (cardRef.current) {
        cardRef.current.classList.add('is-dragging');
      }
    }, 0);
  };

  const handleDragEnd = (e) => {
    setIsDragging(false);
    
    if (cardRef.current) {
      cardRef.current.classList.remove('is-dragging');
    }

    if (onDragEnd) {
      onDragEnd(task.id);
    }
  };

  // Keyboard accessibility
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      // Emulate selection or opening the task
      console.log('Task selected via keyboard:', task.id);
    }
  };

  const priorityColors = {
    high: '#ef4444',
    medium: '#f59e0b',
    low: '#10b981'
  };

  return (
    <div
      ref={cardRef}
      className={`ease-kanban-card ${isDragging ? 'is-dragging' : ''}`}
      draggable="true"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onKeyDown={handleKeyDown}
      tabIndex="0"
      role="button"
      aria-grabbed={isDragging}
      aria-label={`Task: ${task.title}, Priority: ${task.priority}`}
    >
      <div className="ease-card-header">
        <span 
          className="ease-priority-badge" 
          style={{ backgroundColor: priorityColors[task.priority] || '#94a3b8' }}
        >
          {task.priority}
        </span>
        <span className="ease-task-id">{task.id}</span>
      </div>
      
      <h4 className="ease-task-title">{task.title}</h4>
      
      <div className="ease-card-footer">
        <div className="ease-avatar-group">
          {task.assignees && task.assignees.map((assignee, index) => (
            <div 
              key={index} 
              className="ease-avatar" 
              style={{ zIndex: task.assignees.length - index }}
              title={assignee}
            >
              {assignee.charAt(0).toUpperCase()}
            </div>
          ))}
        </div>
        
        {task.comments > 0 && (
          <div className="ease-comments">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>{task.comments}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default KanbanCard;
