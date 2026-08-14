# Pure CSS Cookie Consent Banner

A cookie consent banner that slides in and dismisses via a checkbox, pure CSS, no JS. Pure HTML & vanilla CSS, no external JavaScript.

## Files
- `demo.html` — fully self-contained working component
- `style.css` — pure CSS (no JS), hardware-accelerated where applicable
- `README.md` — this guide

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<div class="ease-cookie" role="dialog" aria-label="Cookie consent"><p class="ease-cookie__text">We use cookies.</p><input type="checkbox" id="cc-dismiss" class="ease-cookie__toggle-input" /><label for="cc-dismiss" class="ease-cookie__accept" tabindex="0">Accept</label></div>
```

## Accessibility
- Native interactive elements used where possible.
- `:focus-visible` outlines for keyboard users.
- `aria-label`, `role`, `aria-current` used where appropriate.
- `@media (prefers-reduced-motion: reduce)` disables animations.

Closes #71873
