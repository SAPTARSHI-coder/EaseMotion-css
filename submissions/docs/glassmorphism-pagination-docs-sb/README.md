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
<nav class="ease-pagination" aria-label="Pagination">
  <button class="ease-pagination__btn" aria-label="Previous page">‹</button>
  <button class="ease-pagination__page is-active" aria-current="page">1</button>
  <button class="ease-pagination__page">2</button>
  <button class="ease-pagination__page">3</button>
  <button class="ease-pagination__btn" aria-label="Next page">›</button>
</nav>
```

## CSS class naming conventions
- `.ease-glassmorphism-pagination` — root container
- `.ease-glassmorphism-pagination__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-page-accent: #6366f1;
  --ease-page-bg: #6366f1;
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

Closes #79762
