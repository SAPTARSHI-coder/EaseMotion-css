# React Interactive Command Palette (Kbar Style)

## Description
A fast, accessible, and animated command palette (similar to Kbar or Spotlight) built with React hooks. It features keyboard navigation (Up, Down, Enter, Esc), fuzzy-style search filtering, staggered list item animations, and auto-scrolling to the selected item. The component leverages standard EaseMotion CSS utility classes for lightweight, smooth 60fps animations.

## Component Props

| Prop | Type | Description |
|------|------|-------------|
| `isOpen` | `boolean` | Controls the visibility of the command palette overlay and panel. |
| `onClose` | `function` | Callback triggered when the backdrop is clicked or the Escape key is pressed. |
| `actions` | `array` | Array of command objects. Each object can contain: `{ id?: string, name: string, perform: function, icon?: ReactNode, shortcut?: string[] }`. |

## Usage Example

```jsx
import React, { useState, useEffect } from 'react';
import CommandPalette from './CommandPalette';
import 'easemotion.css'; // Ensure EaseMotion core CSS is imported globally

const App = () => {
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);

  // Global shortcut to open the palette (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsPaletteOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const actions = [
    {
      id: 'home',
      name: 'Go to Home',
      icon: '🏠',
      shortcut: ['G', 'H'],
      perform: () => console.log('Navigated to Home')
    },
    {
      id: 'settings',
      name: 'Settings',
      icon: '⚙️',
      shortcut: ['S'],
      perform: () => console.log('Opened Settings')
    },
    {
      id: 'theme',
      name: 'Toggle Dark Mode',
      icon: '🌙',
      shortcut: ['T', 'D'],
      perform: () => console.log('Toggled Theme')
    }
  ];

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <p>Press <kbd>Cmd</kbd> + <kbd>K</kbd> or <kbd>Ctrl</kbd> + <kbd>K</kbd> to open the command palette.</p>
      <button onClick={() => setIsPaletteOpen(true)} className="ease-btn ease-hover-lift">
        Open Command Palette
      </button>

      <CommandPalette 
        isOpen={isPaletteOpen}
        onClose={() => setIsPaletteOpen(false)}
        actions={actions}
      />
    </div>
  );
};

export default App;
```

## Features & EaseMotion Integration
- **`ease-fade-in` & `ease-slide-down`**: Used for the backdrop and main palette dialog to create a smooth, native-like entrance pop.
- **Staggered Animations**: The search results utilize inline `animationDelay` dynamically generated via their index to fade in sequentially (`ease-fade-in`).
- **`ease-hover-lift`**: Applied to the currently selected action item to provide tactile visual feedback.
- **Keyboard Navigation**: Full support for `ArrowUp`, `ArrowDown`, `Enter`, and `Escape` out of the box, with automatic smooth scrolling (`scrollIntoView`) for the active item.
- **Zero External Dependencies**: Powered purely by React state/refs and standard EaseMotion CSS keyframes. No external libraries like `kbar` or `cmdk` required.
