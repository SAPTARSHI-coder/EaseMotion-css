# Minimalist Popover — advanced styling

Documentation guide for the **Minimalist Popover** component, focused on **advanced styling**.

## Overview
Advanced styling guide for the minimalist popover: arrow variants, placement modifiers, and focus-ring theming.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<button class="ease-popover-trigger" aria-describedby="pa">Info</button>
<div id="pa" class="ease-popover ease-popover--top" role="tooltip" hidden>Top-aligned note.</div>
```

## CSS class naming conventions
- `.ease-minimalist-popover-advanced` — root container
- `.ease-minimalist-popover-advanced__<element>` — BEM-style child elements
- `.ease-minimalist-popover-advanced--<variant>` — appearance modifier classes
- `.is-active`, `.is-up`, `.is-down` — state modifier classes

## Custom CSS variable overrides
```css
:root {
  --ease-popover-bg: #6366f1;
  --ease-popover-shadow: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<input>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- `aria-current`, `aria-pressed`, `aria-label`, and `role` attributes are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons/chips.
- For popovers/drawers, Escape closes and returns focus to the trigger.

Closes #81534
