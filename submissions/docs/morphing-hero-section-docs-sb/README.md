# Morphing Hero Section

Documentation demonstrating how to use the **Morphing Hero Section** component.

## Overview
A hero section with a morphing gradient blob background behind a headline and CTA.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<header class="ease-mhero"><div class="ease-mhero__blob" aria-hidden="true"></div><h1 class="ease-mhero__title">Morph</h1><button class="ease-mhero__btn">Start</button></header>
```

## CSS class naming conventions
- `.ease-morphing-hero-section` — root container
- `.ease-morphing-hero-section__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-mhero-bg: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<input>`, `<a>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- `aria-label`, `aria-current`, and `role` are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.

Closes #78695
