# React Activity Timeline Feed with Staggered Item Entrance

A modular, copy-paste ready React component that provides an elegant vertical activity timeline. It features fluid EaseMotion CSS staggered entrance animations, where items slide up and the connecting lines "draw" themselves downwards dynamically based on the component mounting. Built with React hooks and standard CSS, containing zero external dependencies.

## 📦 Files Included
- `ActivityTimeline.jsx`: The isolated React component logic mapping over the data array.
- `style.css`: The stylesheet defining the staggered delays, drawing line keyframes, dot hover interactions, and responsive card layouts.
- `demo.html`: A self-contained preview using Babel standalone.

## 🚀 Features

- **Staggered Entrance Animation**: When the component mounts, a React `useEffect` triggers a visibility class. The timeline items then sequentially slide and fade in using CSS variables (`--stagger-delay`) combined with a spring curve animation.
- **Dynamic Line Drawing**: The vertical line connecting the nodes uses a `scaleY(0)` to `scaleY(1)` transform animation (`transform-origin: top`), visually "drawing" the line downwards right after the node appears.
- **Categorized Node Types**: Pass a `type` in the activity object (`commit`, `deploy`, `alert`, `comment`) to automatically style the timeline dot with corresponding colors.
- **Micro-Interactions**: The timeline dots swell (`scale(1.3)`) when a user hovers over the associated event card, creating a clear visual link between the content and the timeline track. The card itself performs a slight X/Y lift translation.

## 💻 Usage Example

```jsx
import React from 'react';
import ActivityTimeline from './ActivityTimeline';
import './style.css';

export default function App() {
  const data = [
    {
      id: 1,
      type: 'commit', // Styles the dot color
      title: 'Initial Commit',
      description: 'Project scaffolding setup.',
      timestamp: 'Just now',
      user: 'John Doe'
    },
    {
      id: 2,
      type: 'deploy',
      title: 'Vercel Deployment',
      description: 'Successfully deployed to production.',
      timestamp: '5 mins ago',
      user: 'System'
    }
  ];

  return (
    <div>
      <ActivityTimeline activities={data} />
    </div>
  );
}
```

## 🎨 Why this fits EaseMotion

**EaseMotion** is about bridging the gap between raw CSS performance and interactive JavaScript logic.

By relying on React state strictly for toggling an `is-visible` class on mount, we keep the complex staggered animations completely hardware-accelerated inside CSS. The component uses EaseMotion's signature spring curve `cubic-bezier(0.34, 1.56, 0.64, 1)` for the card lifts and a smooth cubic-bezier for the line drawing. The staggered timing prevents visual overwhelming on load and respects the project's goal of lightweight, copy-paste components that feel physically delightful out of the box.
