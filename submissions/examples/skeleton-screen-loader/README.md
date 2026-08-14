# Skeleton Screen Loader

A pure CSS skeleton screen loader for cards, text blocks, and avatars with a shimmer, no JS. Pure HTML & vanilla CSS, no external JavaScript.

## Files
- `demo.html` — fully self-contained working component
- `style.css` — pure CSS (no JS), hardware-accelerated where applicable
- `README.md` — this guide

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<div class="ease-skel" role="status" aria-label="Loading"><div class="ease-skel__avatar" aria-hidden="true"></div><div class="ease-skel__lines"><div class="ease-skel__line ease-skel__line--w80" aria-hidden="true"></div><div class="ease-skel__line ease-skel__line--w60" aria-hidden="true"></div></div></div>
```

## Accessibility
- Native interactive elements used where possible.
- `:focus-visible` outlines for keyboard users.
- `aria-label`, `role`, `aria-current` used where appropriate.
- `@media (prefers-reduced-motion: reduce)` disables animations.

Closes #79404
