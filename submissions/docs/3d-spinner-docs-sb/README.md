# 3D Spinner

Documentation demonstrating how to use the **3D Spinner** component.

## Overview
A spinner rendered with 3D perspective and a rotating ring that appears to tilt.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<div class="ease-3dspinner" role="status" aria-label="Loading"><span class="ease-3dspinner__ring"></span></div>
```

## CSS class naming conventions
- `.ease-3d-spinner` — root container
- `.ease-3d-spinner__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-3dspinner-accent: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<input>`, `<a>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- `aria-label`, `aria-current`, `aria-modal`, `role`, and `aria-expanded` are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.
- For modals, Escape closes and returns focus to the trigger.

Closes #78805
