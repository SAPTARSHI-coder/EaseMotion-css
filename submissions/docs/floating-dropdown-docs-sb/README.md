# Floating Dropdown

Documentation demonstrating how to use the **Floating Dropdown** component.

## Overview
A dropdown menu that floats with a soft shadow and opens with a slide-down.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<div class="ease-fdropdown"><button class="ease-fdropdown__trigger" aria-expanded="false" aria-haspopup="true">Menu</button><ul class="ease-fdropdown__menu" role="menu" hidden><li role="none"><button role="menuitem">Item 1</button></li><li role="none"><button role="menuitem">Item 2</button></li></ul></div>
```

## CSS class naming conventions
- `.ease-floating-dropdown` — root container
- `.ease-floating-dropdown__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-fdropdown-bg: #6366f1;
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

Closes #79689
