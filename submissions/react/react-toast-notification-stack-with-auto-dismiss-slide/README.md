# React Component: Toast Notification Stack with Auto-Dismiss Slide (#28017)

A modular, copy-paste ready React component for the EaseMotion CSS framework that renders a robust, animated stack of toast notifications. It features physics-based slide entrances, auto-dismiss progress bars, and a layout-collapsing exit animation.

## 📦 What's included?

- `ToastStack.jsx`: The core React file containing the `<ToastStack />` layout manager and the individual `<Toast />` component (which handles hover-to-pause logic and unmounting delays).
- `style.css`: The raw CSS file powering the slide-in/slide-out `@keyframes`, the CSS-only progress bar animation, and the Flexbox gap layout.
- `demo.html`: A self-contained browser demo running the React component via Babel standalone (no build step required for preview).

## 🛠 Features

- **Two-Step Removal**: Standard React removing a component causes the DOM to instantly vanish, jerking the layout. This component sets an `isLeaving` state first, triggering a 400ms CSS slide-out animation (which also animates `max-height` and `margin` to zero). React only unmounts the component *after* the CSS animation completes, allowing the remaining stack to glide smoothly downwards to fill the gap.
- **CSS-Powered Progress Bar**: The timer progress bar at the bottom of the toast doesn't rely on `requestAnimationFrame` or React state updates. It simply uses a pure CSS `animation: scaleX(0)` set to the `duration` prop.
- **Hover to Pause**: Hovering the toast automatically clears the JS timeout and sets `animation-play-state: paused` on the CSS progress bar, giving users time to read.
- **Zero External Dependencies**: Built entirely with standard React and CSS. No heavy toaster libraries needed.

## 🚀 How to use

1. Copy `ToastStack.jsx` into your React project's `components` directory.
2. Copy `style.css` and import it into your global styles or alongside the component.
3. Manage the array of toasts in your global state (Context, Redux, Zustand) and render the stack near the root of your App.

```jsx
import React, { useState } from 'react';
import ToastStack from './ToastStack';
import './style.css'; 

const App = () => {
  const [toasts, setToasts] = useState([]);

  const spawnToast = () => {
    const newToast = {
      id: Date.now().toString(),
      type: 'success', // 'success', 'error', 'info'
      message: 'Operation completed successfully!',
      duration: 3000
    };
    setToasts(prev => [...prev, newToast]);
  };

  const handleRemoveToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  return (
    <div className="container">
      <button onClick={spawnToast}>Show Toast</button>
      
      {/* Mount once at the root */}
      <ToastStack toasts={toasts} removeToast={handleRemoveToast} />
    </div>
  );
};

export default App;
```

## 🎨 Why this fits EaseMotion

**EaseMotion** is about making elements entering and leaving the DOM feel physical and natural. 

Removing a toast from a stack usually causes a jarring layout shift as the DOM node is abruptly destroyed. By orchestrating a hand-off between React state (`isLeaving = true`) and a highly-tuned EaseMotion CSS `@keyframes` exit animation (animating `transform`, `opacity`, `max-height`, and `margin`), we create an interface that behaves predictably and gracefully. The stack organically collapses like physical cards sliding away.
