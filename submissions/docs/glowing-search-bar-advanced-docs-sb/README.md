# Glowing Search Bar — advanced styling

Documentation guide for the **Glowing Search Bar** component, focused on **advanced styling**.

## Overview
Advanced styling guide for the glowing search bar: animated glow pulse, icon slot, and results dropdown.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<form class="ease-search">
  <span class="ease-search__icon" aria-hidden="true">🔍</span>
  <input type="search" class="ease-search__input" placeholder="Search…" aria-label="Search" />
  <ul class="ease-search__results" role="listbox" hidden><li role="option">Result 1</li></ul>
</form>
```

## CSS class naming conventions
- `.ease-glowing-search-bar-advanced` — root container
- `.ease-glowing-search-bar-advanced__<element>` — BEM-style child elements
- `.ease-glowing-search-bar-advanced--<variant>` — appearance modifier classes
- `.is-active`, `.is-up`, `.is-down` — state modifier classes

## Custom CSS variable overrides
```css
:root {
  --ease-search-glow: #6366f1;
  --ease-search-bg: #6366f1;
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

Closes #81573
