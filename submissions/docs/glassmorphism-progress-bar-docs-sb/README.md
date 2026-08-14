# Glassmorphism Progress Bar

Documentation demonstrating how to use the **Glassmorphism Progress Bar** component.

## Overview
A frosted-glass progress bar with a translucent track and a glowing fill.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<div class="ease-gprog" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"><div class="ease-gprog__fill"></div></div>
```

## CSS class naming conventions
- `.ease-glassmorphism-progress-bar` — root container
- `.ease-glassmorphism-progress-bar__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-gprog-accent: #6366f1;
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

Closes #78614
