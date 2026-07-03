# React Component: Interactive Command Palette (Kbar Style) (#28054)

A modular, copy-paste ready React component for the EaseMotion CSS framework. This component renders an omnibar/command palette (similar to Kbar, Raycast, or Spotlight) allowing users to search and trigger actions via keyboard or mouse.

## 📦 What's included?

- `CommandPalette.jsx`: The React component that manages the modal visibility, fuzzy search filtering, keyboard navigation (Arrow Up/Down/Enter/Escape), and active item scrolling.
- `style.css`: The CSS stylesheet powering the frosted glass overlay, the snappy scale/translate entrance animation (`cubic-bezier`), and custom scrollbars.
- `demo.html`: A self-contained browser demo running the React component to showcase the global `Cmd+K` / `Ctrl+K` listener and mock command executions.

## 🛠 Features

- **Keyboard First**: Fully controllable via keyboard. Arrow keys navigate the list, Enter executes the command, Escape closes the modal. Typing immediately filters the list.
- **Snappy Entrance Animation**: The modal enters using a `cubic-bezier(0.16, 1, 0.3, 1)` easing function (scale 0.96 to 1, slide down 16px to 0). This creates a very fast, satisfying "pop" commonly found in native macOS apps.
- **Auto-scroll**: As you use the arrow keys to navigate down a long list, the active item uses `.scrollIntoView({ block: 'nearest' })` to ensure it always stays visible within the scrollable container.
- **Highlighting**: When an item is selected via keyboard or hovered via mouse, its background changes and its icon color pops to primary blue, guiding the user's eye.

## 🚀 How to use

1. Copy `CommandPalette.jsx` into your React project.
2. Copy `style.css` and import it.
3. Pass an `isOpen` boolean, an `onClose` function, and an array of `commands`.

```jsx
import React, { useState, useEffect } from 'react';
import CommandPalette from './CommandPalette';
import './style.css'; 

const AppRoot = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Example Global Listener
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  const commands = [
    { 
      id: 'settings', 
      title: 'Settings', 
      icon: <IconSettings />, 
      shortcut: ['⌘', ','], 
      action: () => console.log("Settings Opened") 
    }
  ];

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Palette</button>
      <CommandPalette 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        commands={commands} 
      />
    </>
  );
};
```

## 🎨 Why this fits EaseMotion

**EaseMotion** is about making UI elements behave with physical predictability and delight. 

A command palette needs to feel like a rapid, native OS tool rather than a slow web popup. 

By applying a tight `cubic-bezier` curve to the modal's `transform: scale()`, we achieve a "snappy" entrance that feels hardware-accelerated. The backdrop overlay fades in slightly faster than the modal finishes its slide, creating depth. Subtle micro-interactions, like the icon changing color when its parent row is selected, provide instant tactile feedback without relying on heavy background color changes.
