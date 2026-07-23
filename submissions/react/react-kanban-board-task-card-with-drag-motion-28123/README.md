# React Component: Kanban Board Task Card with Drag Motion (#28123)

A modular, copy-paste ready React component for the EaseMotion CSS framework. This component renders a full-featured Kanban task card with native HTML5 drag-and-drop motion, priority badges, progress bars, tag pills, and an avatar stack — all driven by pure CSS animations with zero external dependencies.

## 📦 What's included?

- `KanbanCard.jsx`: The React component managing all drag states, hover states, and rendering the card anatomy.
- `style.css`: The CSS stylesheet powering the hover lift, drag-tilt, drop-zone highlight, progress gradient, and avatar spread animations.
- `demo.html`: A fully functional self-contained demo with 3 columns (To Do / In Progress / Done) where cards can be dragged between columns.

## 🛠 Features

- **Native HTML5 Drag API**: Uses `draggable`, `onDragStart`, `onDragEnd`, `onDragOver`, and `onDrop` — zero libraries, native browser physics for free.
- **Compound Drag Motion**: When a card is picked up, it simultaneously tilts (`rotate(2.5deg)`), scales up (`scale(1.03)`), drops its opacity to `0.45`, and switches to a dashed blue border — communicating "in transit" to the user.
- **Hover Lift Physics**: Before dragging, hovering the card triggers `translateY(-4px) rotate(0.5deg)` with a deepened box-shadow, using `cubic-bezier(0.34, 1.56, 0.64, 1)` for a natural spring feel.
- **Drop Zone Feedback**: The target column highlights with a blue border and light blue background on `dragover`, then resets on `dragleave`.
- **Avatar Spread**: On hover, the overlapping avatars in the footer gently spread apart to reveal all profile pictures.

## 🚀 How to use

```jsx
import React from 'react';
import KanbanCard from './KanbanCard';
import './style.css';

const MyBoard = () => {
  const handleDragStart = (cardId) => {
    console.log('Dragging card:', cardId);
  };

  return (
    <KanbanCard
      id="task-001"
      title="Design new landing page"
      description="Create wireframes for the marketing redesign."
      priority="high"          // 'high' | 'medium' | 'low'
      tags={['Design', 'UI']}
      assignees={[
        { name: 'Alice Cooper', color: '#8b5cf6' },
        { name: 'Bob Smith',    color: '#3b82f6' },
      ]}
      dueDate="Jul 10"
      progress={35}            // 0–100
      onDragStart={handleDragStart}
    />
  );
};
```

## 🎨 Why this fits EaseMotion

**EaseMotion** is about making UI elements behave with physical predictability and delight.

Kanban cards are one of the most interaction-dense UI patterns in modern apps. Without animations, dragging a card feels like moving a static rectangle. By combining a hover spring-lift, a drag-tilt-and-fade, and a column highlight flash, the card develops real physical weight — it feels like you are actually picking up and placing a real card on a board. The `cubic-bezier(0.34, 1.56, 0.64, 1)` curve used throughout gives the component that signature EaseMotion "physics" overshoot that makes every interaction feel alive.
