# SaaS Modern Filter Bar — basic usage

Documentation guide for the **SaaS Modern Filter Bar** component, focused on **basic usage**.

## Overview
Basic usage guide for the SaaS Modern filter bar: chip-style filter buttons, an active state, and a clear-all action.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<form class="ease-filter-bar">
  <button class="ease-filter-bar__chip is-active" type="button" aria-pressed="true">All</button>
  <button class="ease-filter-bar__chip" type="button" aria-pressed="false">Active</button>
  <button class="ease-filter-bar__clear" type="reset">Clear</button>
</form>
```

## CSS class naming conventions
- `.ease-saas-modern-filter-bar-basic` — root container
- `.ease-saas-modern-filter-bar-basic__<element>` — BEM-style child elements
- `.ease-saas-modern-filter-bar-basic--<variant>` — appearance modifier classes
- `.is-active`, `.is-up`, `.is-down` — state modifier classes

## Custom CSS variable overrides
```css
:root {
  --ease-filter-accent: #6366f1;
  --ease-filter-bg: #6366f1;
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

Closes #81541
