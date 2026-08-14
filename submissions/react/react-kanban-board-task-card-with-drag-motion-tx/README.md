# React Kanban Board Task Card with Drag Motion

## Description
A modular, animated Kanban task card component built with React. It supports the native HTML5 Drag and Drop API and uses custom React state to apply smooth drag motions (slight rotation and scaling) when the card is picked up. It leverages standard EaseMotion CSS utility classes for lightweight, 60fps hover and entrance animations.

## Component Props

| Prop | Type | Description |
|------|------|-------------|
| `task` | `object` | The task data object. Format: `{ id, title, description, tags: [], priority, assignee: { name, avatar } }`. |
| `onDragStart` | `function` | Callback fired when dragging begins. Signature: `(e, task) => void`. |
| `onDragEnd` | `function` | Callback fired when dragging ends. Signature: `(e, task) => void`. |
| `onDragEnter` | `function` | Callback fired when another draggable item enters this card's drop zone. |
| `onDrop` | `function` | Callback fired when an item is dropped onto this card. Signature: `(e, { sourceId, targetId }) => void`. |

## Usage Example

```jsx
import React, { useState } from 'react';
import KanbanTaskCard from './KanbanTaskCard';
import 'easemotion.css'; // Ensure EaseMotion core CSS is imported globally

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 'TASK-101',
      title: 'Implement Dark Mode',
      description: 'Add standard media query prefers-color-scheme logic to all base components.',
      tags: ['Feature', 'UI'],
      priority: 'High',
      assignee: { name: 'Saptarshi' }
    },
    {
      id: 'TASK-102',
      title: 'Fix Navbar Bug',
      description: 'Menu disappears on mobile devices when clicking the brand icon.',
      tags: ['Bug', 'Critical'],
      priority: 'High',
      assignee: { name: 'Alice', avatar: 'https://via.placeholder.com/24' }
    }
  ]);

  const handleDrop = (e, { sourceId, targetId }) => {
    console.log(`Dropped task ${sourceId} onto task ${targetId}`);
    // Handle list re-ordering logic here
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '350px', background: '#f8fafc', minHeight: '100vh' }}>
      <h2 style={{ marginBottom: '1.5rem', fontFamily: 'sans-serif' }}>To Do</h2>
      {tasks.map(task => (
        <KanbanTaskCard 
          key={task.id} 
          task={task}
          onDrop={handleDrop}
        />
      ))}
    </div>
  );
};

export default App;
```

## Features & EaseMotion Integration
- **Drag Motion Custom Styles**: The `.is-dragging` class triggers a smooth `transform: scale(0.95) rotate(2deg)` paired with an elevated `box-shadow` when the user drags the card, giving a tactile 'lift' sensation.
- **`ease-fade-in`**: Ensures that the card smoothly materializes into the column when initially rendered or moved.
- **`ease-hover-lift`**: Provides continuous micro-interaction feedback when hovering over the card without clicking.
- **HTML5 Drag & Drop**: Relies purely on the native browser `draggable="true"` API and handles `onDragStart`, `onDragEnter`, and `onDrop` without heavy external libraries like `react-beautiful-dnd` or `dnd-kit`.
- **Zero External Dependencies**: Powered entirely by standard React hooks and standard EaseMotion CSS.
