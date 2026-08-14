# Floating Stat Card — accessibility integration

Documentation guide for the **Floating Stat Card** component, focused on **accessibility integration**.

## Overview
Accessibility guide for the floating stat card: aria-label on the figure, focus-visible, reduced-motion.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<figure class="ease-fstat" role="img" aria-label="Revenue stat"><figcaption class="ease-fstat__label">Revenue</figcaption><span class="ease-fstat__value">$12.4k</span></figure>
```

## CSS class naming conventions
- `.ease-floating-stat-card-a11y` — root container
- `.ease-floating-stat-card-a11y__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-fstat-bg: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements where possible.
- `:focus-visible` outlines for keyboard users.
- `aria-label`, `aria-current`, `aria-modal`, `role` used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus; Enter/Space to activate; Escape closes modals.

Closes #81566
