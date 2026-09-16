# CSS-only Spinner

Documentation demonstrating how to use the **CSS-only Spinner** component.

## Overview
A pure-CSS spinner with a pulsing ring, no JavaScript.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<div class="ease-cspinner" role="status" aria-label="Loading"><span class="ease-cspinner__ring"></span></div>
```

## CSS class naming conventions
- `.ease-css-only-spinner` — root container
- `.ease-css-only-spinner__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-cspinner-accent: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<input>`, `<a>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- `aria-label`, `aria-current`, `aria-expanded`, `role`, and `aria-roledescription` are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.

Closes #79735
