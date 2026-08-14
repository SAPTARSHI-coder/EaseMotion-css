# React Component: Notification Center Drawer with Slide-In (#28096)

A modular, copy-paste ready React component for the EaseMotion CSS framework. This component provides a fluid, off-canvas notification drawer that slides in from the right edge of the viewport. It includes state management for unread statuses, dismissing notifications, and smooth entrance/exit animations.

## 📦 What's included?

- `NotificationDrawer.jsx`: The React component that manages open/close state, delayed unmounting for exit animations, click-outside-to-close logic, and array manipulation for dismissing or reading notifications.
- `style.css`: The CSS stylesheet powering the backdrop blur, the cubic-bezier `slide-in` and `slide-out` keyframes, and the micro-interactions on the notification list items (hover shifts and reveal buttons).
- `demo.html`: A self-contained browser demo running the React component via Babel standalone.

## 🛠 Features

- **Delayed Unmount Animation**: Uses a dual-state boolean system (`isOpen` vs `isRendered`) and a `setTimeout` tied to the CSS transition duration to ensure the drawer smoothly slides off-screen *before* React removes it from the DOM.
- **Fluid Spring Physics**: The slide-in animation uses `cubic-bezier(0.16, 1, 0.3, 1)` to create a fast entry that gently decelerates into place, feeling responsive and premium.
- **Micro-Interactions**: Hovering over individual notifications applies a subtle `translateX(4px)` shift, and reveals a red dismiss button that scales into view.
- **Click Outside Support**: Automatically listens for `mousedown` events outside the drawer `aside` ref to cleanly close the drawer.

## 🚀 How to use

1. Copy `NotificationDrawer.jsx` into your React project's `components` directory.
2. Copy `style.css` and import it into your global styles or alongside the component.
3. Manage the `isOpen` state in a parent component (like your Navbar).

```jsx
import React, { useState } from 'react';
import NotificationDrawer from './NotificationDrawer';
import './style.css'; 

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const data = [
    { id: 1, title: 'Alert', message: 'Something happened.', time: 'Just now', isRead: false }
  ];

  return (
    <nav>
      <button onClick={() => setShowDrawer(true)}>
        Bell Icon
      </button>

      <NotificationDrawer 
        isOpen={showDrawer}
        onClose={() => setShowDrawer(false)}
        initialNotifications={data}
      />
    </nav>
  );
};

export default Navbar;
```

## 🎨 Why this fits EaseMotion

**EaseMotion** emphasizes that UI elements should obey the laws of physics.

A drawer that simply appears and disappears instantly feels jarring and disrupts spatial awareness. By animating the entry from the right, the user understands exactly where the panel came from and where it belongs in the z-axis of the application. The use of custom easing curves prevents the linear, robotic feel common in basic UI libraries.
