# React Kanban Board Task Card with Drag Motion

A modular, copy-paste ready React component representing a Kanban task card. When dragged, the card smoothly scales up and tilts slightly, providing fluid interactive feedback using **EaseMotion CSS**.

## Files
- `KanbanTaskCard.jsx` – The core React component handling the HTML5 drag events (`onDragStart`, `onDragEnd`) and dynamic class toggling.
- `style.css` – Custom EaseMotion CSS styles defining the scale, rotation, shadows, and cubic-bezier transition curves.
- `demo.html` – A standalone HTML file demonstrating the draggable card using Babel and React CDNs.

## Installation
1. Copy the `react-kanban-board-task-card-with-drag-motion-realtushartyagi` folder into your project's `submissions/react/` directory.
2. Import the component:
   ```jsx
   import KanbanTaskCard from "./KanbanTaskCard.jsx";
   ```
3. Include the stylesheet in your HTML or import it in your bundler:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
```jsx
import React from 'react';
import KanbanTaskCard from './KanbanTaskCard';

function App() {
  return (
    <div style={{ padding: '20px', background: '#e5e7eb', width: '320px' }}>
      <KanbanTaskCard 
        id="task-123"
        title="Update Landing Page"
        description="Implement the new hero section design."
        tags={[{ label: 'Design', color: '#fca5a5' }]}
        avatar="https://i.pravatar.cc/150?img=5"
      />
    </div>
  );
}
```

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | *(required)* | Unique identifier for the task, used in drag data transfer. |
| `title` | `string` | `"New Task"` | The main title of the task card. |
| `description` | `string` | `(sample text)` | Brief description or summary of the task. |
| `tags` | `Array` | `[]` | Array of objects `{ label, color }` for pill-shaped tags. |
| `avatar` | `string` | `(pravatar url)` | URL string for the assigned user's avatar image. |

## Why it fits EaseMotion CSS
This component stays true to the EaseMotion CSS philosophy by avoiding heavy JavaScript drag-and-drop physics engines (like `react-beautiful-dnd` or `framer-motion`). Instead, it relies entirely on native HTML5 Drag and Drop API events combined with hardware-accelerated CSS `transform: scale() rotate()` and `cubic-bezier` transitions to achieve a fluid, lightweight motion effect.

## Demo
Open `demo.html` directly in a web browser—no server needed.

---

> **Note:** The PR should only modify files inside `submissions/react/react-kanban-board-task-card-with-drag-motion-realtushartyagi/`. No changes to `core/` or `components/`.
