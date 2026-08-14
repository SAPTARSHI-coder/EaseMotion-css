# 3D Hero Section

Documentation demonstrating how to use the **3D Hero Section** component.

## Overview
A hero section with a 3D-perspective headline that tilts on hover and a CTA button.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<header class="ease-3dhero" tabindex="0"><h1 class="ease-3dhero__title">3D Hero</h1><button class="ease-3dhero__btn">Start</button></header>
```

## CSS class naming conventions
- `.ease-3d-hero-section` — root container
- `.ease-3d-hero-section__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-3dhero-bg: #6366f1;
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

Closes #79832
