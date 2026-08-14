# Hover Avatar

Documentation demonstrating how to use the **Hover Avatar** component.

## Overview
An avatar that scales up and reveals a status ring on hover/focus.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<div class="ease-havatar" role="img" aria-label="Avatar"><span class="ease-havatar__initials">AB</span></div>
```

## CSS class naming conventions
- `.ease-hover-avatar` — root container
- `.ease-hover-avatar__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-havatar-bg: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<input>`, `<a>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- `aria-label`, `aria-current`, `aria-modal`, `role`, and `aria-expanded` are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.
- For modals, Escape closes and returns focus to the trigger.

Closes #78782
