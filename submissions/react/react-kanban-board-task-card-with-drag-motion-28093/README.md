# React Component: Kanban Board Task Card with Drag Motion (#28093)

A modular, copy-paste ready React component for the EaseMotion CSS framework. This component provides a beautifully styled Kanban task card that implements native HTML5 Drag and Drop events, paired with physical CSS transformations for hover and dragging states.

## 📦 What's included?

- `KanbanCard.jsx`: The React component managing `onDragStart` and `onDragEnd` native events, preventing drag ghosting artifacts by cleverly utilizing a `setTimeout` within the React state closure.
- `style.css`: The CSS stylesheet powering the physical hover lift (`transform: translateY(-2px)`) and the drag state (scaling down and becoming a dashed outline footprint).
- `demo.html`: A self-contained browser demo running the React component via Babel standalone to demonstrate the tactile drag response.

## 🛠 Features

- **Tactile Hover Physics**: When hovering, the card lifts slightly toward the user and casts a deeper shadow, indicating it is interactive. The `cubic-bezier(0.34, 1.56, 0.64, 1)` provides a subtle spring effect.
- **Intelligent Drag Ghosting**: A common issue with HTML5 Drag and Drop is that altering the element's opacity *during* `onDragStart` causes the semi-transparent ghost image to look incorrect. This component uses a zero-millisecond timeout in React to apply the `is-dragging` class *after* the browser has snapshotted the card for the drag ghost.
- **Avatar Stacking**: Includes CSS logic to overlap assignee avatars neatly, expanding them slightly on hover.

## 🚀 How to use

1. Copy `KanbanCard.jsx` into your React project's `components` directory.
2. Copy `style.css` and import it into your global styles or alongside the component.
3. Hook up the `onDragStart` and `onDragEnd` callbacks to your application's state management (e.g., Redux, Context, or a library like `dnd-kit`).

```jsx
import React from 'react';
import KanbanCard from './KanbanCard';
import './style.css'; 

const Board = () => {
  const task = {
    id: "APP-402",
    title: "Implement drag and drop",
    priority: "high",
    assignees: ["Sarah", "John"],
    comments: 5
  };

  return (
    <div style={{ width: '300px', padding: '20px', background: '#f1f5f9' }}>
      <KanbanCard 
        task={task} 
        onDragStart={(id) => console.log('Started dragging:', id)}
      />
    </div>
  );
};

export default Board;
```

## 🎨 Why this fits EaseMotion

**EaseMotion** requires interactive elements to respond physically to user input.

A drag-and-drop interaction is the most physical action a user can take with a mouse. If the card doesn't visually detach from the board when grabbed, the illusion breaks. By applying a `scale(0.95)` and dropping the opacity of the *original* element left behind in the list, we create a footprint. The user clearly understands they have picked up the physical object, and the space it left behind is waiting for it to return (or be moved elsewhere).
