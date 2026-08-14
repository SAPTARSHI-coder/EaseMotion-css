# ease-column-resize-handle

> Issue #36561 — Column resize handle with drag indicator.

A two-column flex layout with a central draggable resize handle. On hover and while dragging, the handle changes colour and shows grip indicator lines.

## CSS Custom Properties

| Property               | Default    | Description                                |
| ---------------------- | ---------- | ------------------------------------------ |
| `--handle-color`       | `#45475a`  | Background colour of the resize handle     |
| `--handle-width`       | `4px`      | Width of the resize handle                 |
| `--drag-active-color`  | `#89b4fa`  | Handle colour when hovered / active        |
| `--resize-duration`    | `0.2s`     | Duration for handle colour/width transitions|

## Usage

```html
<link rel="stylesheet" href="https://unpkg.com/easemotion/css/column-resize-handle.css" />

<div class="column-resize-handle">
  <div class="resizable-column">Left</div>
  <div class="resize-handle"></div>
  <div class="resizable-column">Right</div>
</div>
```

Add JavaScript to handle `mousedown`/`mousemove`/`mouseup` for the actual drag-to-resize logic. The CSS provides hover states and visual feedback — add class `active` to `.resize-handle` during drag.

## Animation

Handle background transitions to `--drag-active-color` and width increases slightly on hover/active. Pseudo-elements (grip lines) fade in with `opacity` using `--resize-duration`.
