# Pure CSS Accordion Component

A pure CSS accordion using native details/summary with a smooth rotate indicator. Pure HTML & vanilla CSS, no external JavaScript.

## Files
- `demo.html` — fully self-contained working component
- `style.css` — pure CSS (no JS), hardware-accelerated where applicable
- `README.md` — this guide

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<div class="ease-caccordion"><details class="ease-caccordion__panel" open><summary class="ease-caccordion__q">Section A</summary><div class="ease-caccordion__a">Content A.</div></details><details class="ease-caccordion__panel"><summary class="ease-caccordion__q">Section B</summary><div class="ease-caccordion__a">Content B.</div></details></div>
```

## Accessibility
- Native interactive elements used where possible.
- `:focus-visible` outlines for keyboard users.
- `aria-label`, `role`, `aria-current` used where appropriate.
- `@media (prefers-reduced-motion: reduce)` disables animations.

Closes #71875
