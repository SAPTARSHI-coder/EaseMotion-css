# React Component: Toast Notification Stack with Auto-Dismiss Slide (#28017)

A modular, copy-paste ready React component for the EaseMotion CSS framework that renders a robust, animated stack of toast notifications. It features physics-based slide entrances, soft gradient backgrounds, auto-dismiss progress bars, and a layout-collapsing exit animation.

## 📦 What's included?

- `ToastStack.jsx`: The core React file containing the `<ToastStack />` layout manager and the individual `<Toast />` component (which handles hover-to-pause logic and unmounting delays).
- `style.css`: The raw CSS file powering the slide-in/slide-out `@keyframes`, soft glassmorphism gradient styles, custom icon containers, the CSS-only progress bar animation, and the Flexbox gap layout.
- `demo.html`: A self-contained browser demo running the React component via Babel standalone (no build step required for preview).

## 🛠 Features

- **Two-Step Removal**: Standard React removing a component causes the DOM to instantly vanish, jerking the layout. This component sets an `isLeaving` state first, triggering a 400ms CSS slide-out animation (which also animates `max-height` and `margin` to zero). React only unmounts the component *after* the CSS animation completes, allowing the remaining stack to glide smoothly downwards to fill the gap.
- **Sleek Glassmorphism Design**: Features clean semi-transparent background gradients matching the toast type (Success, Error, Info, Warning) with soft border shadows, an elegant accent border-radius, and a custom white container layout for icons.
- **CSS-Powered Progress Bar**: The timer progress bar at the bottom of the toast doesn't rely on `requestAnimationFrame` or React state updates. It uses a pure CSS `animation: scaleX(0)` set to the `duration` prop, with soft linear gradients mapping each notification status.
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

  const spawnToast = (type) => {
    const newToast = {
      id: Date.now().toString(),
      type: type, // 'success', 'error', 'info', 'warning'
      title: type.charAt(0).toUpperCase() + type.slice(1), // Optional custom title
      message: 'Anyone with a link can now view this file.',
      duration: 4000
    };
    setToasts(prev => [...prev, newToast]);
  };

  const handleRemoveToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  return (
    <div className="container">
      <button onClick={() => spawnToast('success')}>Show Success Toast</button>
      <button onClick={() => spawnToast('warning')}>Show Warning Toast</button>
      
      {/* Mount once at the root */}
      <ToastStack toasts={toasts} removeToast={handleRemoveToast} />
    </div>
  );
};

export default App;
```

## ⚙️ Properties Reference

### `<Toast />` props

| Prop | Type | Default | Description |
|---|---|---|---|
| `id` | `String \| Number` | *Required* | Unique identifier for tracking and unmounting. |
| `type` | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'` | Determines icons, accent backgrounds, and progress bar gradients. |
| `title` | `String` | *Derived* | Optional header title. Defaults to the capitalized version of the `type` name (e.g. "Information" for `'info'`). |
| `message` | `String` | *Required* | Description text to show in the toast body. |
| `duration` | `Number` | `3000` | Dismissal delay in milliseconds. Set to `0` to disable auto-dismiss. |
| `onRemove` | `Function` | *Required* | Callback function triggered when unmounting finishes. |

---

## 🎨 Why this fits EaseMotion

**EaseMotion** is about making elements entering and leaving the DOM feel physical and natural. 

Removing a toast from a stack usually causes a jarring layout shift as the DOM node is abruptly destroyed. By orchestrating a hand-off between React state (`isLeaving = true`) and a highly-tuned EaseMotion CSS `@keyframes` exit animation (animating `transform`, `opacity`, `max-height`, and `margin`), we create an interface that behaves predictably and gracefully. The stack organically collapses like physical cards sliding away.
