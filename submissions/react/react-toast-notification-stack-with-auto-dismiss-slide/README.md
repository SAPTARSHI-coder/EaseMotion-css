# React Component: Toast Notification Stack with Auto-Dismiss Slide (#28227 #27598)

A modular, copy-paste ready React component for the EaseMotion CSS framework that renders a robust, animated stack of toast notifications. It features physics-based slide entrances, auto-dismiss progress bars, and a layout-collapsing exit animation.

## 📦 What's included?

- `ToastStack.jsx`: The core React file containing the `&lt;ToastStack /&gt;` layout manager and the individual `&lt;Toast /&gt;` component (which handles hover-to-pause logic and unmounting delays).
- `style.css`: The raw CSS file powering the slide-in/slide-out `@keyframes` (`easeToastSlideIn`, `easeToastSlideOut`), the CSS-only progress bar animation, and the Flexbox gap layout.
- `demo.html`: A self-contained browser demo running the React component via Babel standalone (no build step required for preview).

## 🛠 Features

- **Two-Step Removal**: Standard React removing a component causes the DOM to instantly vanish, jerking the layout. This component sets an `isLeaving` state first, triggering a 400ms CSS slide-out animation (which also animates `max-height` and `margin` to zero). React only unmounts the component *after* the CSS animation completes, allowing the remaining stack to glide smoothly downwards to fill the gap.
- **CSS-Powered Progress Bar**: The timer progress bar at the bottom of the toast doesn't rely on `requestAnimationFrame` or React state updates. It simply uses a pure CSS `animation: easeToastProgress` set to the `duration` prop.
- **Hover to Pause**: Hovering the toast automatically clears the JS timeout and sets `animation-play-state: paused` on the CSS progress bar, giving users time to read.
- **Zero External Dependencies**: Built entirely with standard React and CSS. No heavy toaster libraries needed.

## 📋 Props

### `&lt;ToastStack /&gt;`

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `toasts` | `Array&lt;{id, type, message, duration}&gt;` | Yes | Array of toast objects to render |
| `removeToast` | `(id: string) =&gt; void` | Yes | Callback invoked with toast `id` when it should be removed from state |

### `&lt;Toast /&gt;` (rendered internally)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | — | Unique identifier |
| `type` | `'success' \| 'error' \| 'info'` | `'info'` | Visual variant |
| `message` | `string` | — | Text content |
| `duration` | `number` | `3000` | Auto-dismiss timeout in ms. Set to `0` for persistent toasts. |
| `onRemove` | `(id: string) =&gt; void` | — | Callback to trigger removal |

## 🚀 How to use

1. Copy `ToastStack.jsx` into your React project's `components` directory.
2. Copy `style.css` and import it into your global styles or alongside the component.
3. Manage the array of toasts in your global state (Context, Redux, Zustand) and render the stack near the root of your App.

```jsx
import React, { useState } from 'react';
import ToastStack from './ToastStack';
import './style.css'; 

const App = () =&gt; {
  const [toasts, setToasts] = useState([]);

  const spawnToast = () =&gt; {
    const newToast = {
      id: Date.now().toString(),
      type: 'success', // 'success', 'error', 'info'
      message: 'Operation completed successfully!',
      duration: 3000
    };
    setToasts(prev =&gt; [...prev, newToast]);
  };

  const handleRemoveToast = (id) =&gt; {
    setToasts(prev =&gt; prev.filter(t =&gt; t.id !== id));
  };

  return (
    &lt;div className="container"&gt;
      &lt;button onClick={spawnToast}&gt;Show Toast&lt;/button&gt;
      
      {/* Mount once at the root */}
      &lt;ToastStack toasts={toasts} removeToast={handleRemoveToast} /&gt;
    &lt;/div&gt;
  );
};

export default App;