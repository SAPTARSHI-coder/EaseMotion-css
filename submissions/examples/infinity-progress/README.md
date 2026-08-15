# Infinity Progress

A dependency-free indeterminate loading indicator inspired by an endless progress bar that sweeps and shrinks across a track.

## Features

- Endless indeterminate animation
- Sweeping and shrinking progress runner
- Soft glow trail
- Minimal dark visual style
- Responsive layout
- Reduced-motion support
- No external libraries or dependencies

## Files

- `demo.html` — semantic markup for the progress component
- `style.css` — all component styling and animations

## Concepts Used

### Indeterminate Progress

The progress value is intentionally unknown. Instead of moving from zero to one hundred, the animated runner continuously travels across the track.

### Sweep and Shrink

The runner changes its width while moving, creating the effect of a streak that expands and contracts during each pass.

### Glow Trail

A blurred accent layer follows the moving runner to add depth without requiring JavaScript.

## Technologies

- HTML5
- CSS3
- CSS Custom Properties
- CSS Animations
- CSS Gradients

## Preview

Open `demo.html` in a modern browser to view the component.

## Accessibility

The progress track uses `role="progressbar"` with an indeterminate state and includes `prefers-reduced-motion` support.