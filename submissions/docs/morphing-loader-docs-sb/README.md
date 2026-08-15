# Morphing Loader

Documentation demonstrating how to use the **Morphing Loader** component.

## Overview
A loader that morphs its shape between circle, square, and triangle while rotating.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<div class="ease-morphloader" role="status" aria-label="Loading">
  <span class="ease-morphloader__shape"></span>
</div>
```

## CSS class naming conventions
- `.ease-morphing-loader` — root container
- `.ease-morphing-loader__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-morph-accent: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<a>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- `aria-label`, `aria-current`, `role`, and `aria-expanded` are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.

Closes #79782
