# Hover Tooltip

Documentation demonstrating how to use the **Hover Tooltip** component.

## Overview
A tooltip that appears above its trigger on hover/focus with a fade and slight rise.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<span class="ease-htip"><button class="ease-htip__trigger" aria-describedby="ht">Info</button><span id="ht" class="ease-htip__bubble" role="tooltip">Helpful tip</span></span>
```

## CSS class naming conventions
- `.ease-hover-tooltip` — root container
- `.ease-hover-tooltip__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-htip-bg: #6366f1;
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

Closes #78579
