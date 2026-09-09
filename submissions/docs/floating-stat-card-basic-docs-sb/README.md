# Floating Stat Card — basic usage

Documentation guide for the **Floating Stat Card** component, focused on **basic usage**.

## Overview
A floating stat card with an elevated shadow, a large metric value, a label, and an up/down trend indicator.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<article class="ease-stat-card">
  <span class="ease-stat-card__label">Revenue</span>
  <span class="ease-stat-card__value">$12,480</span>
  <span class="ease-stat-card__trend is-up">+8.2%</span>
</article>
```

## CSS class naming conventions
- `.ease-{slug}` — root container
- `.ease-{slug}__<element>` — BEM-style child elements
- `.is-active`, `.is-complete`, `.is-up`, `.is-down` — state modifier classes

## Custom CSS variable overrides
```css
:root {
  --ease-stat-card-bg: #6366f1;
  --ease-stat-card-shadow: #6366f1;
  --ease-stat-accent: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<input>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- Decorative icons are hidden from AT with `aria-hidden="true"` or `alt=""`.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.
- For popovers/menus, Escape closes and returns focus to the trigger.

Closes #81564
