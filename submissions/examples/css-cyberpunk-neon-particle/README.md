# CSS Particle Effect: Cyberpunk Neon

A futuristic pure CSS particle effect featuring glowing neon particles,
cyberpunk-inspired lighting, and animated visual elements.

## Features

- Pure HTML and Vanilla CSS
- No JavaScript required
- Multiple independently animated particles
- Cyan, pink, and purple neon glow effects
- Cyberpunk-inspired visual styling
- Animated neon rings
- Scanline overlay
- Glass-like central content panel
- Smooth CSS animations
- Hardware-friendly transforms
- Responsive on desktop and mobile
- Dark-mode friendly color palette
- `prefers-reduced-motion` accessibility support

## Files

- `demo.html` — Demo structure and particle elements
- `style.css` — Complete cyberpunk particle styling and animations
- `README.md` — Documentation

## How It Works

The effect uses absolutely positioned CSS particles combined with
`transform`, `opacity`, `box-shadow`, and `@keyframes` animations.

Different particles use different positions, colors, sizes, durations,
and animation delays to create an organic floating effect.

The neon rings, scanlines, gradients, and glowing text add additional
cyberpunk visual depth without requiring JavaScript or external assets.

## Performance

The animation primarily uses CSS transforms and opacity to keep the
effect smooth and performant.

## Accessibility

Decorative particles and visual elements use `aria-hidden="true"` so
they do not interfere with assistive technologies.

The animation is disabled when the user has enabled
`prefers-reduced-motion`.

## Issue

Implemented for EaseMotion CSS issue #73790.