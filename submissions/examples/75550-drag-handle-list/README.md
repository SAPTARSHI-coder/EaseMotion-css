# Drag Handle List

A reorderable list example that uses the browser's native HTML5
Drag and Drop API with a dedicated drag handle.

## ✨ Features

- Dedicated six-dot drag handle
- Only the handle is draggable
- List rows remain non-draggable
- Text selection remains available
- Nested action buttons remain interactive
- Native browser Drag and Drop API
- Visual dragging state
- Drop-target highlighting
- Live reorder status
- Automatic item numbering
- Responsive layout
- Reduced-motion support
- No external dependencies

## 🎯 Core Behavior

The main purpose of this example is to prevent the common problem
where making an entire list item draggable interferes with:

- Text selection
- Links
- Buttons
- Inputs
- Other nested interactive content

Each list row remains non-draggable.

Only the dedicated grip handle uses:

```html
draggable="true"