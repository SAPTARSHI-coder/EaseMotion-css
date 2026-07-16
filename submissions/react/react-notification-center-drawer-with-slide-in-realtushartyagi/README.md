# React Notification Center Drawer with Slide-In

A modular, copy-paste ready React component that provides a sleek off-canvas notification drawer with a smooth slide-in animation using **EaseMotion CSS**.

## Files
- `NotificationCenterDrawer.jsx` – The core React component handling state, mounting delays for animation, and rendering the notification list.
- `style.css` – Custom EaseMotion CSS styles defining the slide-in transform, cubic-bezier timing functions, and backdrop fade.
- `demo.html` – A standalone HTML file demonstrating the notification drawer using Babel and React CDNs.

## Installation
1. Copy the `react-notification-center-drawer-with-slide-in-realtushartyagi` folder into your project's `submissions/react/` directory.
2. Import the component:
   ```jsx
   import NotificationCenterDrawer from "./NotificationCenterDrawer.jsx";
   ```
3. Include the stylesheet in your HTML or import it in your bundler:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
```jsx
import React, { useState } from 'react';
import NotificationCenterDrawer from './NotificationCenterDrawer';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const notifications = [
    { id: '1', title: 'New Message', message: 'Hello there!', time: 'Now', read: false }
  ];

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Notifications</button>
      
      <NotificationCenterDrawer 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        notifications={notifications}
      />
    </div>
  );
}
```

## Props
| Prop | Type | Description |
|------|------|-------------|
| `isOpen` | `boolean` | Determines if the drawer is visible. |
| `onClose` | `() => void` | Callback fired when clicking the backdrop or close button. |
| `notifications` | `Array` | Array of notification objects `{id, title, message, time, read}`. |

## Why it fits EaseMotion CSS
This component perfectly aligns with the EaseMotion philosophy by using pure CSS `transform: translateX()` and hardware-accelerated transitions to handle the heavy lifting of the slide-in animation. React is only responsible for toggling the class state and unmounting the DOM node after the transition completes, keeping the motion buttery smooth without any JS animation bloat.

## Demo
Open `demo.html` directly in a web browser—no server needed.

---

> **Note:** The PR should only modify files inside `submissions/react/react-notification-center-drawer-with-slide-in-realtushartyagi/`. No changes to `core/` or `components/`.
