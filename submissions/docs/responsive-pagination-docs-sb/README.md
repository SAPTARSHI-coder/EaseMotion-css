# Responsive Pagination

Documentation demonstrating how to use the **Responsive Pagination** component.

## Overview
A pagination bar that collapses to prev/next on small screens, with aria-current on the active page.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<nav class="ease-rpagination" aria-label="Pagination"><button class="ease-rpagination__btn" aria-label="Previous">‹</button><button class="ease-rpagination__page is-active" aria-current="page">1</button><button class="ease-rpagination__page">2</button><button class="ease-rpagination__page">3</button><button class="ease-rpagination__btn" aria-label="Next">›</button></nav>
```

## CSS class naming conventions
- `.ease-responsive-pagination` — root container
- `.ease-responsive-pagination__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-rpagination-accent: #6366f1;
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

Closes #78761
