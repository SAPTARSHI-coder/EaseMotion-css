# Minimalist Popover — accessibility integration

Documentation guide for the **Minimalist Popover** component, focused on **accessibility integration**.

## Overview
Accessibility guide for the minimalist popover: tooltip role, aria-describedby, escape-to-close, and focus management back to trigger.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<button class="ease-popover-trigger" aria-describedby="pa" aria-expanded="false">Info</button>
<div id="pa" class="ease-popover" role="tooltip" hidden>A short note.</div>
```

## CSS class naming conventions
- `.ease-minimalist-popover-a11y` — root container
- `.ease-minimalist-popover-a11y__<element>` — BEM-style child elements
- `.ease-minimalist-popover-a11y--<variant>` — appearance modifier classes
- `.is-active`, `.is-today`, `.is-selected`, `.is-left`, `.is-right` — state modifier classes

## Custom CSS variable overrides
```css
:root {
  --ease-popover-bg: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<input>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- `aria-label`, `role`, `aria-modal`, `aria-pressed`, and `aria-describedby` are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.
- For popovers/drawers, Escape closes and returns focus to the trigger.

Closes #81535
