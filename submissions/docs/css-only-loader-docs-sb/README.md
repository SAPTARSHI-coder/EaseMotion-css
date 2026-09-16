# CSS-only Loader

Documentation demonstrating how to use the **CSS-only Loader** component.

## Overview
A pure-CSS dual-ring spinner with no JavaScript.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<div class="ease-cloader" role="status" aria-label="Loading"><span class="ease-cloader__ring"></span></div>
```

## CSS class naming conventions
- `.ease-css-only-loader` — root container
- `.ease-css-only-loader__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-cloader-accent: #6366f1;
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

Closes #79730
