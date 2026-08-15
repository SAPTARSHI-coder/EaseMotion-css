# Parallax Dropdown

Documentation demonstrating how to use the **Parallax Dropdown** component.

## Overview
A dropdown menu that opens with a parallax slide and layered shadow.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<div class="ease-pdropdown"><button class="ease-pdropdown__trigger" aria-expanded="false" aria-haspopup="true">Menu</button><ul class="ease-pdropdown__menu" role="menu" hidden><li role="none"><button role="menuitem">Open</button></li><li role="none"><button role="menuitem">Edit</button></li></ul></div>
```

## CSS class naming conventions
- `.ease-parallax-dropdown` — root container
- `.ease-parallax-dropdown__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-pdropdown-bg: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<input>`, `<a>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- `aria-label`, `aria-describedby`, `aria-valuenow`, `role`, and `aria-selected` are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.

Closes #78584
