# CSS Animated Step Counter

A pure CSS animated step counter using CSS counters with increment animation, no JS. Pure HTML & vanilla CSS, no external JavaScript.

## Files
- `demo.html` — fully self-contained working component
- `style.css` — pure CSS (no JS), hardware-accelerated where applicable
- `README.md` — this guide

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<ol class="ease-csteps" role="list" aria-label="Steps"><li class="ease-csteps__item is-active" aria-current="step">Step 1</li><li class="ease-csteps__item">Step 2</li><li class="ease-csteps__item">Step 3</li></ol>
```

## Accessibility
- Native interactive elements used where possible.
- `:focus-visible` outlines for keyboard users.
- `aria-label`, `role`, `aria-current` used where appropriate.
- `@media (prefers-reduced-motion: reduce)` disables animations.

Closes #70929
