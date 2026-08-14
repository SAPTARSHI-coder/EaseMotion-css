# Hover Lift Card

An EaseMotion CSS animation component.

## What it does
A card that lifts up and casts a deeper shadow on hover/focus, with reduced-motion support.

## Files
- `demo.html` — fully self-contained working animation
- `style.css` — animation styles

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<article class="ease-lift-card" tabindex="0">
```

## Accessibility
- Includes a `@media (prefers-reduced-motion: reduce)` override that disables the animation.
- Decorative elements use `role="img"` + `aria-label` where appropriate.

Closes #81782
