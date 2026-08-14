# CSS Hover: Aurora Glow

A smooth, accessible, performant pure-CSS hover effect featuring **Aurora Glow** styling. No JavaScript required.

## What it does
On hover/focus, layered radial gradients blur and rotate behind a glass card to simulate the Northern Lights.

## Files
- `demo.html` — interactive demo
- `style.css` — pure CSS hover effect
- `README.md` — this guide

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<article class="aurora-card" tabindex="0">
  <h2>Aurora Glow</h2>
  <p>Hover or focus.</p>
</article>
```

## Specifications
- **Category**: Hover Effects
- **Style**: Aurora Glow
- Smooth CSS transitions, dark mode compatible, hardware accelerated (`opacity`/`transform`).
- Pure HTML & Vanilla CSS (no external JS).

## Accessibility
- `:focus-visible` outline for keyboard users.
- `prefers-reduced-motion` disables transitions.

Closes #73367
