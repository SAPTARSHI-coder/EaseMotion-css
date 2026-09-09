# CSS Meteor Shower Loader

A mesmerizing full-screen loading animation featuring glowing meteors streaking diagonally across the night sky, built entirely with CSS keyframes.

## Features
- Pure CSS and HTML implementation without any JavaScript or SVG dependencies.
- **Component Architecture**: 
  - **The Meteors**: The individual `.meteor` elements are constructed using a combination of a CSS `linear-gradient` (to create the fading tail) and a `box-shadow` (to create the glowing aura). A `::before` pseudo-element is added to the leading edge to act as the bright, condensed core of the meteor head.
  - **The Diagonal Shower Trick**: To make the meteors streak diagonally downwards, the parent `.meteor-shower` container is rotated by `-45deg`. This dramatically simplifies the `@keyframes` animation, as the individual meteors only need to be animated along a single straight horizontal axis (`transform: translateX()`), and the parent's rotation naturally handles the diagonal math.
  - **Organic Randomization**: To prevent the animation from looking like a uniform, looping gif, several meteors are used, each with uniquely assigned CSS classes (`.m-1` through `.m-6`). These classes assign different starting `top` positions, slightly varied `animation-duration` values, and staggered `animation-delay` times. The combination of these mismatched timers creates an endless, organic-feeling shower.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), ensuring the night sky background blends seamlessly.
- Fully accessible semantic structure. The meteors are hidden from screen readers using `aria-hidden="true"`, and the loader container provides an `aria-label` detailing the loading status. Honors the `prefers-reduced-motion` accessibility standard by hiding the meteors and freezing the pulsing text for motion-sensitive users.

## Usage
Open `demo.html` in your browser to view the loading screen and meteor shower.

## Files
- `demo.html`: The HTML structure defining the sky container, the loading text, and the individual meteor elements.
- `style.css`: The styling, the meteor tail gradients, and the diagonal keyframe animations.
