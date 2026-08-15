# Dynamic Hero Section

Documentation demonstrating how to use the **Dynamic Hero Section** component.

## Overview
A hero section with an animated gradient background that shifts hues over time.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<header class="ease-dhero"><h1 class="ease-dhero__title">Dynamic</h1><p class="ease-dhero__sub">Animated gradient hero</p><button class="ease-dhero__btn">Go</button></header>
```

## CSS class naming conventions
- `.ease-dynamic-hero-section` — root container
- `.ease-dynamic-hero-section__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-dhero-bg: #6366f1;
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

Closes #78586
