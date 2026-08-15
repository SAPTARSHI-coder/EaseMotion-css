# CSS Elastic Band Snap

A playful elastic-band style interaction built entirely with HTML and CSS.

The element stretches, compresses, overshoots, and smoothly snaps back to its original size when hovered or focused.

## Features

- Pure CSS implementation
- No JavaScript
- Elastic stretch and snap animation
- Works with mouse and keyboard interaction
- Responsive design
- Accessible focus state
- `prefers-reduced-motion` support
- No external dependencies

## Files

- `demo.html` — Demo markup
- `style.css` — Component styling and animation

## How It Works

The animation uses CSS `transform` scaling:

```css
transform: scaleX(1.18) scaleY(0.88);