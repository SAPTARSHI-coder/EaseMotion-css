# Gradient Glow Hover Card — advanced styling

Documentation guide for the **Gradient Glow Hover Card** component, focused on **advanced styling**.

## Overview
Advanced styling for the gradient glow hover card: an animated gradient border glow on hover with a lift.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<article class="ease-gghc"><h3 class="ease-gghc__title">Glow Card</h3><p class="ease-gghc__text">Hover for gradient glow.</p></article>
```

## CSS class naming conventions
- `.ease-gradient-glow-hover-card-advanced` — root container
- `.ease-gradient-glow-hover-card-advanced__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-gghc-glow: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements where possible.
- `:focus-visible` outlines for keyboard users.
- `aria-label`, `aria-current`, `aria-modal`, `role` used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus; Enter/Space to activate; Escape closes modals.

Closes #81614
