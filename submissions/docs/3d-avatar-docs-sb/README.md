# 3D Avatar

Documentation demonstrating how to use the **3D Avatar** component.

## Overview
An avatar with a 3D perspective lift and a gradient ring, scaling on hover/focus.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<div class="ease-3davatar" role="img" aria-label="Avatar"><span class="ease-3davatar__initials">AB</span></div>
```

## CSS class naming conventions
- `.ease-3d-avatar` — root container
- `.ease-3d-avatar__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-3davatar-bg: #6366f1;
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

Closes #78847
