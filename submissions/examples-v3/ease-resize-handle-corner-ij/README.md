# Resize Handle Corner

A resizable box with an animated drag handle in the bottom-right corner. The handle features a line-and-dot animation, and the box displays live width/height.

## Features

- Draggable corner resize handle with `nwse-resize` cursor
- Handle icon with animated dots and diagonal lines
- Live width × height display
- Minimum (160×120) and maximum (600×450) size constraints
- Content reflows on resize

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--rhc-duration` | `0.25s` | Transition duration for box shadow effects |
| `--rhc-handle-color` | `#667eea` | Color of the handle icons |
| `--rhc-border-color` | `#cbd5e1` | Box border color |
| `--rhc-bg` | `#ffffff` | Box background color |
| `--rhc-handle-size` | `24px` | Size of the resize handle area |

## Usage

```html
<link rel="stylesheet" href="style.css">
<!-- Include the resizable box markup from demo.html -->
```

The resize logic uses `mousedown`/`mousemove`/`mouseup` event handlers to track drag deltas, clamped to configured min/max dimensions.
