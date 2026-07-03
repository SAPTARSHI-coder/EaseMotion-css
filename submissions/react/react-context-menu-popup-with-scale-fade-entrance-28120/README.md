# React Component: Context Menu Popup with Scale & Fade Entrance (#28120)

A modular, copy-paste ready React `<ContextMenu>` component that appears on right-click with a spring-physics scale & fade entrance animation. Supports nested sub-menus, keyboard shortcut hints, danger/disabled item variants, and automatic viewport-edge clamping. Zero external dependencies — pure React hooks and EaseMotion CSS.

## 📦 What's included?

- `ContextMenu.jsx`: The React component managing open/close state, position clamping, sub-menu hover, and keyboard/click dismissal.
- `style.css`: The CSS stylesheet driving the scale + fade entrance, hover nudge, sub-menu slide, danger/disabled variants, and separator styling.
- `demo.html`: A self-contained demo with 3 file cards that each open a rich context menu with a nested "Share" sub-menu.

## 🛠 Features

- **Scale & Fade Entrance**: Opens from `scale(0.85) opacity(0)` → `scale(1) opacity(1)` using `cubic-bezier(0.34, 1.56, 0.64, 1)` for a spring overshoot that feels physical and snappy.
- **Exit Animation**: Reverses to `scale(0.85) opacity(0)` before unmounting, so the dismiss feels intentional.
- **Viewport Clamping**: Automatically repositions the popup so it never overflows the screen edges.
- **Nested Sub-Menus**: Hover any item with `subItems` to reveal a second-level menu with its own slide-in animation.
- **Keyboard Dismissal**: Press `Escape` to close the menu from anywhere.
- **Danger & Disabled Items**: Red colour variant for destructive actions; dimmed + `cursor: not-allowed` for disabled items.
- **Keyboard Shortcuts**: Optional shortcut hint string displayed right-aligned in the menu item.

## 🚀 How to use

```jsx
import React from 'react';
import ContextMenu from './ContextMenu';
import './style.css';

const menuItems = [
  { id: 'open',   icon: '📂', label: 'Open',          shortcut: '↵',  onClick: () => console.log('Open') },
  { id: 'rename', icon: '✏️',  label: 'Rename',        shortcut: 'F2', onClick: () => console.log('Rename') },
  {
    id: 'share', icon: '🔗', label: 'Share',
    subItems: [
      { id: 'copy-link', icon: '📋', label: 'Copy Link', onClick: () => console.log('Copy') },
      { id: 'email',     icon: '📧', label: 'Email...',  onClick: () => console.log('Email') },
    ]
  },
  { separator: true },
  { id: 'delete', icon: '🗑️', label: 'Move to Trash', danger: true,    onClick: () => console.log('Delete') },
];

const MyPage = () => (
  <ContextMenu items={menuItems}>
    <div style={{ padding: 40, background: '#f1f5f9' }}>
      Right-click me
    </div>
  </ContextMenu>
);
```

## ⚙️ Item Schema

| Field | Type | Description |
|-------|------|-------------|
| `id` | `string` | Unique key |
| `label` | `string` | Display text |
| `icon` | `ReactNode` | Optional icon/emoji |
| `shortcut` | `string` | Optional keyboard hint (e.g. `⌘K`) |
| `danger` | `boolean` | Red destructive variant |
| `disabled` | `boolean` | Grayed-out, non-interactive |
| `onClick` | `function` | Click handler |
| `subItems` | `Array` | Nested sub-menu items |
| `separator` | `boolean` | Renders a horizontal divider |

## 🎨 Why this fits EaseMotion

**EaseMotion** is about making UI elements behave with physical predictability and delight.

A context menu that simply appears instantly feels jarring and cheap. By animating the entrance with a `scale(0.85) → scale(1)` spring using `cubic-bezier(0.34, 1.56, 0.64, 1)`, the popup feels like it physically "pops" out of the cursor position. Combined with the matching exit collapse and the sub-menu slide-in from the side, every interaction in this component communicates spatial awareness — the user always knows where content came from and where it went.
