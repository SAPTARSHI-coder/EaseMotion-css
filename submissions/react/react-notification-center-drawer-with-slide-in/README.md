# React Notification Center Drawer with Slide-In

A clean, production-ready Slide-In Notification Center Drawer designed using native React hooks and optimized for EaseMotion's CSS custom runtime parameters.

## 🚀 Features
* **Snappy Slide Animation**: Employs an ultra-smooth `cubic-bezier(0.16, 1, 0.3, 1)` transition matrix for responsive enterprise panels.
* **Scroll-Lock Management**: Safely clamps global viewport scroll metrics upon visibility mount.
* **Fully Semantic & Decoupled**: Zero heavy UI external dependency requirements.

## 📦 Component API

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `isOpen` | `boolean` | `false` | Sets the visual state showing or hiding the overlay wrapper. |
| `onClose` | `function` | `void` | Trigger handler invoked upon backdrop overlay or close icon click interactions. |
| `notifications` | `array` | `[]` | Dynamic dataset array containing elements with fields (`id`, `title`, `message`, `time`). |
| `onClearAll` | `function` | `void` | Clean state update event pipeline handler. |

## 🛠️ Usage Example

```jsx
import React, { useState } from 'react';
import { NotificationDrawer } from './NotificationDrawer';

function App() {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { id: 1, title: "Deployment Success", message: "Production branch deployed successfully.", time: "2m ago" }
  ]);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Center</button>
      <NotificationDrawer 
        isOpen={open} 
        onClose={() => setOpen(false)} 
        notifications={items} 
        onClearAll={() => setItems([])} 
      />
    </>
  );
}
