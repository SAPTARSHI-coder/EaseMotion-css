# Water Intake Fill Animation

This submission implements an animated water glass fill indicator for daily hydration tracking (Issue **#14027**).

## What It Does

A glass-shaped element fills with water color representing hydration progress. The water level rises with a smooth spring-like transition and a wave animation on the surface.

## Features

- Glass shape via `clip-path: polygon()` for tapered cup look
- Water fill animates with `cubic-bezier(0.34, 1.56, 0.64, 1)` spring easing
- Wave effect via animated `border-radius` keyframes
- +250ml / +500ml buttons, preset dots (25/50/75/100%), reset
- Real-time stats: ml consumed, goal, percentage
- `prefers-reduced-motion` disables animations

## Files

- `demo.html` — Interactive hydration tracker with glass, stats, controls
- `style.css` — Glass shape, water fill, wave, responsive layout
- `README.md` — This documentation
