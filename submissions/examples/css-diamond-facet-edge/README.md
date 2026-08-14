# CSS Background: Diamond Facet Edge

A smooth, accessible, and performant pure CSS background animation
inspired by the reflective geometry and sharp edges of a cut diamond.

## Features

- Pure HTML and Vanilla CSS
- No JavaScript required
- Multiple animated diamond facets
- Geometric edge highlights
- Reflective gradient surfaces
- Smooth CSS keyframe animations
- Dark-mode friendly design
- Responsive layout
- Hardware-friendly transforms and opacity
- `prefers-reduced-motion` support
- No external dependencies

## Files

- `demo.html` — Demo structure
- `style.css` — Complete animation and styling
- `README.md` — Documentation

## How It Works

The effect uses rotated square elements to create diamond-shaped
facets.

Each facet contains subtle gradients and internal diagonal lines
to simulate reflective surfaces.

The facets move and rotate slowly using CSS keyframes while
additional edge lines sweep through the background to create
a dynamic reflective appearance.

## Performance

The animation relies primarily on CSS `transform` and `opacity`
for smooth rendering.

No JavaScript, images, external libraries, or external assets
are required.

## Accessibility

Decorative facets and edge elements are marked with
`aria-hidden="true"`.

The animation respects the user's reduced-motion preference
through the `prefers-reduced-motion` media query.

## Issue

Implemented for EaseMotion CSS issue #73784.