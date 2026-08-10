# React Component: Comparison Slider (Before/After Image Reveal) (#28044)

A modular, copy-paste ready React component for the EaseMotion CSS framework that provides a buttery-smooth, interactive image comparison slider. Perfect for showing before/after transformations, photography edits, or architectural renovations.

## 📦 What's included?

- `ComparisonSlider.jsx`: The core React component utilizing React Hooks (`useState`, `useEffect`, `useCallback`, `useRef`) for drag-state management and mouse/touch tracking.
- `style.css`: The raw CSS file powering the layout and hardware-accelerated `clip-path` reveals.
- `demo.html`: A self-contained browser demo running the React component via Babel standalone (no build step required for preview).

## 🛠 Features

- **Hardware Accelerated**: Uses CSS `clip-path` instead of animating `width` to ensure perfectly smooth, 60fps tracking without layout recalculations.
- **Mouse & Touch Support**: Fully supports desktop dragging as well as mobile swiping natively.
- **Global Event Tracking**: Listens to mouse/touch events on the `window` while dragging, ensuring the slider doesn't glitch if the user's cursor accidentally leaves the container bounds.
- **Hover Reveal Labels**: Beautiful, blurred badge labels that fade and slide in when the user hovers over the component.
- **Zero External Dependencies**: Built entirely with standard React and CSS. No heavy drag-and-drop libraries required.

## 🚀 How to use

1. Copy `ComparisonSlider.jsx` into your React project's `components` directory.
2. Copy `style.css` and import it into your global styles or alongside the component.
3. Import and use the component:

```jsx
import React from 'react';
import ComparisonSlider from './ComparisonSlider';
import './style.css'; // Adjust path as needed

const App = () => {
  return (
    <div className="container">
      <ComparisonSlider 
        beforeImage="/images/raw-photo.jpg" 
        afterImage="/images/edited-photo.jpg" 
        beforeLabel="Unedited"
        afterLabel="Color Graded"
      />
    </div>
  );
};

export default App;
```

## 🎨 Why this fits EaseMotion

**EaseMotion** is about creating interfaces that feel physically responsive. A comparison slider that lags or jitters ruins the illusion of a tactile reveal. 

By handling the pointer math securely in React, but offloading the actual rendering update to an inline `clip-path` style combined with `will-change: clip-path` in CSS, this component completely bypasses expensive browser layout reflows (which happen if you try to animate CSS `width`). The result is a premium, flawlessly smooth drag interaction.
