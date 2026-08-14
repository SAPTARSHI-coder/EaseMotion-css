# Pure CSS Card Stack Effect

A pure CSS card stack where cards behind peek out and rise on hover of the top card. Pure HTML & vanilla CSS, no external JavaScript.

## Files
- `demo.html` — fully self-contained working component
- `style.css` — pure CSS (no JS), hardware-accelerated where applicable
- `README.md` — this guide

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<div class="ease-cstack" role="group" aria-label="Card stack"><div class="ease-cstack__card">3</div><div class="ease-cstack__card">2</div><div class="ease-cstack__card is-top" tabindex="0">1</div></div>
```

## Accessibility
- Native interactive elements used where possible.
- `:focus-visible` outlines for keyboard users.
- `aria-label`, `role`, `aria-current` used where appropriate.
- `@media (prefers-reduced-motion: reduce)` disables animations.

Closes #71877
