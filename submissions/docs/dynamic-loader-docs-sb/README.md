# Dynamic Loader

Documentation demonstrating how to use the **Dynamic Loader** component.

## Overview
A loader with three bouncing dots at staggered delays.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<div class="ease-dloader" role="status" aria-label="Loading"><span class="ease-dloader__dot"></span><span class="ease-dloader__dot"></span><span class="ease-dloader__dot"></span></div>
```

## CSS class naming conventions
- `.ease-dynamic-loader` — root container
- `.ease-dynamic-loader__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-dloader-accent: #6366f1;
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

Closes #79684
