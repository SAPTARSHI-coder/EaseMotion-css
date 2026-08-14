# CSS-only Animated Tabs (Sliding Underline)

Pure CSS tabs with a radio-driven sliding underline indicator, no JS. Pure HTML & vanilla CSS, no external JavaScript.

## Files
- `demo.html` — fully self-contained working component
- `style.css` — pure CSS (no JS), hardware-accelerated where applicable
- `README.md` — this guide

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<div class="ease-cstab" role="tablist" aria-label="Tabs"><input type="radio" name="cstab" id="cstab1" class="ease-cstab__input" checked /><label for="cstab1" class="ease-cstab__tab" role="tab">First</label><input type="radio" name="cstab" id="cstab2" class="ease-cstab__input" /><label for="cstab2" class="ease-cstab__tab" role="tab">Second</label><input type="radio" name="cstab" id="cstab3" class="ease-cstab__input" /><label for="cstab3" class="ease-cstab__tab" role="tab">Third</label><span class="ease-cstab__underline" aria-hidden="true"></span></div>
```

## Accessibility
- Native interactive elements used where possible.
- `:focus-visible` outlines for keyboard users.
- `aria-label`, `role`, `aria-current` used where appropriate.
- `@media (prefers-reduced-motion: reduce)` disables animations.

Closes #79550
