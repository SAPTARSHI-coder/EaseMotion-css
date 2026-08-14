# Rotating Conic Border

An EaseMotion CSS animation component.

## What it does
A card with a conic-gradient border that rotates around it continuously.

## Files
- `demo.html` — fully self-contained working animation
- `style.css` — animation styles

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<div class="ease-conic" role="img" aria-label="Card with a rotating conic-gradient border">
```

## Accessibility
- Includes a `@media (prefers-reduced-motion: reduce)` override that disables the animation.
- Decorative elements use `role="img"` + `aria-label` where appropriate.

Closes #81786
