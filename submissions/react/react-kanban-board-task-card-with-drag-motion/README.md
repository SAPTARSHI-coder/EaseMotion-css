# Kanban Board Task Card with Drag Motion

A modular, copy-paste ready React component that renders a Kanban board with draggable task cards. It implements the HTML5 Drag and Drop API integrated with React state hook lifecycle trackers, supporting card move listeners, custom column colors, and active drag over visual cues.

---

## 📦 Installation

This component has zero external dependencies outside React and standard EaseMotion CSS libraries.

1. Copy [KanbanBoard.jsx](./KanbanBoard.jsx) into your React component directory.
2. Link the core EaseMotion CSS stylesheet inside your application entry file (e.g. `App.js` or `main.js`):

```javascript
import 'ease-motion-css/easemotion.css';
```

---

## 🚀 Usage Example

```jsx
import React from 'react';
import KanbanBoard from './KanbanBoard';

export default function App() {
  const initialTasksList = [
    {
      id: 'task-1',
      title: 'Build Landing Page',
      description: 'Implement layout section structures and header links styling',
      status: 'todo',
      priority: 'High'
    },
    {
      id: 'task-2',
      title: 'Refactor Auth Hooks',
      description: 'Clean up user registration callback functions',
      status: 'progress',
      priority: 'Medium'
    },
    {
      id: 'task-3',
      title: 'Setup Database Schemas',
      description: 'Configure MongoDB collections indexes definitions',
      status: 'review',
      priority: 'Low'
    }
  ];

  const columnsList = [
    { id: 'todo', title: 'To Do', color: '#f59e0b' },
    { id: 'progress', title: 'In Progress', color: '#3b82f6' },
    { id: 'review', title: 'Under Review', color: '#8b5cf6' },
    { id: 'done', title: 'Completed', color: '#10b981' }
  ];

  const handleTaskMove = (task, newStatus) => {
    console.log(`Task "${task.title}" shifted status to "${newStatus}"`);
  };

  return (
    <div className="container" style={{ padding: '3rem', backgroundColor: '#030712', minHeight: '100vh', color: '#fff', textAlign: 'center' }}>
      <h2>Project Kanban Board</h2>
      
      <KanbanBoard 
        initialTasks={initialTasksList} 
        columns={columnsList}
        accentColor="#8b5cf6"
        onTaskMove={handleTaskMove}
      />
    </div>
  );
}
```

---

## ⚙️ Props Specifications

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `initialTasks` | `Array` | `[]` | Array of task items: `[{ id, title, description, status, priority }]`. |
| `columns` | `Array` | *Columns default list* | Columns configurations: `[{ id, title, color }]`. |
| `accentColor` | `string` | `'#8b5cf6'` | Theme accent color used for card additions and highlight states. |
| `onTaskMove` | `Function` | *Optional* | Callback triggered when a card drops into a new column status zone. |

---

## 🎛️ Drag and Drop Flow lifecycle

1. **dragstart**: Sets active card ID to local state and highlights ghost image using minor styling filters.
2. **dragover**: Prevents default browser handlers and assigns highlighted borders styles to target column card stacks.
3. **drop**: Updates task array status fields and triggers state redraws and callbacks.
4. **dragend**: Resets highlighted states and drag references.
