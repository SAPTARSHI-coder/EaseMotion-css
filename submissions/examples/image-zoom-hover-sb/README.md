# Image Zoom Hover

An EaseMotion CSS animation component.

## What it does
An image that smoothly scales up to 1.15x on hover/focus inside a clipped frame.

## Files
- `demo.html` — fully self-contained working animation
- `style.css` — animation styles

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<figure class="ease-zoom">
```

## Accessibility
- Includes a `@media (prefers-reduced-motion: reduce)` override that disables the animation.
- Decorative elements use `role="img"` + `aria-label` where appropriate.

Closes #81784
