import React, { useState, useRef } from 'react';

/**
 * KanbanTaskCard
 * An interactive task card component with drag-and-drop motion effects,
 * powered by EaseMotion CSS.
 *
 * Props:
 * - task: { id: string, title: string, tag: string, assignees: string[] }
 * - onDragStart: (id: string) => void
 */
export default function KanbanTaskCard({ task, onDragStart }) {
  const [isDragging, setIsDragging] = useState(false);
  const cardRef = useRef(null);

  const handleDragStart = (e) => {
    setIsDragging(true);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', task.id);
    
    // Slight delay so the original card gets styled as 'dragging'
    setTimeout(() => {
      if (cardRef.current) {
        cardRef.current.classList.add('ease-ktc-dragging');
      }
    }, 0);

    if (onDragStart) onDragStart(task.id);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    if (cardRef.current) {
      cardRef.current.classList.remove('ease-ktc-dragging');
    }
  };

  return (
    <div
      ref={cardRef}
      className={`ease-ktc-card ${isDragging ? 'ease-ktc-dragging' : ''}`}
      draggable="true"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="ease-ktc-header">
        <span className="ease-ktc-tag">{task.tag}</span>
        <span className="ease-ktc-drag-handle" title="Drag to move">
          ⋮⋮
        </span>
      </div>
      <h3 className="ease-ktc-title">{task.title}</h3>
      <div className="ease-ktc-footer">
        <div className="ease-ktc-assignees">
          {task.assignees.map((avatar, idx) => (
            <img key={idx} src={avatar} alt="Assignee" className="ease-ktc-avatar" />
          ))}
        </div>
      </div>
    </div>
  );
}
