# Stacked Avatars Animation

A stacked avatars component that fans out on hover/focus, pure CSS, no JS. Pure HTML & vanilla CSS, no external JavaScript.

## Files
- `demo.html` — fully self-contained working component
- `style.css` — pure CSS (no JS), hardware-accelerated where applicable
- `README.md` — this guide

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<div class="ease-savatars" role="group" aria-label="Contributors"><span class="ease-savatars__avatar" style="--i:0" role="img" aria-label="Ada">AB</span><span class="ease-savatars__avatar" style="--i:1" role="img" aria-label="Bea">CD</span><span class="ease-savatars__avatar" style="--i:2" role="img" aria-label="Cleo">EF</span></div>
```

## Accessibility
- Native interactive elements used where possible.
- `:focus-visible` outlines for keyboard users.
- `aria-label`, `role`, `aria-current` used where appropriate.
- `@media (prefers-reduced-motion: reduce)` disables animations.

Closes #81788
