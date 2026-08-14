# Frosted Glass / Glassmorphism Card

A frosted glass card with a translucent blurred background and a gradient ring. Pure HTML & vanilla CSS, no external JavaScript.

## Files
- `demo.html` — fully self-contained working component
- `style.css` — pure CSS (no JS), hardware-accelerated where applicable
- `README.md` — this guide

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<article class="ease-fgcard" tabindex="0"><div class="ease-fgcard__media" aria-hidden="true"></div><div class="ease-fgcard__body"><h3>Glass Card</h3><p>Frosted glassmorphism.</p></div></article>
```

## Accessibility
- Native interactive elements used where possible.
- `:focus-visible` outlines for keyboard users.
- `aria-label`, `role`, `aria-current` used where appropriate.
- `@media (prefers-reduced-motion: reduce)` disables animations.

Closes #71741
