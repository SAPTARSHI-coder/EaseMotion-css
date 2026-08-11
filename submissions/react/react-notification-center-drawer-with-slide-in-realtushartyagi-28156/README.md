# React Notification Center Drawer with Slide-In

A modular, copy-paste ready React component providing an off-canvas notification center drawer with a smooth slide-in animation and backdrop fade, powered by **EaseMotion CSS**.

## Files
- `NotificationDrawer.jsx` – Core React component managing mount/unmount timing and notification rendering.
- `style.css` – EaseMotion CSS styles: `translateX` slide-in, `cubic-bezier` timing, backdrop fade, and unread accent styling.
- `demo.html` – Standalone HTML demo using Babel and React CDNs — no server required.

## Installation
1. Copy the folder into your project.
2. Import the component:
   ```jsx
   import NotificationDrawer from "./NotificationDrawer.jsx";
   ```
3. Link the stylesheet:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
```jsx
import React, { useState } from 'react';
import NotificationDrawer from './NotificationDrawer';

const notifications = [
  { id: "1", title: "New Message", message: "You have a new DM.", time: "2m ago", read: false },
  { id: "2", title: "Weekly Report", message: "Your report is ready.", time: "1h ago", read: true },
];

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Notifications</button>
      <NotificationDrawer isOpen={open} onClose={() => setOpen(false)} notifications={notifications} />
    </>
  );
}
```

## Props
| Prop | Type | Description |
|------|------|-------------|
| `isOpen` | `boolean` | Controls whether the drawer is visible. |
| `onClose` | `() => void` | Callback fired on backdrop click or close button. |
| `notifications` | `Array` | Items: `{ id, title, message, time, read }`. |

## Why it fits EaseMotion CSS
All motion is CSS-first: the panel uses `transform: translateX(100%)` → `translateX(0)` with a `cubic-bezier(0.16, 1, 0.3, 1)` transition. The backdrop fades via a CSS `@keyframes` animation. React handles only the mount timing and state — no JS animation libraries.

## Demo
Open `demo.html` directly in a browser — no server needed.

---

> **Note:** PR modifies only files inside `submissions/react/react-notification-center-drawer-with-slide-in-realtushartyagi-28156/`. No changes to `core/` or `components/`.
