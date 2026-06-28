import React, { useState } from 'react';
import { Animate } from 'easemotion-react';

export default function KanbanBoard() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Fix navigation bug', status: 'todo' },
    { id: 2, text: 'Design hero section', status: 'todo' },
    { id: 3, text: 'Write tests', status: 'done' }
  ]);
  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (task) => setDraggedItem(task);
  
  const handleDrop = (status) => {
    if (draggedItem) {
      setTasks(tasks.map(t => t.id === draggedItem.id ? { ...t, status } : t));
      setDraggedItem(null);
    }
  };

  const columns = [
    { id: 'todo', title: 'To Do' },
    { id: 'done', title: 'Done' }
  ];

  return (
    <div className="flex gap-6 p-8">
      {columns.map(col => (
        <div 
          key={col.id} 
          className="bg-gray-100 p-4 rounded-lg w-80 min-h-[400px]"
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => handleDrop(col.id)}
        >
          <h3 className="font-bold mb-4 text-gray-700">{col.title}</h3>
          <div className="flex flex-col gap-3">
            {tasks.filter(t => t.status === col.id).map(task => (
              <Animate 
                key={task.id}
                type="zoom-in"
                duration="fast"
                hover="lift"
                tag="div"
                draggable
                onDragStart={() => handleDragStart(task)}
                className="bg-white p-4 rounded shadow cursor-grab active:cursor-grabbing border-l-4 border-blue-500"
              >
                {task.text}
              </Animate>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
