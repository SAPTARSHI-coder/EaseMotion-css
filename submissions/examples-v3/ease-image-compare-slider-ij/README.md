# Image Compare Slider

A before/after image comparison slider with a draggable handle. Drag the handle horizontally to reveal either image.

## Features

- Two images overlaid with the modified image clipped via `clip-path: inset`
- Draggable circular handle with directional arrows
- Touch and mouse support
- Smooth transitions on handle and clip updates

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ic-duration` | `0.3s` | Transition duration for handle and clip |
| `--ic-handle-color` | `#fff` | Handle and line color |
| `--ic-handle-size` | `48px` | Handle circle diameter |
| `--ic-handle-border` | `3px` | Dividing line width |
| `--ic-overlay-bg` | `rgba(0,0,0,0.4)` | Arrow icon color |

## Usage

```html
<link rel="stylesheet" href="style.css">
<div class="compare-wrapper">
  <div class="compare__original"><img src="before.jpg"></div>
  <div class="compare__modified"><img src="after.jpg"></div>
  <div class="compare__handle">...</div>
</div>
```

Images should share the same aspect ratio to avoid layout shifts.
