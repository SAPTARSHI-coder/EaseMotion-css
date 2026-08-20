import React, { useState } from 'react';
import './style.css';

const KanbanTaskCard = ({ task, onDragStart, onDragEnd, onDragEnter, onDrop }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragStart = (e) => {
    setIsDragging(true);
    // Standardize data transfer
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', task.id);
    
    // Slight delay so the visually dragged ghost element isn't transparent immediately
    setTimeout(() => {
      e.target.classList.add('is-dragging');
    }, 0);

    if (onDragStart) onDragStart(e, task);
  };

  const handleDragEnd = (e) => {
    setIsDragging(false);
    e.target.classList.remove('is-dragging');
    if (onDragEnd) onDragEnd(e, task);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragOver(true);
    if (onDragEnter) onDragEnter(e, task);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const droppedTaskId = e.dataTransfer.getData('text/plain');
    if (onDrop && droppedTaskId !== task.id) {
      onDrop(e, { sourceId: droppedTaskId, targetId: task.id });
    }
  };

  // Determine tag color class
  const getTagColor = (tag) => {
    const lowerTag = tag.toLowerCase();
    if (lowerTag.includes('bug')) return 'tag-danger';
    if (lowerTag.includes('feature')) return 'tag-success';
    if (lowerTag.includes('design')) return 'tag-warning';
    return 'tag-info';
  };

  return (
    <div
      className={`kanban-card ease-fade-in ease-hover-lift ${isDragging ? 'dragging' : ''} ${isDragOver ? 'drag-over' : ''}`}
      draggable="true"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="kanban-card-header">
        <div className="kanban-tags">
          {task.tags && task.tags.map((tag, idx) => (
            <span key={idx} className={`kanban-tag ${getTagColor(tag)}`}>{tag}</span>
          ))}
        </div>
        {task.priority && (
          <div className={`kanban-priority ${task.priority.toLowerCase()}`} title={`Priority: ${task.priority}`}>
            {task.priority === 'High' && '↑'}
            {task.priority === 'Medium' && '→'}
            {task.priority === 'Low' && '↓'}
          </div>
        )}
      </div>

      <h4 className="kanban-title">{task.title}</h4>
      
      {task.description && (
        <p className="kanban-desc">{task.description}</p>
      )}

      <div className="kanban-card-footer">
        <div className="kanban-id">#{task.id}</div>
        {task.assignee && (
          <div className="kanban-assignee" title={task.assignee.name}>
            {task.assignee.avatar ? (
              <img src={task.assignee.avatar} alt={task.assignee.name} />
            ) : (
              <span className="kanban-avatar-placeholder">
                {task.assignee.name.charAt(0)}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default KanbanTaskCard;
