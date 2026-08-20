# React Kanban Board Task Card with Drag Motion

A modular, copy-paste ready React component for a Kanban task card that smoothly scales up and tilts when dragged, using **EaseMotion CSS** for all animation effects.

## Files
- `KanbanTaskCard.jsx` – Core React component using HTML5 drag events to toggle the drag CSS class.
- `style.css` – EaseMotion CSS styles: `transform: scale() rotate()` with `cubic-bezier` transition for the drag motion effect.
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

function App() {
  return (
    <KanbanTaskCard
      id="task-1"
      title="Redesign Onboarding"
      description="Update screens to match the new brand."
      tags={[{ label: "Design", color: "#fca5a5" }]}
      avatar="https://i.pravatar.cc/150?img=5"
      priority="high"
    />
  );
}
```

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | *(required)* | Unique task ID used in drag data transfer. |
| `title` | `string` | `"New Task"` | Task title displayed on the card. |
| `description` | `string` | sample text | Short task description. |
| `tags` | `Array<{label, color}>` | `[]` | Pill-shaped labels shown at the top. |
| `avatar` | `string` | pravatar URL | Assignee avatar image URL. |
| `priority` | `"low" \| "medium" \| "high"` | `"medium"` | Shown as a colored left-border accent. |

## Why it fits EaseMotion CSS
The drag animation uses pure CSS `transform: scale(1.05) rotate(2deg)` with a `cubic-bezier(0.2, 0, 0, 1)` transition — zero JS physics libraries. React toggles a single CSS class on `dragstart`/`dragend`, letting EaseMotion CSS do all the heavy lifting.

## Demo
Open `demo.html` directly in a browser — no server needed.

---

> **Note:** PR modifies only files inside `submissions/react/react-kanban-board-task-card-with-drag-motion-realtushartyagi-28183/`. No changes to `core/` or `components/`.
