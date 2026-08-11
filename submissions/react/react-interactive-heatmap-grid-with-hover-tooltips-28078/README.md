# React Component: Interactive Heatmap Grid with Hover Tooltips (#28078)

A modular, copy-paste ready React component for the EaseMotion CSS framework. This component renders a data-dense, GitHub-style activity heatmap featuring satisfying scaling micro-interactions on hover and fluid tooltip appearances.

## 📦 What's included?

- `HeatmapGrid.jsx`: The React component that parses sparse `[x, y, value]` coordinate arrays into a 2D rendering grid, managing local hover state and dynamic coloring.
- `style.css`: The CSS stylesheet powering the staggered `easeHeatmapPop` entrance animations, the cell scaling hover effects, and the tooltip fades.
- `demo.html`: A self-contained browser demo running the React component with mock randomized data to showcase the interactions.

## 🛠 Features

- **Satisfying Micro-Interactions**: When hovering over a cell, it doesn't just show a tooltip. The cell itself physically scales up (`1.3x`) and gains a drop shadow, making the data point feel tactile and responsive.
- **Smart Tooltips**: Tooltips fade in and slide up slightly using a `cubic-bezier(0.16, 1, 0.3, 1)` curve. They are wrapped inside the relative cell container and positioned absolute-bottom to ensure they never clip under adjacent cells.
- **Auto Color Scaling**: Includes a default GitHub-style green color scale that automatically normalizes based on the maximum value found in the dataset. You can also override this by passing your own `colorScale` function.
- **Staggered DOM Entrance**: Uses a dynamic inline `animationDelay` based on the X/Y coordinate of the cell, creating a beautiful sweeping "pop" effect when the heatmap first mounts.

## 🚀 How to use

1. Copy `HeatmapGrid.jsx` into your React project.
2. Copy `style.css` and import it.
3. Pass in your labels and data array.

```jsx
import React from 'react';
import HeatmapGrid from './HeatmapGrid';
import './style.css'; 

const Dashboard = () => {
  const xLabels = ['Jan', 'Feb', 'Mar'];
  const yLabels = ['Server 1', 'Server 2'];
  
  // Data points correlate to the indices of the label arrays
  const data = [
    { x: 0, y: 0, value: 15, label: "15 errors in Jan on Server 1" },
    { x: 1, y: 0, value: 5, label: "5 errors in Feb on Server 1" }
  ];

  return (
    <HeatmapGrid 
      xLabels={xLabels}
      yLabels={yLabels}
      data={data}
      // Optional: override the color logic
      // colorScale={(value) => value > 10 ? 'red' : 'blue'}
    />
  );
};
```

## 🎨 Why this fits EaseMotion

**EaseMotion** is about adding physical logic to flat UI elements. 

Data visualizations are typically static and dry. By making each cell in the heatmap scale up and cast a shadow on hover, we treat the data points as physical blocks rather than just painted pixels. The spring-based entrance animation (`easeHeatmapPop`) paired with coordinated staggered delays makes the entire chart feel alive the moment it loads, immediately capturing user attention.
