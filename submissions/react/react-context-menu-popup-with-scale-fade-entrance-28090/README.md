# React Component: Context Menu Popup with Scale & Fade Entrance (#28090)

A modular, copy-paste ready React component and custom hook for the EaseMotion CSS framework. This provides a custom right-click context menu that replaces the default browser menu, featuring a smooth pop-in animation and automatic viewport boundary collision detection.

## 📦 What's included?

- `ContextMenu.jsx`: The React component that renders the menu, alongside a handy `useContextMenu` custom hook that manages the `x, y` coordinates and native event prevention.
- `style.css`: The CSS stylesheet powering the glassmorphism backdrop and the `cubic-bezier(0.16, 1, 0.3, 1)` scale-and-fade entry animations.
- `demo.html`: A self-contained browser demo running the React component to showcase right-click interactions.

## 🛠 Features

- **Delayed Unmount Animation**: Implements a dual-state boolean system (`isVisible` vs `isRendered`) that allows the CSS exit animation to complete before React rips the component out of the DOM.
- **Smart Positioning**: Includes a `getAdjustedPosition` utility that checks the window bounds to ensure the menu never opens off-screen, shifting it up or left if it hits the edge of the viewport.
- **Spring-Based Entrance**: Uses a tight `cubic-bezier` curve to quickly scale from `0.95` to `1.0` while fading in, giving it a snappy but smooth "pop" feeling.
- **Micro-Interactions**: Hover states on menu items feature subtle background color transitions, with special support for `isDanger` (red) actions.

## 🚀 How to use

1. Copy `ContextMenu.jsx` into your React project.
2. Copy `style.css` and import it.
3. Use the exported `useContextMenu` hook on the container you want to bind the right-click to.

```jsx
import React from 'react';
import ContextMenu, { useContextMenu } from './ContextMenu';
import './style.css'; 

const FileItem = ({ filename }) => {
  const { isVisible, position, handleContextMenu, closeMenu } = useContextMenu();

  const menuItems = [
    { id: '1', label: 'Open', onClick: () => console.log('Open') },
    { type: 'separator' },
    { id: '2', label: 'Delete', isDanger: true, onClick: () => console.log('Delete') }
  ];

  return (
    <div onContextMenu={handleContextMenu} style={{ padding: 20, border: '1px solid gray' }}>
      {filename}
      
      <ContextMenu 
        items={menuItems}
        position={position}
        isVisible={isVisible}
        onClose={closeMenu}
      />
    </div>
  );
};

export default FileItem;
```

## 🎨 Why this fits EaseMotion

**EaseMotion** emphasizes that interfaces should respond naturally to user intent.

Standard browser context menus are jarring and unstyled. By injecting a custom menu, we gain control over the entrance physics. Instead of a harsh linear appearance, this menu starts slightly scaled down and pops forward into full scale (`scale(0.95)` to `scale(1)`). This subtly mimics real-world physics where an object moves closer to the viewer's eye to grab attention.
