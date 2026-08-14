# Pure CSS Circular Progress Bar

A highly performant, scalable, and purely native CSS circular progress indicator.

## What it does
This component visually displays a percentage completion using a circular donut chart, built entirely without SVGs or JavaScript. It leverages modern CSS `conic-gradient` and custom properties to animate and render seamlessly.

## How to use it
Include the `style.css` in your project and use the `.ease-circular-progress` class on a container div. You control the progress by setting the `--progress` CSS variable directly on the element.

```html
<!-- Example: Setting progress to 75% -->
<div class="ease-circular-progress" style="--progress: 75%;">
  <span>75%</span>
</div>
```

## Why it fits EaseMotion CSS
Circular progress indicators historically relied on complex SVG `stroke-dasharray` calculations manipulated heavily by JavaScript. By transitioning to a purely native CSS approach using conic gradients and custom properties, we provide a dramatically simpler, robust, and animation-ready component that embodies the human-readable, lightweight philosophy of EaseMotion CSS.
