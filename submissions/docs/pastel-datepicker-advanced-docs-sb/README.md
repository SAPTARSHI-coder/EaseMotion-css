# Pastel Datepicker — advanced styling

Documentation guide for the **Pastel Datepicker** component, focused on **advanced styling**.

## Overview
Advanced styling guide for the pastel datepicker: gradient headers, range selection highlight, and today marker.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<div class="ease-datepicker" role="dialog" aria-label="Choose date">
  <div class="ease-datepicker__header">August 2026</div>
  <table class="ease-datepicker__grid"><tr><td class="is-today">14</td><td class="is-selected">15</td></tr></table>
</div>
```

## CSS class naming conventions
- `.ease-pastel-datepicker-advanced` — root container
- `.ease-pastel-datepicker-advanced__<element>` — BEM-style child elements
- `.ease-pastel-datepicker-advanced--<variant>` — appearance modifier classes
- `.is-active`, `.is-today`, `.is-selected`, `.is-left`, `.is-right` — state modifier classes

## Custom CSS variable overrides
```css
:root {
  --ease-date-accent: #6366f1;
  --ease-date-bg: #6366f1;
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

Closes #81551
