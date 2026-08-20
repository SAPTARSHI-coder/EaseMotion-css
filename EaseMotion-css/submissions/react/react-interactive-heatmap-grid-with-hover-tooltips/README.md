# React Component: Interactive Heatmap Grid with Hover Tooltips (#28018)

A modular, copy-paste ready React component for the EaseMotion CSS framework that renders a GitHub-style contribution heatmap. It features tactile cell scaling on hover and beautiful, physics-based spring tooltips.

## 📦 What's included?

- `HeatmapGrid.jsx`: The core React component that processes coordinate data (`x, y, val`) into a CSS Grid layout, managing cell intensity categorization and hover states.
- `style.css`: The raw CSS file powering the grid layout, color themes (Emerald, Blue, Orange), cell scale physics, and tooltip entrance animations.
- `demo.html`: A self-contained browser demo running the React component via Babel standalone (no build step required for preview).

## 🛠 Features

- **Tactile Hover Physics**: When hovering over a tiny grid cell, it smoothly scales up `transform: scale(1.3)` and casts a soft drop shadow, breaking out of the grid bounds momentarily to provide satisfying physical feedback.
- **Animated Tooltips**: Tooltips use a `cubic-bezier(0.34, 1.56, 0.64, 1)` curve to spring up from the hovered cell, creating an organic, fluid feel without relying on expensive JavaScript animation libraries.
- **Themable**: Includes CSS variables and classes for three distinct color scales out of the box: `emerald` (classic GitHub), `blue`, and `orange`.
- **CSS Grid Powered**: Rejects complicated absolute positioning math in favor of a modern, flexible `display: grid` implementation.
- **Zero External Dependencies**: Built entirely with standard React and CSS.

## 🚀 How to use

1. Copy `HeatmapGrid.jsx` into your React project's `components` directory.
2. Copy `style.css` and import it into your global styles or alongside the component.
3. Import and use the component:

```jsx
import React from 'react';
import HeatmapGrid from './HeatmapGrid';
import './style.css'; 

const App = () => {
  // data array expects objects with x, y, and val (0-100)
  const heatmapData = [
    { x: 0, y: 0, val: 0 },
    { x: 0, y: 1, val: 35 },
    { x: 1, y: 3, val: 90 },
    // ...
  ];

  const xLabels = ['Jan', 'Feb', 'Mar', 'Apr']; // Columns
  const yLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S']; // Rows

  return (
    <div className="container">
      <HeatmapGrid 
        data={heatmapData}
        xLabels={xLabels}
        yLabels={yLabels}
        colorTheme="blue" // 'emerald', 'blue', or 'orange'
      />
    </div>
  );
};

export default App;
```

## 🎨 Why this fits EaseMotion

**EaseMotion** believes data visualization shouldn't feel rigid. Standard heatmaps represent data statically. By adding subtle `transform: scale()` micro-interactions to the individual cells, the grid feels alive and responsive to the user's cursor.

Furthermore, integrating the tooltips directly into the cell wrappers and leveraging CSS sibling-like structures allows us to utilize the EaseMotion spring animation system cleanly, avoiding the lag and complex state management often associated with absolute-positioned JS tooltips tracking the mouse coordinates.
