# Mix Blend Mode Utilities (ease-blend)

Mix blend mode utilities for creative image and layer effects — multiply, screen, and overlay.

## Files

| File                        | Description       |
| --------------------------- | ----------------- |
| 📄 [demo.html](./demo.html) | Interactive demo  |
| 🎨 [style.css](./style.css) | Blend mode styles |
| 📖 [README.md](./README.md) | Documentation     |

## Classes

| Class                 | Blend Mode | Effect                     |
| --------------------- | ---------- | -------------------------- |
| `ease-blend-multiply` | `multiply` | Darkens overlapping areas  |
| `ease-blend-screen`   | `screen`   | Lightens overlapping areas |
| `ease-blend-overlay`  | `overlay`  | High contrast blend        |

## Usage

```html
<!-- Multiply blend mode (darkens) -->
<div class="ease-blend-multiply">
  <img src="image.jpg" />
  <div class="overlay"></div>
</div>

<!-- Screen blend mode (lightens) -->
<div class="ease-blend-screen">
  <div class="layer"></div>
</div>

<!-- Overlay blend mode (high contrast) -->
<div class="ease-blend-overlay">
  <div class="gradient"></div>
</div>

<!-- On text -->
<h1 class="ease-blend-multiply">Text blend</h1>
```
