import React, { useState } from 'react';

/**
 * KanbanBoard Component
 * Renders a Kanban board with draggable task cards.
 * Uses standard HTML5 Drag & Drop API with React state hooks.
 * 
 * @param {Object} props
 * @param {Array} props.initialTasks - Initial tasks: { id, title, description, status, priority }
 * @param {Array} [props.columns] - List of columns: { id, title, color }
 * @param {string} [props.accentColor='#8b5cf6'] - Global component theme color
 * @param {Function} [props.onTaskMove] - Optional callback when task transitions status
 */
export default function KanbanBoard({
  initialTasks = [],
  columns = [
    { id: 'todo', title: 'To Do', color: '#f39c12' },
    { id: 'progress', title: 'In Progress', color: '#3498db' },
    { id: 'review', title: 'Under Review', color: '#9b59b6' },
    { id: 'done', title: 'Completed', color: '#2ecc71' }
  ],
  accentColor = '#8b5cf6',
  onTaskMove
}) {
  const [tasks, setTasks] = useState(initialTasks);
  const [draggedId, setDraggedId] = useState(null);
  const [dragOverCol, setDragOverCol] = useState(null);
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [targetCol, setTargetCol] = useState(columns[0]?.id || 'todo');

  const handleDragStart = (e, taskId) => {
    setDraggedId(taskId);
    e.dataTransfer.effectAllowed = 'move';
    // Add active dragging styles opacity inside a timeout so the ghost image is unaffected
    setTimeout(() => {
      const el = document.getElementById(`task-${taskId}`);
      if (el) el.classList.add('dragging');
    }, 0);
  };

  const handleDragEnd = (e, taskId) => {
    setDraggedId(null);
    setDragOverCol(null);
    const el = document.getElementById(`task-${taskId}`);
    if (el) el.classList.remove('dragging');
  };

  const handleDragOver = (e, colId) => {
    e.preventDefault();
    if (dragOverCol !== colId) {
      setDragOverCol(colId);
    }
  };

  const handleDrop = (e, colId) => {
    e.preventDefault();
    if (!draggedId) return;

    const updatedTasks = tasks.map(task => {
      if (task.id === draggedId) {
        if (onTaskMove) onTaskMove(task, colId);
        return { ...task, status: colId };
      }
      return task;
    });

    setTasks(updatedTasks);
    setDraggedId(null);
    setDragOverCol(null);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newTask = {
      id: Date.now().toString(),
      title: newTitle,
      description: newDesc,
      status: targetCol,
      priority: 'Medium'
    };

    setTasks([...tasks, newTask]);
    setNewTitle('');
    setNewDesc('');
  };

  const getPriorityColor = (priority) => {
    if (priority === 'High') return '#f43f5e';
    if (priority === 'Medium') return '#f59e0b';
    return '#10b981';
  };

  return (
    <div
      className="kanban-wrapper"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '1rem',
        boxSizing: 'border-box'
      }}
    >
      {/* Create Task Form Panel */}
      <form
        onSubmit={addTask}
        className="task-creator-form"
        style={{
          backgroundColor: '#0b0f19',
          border: '1px solid #1f2937',
          padding: '1.25rem',
          borderRadius: '12px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          alignItems: 'flex-end',
          textAlign: 'left'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', flex: '1 1 200px' }}>
          <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase' }}>Task Title</label>
          <input
            type="text"
            placeholder="Add task title..."
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            style={{
              padding: '0.6rem 0.8rem',
              borderRadius: '6px',
              border: '1px solid #374151',
              backgroundColor: '#1f2937',
              color: '#fff',
              outline: 'none'
            }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', flex: '2 1 300px' }}>
          <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase' }}>Description</label>
          <input
            type="text"
            placeholder="Add short task details..."
            value={newDesc}
            onChange={(e) => setNewDesc(e.target.value)}
            style={{
              padding: '0.6rem 0.8rem',
              borderRadius: '6px',
              border: '1px solid #374151',
              backgroundColor: '#1f2937',
              color: '#fff',
              outline: 'none'
            }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', flex: '1 1 150px' }}>
          <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase' }}>Column</label>
          <select
            value={targetCol}
            onChange={(e) => setTargetCol(e.target.value)}
            style={{
              padding: '0.6rem 0.8rem',
              borderRadius: '6px',
              border: '1px solid #374151',
              backgroundColor: '#1f2937',
              color: '#fff',
              outline: 'none',
              cursor: 'pointer'
            }}
          >
            {columns.map(col => (
              <option key={col.id} value={col.id}>{col.title}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          style={{
            padding: '0.6rem 1.5rem',
            borderRadius: '6px',
            backgroundColor: accentColor,
            color: '#fff',
            fontWeight: 700,
            border: 'none',
            cursor: 'pointer',
            height: '38px',
            transition: 'opacity 0.2s'
          }}
        >
          Add Task
        </button>
      </form>

      {/* Grid Columns container */}
      <div
        className="kanban-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.25rem',
          alignItems: 'start'
        }}
      >
        {columns.map(col => {
          const colTasks = tasks.filter(task => task.status === col.id);
          const isOver = dragOverCol === col.id;

          return (
            <div
              key={col.id}
              className="kanban-column"
              onDragOver={(e) => handleDragOver(e, col.id)}
              onDrop={(e) => handleDrop(e, col.id)}
              style={{
                backgroundColor: '#0b0f19',
                border: isOver ? `2px dashed ${col.color}` : '2px solid #1f2937',
                borderRadius: '10px',
                padding: '1rem',
                minHeight: '400px',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                transition: 'all 0.2s ease',
                boxSizing: 'border-box'
              }}
            >
              {/* Column Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid #1f2937' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: col.color }} />
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#f9fafb', margin: 0 }}>{col.title}</h3>
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#6b7280', padding: '0.1rem 0.4rem', borderRadius: '4px', backgroundColor: 'rgba(31, 41, 55, 0.5)' }}>
                  {colTasks.length}
                </span>
              </div>

              {/* Task Cards Stack */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', flexGrow: 1 }}>
                {colTasks.map(task => (
                  <div
                    key={task.id}
                    id={`task-${task.id}`}
                    draggable
                    onDragStart={(e) => handleDragStart(e, task.id)}
                    onDragEnd={(e) => handleDragEnd(e, task.id)}
                    className="task-card ease-hover-lift"
                    style={{
                      backgroundColor: '#1f2937',
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      padding: '0.9rem',
                      cursor: 'grab',
                      textAlign: 'left',
                      transition: 'transform 0.2s, opacity 0.2s'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                      <span
                        style={{
                          fontSize: '0.65rem',
                          fontWeight: 800,
                          color: '#fff',
                          backgroundColor: getPriorityColor(task.priority),
                          padding: '0.15rem 0.35rem',
                          borderRadius: '4px',
                          textTransform: 'uppercase'
                        }}
                      >
                        {task.priority}
                      </span>
                    </div>

                    <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f9fafb', margin: '0 0 0.25rem 0' }}>{task.title}</h4>
                    {task.description && (
                      <p style={{ fontSize: '0.75rem', color: '#9ca3af', margin: 0 }}>{task.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
