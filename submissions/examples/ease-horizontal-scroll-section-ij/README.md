# Horizontal Scroll Section — #36729

A horizontally scrollable panel container with CSS scroll-snap behaviour.

## CSS Custom Properties

| Property           | Default    | Description                        |
|--------------------|------------|------------------------------------|
| `--panel-bg`       | `#2a2a3d`  | Background of each snap panel      |
| `--panel-width`    | `260px`    | Width of each panel                |
| `--snap-duration`  | `0.25s`    | Snap animation duration            |
| `--scrollbar-color`| `#7c6ff0`  | Color of the custom scrollbar      |

## Usage

```html
<link rel="stylesheet" href="style.css">

<div class="scroll-wrapper">
  <div class="scroll-container">
    <div class="panel">Panel 1</div>
    <div class="panel">Panel 2</div>
    <div class="panel">Panel 3</div>
  </div>
</div>
```

Panels snap into view when the user scrolls horizontally.
