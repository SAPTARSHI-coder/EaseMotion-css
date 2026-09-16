# Material Design Split Button — advanced styling

Documentation guide for the **Material Design Split Button** component, focused on **advanced styling**.

## Overview
Advanced styling for the Material Design split button: an elevated shadow, ripple on click, and a dropdown caret.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<div class="ease-split"><button class="ease-split__main">Save</button><button class="ease-split__caret" aria-haspopup="true" aria-expanded="false" aria-label="More options">▾</button></div>
```

## CSS class naming conventions
- `.ease-material-split-button-advanced` — root container
- `.ease-material-split-button-advanced__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-split-accent: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<a>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- `aria-label`, `aria-pressed`, `aria-expanded`, `aria-selected`, `role`, and `aria-controls` are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.
- For accordions/dropdowns, Escape closes and returns focus to the trigger.

Closes #81597
