# Resize Horizontal Utility

Introduces the horizontally adjustable container utility token (`.ease-resize-horizontal`) under issue #15116.

## Functional Mechanics

- **The Problem:** When constructing adjustable split-pane screens, modular code sidebars, or table column dividers, forcing multi-directional resizing blocks vertical alignment patterns, crashing elements into stacked layouts below.
- **The Solution:** Constrains geometry scaling to a single dimension. The `.ease-resize-horizontal` utility automatically matches the native `resize: horizontal` declaration with a safe `overflow: auto` configuration backdrop, allowing users to safely adjust width thresholds while preserving strict height parameters.

## Usage Layout Structure
```html
<div class="ease-resize-horizontal" style="width: 300px;">
  </div>
```

Closes #15116
