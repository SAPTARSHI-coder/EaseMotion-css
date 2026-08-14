# Hover Progress Bar

Documentation demonstrating how to use the **Hover Progress Bar** component.

## Overview
A progress bar that fills to 100% when hovered, then drains back when the pointer leaves.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<div class="ease-hprog" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"><div class="ease-hprog__fill"></div></div>
```

## CSS class naming conventions
- `.ease-hover-progress-bar` — root container
- `.ease-hover-progress-bar__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-hprog-accent: #6366f1;
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

Closes #78564
