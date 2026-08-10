 
# SVG Path Draw Animation

CSS animation that simulates drawing an SVG path stroke — like handwriting or line drawing.

## Files

| File | Description |
|------|-------------|
| 📄 [demo.html](./demo.html) | Interactive demo |
| 🎨 [style.css](./style.css) | SVG path styles |
| 📖 [README.md](./README.md) | Documentation |

## Classes

| Class | Speed | Trigger |
|-------|-------|---------|
| `ease-svg-path` | 2 seconds | Auto |
| `ease-svg-path-fast` | 1 second | Auto |
| `ease-svg-path-slow` | 4 seconds | Auto |
| `ease-svg-path-hover` | 1.5 seconds | Hover |
| `ease-svg-path-delay` | 2 seconds | Auto (0.5s delay) |

## Usage

```html
<!-- Basic path draw -->
<svg width="200" height="100">
    <path class="ease-svg-path" d="M10,50 Q50,10 90,50" 
          fill="none" stroke="#667eea" stroke-width="3"/>
</svg>

<!-- Different speeds -->
<path class="ease-svg-path-fast" ... />
<path class="ease-svg-path-slow" ... />

<!-- Hover to draw -->
<path class="ease-svg-path-hover" ... />