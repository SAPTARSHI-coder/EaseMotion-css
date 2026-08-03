# Interactive Command Palette (Kbar Style)

A modular, copy-paste ready React component that renders a keyboard-accessible command palette. It opens on `Ctrl+K` / `Cmd+K` keystrokes, provides fuzzy search filtering across categorized action items, and supports full keyboard navigation (Up/Down arrow highlight selections, Enter executes, Escape closes).

---

## 📦 Installation

This component has zero external dependencies outside React and standard EaseMotion CSS libraries.

1. Copy [CommandPalette.jsx](./CommandPalette.jsx) into your React component directory.
2. Link the core EaseMotion CSS stylesheet inside your application entry file (e.g. `App.js` or `main.js`):

```javascript
import 'ease-motion-css/easemotion.css';
```

---

## 🚀 Usage Example

```jsx
import React, { useState, useEffect } from 'react';
import CommandPalette from './CommandPalette';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle Command Palette on Ctrl+K / Cmd+K
  useEffect(() => {
    const handleGlobalKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleGlobalKey);
    return () => window.removeEventListener('keydown', handleGlobalKey);
  }, []);

  const actionsList = [
    {
      id: 'search_projects',
      title: 'Search Projects...',
      subtitle: 'Find and view active repository projects',
      shortcut: ['ctrl', 'p'],
      category: 'Search',
      onSelect: () => console.log('Searching projects...')
    },
    {
      id: 'go_home',
      title: 'Go to Dashboard',
      subtitle: 'Navigate to user account command center',
      shortcut: ['g', 'd'],
      category: 'Navigation',
      onSelect: () => console.log('Navigating to dashboard...')
    },
    {
      id: 'theme_dark',
      title: 'Toggle Dark Mode',
      subtitle: 'Swap system theme appearance to dark',
      shortcut: ['t', 'd'],
      category: 'Settings',
      onSelect: () => console.log('Dark theme enabled.')
    }
  ];

  return (
    <div className="container" style={{ padding: '3rem', backgroundColor: '#030712', minHeight: '100vh', color: '#fff', textAlign: 'center' }}>
      <h2>Interactive Command Palette Showcase</h2>
      <p style={{ color: '#9ca3af' }}>Press <kbd>Ctrl + K</kbd> or <kbd>Cmd + K</kbd> to launch the command menu.</p>
      
      <button 
        onClick={() => setIsOpen(true)}
        style={{
          padding: '0.6rem 1.5rem',
          borderRadius: '8px',
          backgroundColor: '#8b5cf6',
          color: '#fff',
          fontWeight: 700,
          border: 'none',
          cursor: 'pointer',
          marginTop: '1rem'
        }}
      >
        Open Command Palette
      </button>

      <CommandPalette 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        actions={actionsList}
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
| `isOpen` | `boolean` | *Required* | Controls the visible active state of the command palette overlay. |
| `onClose` | `Function` | *Required* | Callback triggered when hitting Escape key or clicking outer overlay backdrop. |
| `actions` | `Array` | `[]` | Array of action config objects: `[{ id, title, subtitle, shortcut, category, onSelect }]`. |
| `accentColor` | `string` | `'#8b5cf6'` | Left border indicator color for the currently highlighted search result item. |

---

## ⌨️ Supported Keybindings

* **Ctrl + K** / **Cmd + K**: Launches/toggles the palette drawer.
* **Arrow Up** / **Arrow Down**: Shifts active index focus across filtered command choices.
* **Enter**: Triggers the `onSelect()` callback of the highlighted command item.
* **Escape**: Instantly closes the overlay window.
