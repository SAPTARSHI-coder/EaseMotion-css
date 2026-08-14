# 3D Tooltip

Documentation demonstrating how to use the **3D Tooltip** component.

## Overview
A tooltip that appears with a 3D flip-from-top animation on hover/focus.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<span class="ease-3dtip"><button class="ease-3dtip__trigger" aria-describedby="t3">Info</button><span id="t3" class="ease-3dtip__bubble" role="tooltip">3D tip</span></span>
```

## CSS class naming conventions
- `.ease-3d-tooltip` — root container
- `.ease-3d-tooltip__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-3dtip-bg: #6366f1;
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

Closes #79681
