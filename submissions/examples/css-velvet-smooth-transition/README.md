# CSS Particle Effect: Velvet Smooth Transition

A smooth, accessible, and performant pure CSS particle effect
inspired by the soft texture and flowing movement of velvet fabric.

## Features

- Pure HTML and Vanilla CSS
- No JavaScript required
- Soft glowing particles
- Smooth particle movement
- Atmospheric velvet-style glowing forms
- Subtle floating content animation
- Dark-mode friendly visual design
- Hardware-friendly transforms and opacity
- Responsive layout
- `prefers-reduced-motion` support
- No external dependencies

## Files

- `demo.html` — Demo markup
- `style.css` — Particle animation and styling
- `README.md` — Documentation

## How It Works

The effect combines small glowing CSS particles with large
blurred radial forms.

The particles use CSS keyframe animations to move smoothly
through different directions while their opacity and scale
change gradually.

Large blurred gradient orbs create the soft atmospheric
appearance associated with velvet-like surfaces.

The central content uses a translucent backdrop and subtle
floating animation to complement the particle effect.

## Performance

The animation primarily uses CSS `transform` and `opacity`,
which are suitable for smooth browser rendering.

No JavaScript, images, external libraries, or external assets
are required.

## Accessibility

Decorative particles and background elements use
`aria-hidden="true"`.

The animation respects the user's reduced-motion preference
through the `prefers-reduced-motion` media query.

## Issue

Implemented for EaseMotion CSS issue #73810.