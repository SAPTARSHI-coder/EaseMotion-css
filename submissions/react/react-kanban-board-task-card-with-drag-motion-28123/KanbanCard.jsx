import React, { useState, useRef } from 'react';

// ─── Priority badge config ───────────────────────────────────────────────────
const PRIORITY = {
  high:   { label: 'High',   color: '#ef4444' },
  medium: { label: 'Medium', color: '#f59e0b' },
  low:    { label: 'Low',    color: '#10b981' },
};

// ─── Tag pill ────────────────────────────────────────────────────────────────
const Tag = ({ label }) => (
  <span className="ease-kb-tag">{label}</span>
);

// ─── Avatar stack ────────────────────────────────────────────────────────────
const Avatar = ({ name, color }) => {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();
  return (
    <div className="ease-kb-avatar" style={{ backgroundColor: color }} title={name}>
      {initials}
    </div>
  );
};

/**
 * KanbanCard — a single drag-able Kanban task card
 *
 * @param {string}   id           - Unique card identifier
 * @param {string}   title        - Task title
 * @param {string}   description  - Short task description
 * @param {string}   priority     - 'high' | 'medium' | 'low'
 * @param {string[]} tags         - Array of tag strings
 * @param {Array}    assignees    - Array of { name, color } objects
 * @param {string}   dueDate      - Due date string
 * @param {number}   progress     - 0–100 completion percentage
 * @param {function} onDragStart  - Called with card id when drag begins
 */
const KanbanCard = ({
  id,
  title = 'Untitled Task',
  description = '',
  priority = 'medium',
  tags = [],
  assignees = [],
  dueDate = '',
  progress = 0,
  onDragStart,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered]   = useState(false);
  const cardRef = useRef(null);

  // ── HTML5 Drag API handlers ──────────────────────────────────────────────
  const handleDragStart = (e) => {
    setIsDragging(true);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', id);
    // Ghost image: slight offset so cursor sits top-left of card
    if (cardRef.current) {
      e.dataTransfer.setDragImage(cardRef.current, 16, 16);
    }
    if (onDragStart) onDragStart(id);
  };

  const handleDragEnd = () => setIsDragging(false);

  const cfg = PRIORITY[priority] || PRIORITY.medium;

  return (
    <div
      ref={cardRef}
      className={`ease-kb-card ${isDragging ? 'is-dragging' : ''} ${isHovered ? 'is-hovered' : ''}`}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-grabbed={isDragging}
      role="listitem"
    >
      {/* Drag handle indicator */}
      <div className="ease-kb-drag-handle" aria-hidden="true">
        <span /><span /><span />
      </div>

      {/* Header row: priority badge + due date */}
      <div className="ease-kb-card-header">
        <span
          className="ease-kb-priority"
          style={{ backgroundColor: `${cfg.color}20`, color: cfg.color, borderColor: `${cfg.color}40` }}
        >
          {cfg.label}
        </span>
        {dueDate && (
          <span className="ease-kb-due-date">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            {dueDate}
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="ease-kb-card-title">{title}</h3>

      {/* Description */}
      {description && <p className="ease-kb-card-desc">{description}</p>}

      {/* Tags */}
      {tags.length > 0 && (
        <div className="ease-kb-tags">
          {tags.map((tag) => <Tag key={tag} label={tag} />)}
        </div>
      )}

      {/* Progress bar */}
      {progress > 0 && (
        <div className="ease-kb-progress-wrap">
          <div className="ease-kb-progress-bar">
            <div
              className="ease-kb-progress-fill"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <span className="ease-kb-progress-label">{progress}%</span>
        </div>
      )}

      {/* Footer: avatars */}
      {assignees.length > 0 && (
        <div className="ease-kb-card-footer">
          <div className="ease-kb-avatars">
            {assignees.map((a) => (
              <Avatar key={a.name} name={a.name} color={a.color} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default KanbanCard;
