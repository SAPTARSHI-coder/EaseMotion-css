# Glassmorphism Tooltip

Documentation demonstrating how to use the **Glassmorphism Tooltip** component.

## Overview
A frosted-glass tooltip with a translucent blurred background.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<span class="ease-gtip"><button class="ease-gtip__trigger" aria-describedby="gt">Help</button><span id="gt" class="ease-gtip__bubble" role="tooltip">Frosted tip</span></span>
```

## CSS class naming conventions
- `.ease-glassmorphism-tooltip` — root container
- `.ease-glassmorphism-tooltip__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-gtip-bg: #6366f1;
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

Closes #78591
