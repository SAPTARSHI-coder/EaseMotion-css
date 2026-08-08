# React Component: Rich Text Editor Toolbar with Animated Tooltips (#28069)

A modular, copy-paste ready React component for the EaseMotion CSS framework. This component renders a modern, floating style WYSIWYG editor toolbar featuring tactile button states and spring-animated contextual tooltips with keyboard shortcut indicators.

## 📦 What's included?

- `EditorToolbar.jsx`: The React component that manages active formatting states (including mutually exclusive alignment logic) and maps out the icon buttons.
- `style.css`: The CSS stylesheet powering the active state background shifts, the button press scale micro-interaction, and the `cubic-bezier` tooltip entrance.
- `demo.html`: A self-contained browser demo running the React component inside a mocked editor frame to showcase the hover states.

## 🛠 Features

- **Delayed Spring Tooltips**: Hovering a button triggers a tooltip to appear from above. To prevent chaotic flashing when a user quickly moves their mouse across the whole toolbar, the tooltip includes a `transition-delay: 0.3s` before springing into view via `cubic-bezier(0.34, 1.56, 0.64, 1)`.
- **Tactile Button Press**: Clicking a formatting button triggers a physical `transform: scale(0.92)` on the button and an additional `scale(0.9)` on the SVG icon, providing a deeply satisfying "click" feel.
- **Active State Morphing**: When a format (like Bold) is active, the button seamlessly transitions to a distinct blue tint (`#eff6ff`), indicating its toggled state clearly.
- **Accessibility Ready**: Built with `role="toolbar"`, `role="tooltip"`, `aria-label`, and `aria-pressed` for screen readers, along with clear `:focus-visible` outline rings for keyboard navigation.

## 🚀 How to use

1. Copy `EditorToolbar.jsx` into your React project.
2. Copy `style.css` and import it.
3. Hook up the `toggleFormat` state dispatcher to your actual rich text editor logic (e.g. Draft.js, Slate, or TipTap).

```jsx
import React from 'react';
import EditorToolbar from './EditorToolbar';
import './style.css'; 

const MyEditor = () => {
  return (
    <div className="editor-wrapper">
      <EditorToolbar />
      <div className="editor-content" contentEditable>
        Start typing...
      </div>
    </div>
  );
};
```

## 🎨 Why this fits EaseMotion

**EaseMotion** is about making UI elements behave with physical predictability and delight. 

Standard rich text toolbars are rigid. The buttons instantly change color when clicked, and native browser `title` attributes are slow and ugly. 

By utilizing a subtle 300ms delay on custom HTML tooltips that physically scale and slide down into place, we create an interface that feels responsive but not hyperactive. The physical push-down scaling on active clicks makes software buttons mimic hardware switches.
