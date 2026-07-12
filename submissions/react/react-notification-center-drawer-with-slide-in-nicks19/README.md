# Notification Center Drawer with Slide-In

A modular React component that provides a slide-in side drawer for displaying notifications. It features a backdrop overlay with blur, keyboard accessibility (Escape to close), and smooth, staggered EaseMotion entry animations for the notification items.

## Props

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `isOpen` | `boolean` | **Required** | Controls the visibility of the drawer |
| `onClose` | `() => void` | **Required** | Callback fired when the drawer should close |
| `notifications` | `Array<Notification>` | `[]` | Array of notification objects to render |
| `title` | `string` | `"Notifications"` | Drawer header title |
| `onNotificationClick` | `(notification) => void` | `undefined` | Callback fired when clicking a notification |
| `onClearAll` | `() => void` | `undefined` | Callback fired when "Clear all" is clicked |

### Notification Object Type
```typescript
{
  id?: string | number,
  title: string,
  message: string,
  time: string,
  read: boolean
}
```

## Installation

1. Copy `NotificationDrawer.jsx` and `style.css` into your project components directory.
2. Ensure you have React installed. No other dependencies are required.

## Usage Example

```jsx
import React, { useState } from 'react';
import NotificationDrawer from './NotificationDrawer';

function App() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'New Message', message: 'You have a new message from Jane', time: '2m ago', read: false },
    { id: 2, title: 'System Update', message: 'EaseMotion v2 is now available', time: '1h ago', read: true }
  ]);

  return (
    <div>
      <button onClick={() => setDrawerOpen(true)}>Open Notifications</button>
      
      <NotificationDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setDrawerOpen(false)} 
        notifications={notifications}
        onClearAll={() => setNotifications([])}
        onNotificationClick={(notif) => console.log('Clicked:', notif)}
      />
    </div>
  );
}

export default App;
```

## Why it fits EaseMotion CSS

- **Slide-In Animation**: The drawer uses the signature `ease-slide-in-right` cubic-bezier transition, perfectly capturing the fluid, spring-like feel of EaseMotion.
- **Staggered Entrance**: The individual notification items slide in with staggered `animationDelay`, providing a highly polished, organic reveal sequence.
- **Squish Buttons**: Implements `.ease-squish-button` behavior for the close and clear actions.
- **Zero Dependencies**: Relies solely on native DOM APIs (for scroll locking) and standard React hooks, making it truly copy-paste ready.
