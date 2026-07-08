# React Context Menu Popup with Scale & Fade Entrance

A robust, fully-functional React context menu component. It intercepts the native right-click event (`onContextMenu`) and renders a custom popup menu precisely at the cursor's location. The entrance is polished with a smooth, hardware-accelerated "Scale & Fade" CSS keyframe animation.

## Files
- `ContextMenu.jsx` – The core React component handling state, event listeners, and viewport boundary collision detection.
- `ContextMenu.css` – The stylesheet containing the aesthetic layout, hover micro-interactions, and the `@keyframes easeScaleFadeIn` entrance animation.

## How it works
1. **Event Interception**: The wrapper `div` listens for `onContextMenu` and calls `e.preventDefault()` to block the browser's native right-click menu.
2. **Dynamic Positioning**: It captures `e.clientX` and `e.clientY` to set the fixed CSS `top` and `left` properties. It includes boundary detection to ensure the menu doesn't spawn off-screen.
3. **The Entrance Animation**: The `.ease-context-menu` class triggers the `easeScaleFadeIn` keyframe. By combining `opacity` with a slight `transform: scale() translateY()` and setting `transform-origin: top left`, the menu smoothly expands outward and downward from the cursor.
4. **Auto-Cleanup**: The component automatically registers and cleans up `click` (outside) and `keydown` (Escape key) event listeners to elegantly dismiss the menu.

## Installation & Usage

1. Copy both `ContextMenu.jsx` and `ContextMenu.css` into your React project.
2. Wrap any content you want to trigger the custom menu with the `<ContextMenu>` component.

```jsx
import React from 'react';
import ContextMenu from './components/ContextMenu';

const App = () => {
  const menuOptions = [
    { label: 'Edit Item', onClick: () => console.log('Edit clicked') },
    { label: 'Duplicate', onClick: () => console.log('Duplicate clicked') },
    { label: 'Delete', onClick: () => console.log('Delete clicked') },
  ];

  return (
    <div style={{ padding: '4rem' }}>
      <ContextMenu items={menuOptions}>
        <div style={{ 
          padding: '2rem', 
          backgroundColor: '#f1f5f9', 
          border: '2px dashed #cbd5e1',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          Right-click anywhere inside this box!
        </div>
      </ContextMenu>
    </div>
  );
};

export default App;
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `Array<Object>` | `[]` | Array of objects representing menu rows. Shape: `{ label: string, icon?: ReactNode, onClick?: function }`. |
| `children` | `ReactNode` | *Required* | The DOM element(s) that should trigger the custom right-click menu. |

## Accessibility (prefers-reduced-motion)
The component supports keyboard dismissal via the `Escape` key. It also implements a strict `@media (prefers-reduced-motion: reduce)` block in the CSS, which completely disables the `easeScaleFadeIn` scaling animation to protect vestibular-sensitive users.

## Why it fits EaseMotion CSS
EaseMotion champions clean, semantic architecture combined with high-fidelity interactions. Native context menus are notoriously rigid and impossible to style. By providing a lightweight React wrapper combined with a pure CSS entrance animation, this component allows developers to completely overhaul the right-click experience with zero external dependencies and smooth 60fps performance.
