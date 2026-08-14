# Pure CSS Tooltip Component

A pure CSS tooltip that appears on hover/focus with a fade and rise, no JS. Pure HTML & vanilla CSS, no external JavaScript.

## Files
- `demo.html` — fully self-contained working component
- `style.css` — pure CSS (no JS), hardware-accelerated where applicable
- `README.md` — this guide

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<span class="ease-ctooltip"><button class="ease-ctooltip__trigger" aria-describedby="ctt">Info</button><span id="ctt" class="ease-ctooltip__bubble" role="tooltip">Pure CSS tip</span></span>
```

## Accessibility
- Native interactive elements used where possible.
- `:focus-visible` outlines for keyboard users.
- `aria-label`, `role`, `aria-current` used where appropriate.
- `@media (prefers-reduced-motion: reduce)` disables animations.

Closes #71876
