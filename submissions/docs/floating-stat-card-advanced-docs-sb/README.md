# Floating Stat Card — advanced styling

Documentation guide for the **Floating Stat Card** component, focused on **advanced styling**.

## Overview
Advanced styling guide for the floating stat card: gradient accents, sparkline trend, and elevation tiers via modifier classes.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<article class="ease-stat-card ease-stat-card--lg">
  <span class="ease-stat-card__label">Revenue</span>
  <span class="ease-stat-card__value">$12,480</span>
  <span class="ease-stat-card__trend is-up">+8.2%</span>
</article>
```

## CSS class naming conventions
- `.ease-floating-stat-card-advanced` — root container
- `.ease-floating-stat-card-advanced__<element>` — BEM-style child elements
- `.ease-floating-stat-card-advanced--<variant>` — appearance modifier classes
- `.is-active`, `.is-up`, `.is-down` — state modifier classes

## Custom CSS variable overrides
```css
:root {
  --ease-stat-card-bg: #6366f1;
  --ease-stat-card-shadow: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<input>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- `aria-current`, `aria-pressed`, `aria-label`, and `role` attributes are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons/chips.
- For popovers/drawers, Escape closes and returns focus to the trigger.

Closes #81565
