# Rotate Toast Component (React)

## Description
The `RotateToast` is a React component that displays a notification toast. It enters the screen using a dynamic 3D rotation (`rotateY`), and uniquely, it features an interactive hover state that slightly rotates the toast towards the user, making it feel physical and responsive to mouse interaction.

## Installation & Usage
Copy `RotateToast.jsx` and `style.css` into your React project.

```jsx
import React, { useState } from 'react';
import RotateToast from './RotateToast';

function App() {
  const [toasts, setToasts] = useState([]);

  const addToast = () => {
    const id = Date.now();
    setToasts([...toasts, { id, message: 'Settings saved successfully!', type: 'success' }]);
  };

  const removeToast = (id) => {
    setToasts(toasts.filter(t => t.id !== id));
  };

  return (
    <div style={{ padding: '2rem' }}>
      <button onClick={addToast}>Show Toast</button>
      
      <div style={{ position: 'fixed', bottom: '1rem', right: '1rem' }}>
        {toasts.map(toast => (
          <RotateToast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
            duration={5000}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
```

## Props
- `message` (string): The text content of the toast.
- `type` (string, optional): The visual style of the toast (`'info'`, `'success'`, `'warning'`, `'error'`). Default is `'info'`.
- `onClose` (function, optional): Callback fired when the toast is manually dismissed or auto-closes.
- `duration` (number, optional): Time in milliseconds before the toast automatically closes. Set to `0` to disable auto-close. Default is `5000`.

## How It Works
- **3D Transitions**: The CSS uses `perspective(400px)` combined with `rotateY` to create a 3D swinging door effect for entering and exiting.
- **Interactive Hover**: When the user hovers over the toast, the `@keyframes toastRotateHover-ag` animation applies a subtle 5-degree rotation and slight scale up, drawing attention and making the element feel tangible.
- **Unmounting Logic**: Just like the Zoom Card, the component handles its own exit animation by intercepting the close action, waiting for the CSS `animationend` event, and then unmounting.

## Accessibility Considerations
- **ARIA Roles**: Uses `role="alert"` and `aria-live="assertive"` so screen readers immediately announce the toast when it appears.
- **Keyboard Navigation**: The close button is fully focusable. The hover effect is not applied on focus (to avoid disorienting keyboard users), but clear focus outlines and underlines are provided.
- **Reduced Motion**: The `prefers-reduced-motion: reduce` media query in `style.css` disables the 3D rotation entirely for entering, exiting, and hovering, falling back to simple opacity fades and brightness changes.
