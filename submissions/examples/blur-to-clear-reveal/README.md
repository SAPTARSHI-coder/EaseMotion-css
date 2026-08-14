# Blur-to-Clear Reveal

A pure CSS reveal where content blurs in then sharpens on hover/focus or on load, no JS. Pure HTML & vanilla CSS, no external JavaScript.

## Files
- `demo.html` — fully self-contained working component
- `style.css` — pure CSS (no JS), hardware-accelerated where applicable
- `README.md` — this guide

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<article class="ease-bcreveal" tabindex="0"><h3 class="ease-bcreveal__title">Blur to Clear</h3><p class="ease-bcreveal__text">Hover or focus to sharpen.</p></article>
```

## Accessibility
- Native interactive elements used where possible.
- `:focus-visible` outlines for keyboard users.
- `aria-label`, `role`, `aria-current` used where appropriate.
- `@media (prefers-reduced-motion: reduce)` disables animations.

Closes #76931
