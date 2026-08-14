# CSS-only Dropdown

Documentation demonstrating how to use the **CSS-only Dropdown** component.

## Overview
A pure-CSS dropdown using :focus-within to stay open while focused, no JavaScript.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<div class="ease-cdropdown"><button class="ease-cdropdown__trigger">Menu</button><ul class="ease-cdropdown__menu" role="menu"><li role="none"><a role="menuitem" href="#">Open</a></li><li role="none"><a role="menuitem" href="#">Edit</a></li></ul></div>
```

## CSS class naming conventions
- `.ease-css-only-dropdown` — root container
- `.ease-css-only-dropdown__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-cdropdown-bg: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<input>`, `<a>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- `aria-label`, `aria-current`, `aria-expanded`, `role`, and `aria-roledescription` are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.

Closes #79678
