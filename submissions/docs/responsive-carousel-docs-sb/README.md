# Responsive Carousel

Documentation demonstrating how to use the **Responsive Carousel** component.

## Overview
A responsive carousel that auto-advances and collapses to fewer slides on small screens.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<div class="ease-rcarousel" role="region" aria-roledescription="carousel"><div class="ease-rcarousel__track"><div class="ease-rcarousel__slide" role="group" aria-roledescription="slide" aria-label="1 of 3">1</div><div class="ease-rcarousel__slide" role="group" aria-roledescription="slide" aria-label="2 of 3">2</div><div class="ease-rcarousel__slide" role="group" aria-roledescription="slide" aria-label="3 of 3">3</div></div></div>
```

## CSS class naming conventions
- `.ease-responsive-carousel` — root container
- `.ease-responsive-carousel__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-rcarousel-bg: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<input>`, `<a>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- `aria-label`, `aria-current`, `aria-expanded`, `role`, and `aria-roledescription` are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.

Closes #79732
