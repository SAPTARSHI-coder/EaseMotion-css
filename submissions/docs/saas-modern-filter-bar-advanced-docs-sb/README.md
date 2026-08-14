# SaaS Modern Filter Bar — advanced styling

Documentation guide for the **SaaS Modern Filter Bar** component, focused on **advanced styling**.

## Overview
Advanced styling guide for the SaaS Modern filter bar: grouped chips, dropdowns, and an active-filter count badge.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<form class="ease-filter-bar">
  <fieldset class="ease-filter-bar__group">
    <legend class="ease-filter-bar__legend">Status</legend>
    <button class="ease-filter-bar__chip is-active" type="button" aria-pressed="true">All</button>
    <button class="ease-filter-bar__chip" type="button" aria-pressed="false">Active</button>
  </fieldset>
  <span class="ease-filter-bar__count">2 filters</span>
</form>
```

## CSS class naming conventions
- `.ease-saas-modern-filter-bar-advanced` — root container
- `.ease-saas-modern-filter-bar-advanced__<element>` — BEM-style child elements
- `.ease-saas-modern-filter-bar-advanced--<variant>` — appearance modifier classes
- `.is-active`, `.is-today`, `.is-selected`, `.is-left`, `.is-right` — state modifier classes

## Custom CSS variable overrides
```css
:root {
  --ease-filter-accent: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<input>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- `aria-label`, `role`, `aria-modal`, `aria-pressed`, and `aria-describedby` are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.
- For popovers/drawers, Escape closes and returns focus to the trigger.

Closes #81542
