# Responsive Avatar

Documentation demonstrating how to use the **Responsive Avatar** component.

## Overview
A responsive avatar with initials, a status dot, and a gradient ring that scales on small screens.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<div class="ease-ravatar" role="img" aria-label="Avatar for JD"><span class="ease-ravatar__initials">JD</span><span class="ease-ravatar__status" aria-hidden="true"></span></div>
```

## CSS class naming conventions
- `.ease-responsive-avatar` — root container
- `.ease-responsive-avatar__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-ravatar-bg: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<input>`, `<a>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- `aria-label`, `aria-describedby`, `aria-valuenow`, `role`, and `aria-selected` are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.

Closes #78603
