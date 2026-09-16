# Dynamic Toggle

Documentation demonstrating how to use the **Dynamic Toggle** component.

## Overview
A toggle switch with a color-shifting track and a sliding knob, built on a checkbox.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<label class="ease-dtoggle"><input type="checkbox" class="ease-dtoggle__input" /><span class="ease-dtoggle__track"><span class="ease-dtoggle__knob"></span></span></label>
```

## CSS class naming conventions
- `.ease-dynamic-toggle` — root container
- `.ease-dynamic-toggle__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-dtoggle-on: #6366f1;
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

Closes #78570
