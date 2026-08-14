# Sliding Carousel

An EaseMotion CSS animation component.

## What it does
A horizontal carousel that auto-advances slides with a sliding track using translateX keyframes.

## Files
- `demo.html` — fully self-contained working animation
- `style.css` — animation styles

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<div class="ease-carousel" role="region" aria-roledescription="carousel" aria-label="Auto-advancing slides">
```

## Accessibility
- Includes a `@media (prefers-reduced-motion: reduce)` override that disables the animation.
- Decorative elements use `role="img"` + `aria-label` where appropriate.

Closes #81774
