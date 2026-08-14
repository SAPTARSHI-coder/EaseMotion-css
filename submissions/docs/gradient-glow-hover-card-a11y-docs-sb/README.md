# Gradient Glow Hover Card — accessibility integration

Documentation guide for the **Gradient Glow Hover Card** component, focused on **accessibility integration**.

## Overview
Accessibility guide for the gradient glow hover card: role=article, focus-visible, reduced-motion guard.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<article class="ease-gghc" role="article" aria-label="Glow card" tabindex="0"><h3 class="ease-gghc__title">Glow Card</h3><p class="ease-gghc__text">Focus for glow.</p></article>
```

## CSS class naming conventions
- `.ease-gradient-glow-hover-card-a11y` — root container
- `.ease-gradient-glow-hover-card-a11y__<element>` — BEM-style child elements
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

Closes #81616
