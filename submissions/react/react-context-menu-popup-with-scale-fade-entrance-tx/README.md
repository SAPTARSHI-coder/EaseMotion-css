# React Context Menu Popup with Scale & Fade Entrance

## Description
A lightweight, natively positioned custom right-click context menu built with React hooks. It intelligently calculates screen boundaries to prevent clipping (overflow), and gracefully appears using a custom `scale-fade-entrance` animation. The component leverages standard EaseMotion CSS utility classes to handle micro-interactions like hover highlighting and tactile lifts.

## Component Props

| Prop | Type | Description |
|------|------|-------------|
| `targetRef` | `React.RefObject` | (Optional) A ref to a specific DOM element. If provided, the context menu only triggers when right-clicking inside this element. If omitted, it binds to the global `document`. |
| `items` | `array` | Array of menu item objects. Format: `{ label?: string, icon?: ReactNode, shortcut?: string, danger?: boolean, type?: 'divider', onClick?: function }`. |

## Usage Example

```jsx
import React, { useRef } from 'react';
import ContextMenu from './ContextMenu';
import 'easemotion.css'; // Make sure EaseMotion core CSS is imported globally

const App = () => {
  const containerRef = useRef(null);

  const menuItems = [
    { label: 'Back', icon: '←', shortcut: 'Alt+Left', onClick: () => console.log('Back') },
    { label: 'Forward', icon: '→', shortcut: 'Alt+Right', onClick: () => console.log('Forward') },
    { label: 'Reload', icon: '↻', shortcut: 'Cmd+R', onClick: () => console.log('Reload') },
    { type: 'divider' },
    { label: 'Save As...', icon: '💾', shortcut: 'Cmd+S', onClick: () => console.log('Save') },
    { label: 'Print...', icon: '🖨️', shortcut: 'Cmd+P', onClick: () => console.log('Print') },
    { type: 'divider' },
    { label: 'Delete Item', icon: '🗑️', shortcut: 'Backspace', danger: true, onClick: () => console.log('Delete') }
  ];

  return (
    <div 
      ref={containerRef}
      style={{ 
        height: '400px', 
        background: '#f8fafc', 
        border: '2px dashed #cbd5e1', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}
    >
      <p style={{ color: '#64748b' }}>Right-click anywhere inside this dashed box.</p>
      
      <ContextMenu 
        targetRef={containerRef} 
        items={menuItems} 
      />
    </div>
  );
};

export default App;
```

## Features & EaseMotion Integration
- **`scale-fade-entrance`**: Uses a custom `@keyframes` entrance animation tailored specifically for context menus, creating a native macOS/Windows 11 feel by scaling up from `0.9` while fading in simultaneously.
- **`ease-hover-lift`**: Adapted for the list items to create a subtle `translateX` lift, providing clear visual feedback when users drag their cursor over options.
- **Boundary Detection**: Uses `clientX` and `clientY` combined with `offsetWidth`/`offsetHeight` natively in React state to ensure the menu never renders outside the viewport.
- **Accessibility & Escape**: Automatically closes when clicking outside the menu (`handleClickOutside`) or pressing the `Escape` key (`handleEscape`).
- **Zero External Dependencies**: Pure React state/refs paired with standard CSS. No need for heavy popper.js or floating-ui libraries.
