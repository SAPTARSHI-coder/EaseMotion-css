import React, { useState } from 'react';

/**
 * KanbanTaskCard
 * A modular Kanban task card that scales up and tilts smoothly during drag,
 * using EaseMotion CSS for all animation effects.
 *
 * Props:
 * - id: string - Unique task identifier.
 * - title: string - Task title.
 * - description: string - Short task description.
 * - tags: Array<{ label: string, color: string }> - Pill tags shown on the card.
 * - avatar: string - Assignee avatar URL.
 * - priority: "low" | "medium" | "high" - Priority level shown as a colored indicator.
 */
export default function KanbanTaskCard({
  id,
  title = "New Task",
  description = "Task description goes here.",
  tags = [],
  avatar = "https://i.pravatar.cc/150?img=12",
  priority = "medium",
}) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (e) => {
    setIsDragging(true);
    e.dataTransfer.setData("text/plain", id);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragEnd = () => setIsDragging(false);

  const priorityMap = {
    low:    { label: "Low",    color: "#22c55e" },
    medium: { label: "Medium", color: "#f59e0b" },
    high:   { label: "High",   color: "#ef4444" },
  };
  const p = priorityMap[priority] || priorityMap.medium;

  return (
    <div
      className={`ease-kb-card ${isDragging ? "ease-kb-card--dragging" : ""}`}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="ease-kb-priority" style={{ backgroundColor: p.color }} title={`Priority: ${p.label}`} />

      <div className="ease-kb-tags">
        {tags.map((tag, i) => (
          <span key={i} className="ease-kb-tag" style={{ backgroundColor: tag.color }}>
            {tag.label}
          </span>
        ))}
      </div>

      <h3 className="ease-kb-title">{title}</h3>
      <p className="ease-kb-desc">{description}</p>

      <div className="ease-kb-footer">
        <div className="ease-kb-meta">
          <span className="ease-kb-icon-group">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            2
          </span>
          <span className="ease-kb-icon-group">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 11 12 14 22 4"></polyline>
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
            </svg>
            3
          </span>
        </div>
        <img src={avatar} alt="Assignee" className="ease-kb-avatar" />
      </div>
    </div>
  );
}
