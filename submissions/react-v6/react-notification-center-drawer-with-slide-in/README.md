# Notification Center Drawer with Slide-In

A modular, copy-paste ready React component that renders a sliding side drawer for application notifications. It features right-slide animation timing curves, mark-read toggles, category badges support (info, warning, error, success), and outer backdrop click dismissal hooks.

---

## 📦 Installation

This component has zero external dependencies outside React and standard EaseMotion CSS libraries.

1. Copy [NotificationDrawer.jsx](./NotificationDrawer.jsx) into your React component directory.
2. Link the core EaseMotion CSS stylesheet inside your application entry file (e.g. `App.js` or `main.js`):

```javascript
import 'ease-motion-css/easemotion.css';
```

---

## 🚀 Usage Example

```jsx
import React, { useState } from 'react';
import NotificationDrawer from './NotificationDrawer';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const initialNotifs = [
    {
      id: 'notif-1',
      title: 'Database connection failed',
      text: 'Production DB cluster returned timeout code 504 on socket handshake.',
      time: '3 mins ago',
      type: 'error',
      read: false
    },
    {
      id: 'notif-2',
      title: 'API Rate limit alert',
      text: 'IP client address 192.168.1.10 approaching 90% quota thresholds.',
      time: '2 hours ago',
      type: 'warning',
      read: false
    },
    {
      id: 'notif-3',
      title: 'Deployment successful',
      text: 'Build version v2.4.1 compiled and routed to server endpoints successfully.',
      time: 'Yesterday',
      type: 'success',
      read: true
    }
  ];

  return (
    <div className="container" style={{ padding: '3rem', backgroundColor: '#030712', minHeight: '100vh', color: '#fff', textAlign: 'center' }}>
      <h2>Notification Center Showcase</h2>
      <p style={{ color: '#9ca3af' }}>Click the bell button to preview slide-in drawer notifications stack.</p>

      <button
        onClick={() => setIsOpen(true)}
        style={{
          padding: '0.65rem 1.6rem',
          borderRadius: '8px',
          backgroundColor: '#8b5cf6',
          color: '#fff',
          fontWeight: 700,
          border: 'none',
          cursor: 'pointer',
          marginTop: '1rem',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}
      >
        <span>🔔</span> View Notification Center
      </button>

      <NotificationDrawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        initialNotifications={initialNotifs}
        accentColor="#8b5cf6"
      />
    </div>
  );
}
```

---

## ⚙️ Props Specifications

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `isOpen` | `boolean` | *Required* | Controls the drawer slide visibility state. |
| `onClose` | `Function` | *Required* | Dismissal callback invoked on clicking close button or backdrop. |
| `initialNotifications` | `Array` | `[]` | List of items structured as `[{ id, title, text, time, type, read }]`. |
| `accentColor` | `string` | `'#8b5cf6'` | Left border indicator color highlighted on unread state items. |

---

## 💅 CSS Sliding Keyframe Animations

The drawer container uses standard EaseMotion slide variables:
```css
@keyframes slide-in-from-right {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}
```
This performs a smooth translational shift along the X-axis for responsive entry on desktop and mobile viewports.
