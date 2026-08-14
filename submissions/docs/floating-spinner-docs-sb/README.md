# Floating Spinner

Documentation demonstrating how to use the **Floating Spinner** component.

## Overview
A spinner that floats with a gentle bob while rotating.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<div class="ease-floatspin" role="status" aria-label="Loading">
  <span class="ease-floatspin__ring"></span>
</div>
```

## CSS class naming conventions
- `.ease-floating-spinner` — root container
- `.ease-floating-spinner__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-floatspin-accent: #6366f1;
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

Closes #79776
