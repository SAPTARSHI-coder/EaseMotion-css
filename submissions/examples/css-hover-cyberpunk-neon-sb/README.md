# CSS Hover: Cyberpunk Neon

A smooth, accessible, performant pure-CSS hover effect featuring **Cyberpunk Neon** styling. No JavaScript required.

## What it does
On hover/focus, the card gains layered neon box-shadows and a glowing text-shadow.

## Files
- `demo.html` — interactive demo
- `style.css` — pure CSS hover effect
- `README.md` — this guide

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<article class="neon-card" tabindex="0">
  <h2>CYBERPUNK</h2>
  <p>Hover or focus for neon glow.</p>
</article>
```

## Specifications
- **Category**: Hover Effects
- **Style**: Cyberpunk Neon
- Smooth CSS transitions, dark mode compatible, hardware accelerated.
- Pure HTML & Vanilla CSS (no external JS).

## Accessibility
- `:focus-visible` outline for keyboard users.
- `prefers-reduced-motion` disables transitions.

Closes #73368
