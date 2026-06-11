# Circular Progress Indicator

## 1. What does this do?
Shows a circular progress indicator using SVG `circle` with animated `stroke-dashoffset` controlled by a `--progress` CSS custom property.

## 2. How is it used?
Set `--progress` (0–100) on the `.progress-circle` element. Customize the color with `--color`.
```html
<div class="progress-circle" style="--progress: 75; --color: #22c55e">...</div>
```

## 3. Why is it useful?
A lightweight, fully customizable progress indicator that animates smoothly via CSS transitions. Color and value are set through CSS custom properties, making it easy to integrate with JavaScript or server-rendered values.
