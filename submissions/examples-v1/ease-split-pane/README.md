# ease-split-pane — Draggable Split Panel Resizer

## What does this do?

Creates two resizable panels separated by a draggable divider handle. Supports horizontal (left/right) and vertical (top/bottom) orientations, nested layouts, collapsible panels, and configurable minimum size.

## Variants

| Variant | Class | Description |
|---------|-------|-------------|
| Horizontal | `.ease-split-pane--horizontal` | Left/right panels with vertical divider (default) |
| Vertical | `.ease-split-pane--vertical` | Top/bottom panels with horizontal divider |
| Nested | *(nest `.ease-split-pane` inside)* | Split pane within a split pane |
| Collapsible | *(add toggle button)* | First panel collapses/expands via toggle button |

## How is it used?

```html
<div class="ease-split-pane ease-split-pane--horizontal" data-ease-min-panel-width="100">
  <div class="ease-split-pane__panel" style="width:250px;">
    <!-- Left panel content -->
  </div>
  <div class="ease-split-pane__divider">
    <button class="ease-split-pane__toggle">&#9664;</button>
  </div>
  <div class="ease-split-pane__panel">
    <!-- Right panel content (fills remaining space) -->
  </div>
</div>
```

JavaScript initialisation:

```js
initSplitPane(document.getElementById('my-split-pane'));
```

## Behaviour

- **Drag** the divider to resize panels
- **Double-click** the divider to reset to 50/50 split
- **Minimum panel size**: configurable via `data-ease-min-panel-width` attribute (default: 100px)
- **Toggle button** on divider collapses/expands the first panel
- **Drag state**: adds `.ease-split-pane--dragging` to disable text selection during drag
- **Nesting**: fully supported — drop a `.ease-split-pane` inside a panel

## Why is it useful?

Split panes are essential for code editors (file tree + editor), documentation sites (sidebar + content), comparison views, and any layout where the user controls space division. This component provides a lightweight, framework-agnostic implementation.

## Tech Stack

- HTML
- CSS (flexbox, transitions)
- JavaScript (drag handling, double-click reset, collapse toggle)

## Preview

Open `demo.html` directly in your browser to see horizontal, vertical, and nested variants with drag, double-click reset, and collapse toggle.

## Browser Support

Uses `mousedown`/`mousemove`/`mouseup` and `touchstart`/`touchmove`/`touchend` events for both desktop and touch drag support.

## Contribution Notes

- Class naming follows EaseMotion BEM convention (`ease-split-pane__*`)
- Maintainer may adjust naming before merging
