# Animated Dropdown

Documentation demonstrating how to use the **Animated Dropdown** component.

## Overview
A dropdown menu that expands with a slide+fade and an animated chevron.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<div class="ease-dropdown">
  <button class="ease-dropdown__trigger" aria-expanded="false" aria-haspopup="true">Menu <span class="ease-dropdown__chevron" aria-hidden="true">▾</span></button>
  <ul class="ease-dropdown__menu" role="menu" hidden>
    <li role="none"><button role="menuitem">Profile</button></li>
    <li role="none"><button role="menuitem">Settings</button></li>
  </ul>
</div>
```

## CSS class naming conventions
- `.ease-animated-dropdown` — root container
- `.ease-animated-dropdown__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-dropdown-bg: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<a>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- `aria-label`, `aria-current`, `role`, and `aria-expanded` are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.

Closes #79778
