# CSS-only Avatar

Documentation demonstrating how to use the **CSS-only Avatar** component.

## Overview
A pure-CSS avatar with initials, a status dot, and a gradient ring, no image required.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<div class="ease-avatar" role="img" aria-label="Avatar for AB"><span class="ease-avatar__initials">AB</span><span class="ease-avatar__status" aria-hidden="true"></span></div>
```

## CSS class naming conventions
- `.ease-css-only-avatar` — root container
- `.ease-css-only-avatar__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-avatar-bg: #6366f1;
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

Closes #78689
