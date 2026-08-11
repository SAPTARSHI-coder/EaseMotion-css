# React Context Menu Popup with Scale & Fade Entrance

A modular, copy-paste ready React component that provides a custom context menu (right-click menu) with a smooth scale and fade entrance animation, powered by **EaseMotion CSS**.

## Files
- `ContextMenu.jsx` – Core React component managing coordinates, mount timing, and outside click / re-trigger handling.
- `style.css` – EaseMotion CSS styles: `easeCmScaleFadeIn` `@keyframes` scaling up from a top-left origin.
- `demo.html` – Standalone HTML demo using Babel and React CDNs — no server required.

## Installation
1. Copy the folder into your project.
2. Import the component:
   ```jsx
   import ContextMenu from "./ContextMenu.jsx";
   ```
3. Link the stylesheet:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
```jsx
import React, { useState } from 'react';
import ContextMenu from './ContextMenu';

function App() {
  const [menu, setMenu] = useState({ isOpen: false, x: 0, y: 0 });

  return (
    <div 
      onContextMenu={(e) => {
        e.preventDefault();
        setMenu({ isOpen: true, x: e.clientX, y: e.clientY });
      }}
      style={{ height: '100vh', background: '#f3f4f6' }}
    >
      <ContextMenu 
        isOpen={menu.isOpen} 
        position={{ x: menu.x, y: menu.y }}
        onClose={() => setMenu(m => ({ ...m, isOpen: false }))}
        items={[
          { id: '1', label: 'Copy', onClick: () => console.log('Copy') },
          { id: '2', label: 'Delete', danger: true, onClick: () => console.log('Delete') }
        ]}
      />
    </div>
  );
}
```

## Props
| Prop | Type | Description |
|------|------|-------------|
| `isOpen` | `boolean` | Controls whether the popup is rendered. |
| `position` | `{ x, y }` | Page coordinates to spawn the menu. |
| `onClose` | `() => void` | Callback to close the menu. Handles clicks outside the menu automatically. |
| `items` | `Array` | Menu items: `{ id, label, icon, onClick, danger }`. |

## Why it fits EaseMotion CSS
All animations are completely decoupled from React state updates. The popup scales from `0.95` to `1` and fades from opacity `0` to `1` using a pure CSS `cubic-bezier` keyframe animation (`easeCmScaleFadeIn`). React only sets the top/left style properties based on the mouse event coordinate and delegates the actual rendering motion to the browser's compositor.

## Demo
Open `demo.html` directly in a browser — no server needed.

---

> **Note:** PR modifies only files inside `submissions/react/react-context-menu-popup-with-scale-fade-entrance-realtushartyagi-28150/`. No changes to `core/` or `components/`.
