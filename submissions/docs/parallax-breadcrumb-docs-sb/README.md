# Parallax Breadcrumb

Documentation demonstrating how to use the **Parallax Breadcrumb** component.

## Overview
A breadcrumb where items shift at different depths on hover for a parallax effect.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<nav class="ease-pbc" aria-label="Breadcrumb"><ol class="ease-pbc__list"><li class="ease-pbc__item" style="--d:3"><a href="#">Home</a></li><li class="ease-pbc__item" style="--d:2"><a href="#">Library</a></li><li class="ease-pbc__item" style="--d:1" aria-current="page">Page</li></ol></nav>
```

## CSS class naming conventions
- `.ease-parallax-breadcrumb` — root container
- `.ease-parallax-breadcrumb__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-pbc-bg: #6366f1;
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

Closes #78854
