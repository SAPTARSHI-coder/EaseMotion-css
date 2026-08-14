# Badge Notification Pulse Indicator (React Component)

A versatile, non-intrusive React badge component meant to wrap any child element (like a bell icon, avatar, or button) to display unread counts. It features a continuous radar pulse animation to softly attract user attention.

## Features
- **Dynamic Positioning:** Wraps seamlessly around any child element and can be positioned on any corner (`top-right`, `top-left`, `bottom-right`, `bottom-left`).
- **EaseMotion Integration:** Uses specialized variations of `ease-pop-in` to animate the badge entrance cleanly without disrupting CSS corner offsets. Features a continuous `ease-pulse-radar` ring.
- **Smart Counting:** Automatically handles `maxCount` overflow (e.g. rendering `99+`) and can optionally hide itself entirely when the count reaches zero.
- **Zero Dependencies:** Pure React functional component with standard CSS.

## Installation

1. Copy `BadgeNotification.jsx` into your components directory.
2. Copy `style.css` (or merge its contents into your layout stylesheet).
3. Wrap your target UI element with this component.

## Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `count` | Number | `0` | The notification number to display. |
| `maxCount` | Number | `99` | The threshold before displaying a `+` symbol (e.g. 99+). |
| `showZero` | Boolean | `false` | Whether the badge should remain visible when the count is 0. |
| `color` | String | `"red"` | The theme color of the badge (`"red"`, `"blue"`, `"green"`). |
| `position` | String | `"top-right"`| Which corner the badge attaches to relative to its child element. |
| `pulsing` | Boolean | `true` | Toggles the continuous radar pulse ring. |

## Usage Example

```jsx
import React, { useState } from 'react';
import BadgeNotification from './BadgeNotification';

// A simple mock bell icon component for demonstration
const BellIcon = () => (
  <div style={{ width: '40px', height: '40px', background: '#f3f4f6', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    🔔
  </div>
);

function App() {
  const [unreadMessages, setUnreadMessages] = useState(12);

  return (
    <div style={{ padding: '50px', background: '#ffffff', minHeight: '100vh', display: 'flex', gap: '40px' }}>
      
      {/* Basic Usage (Red, Top-Right) */}
      <BadgeNotification count={unreadMessages}>
        <BellIcon />
      </BadgeNotification>

      {/* Overflow Example (99+) */}
      <BadgeNotification count={150} color="blue" position="top-right">
        <div style={{ padding: '10px 20px', background: '#e5e7eb', borderRadius: '5px' }}>
          Inbox
        </div>
      </BadgeNotification>

      {/* Green, Bottom-Right, No Pulse */}
      <BadgeNotification count={5} color="green" position="bottom-right" pulsing={false}>
        <div style={{ width: '50px', height: '50px', background: '#cbd5e1', borderRadius: '50%' }}>
          {/* Avatar Placeholder */}
        </div>
      </BadgeNotification>
      
    </div>
  );
}

export default App;
```
