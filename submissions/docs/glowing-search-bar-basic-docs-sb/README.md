# Glowing Search Bar — basic usage

Documentation guide for the **Glowing Search Bar** component, focused on **basic usage**.

## Overview
A search bar with a soft outer glow that intensifies on focus, a magnifier icon, and a clear button.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<form class="ease-search">
  <input type="search" class="ease-search__input" placeholder="Search…" aria-label="Search" />
  <button class="ease-search__clear" type="reset" aria-label="Clear">×</button>
</form>
```

## CSS class naming conventions
- `.ease-{slug}` — root container
- `.ease-{slug}__<element>` — BEM-style child elements
- `.is-active`, `.is-complete`, `.is-up`, `.is-down` — state modifier classes

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
- Decorative icons are hidden from AT with `aria-hidden="true"` or `alt=""`.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.
- For popovers/menus, Escape closes and returns focus to the trigger.

Closes #81572
