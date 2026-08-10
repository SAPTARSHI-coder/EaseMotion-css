# React Badge Notification Pulse Indicator

A modular, copy-paste ready React component that renders a notification badge with an animated outward pulse ring, powered by **EaseMotion CSS**.

## Files
- `BadgeNotification.jsx` – Core React component rendering the icon, count badge, and optional pulse ring.
- `style.css` – EaseMotion CSS: `@keyframes easePulseRing` animates `scale` and `opacity` for the radial pulse effect.
- `demo.html` – Standalone HTML demo using Babel and React CDNs — no server required.

## Installation
1. Copy the folder into your project.
2. Import the component:
   ```jsx
   import BadgeNotification from "./BadgeNotification.jsx";
   ```
3. Link the stylesheet:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
```jsx
import React from 'react';
import BadgeNotification from './BadgeNotification';

function App() {
  return (
    <BadgeNotification
      count={5}
      pulsing={true}
      onClick={() => console.log("notifications opened")}
    />
  );
}
```

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `count` | `number` | `0` | Notification count. Badge is hidden when 0. Displays `99+` beyond 99. |
| `pulsing` | `boolean` | `true` | Enables the outward CSS pulse ring animation on the badge. |
| `icon` | `ReactNode` | Bell SVG | Custom icon element to render inside the button. |
| `onClick` | `() => void` | — | Optional callback when the button is clicked. |

## Why it fits EaseMotion CSS
The pulse animation uses a pure CSS `@keyframes` rule (`easePulseRing`) with `transform: scale()` and `opacity` — no JS animation libraries. React only manages the count value; EaseMotion CSS handles all motion.

## Demo
Open `demo.html` directly in a browser — no server needed.

---

> **Note:** PR modifies only files inside `submissions/react/react-badge-notification-pulse-indicator-realtushartyagi-28174/`. No changes to `core/` or `components/`.
