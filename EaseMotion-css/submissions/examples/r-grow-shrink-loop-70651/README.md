# CSS Grow Shrink Loop

A smooth continuous grow-and-shrink animation created entirely with CSS.

## Features

- Pure CSS implementation
- Continuous breathing-style animation
- Glowing animated orb
- Expanding and contracting rings
- Responsive layout
- No JavaScript required
- Accessible semantic labeling
- `prefers-reduced-motion` support

## Files

- `demo.html` - Demo markup
- `style.css` - Component styling and animations

## Usage

Open `demo.html` in a modern browser.

## Animation

The main animation uses CSS `transform: scale()` with an
`ease-in-out` timing function to create a smooth grow-and-shrink loop.

The animation continuously moves between a smaller and larger scale.

## Accessibility

The animated illustration has an accessible label describing its
purpose.

Users who prefer reduced motion are shown a static version through
the `prefers-reduced-motion` media query.

## Browser Support

Works in modern browsers supporting:

- CSS animations
- CSS transforms
- CSS gradients
- CSS media queries