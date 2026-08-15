# Neumorphic Loader

Documentation demonstrating how to use the **Neumorphic Loader** component.

## Overview
A neumorphic spinner loader with soft inset/outset shadows and a rotating ring.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<div class="ease-loader" role="status" aria-label="Loading">
  <span class="ease-loader__ring"></span>
  <span class="ease-loader__label">Loading…</span>
</div>
```

## CSS class naming conventions
- `.ease-neumorphic-loader` — root container
- `.ease-neumorphic-loader__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-loader-accent: #6366f1;
  --ease-loader-bg: #6366f1;
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

Closes #79769
