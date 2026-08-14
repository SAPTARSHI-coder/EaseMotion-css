# CSS Skills Progress Bars

A set of skill progress bars that animate their fill on load, pure CSS. Pure HTML & vanilla CSS, no external JavaScript.

## Files
- `demo.html` — fully self-contained working component
- `style.css` — pure CSS (no JS), hardware-accelerated where applicable
- `README.md` — this guide

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<div class="ease-cskills" role="group" aria-label="Skills"><div class="ease-cskills__row"><span class="ease-cskills__label">CSS</span><div class="ease-cskills__track" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"><div class="ease-cskills__fill" style="--p:90%"></div></div></div><div class="ease-cskills__row"><span class="ease-cskills__label">JS</span><div class="ease-cskills__track" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><div class="ease-cskills__fill" style="--p:75%"></div></div></div></div>
```

## Accessibility
- Native interactive elements used where possible.
- `:focus-visible` outlines for keyboard users.
- `aria-label`, `role`, `aria-current` used where appropriate.
- `@media (prefers-reduced-motion: reduce)` disables animations.

Closes #70292
