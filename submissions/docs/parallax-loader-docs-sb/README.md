# Parallax Loader

Documentation demonstrating how to use the **Parallax Loader** component.

## Overview
A loader with three rings moving at different depths for a parallax spin.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<div class="ease-pload" role="status" aria-label="Loading"><span class="ease-pload__ring"></span><span class="ease-pload__ring"></span><span class="ease-pload__ring"></span></div>
```

## CSS class naming conventions
- `.ease-parallax-loader` — root container
- `.ease-parallax-loader__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-pload-accent: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<input>`, `<a>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- `aria-label`, `aria-current`, `aria-describedby`, `role`, and `aria-pressed` are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.
- For modals/tooltips, Escape closes and returns focus to the trigger.

Closes #78863
