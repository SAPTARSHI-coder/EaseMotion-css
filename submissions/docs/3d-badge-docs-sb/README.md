# 3D Badge

Documentation demonstrating how to use the **3D Badge** component.

## Overview
A 3D badge with a perspective lift and a drop shadow that deepens on hover.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<span class="ease-3dbadge" role="img" aria-label="3D badge, Beta">Beta</span>
```

## CSS class naming conventions
- `.ease-3d-badge` — root container
- `.ease-3d-badge__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-3dbadge-accent: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<input>`, `<a>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- `aria-label`, `aria-current`, and `role` are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.

Closes #78693
