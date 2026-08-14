# ease-cursor

Cursor utility classes covering all standard CSS keyword cursor values plus media-query-aware variants for hover, touch, and mouse input.

## What

Single-purpose CSS utility classes for the `cursor` property. Each class maps directly to a CSS cursor keyword value, with additional responsive variants:

- **Basic**: auto, default, pointer, wait, text, move, help, not-allowed, none, context-menu, progress, cell, crosshair, vertical-text, alias, copy, no-drop, grab, grabbing, all-scroll, zoom-in, zoom-out
- **Resize**: col-resize, row-resize, n-resize, e-resize, s-resize, w-resize, ne-resize, nw-resize, se-resize, sw-resize, ew-resize, ns-resize, nesw-resize, nwse-resize
- **Hover-aware**: `ease-cursor-hover-pointer`, `ease-cursor-hover-grab`, `ease-cursor-hover-grabbing`, `ease-cursor-hover-zoom-in`, `ease-cursor-hover-zoom-out` (only apply when `@media (hover: hover)` matches)
- **Touch-aware**: `ease-cursor-touch-auto`, `ease-cursor-touch-default` (applied on coarse pointer devices)
- **Mouse-aware**: `ease-cursor-mouse-pointer`, `ease-cursor-mouse-grab` (applied on fine pointer devices)

## How

1. Include `style.css`.
2. Apply `.ease-cursor-{value}` to any element.

## Why

Provides a consistent, discoverable naming scheme for cursor values. Media query variants allow cursor to adapt to input device capabilities without JavaScript.

## Accessibility

- Custom cursors can affect usability. Avoid overly complex cursor changes.
- The `none` cursor should be used sparingly and only when hiding the cursor serves a clear purpose (e.g., video fullscreen, drawing canvas).
