# Context Menu Popup with Scale & Fade Entrance

A lightweight, accessible React component providing a custom right-click context menu. It uses EaseMotion CSS to deliver a polished scale and fade entrance animation, replicating native OS context menu behaviors with a modern web aesthetic.

## Props

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `items` | `Array<Object>` | `[]` | The list of menu items to display |
| `children` | `ReactNode` | **Required** | The target area that triggers the context menu on right-click |
| `onAction` | `(item) => void` | `undefined` | Callback fired when a menu item is clicked |

### Item Object Structure
```typescript
{
  id?: string | number,
  label?: string,
  icon?: ReactNode,
  shortcut?: string,
  danger?: boolean,
  divider?: boolean // If true, renders a horizontal line instead of an item
}
```

## Installation

1. Copy `ContextMenu.jsx` and `style.css` into your project components directory.
2. Ensure you have React installed. No other dependencies are required.

## Usage Example

```jsx
import React from 'react';
import ContextMenu from './ContextMenu';

function App() {
  const menuItems = [
    { id: 'edit', label: 'Edit file', shortcut: '⌘E' },
    { id: 'duplicate', label: 'Duplicate', shortcut: '⌘D' },
    { divider: true },
    { id: 'delete', label: 'Delete', shortcut: '⌫', danger: true }
  ];

  const handleAction = (item) => {
    console.log('Action selected:', item.id);
  };

  return (
    <div style={{ padding: '40px' }}>
      <ContextMenu items={menuItems} onAction={handleAction}>
        <div style={{ padding: '40px', border: '2px dashed #ccc', textAlign: 'center' }}>
          Right-click inside this dashed area.
        </div>
      </ContextMenu>
    </div>
  );
}

export default App;
```

## Why it fits EaseMotion CSS

- **Entrance Animation**: Employs `.ease-scale-fade-enter` (`cubic-bezier(0.34, 1.56, 0.64, 1)`), combining a slight Y-axis translation and a scale shift from `0.95` to `1.0`. This gives the menu a physical, popping sensation when it appears.
- **Micro-interactions**: Uses subtle background and text color transitions on `.ease-context-item` hover to ensure a responsive, native-feeling user experience.
- **Positioning & Boundaries**: The component automatically tracks the mouse `clientX` and `clientY` positions, rendering the popup in a fixed viewport layer to prevent overflow clipping in scrolling containers.
