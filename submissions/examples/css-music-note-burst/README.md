# CSS Music Note Burst

A pure CSS animation where musical notes burst from a source and float upward.

## Features

- Pure CSS animation
- No JavaScript
- Staggered music notes
- Different movement directions
- Responsive layout
- Accessible markup
- Reduced-motion support

## Files

- `demo.html` — Demo page
- `style.css` — Animation and responsive styles

## Animation

The notes start from the music source, move upward and sideways, rotate slightly, and fade out before repeating.

## Accessibility

Decorative animated notes use `aria-hidden="true"` so screen readers do not announce every animated element.

The demo also respects `prefers-reduced-motion` by disabling the animation for users who request reduced motion.