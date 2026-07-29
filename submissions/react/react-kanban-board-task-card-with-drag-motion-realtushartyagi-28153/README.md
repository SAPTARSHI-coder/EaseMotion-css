# React Kanban Board Task Card with Drag Motion

A modular, copy-paste ready React component representing a draggable task card for a Kanban board, featuring interactive hover and drag CSS motion effects powered by **EaseMotion CSS**.

## Files
- `KanbanTaskCard.jsx` – Core React component implementing HTML5 drag-and-drop events and managing the dragging state.
- `style.css` – EaseMotion CSS styles: `cubic-bezier` hover lift, shadow transitions, and visual drag styling (`scale`, `opacity`).
- `demo.html` – Standalone HTML demo using Babel and React CDNs — no server required.

## Installation
1. Copy the folder into your project.
2. Import the component:
   ```jsx
   import KanbanTaskCard from "./KanbanTaskCard.jsx";
   ```
3. Link the stylesheet:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
```jsx
import React from 'react';
import KanbanTaskCard from './KanbanTaskCard';

const task = {
  id: "task-1",
  title: "Update API documentation",
  tag: "Docs",
  assignees: ["https://i.pravatar.cc/150?img=1"]
};

function App() {
  return (
    <div style={{ width: 300, background: '#e5e7eb', padding: 16 }}>
      <KanbanTaskCard 
        task={task} 
        onDragStart={(id) => console.log('Dragging', id)} 
      />
    </div>
  );
}
```

## Props
| Prop | Type | Description |
|------|------|-------------|
| `task` | `Object` | Task data: `{ id, title, tag, assignees }`. |
| `onDragStart` | `(id: string) => void` | Optional callback when dragging begins. |

## Why it fits EaseMotion CSS
All visual feedback is CSS-first: hovering the card applies a smooth `transform: translateY(-2px)` with an elastic `cubic-bezier(0.175, 0.885, 0.32, 1.275)` timing function. When dragging begins, React applies an `.ease-ktc-dragging` class, and CSS immediately scales the original card down to 95% and drops its opacity, providing excellent tactile feedback without heavy JS animation loops.

## Demo
Open `demo.html` directly in a browser — no server needed.

---

> **Note:** PR modifies only files inside `submissions/react/react-kanban-board-task-card-with-drag-motion-realtushartyagi-28153/`. No changes to `core/` or `components/`.
