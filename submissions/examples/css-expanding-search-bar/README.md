# Pure CSS Expanding Search Bar

A search input that expands its width on focus, pure CSS, no JS. Pure HTML & vanilla CSS, no external JavaScript.

## Files
- `demo.html` — fully self-contained working component
- `style.css` — pure CSS (no JS), hardware-accelerated where applicable
- `README.md` — this guide

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<form class="ease-expsearch" role="search" aria-label="Site search"><input type="search" class="ease-expsearch__input" placeholder="Search..." aria-label="Search" /></form>
```

## Accessibility
- Native interactive elements used where possible.
- `:focus-visible` outlines for keyboard users.
- `aria-label`, `role`, `aria-current` used where appropriate.
- `@media (prefers-reduced-motion: reduce)` disables animations.

Closes #71872
