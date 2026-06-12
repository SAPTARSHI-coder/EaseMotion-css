# User-Select Utility (ease-no-select)

Prevents text selection on interactive elements — perfect for buttons, drag handles, and UI controls.

## Files

| File                        | Description      |
| --------------------------- | ---------------- |
| 📄 [demo.html](./demo.html) | Interactive demo |
| 🎨 [style.css](./style.css) | Utility styles   |
| 📖 [README.md](./README.md) | Documentation    |

## Class

| Class            | CSS Property        |
| ---------------- | ------------------- |
| `ease-no-select` | `user-select: none` |

## Usage

```html
<!-- Prevent text selection on buttons -->
<button class="ease-no-select">Click Me</button>

<!-- Prevent selection on drag handles -->
<div class="drag-handle ease-no-select">⋮⋮ Drag me</div>

<!-- Prevent selection on cards -->
<div class="card ease-no-select">Card content</div>

<!-- Prevent selection on entire menu -->
<div class="ease-no-select">
  <a href="#">Home</a>
  <a href="#">About</a>
</div>
```
