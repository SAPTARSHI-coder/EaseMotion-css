# Floating Breadcrumb

Documentation demonstrating how to use the **Floating Breadcrumb** component.

## Overview
A breadcrumb trail that lifts each item on hover with a connected separator.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<nav class="ease-fbreadcrumb" aria-label="Breadcrumb"><ol class="ease-fbreadcrumb__list"><li class="ease-fbreadcrumb__item"><a href="#">Home</a></li><li class="ease-fbreadcrumb__item"><a href="#">Section</a></li><li class="ease-fbreadcrumb__item" aria-current="page">Page</li></ol></nav>
```

## CSS class naming conventions
- `.ease-floating-breadcrumb` — root container
- `.ease-floating-breadcrumb__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-fcrumb-accent: #6366f1;
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

Closes #78687
