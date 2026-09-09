# Dynamic Spinner

Documentation demonstrating how to use the **Dynamic Spinner** component.

## Overview
A spinner whose ring color cycles through a gradient as it rotates.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<div class="ease-dspin" role="status" aria-label="Loading"><span class="ease-dspin__ring"></span></div>
```

## CSS class naming conventions
- `.ease-dynamic-spinner` — root container
- `.ease-dynamic-spinner__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-dspin-accent: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<input>`, `<a>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- `aria-label`, `aria-current`, `aria-describedby`, `role`, and `aria-pressed` are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.
- For modals/tooltips, Escape closes and returns focus to the trigger.

Closes #79621
