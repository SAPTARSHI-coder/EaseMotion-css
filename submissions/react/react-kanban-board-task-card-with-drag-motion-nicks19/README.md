# Kanban Board Task Card with Drag Motion

A highly responsive React component designed for Kanban or sprint boards. It utilizes native HTML5 drag-and-drop combined with EaseMotion CSS principles to provide satisfying visual feedback (scaling, rotation, shadow elevation) when a user picks up and drags a task.

## Props

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `task` | `Object` | **Required** | The task data object (see structure below) |
| `onDragStart` | `(event, task) => void` | `undefined` | Callback fired when the drag operation begins |
| `onDragEnd` | `(event, task) => void` | `undefined` | Callback fired when the drag operation ends (or is cancelled) |
| `className` | `string` | `''` | Additional custom CSS classes for the card wrapper |

### Task Object Structure
```typescript
{
  id: string,             // e.g., "TSK-102"
  title: string,
  description?: string,
  priority?: string,      // "high", "medium", "low" (automatically color-coded)
  tags?: string[],
  assignee?: {
    name: string,
    avatar?: string       // URL to image. Falls back to name initial if not provided.
  }
}
```

## Installation

1. Copy `KanbanTaskCard.jsx` and `style.css` into your project components directory.
2. Ensure you have React installed. No other dependencies are required.

## Usage Example

```jsx
import React from 'react';
import KanbanTaskCard from './KanbanTaskCard';

function App() {
  const sampleTask = {
    id: "FE-409",
    title: "Implement drag-and-drop feature",
    description: "Use HTML5 APIs to allow users to reorder items in the list.",
    priority: "high",
    tags: ["feature", "frontend"],
    assignee: { name: "Alex" }
  };

  const handleDragStart = (e, task) => {
    console.log('Started dragging:', task.id);
  };

  const handleDragEnd = (e, task) => {
    console.log('Finished dragging:', task.id);
  };

  return (
    <div style={{ padding: '40px', width: '320px', background: '#f4f5f7' }}>
      <KanbanTaskCard 
        task={sampleTask} 
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      />
    </div>
  );
}

export default App;
```

## Why it fits EaseMotion CSS

- **Physical Metaphor**: When picked up (dragged), the `.ease-card-dragging` class triggers an immediate transformation: the card scales up slightly (`1.02`), rotates slightly (`2deg`), drops its opacity, and deepens its shadow. This mimics lifting a physical card off a board.
- **Hover Responsiveness**: Standard hover states utilize a subtle Y-translation (`-2px`) accompanied by a shadow increase, connected by a `cubic-bezier(0.34, 1.56, 0.64, 1)` transition that makes the card feel springy and reactive to the mouse pointer before it is even clicked.
