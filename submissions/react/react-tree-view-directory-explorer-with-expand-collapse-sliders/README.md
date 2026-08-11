# React Component: Tree View Directory Explorer (#28043)

A modular, copy-paste ready React component for the EaseMotion CSS framework that renders a hierarchical directory structure (like a file explorer) complete with buttery-smooth expand and collapse animations using modern CSS Grid tricks.

## 📦 What's included?

- `TreeView.jsx`: The core React component utilizing recursion to render infinite levels of nested folders and files, managed by local `useState` hooks.
- `style.css`: The raw CSS file powering the layout, hover states, and hardware-accelerated grid-based expand/collapse animations.
- `demo.html`: A self-contained browser demo running the React component via Babel standalone (no build step required for preview).

## 🛠 Features

- **Recursive Rendering**: Feed it deeply nested JSON data and it will render infinite levels of folders and files.
- **CSS Grid Animation**: Uses the bleeding-edge `grid-template-rows: 0fr -> 1fr` trick to animate height perfectly smoothly without needing expensive JavaScript `scrollHeight` calculations.
- **Stateful Nodes**: Each folder independently manages its own expanded/collapsed state via React hooks.
- **Zero External Dependencies**: Built entirely with standard React and CSS. No heavy icon libraries required (uses lightweight inline SVGs).

## 🚀 How to use

1. Copy `TreeView.jsx` into your React project's `components` directory.
2. Copy `style.css` and import it into your global styles or alongside the component.
3. Import and use the component:

```jsx
import React from 'react';
import TreeView from './TreeView';
import './style.css'; // Adjust path as needed

const App = () => {
  // Define your hierarchical data
  const directoryData = [
    {
      name: 'src',
      isExpanded: true, // Optionally start expanded
      children: [
        { name: 'App.jsx' },
        { name: 'index.js' }
      ]
    },
    { name: 'package.json' }
  ];

  return (
    <div className="container">
      <TreeView data={directoryData} />
    </div>
  );
};

export default App;
```

## 🎨 Why this fits EaseMotion

**EaseMotion** is about making complex UI interactions feel effortless. Accordions and Tree Views are notoriously difficult to animate because animating from `height: 0` to `height: auto` is unsupported in CSS. Developers usually resort to heavy JavaScript libraries to calculate pixel heights on the fly.

This component solves the problem elegantly. By utilizing the modern CSS `grid-template-rows` trick in `style.css`, this React component achieves perfectly smooth, mathematically correct expansions regardless of how deeply nested the children are, with zero JavaScript overhead.
