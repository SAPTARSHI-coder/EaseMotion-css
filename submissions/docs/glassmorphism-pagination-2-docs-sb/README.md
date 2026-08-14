# Glassmorphism Pagination

Documentation demonstrating how to use the **Glassmorphism Pagination** component.

## Overview
A frosted-glass pagination bar with prev/next arrows and numbered page buttons.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<nav class="ease-gpagination" aria-label="Pagination"><button class="ease-gpagination__btn" aria-label="Previous">‹</button><button class="ease-gpagination__page is-active" aria-current="page">1</button><button class="ease-gpagination__page">2</button><button class="ease-gpagination__btn" aria-label="Next">›</button></nav>
```

## CSS class naming conventions
- `.ease-glassmorphism-pagination-2` — root container
- `.ease-glassmorphism-pagination-2__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-gpagination-accent: #6366f1;
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

Closes #79651
