# Minimalist Modal — basic usage

Documentation guide for the **Minimalist Modal** component, focused on **basic usage**.

## Overview
Basic usage guide for the minimalist modal: a clean modal dialog with a scrim and close button.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<div class="ease-mmodal-scrim" hidden></div>
<dialog class="ease-mmodal" role="dialog" aria-modal="true" aria-labelledby="mmt" hidden>
  <h2 id="mmt" class="ease-mmodal__title">Minimalist Modal</h2>
  <button class="ease-mmodal__close" aria-label="Close">×</button>
</dialog>
```

## CSS class naming conventions
- `.ease-minimalist-modal-basic` — root container
- `.ease-minimalist-modal-basic__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-mmodal-bg: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements where possible.
- `:focus-visible` outlines for keyboard users.
- `aria-label`, `aria-current`, `aria-modal`, `role` used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus; Enter/Space to activate; Escape closes modals.

Closes #81636
