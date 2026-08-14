# React Badge Notification Pulse Indicator

A modular, copy-paste ready React component that displays an icon with an animated pulsing notification badge using **EaseMotion CSS**.

## Files
- `BadgeNotification.jsx` – Core React component with configurable count, pulse toggle, and click handler.
- `style.css` – EaseMotion CSS styles defining the `easePulseRing` keyframe animation and badge layout.
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
      onClick={() => console.log('clicked')}
    />
  );
}
```

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `count` | `number` | `0` | Notification count. Badge hidden when 0. Displays `99+` beyond 99. |
| `pulsing` | `boolean` | `true` | Enables the outward pulse ring animation on the badge. |
| `icon` | `ReactNode` | Bell SVG | Custom icon element to render inside the button. |
| `onClick` | `() => void` | `undefined` | Optional click handler for the badge button. |

## Why it fits EaseMotion CSS
The pulsing effect is driven entirely by a CSS `@keyframes` animation (`easePulseRing`) using `transform: scale()` and `opacity` transitions — zero JavaScript animation logic. React only manages the conditional rendering of the badge and pulse ring based on props.

## Demo
Open `demo.html` directly in a browser — no server needed.

---

> **Note:** PR modifies only files inside `submissions/react/react-badge-notification-pulse-indicator-realtushartyagi/`. No changes to `core/` or `components/`.
