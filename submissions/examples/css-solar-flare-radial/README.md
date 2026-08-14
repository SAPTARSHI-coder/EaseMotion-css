# CSS Background: Solar Flare Radial

A smooth, accessible, and performant radial background animation
inspired by the glowing energy and movement of solar flares.

## Features

- Pure HTML and Vanilla CSS
- No JavaScript required
- Animated radial gradients
- Glowing solar core
- Dynamic radial light rays
- Smooth CSS transitions and keyframes
- Dark-mode friendly design
- Responsive layout
- Hardware-friendly transforms
- `prefers-reduced-motion` accessibility support
- No external dependencies

## Files

- `demo.html` — Demo structure
- `style.css` — Background animation and styling
- `README.md` — Documentation

## How It Works

The effect combines multiple radial gradients with animated
blurred layers to create a solar flare appearance.

A bright central core acts as the main light source while
several radial rays create depth and movement around it.

CSS transforms, opacity, gradients, and keyframes are used
to create the animation without JavaScript.

## Performance

The continuously animated elements use CSS `transform` and
`opacity` where possible to provide smooth rendering.

No external libraries, JavaScript, images, or assets are required.

## Accessibility

Decorative visual layers are marked with `aria-hidden="true"`.

The animation respects the user's system preference for reduced
motion through `prefers-reduced-motion`.

## Issue

Implemented for EaseMotion CSS issue #73788.