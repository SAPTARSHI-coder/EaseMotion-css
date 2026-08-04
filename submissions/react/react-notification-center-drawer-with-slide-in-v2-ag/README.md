# Notification Center Drawer with Slide-In (React Component)

A highly reusable, modular React component implementing a modern Notification Center drawer. It slides in elegantly from the right edge of the screen and utilizes smooth list animations via EaseMotion CSS utility classes.

## Features
- **Drawer Overlay & Slide-in:** Includes a backdrop blur overlay and a fluid `ease-slide-in-right` entry animation for the drawer itself.
- **Staggered List Entries:** Notification items utilize `ease-slide-left` with staggered CSS `animation-delay` for a beautiful cascading entrance effect.
- **Micro-interactions:** Badges softly bounce (`ease-bounce`), empty state icons pulse (`ease-pulse-slow`), and unread dots utilize a radar-like `ease-pulse`.
- **State Management:** Fully functional local state hooks for marking notifications as read or clearing them entirely.
- **Zero Dependencies:** Pure React hooks (`useState`, `useEffect`) and standard CSS. No external UI libraries required.

## Installation

1. Copy `NotificationDrawer.jsx` into your React project.
2. Copy `style.css` (or merge its contents into your project's stylesheet).
3. Connect it to your application state via the `isOpen` and `onClose` props.

## Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `notifications` | Array | `[]` | Array of notification objects. |
| `isOpen` | Boolean | `false` | Controls whether the drawer is visible. |
| `onClose` | Function | - | Callback triggered when the backdrop or close button is clicked. |
| `title` | String | `"Notifications"` | The header title for the drawer. |
| `onClearAll` | Function | - | Optional callback fired when "Clear All" is clicked. |

### Notification Object Schema
```js
{
  id: String | Number, // Unique identifier
  title: String,       // e.g. "New Message"
  description: String, // e.g. "Alice sent you a direct message."
  time: String,        // e.g. "2m ago"
  unread: Boolean,     // Highlights the item and shows the blue pulse dot
  avatar: String       // (Optional) Emoji or Image URL
}
```

## Usage Example

```jsx
import React, { useState } from 'react';
import NotificationDrawer from './NotificationDrawer';

const mockNotifications = [
  { id: 1, title: 'Security Alert', description: 'New login from an unrecognized device.', time: 'Just now', unread: true, avatar: '🛡️' },
  { id: 2, title: 'Project Update', description: 'Your deployment finished successfully.', time: '1h ago', unread: true, avatar: '🚀' },
  { id: 3, title: 'Weekly Report', description: 'Your analytics report for this week is ready to view.', time: 'Yesterday', unread: false, avatar: '📊' }
];

function App() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <div style={{ padding: '50px' }}>
      <button 
        onClick={() => setDrawerOpen(true)}
        style={{ padding: '10px 20px', cursor: 'pointer' }}
      >
        Open Notification Center
      </button>

      <NotificationDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setDrawerOpen(false)} 
        notifications={mockNotifications}
      />
    </div>
  );
}

export default App;
```
