# Analog Clock Tick

An EaseMotion CSS animation component.

## What it does
An analog clock with hour, minute, and second hands that animate at realistic durations (12h/1h/60s), using CSS rotations.

## Files
- `demo.html` — fully self-contained working animation
- `style.css` — animation styles

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<div class="ease-clock" role="img" aria-label="Analog clock with animated hour, minute, and second hands">
```

## Accessibility
- Includes a `@media (prefers-reduced-motion: reduce)` override that disables the animation.
- Decorative elements use `role="img"` + `aria-label` where appropriate.

Closes #81772
