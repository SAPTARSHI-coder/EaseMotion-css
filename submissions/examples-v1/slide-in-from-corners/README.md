# Slide-in from Off-Canvas

Slides elements into view from any screen edge or corner using pure CSS `@keyframes`.

## Classes

| Class | Direction |
|---|---|
| `ease-slide-in-from-top` | Top edge |
| `ease-slide-in-from-bottom` | Bottom edge |
| `ease-slide-in-from-left` | Left edge |
| `ease-slide-in-from-right` | Right edge |
| `ease-slide-in-from-top-left` | Top-left corner |
| `ease-slide-in-from-top-right` | Top-right corner |
| `ease-slide-in-from-bottom-left` | Bottom-left corner |
| `ease-slide-in-from-bottom-right` | Bottom-right corner |

## Usage

```html
<div class="ease-slide-in-from-top">Hello</div>
```

> Note: wrap the parent in `overflow: hidden` for a true off-canvas effect.

## Why it fits EaseMotion CSS

Pure CSS, no JS, human-readable class names, and respects `prefers-reduced-motion`.