# Image Comparison Component

A before/after image comparison slider with a draggable vertical handle. Users can click and drag (or use arrow keys) to reveal more of one image or the other. Includes mouse, touch, and keyboard support with inline JavaScript.

## Classes

| Class | Description |
|---|---|
| `ease-image-comparison` | Container (`role="slider"`, keyboard-focusable) |
| `ease-image-comparison-after` | Full "after" image |
| `ease-image-comparison-before` | Clipped "before" wrapper |
| `ease-image-comparison-handle` | Draggable divider (line + circular grip) |
| `ease-image-comparison-label` | Shared label style |
| `ease-image-comparison-label--before` | "Before" label (bottom-left) |
| `ease-image-comparison-label--after` | "After" label (bottom-right) |

## Usage

```html
<div class="ease-image-comparison" role="slider" aria-valuenow="50" tabindex="0">
  <img class="ease-image-comparison-after" src="after.jpg" alt="After" draggable="false" />
  <div class="ease-image-comparison-before">
    <img src="before.jpg" alt="Before" draggable="false" />
  </div>
  <div class="ease-image-comparison-handle" tabindex="-1"></div>
  <span class="ease-image-comparison-label ease-image-comparison-label--before">Before</span>
  <span class="ease-image-comparison-label ease-image-comparison-label--after">After</span>
</div>
```

See `demo.html` for the full JS setup (mouse drag, touch drag, arrow keys).

## Why it fits EaseMotion CSS

Pure CSS styling for the comparison container, clipped overlay, and handle with circular grip icon. Handle grip has a subtle hover scale effect. Fully responsive by default. Respects `prefers-reduced-motion`.
