# CSS Stagger Grid Entrance

A responsive staggered grid entrance layout animation, using pure CSS variables and cascading delays.

## Features

- Cascading waterfall entrance animations (`@keyframes ease-stagger-reveal`)
- Modular animation loops using CSS variables multiplier formulas (`--ease-stagger-base`)
- Accessible structure including focus outlines and proper keyboard tab index parameters
- Complete styling rules for hover states
- Strict performance focus leveraging GPU rendering threads
- Adaptive layout matching prefers-reduced-motion choices
- Zero Javascript dependencies

## Files

- `demo.html` — feature card collection layout showcasing the staggered entrance sequence
- `style.css` — styling, layouts, variables, keyframes, and timing parameters

## Usage

```html
<div class="ease-stagger-grid" role="region" aria-label="Feature grid portfolio">
  <div class="ease-grid-item" tabindex="0" role="button">
    <!-- Card content here -->
  </div>
  <div class="ease-grid-item" tabindex="0" role="button">
    <!-- Card content here -->
  </div>
</div>
```

## CSS Custom Properties

```css
:root {
  --ease-stagger-base:  0.05s; /* delay factor multiplied per grid item index */
  --ease-anim-duration:  0.6s;  /* length of the animation fade/translate cycle */
}
```

## Issue

EaseMotion CSS issue #68649.
