# React Context Menu Popup with Scale & Fade Entrance

A modular, copy-paste ready React component that renders a right-click context menu with a smooth CSS scale and fade entrance animation using **EaseMotion CSS**.

## Files
- `ContextMenuPopup.jsx` – Core React component handling right-click positioning, outside-click dismissal, and item rendering.
- `style.css` – EaseMotion CSS styles with the `easeCtxScaleFadeIn` keyframe (`scale(0.92)` → `scale(1)` + `opacity`) and hover states.
- `demo.html` – Standalone HTML demo using Babel and React CDNs — no server required.

## Installation
1. Copy the folder into your project.
2. Import the component:
   ```jsx
   import ContextMenuPopup from "./ContextMenuPopup.jsx";
   ```
3. Link the stylesheet:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
```jsx
import React from 'react';
import ContextMenuPopup from './ContextMenuPopup';

const menuItems = [
  { label: "Edit",   icon: "✏️", onClick: () => console.log("edit") },
  { label: "Delete", icon: "🗑️", onClick: () => console.log("delete"), danger: true },
];

function App() {
  return (
    <ContextMenuPopup items={menuItems}>
      <div style={{ padding: 40, border: "2px dashed #ccc" }}>
        Right-click me
      </div>
    </ContextMenuPopup>
  );
}
```

## Props
| Prop | Type | Description |
|------|------|-------------|
| `items` | `Array` | Menu items: `{ label, icon?, onClick, danger? }`. |
| `children` | `ReactNode` | The wrapped element that listens for right-click events. |

## Item Shape
| Field | Type | Description |
|-------|------|-------------|
| `label` | `string` | Text shown in the menu item. |
| `icon` | `string` | Optional emoji or character icon. |
| `onClick` | `() => void` | Callback when item is clicked. |
| `danger` | `boolean` | Renders the item in red for destructive actions. |

## Why it fits EaseMotion CSS
The entrance animation is driven entirely by a CSS `@keyframes` rule (`easeCtxScaleFadeIn`) using `transform: scale()` and `opacity`. React only manages the menu's visibility state and DOM position — no JS animation libraries needed.

## Demo
Open `demo.html` directly in a browser — no server needed.

---

> **Note:** PR modifies only files inside `submissions/react/react-context-menu-popup-with-scale-fade-entrance-realtushartyagi-28180/`. No changes to `core/` or `components/`.
