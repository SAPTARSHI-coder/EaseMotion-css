# React Component: Rich Text Editor Toolbar with Animated Tooltips (#28019)

A modular, copy-paste ready React component for the EaseMotion CSS framework that provides a beautifully styled rich text editor formatting toolbar, complete with highly tactile, physics-based animated tooltips.

## 📦 What's included?

- `Toolbar.jsx`: The core React file containing both the generic `<Tooltip />` wrapper component (managing hover states) and the `<Toolbar />` component (managing active formatting states).
- `style.css`: The raw CSS file powering the layout, active button colors, satisfying icon click physics, and the spring-like tooltip entrance animations.
- `demo.html`: A self-contained browser demo running the React component via Babel standalone (no build step required for preview).

## 🛠 Features

- **Spring Tooltips**: Tooltips don't just instantly appear. They use a custom `cubic-bezier(0.34, 1.56, 0.64, 1)` curve to "spring" up and scale slightly from their origin when hovered.
- **Tactile Click Physics**: When clicking a toolbar button, the SVG icon physically scales down `transform: scale(0.85)` momentarily, providing satisfying visual feedback without heavy JavaScript.
- **Accessible State Management**: Built-in state for toggling formats (Bold, Italic, etc.) with corresponding `is-active` CSS classes and `aria-pressed` attributes.
- **Zero External Dependencies**: Built entirely with standard React and CSS. No heavy tooltip libraries (like Tippy.js) required.

## 🚀 How to use

1. Copy `Toolbar.jsx` into your React project's `components` directory.
2. Copy `style.css` and import it into your global styles or alongside the component.
3. Import and use the component:

```jsx
import React from 'react';
import Toolbar from './Toolbar';
import './style.css'; // Adjust path as needed

const EditorApp = () => {
  const handleToolbarAction = (actionId) => {
    // Connect this to your Draft.js, Slate, or Lexical editor instance
    console.log("Formatting action triggered:", actionId);
  };

  return (
    <div className="container">
      <Toolbar onAction={handleToolbarAction} />
    </div>
  );
};

export default EditorApp;
```

## 🎨 Why this fits EaseMotion

**EaseMotion** is about making micro-interactions feel deeply satisfying. 

Standard HTML `title` attributes are painfully slow and unstylable. Heavy JS tooltip libraries often cause performance issues when rendering dozens of tooltips on a dense toolbar.

This component solves this elegantly by creating a simple React wrapper that toggles an `.is-visible` CSS class based on React hover events. The EaseMotion CSS engine then completely takes over, providing the beautiful `transform` and `opacity` transition physics without taxing the main thread. It feels premium, responsive, and native.
