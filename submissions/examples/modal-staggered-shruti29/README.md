# CSS Staggered Entrance Modal
Closes #34163

## Description
Pure CSS modal where child elements enter with staggered animation. JS only toggles `.is-open` class.

## Features
- Pure CSS `@keyframes` animation
- CSS variables for customization
- Keyboard accessible: `Esc` to close
- `prefers-reduced-motion` support

## Customization
```css
:root {
  --modal-stagger-delay: 0.08s;
  --modal-duration: 0.4s;
}