# CSS Background: Gradient Shimmer

A smooth and visually rich gradient shimmer background animation created
entirely with HTML and vanilla CSS.

## Features

- Pure HTML and Vanilla CSS
- No JavaScript required
- Multiple animated gradient layers
- Smooth gradient movement
- Animated light streaks
- Gradient text shimmer effect
- Glass-like content panel
- Dark-mode friendly color palette
- Responsive across desktop and mobile screens
- Hardware-friendly CSS transforms
- `prefers-reduced-motion` accessibility support

## Files

- `demo.html` — Demo structure and visual elements
- `style.css` — Gradient layers, shimmer animation, and responsive styling
- `README.md` — Documentation

## How It Works

The background combines multiple blurred radial gradients with CSS
animations to create a continuously shifting color environment.

Additional diagonal light streaks move across the viewport to produce
the shimmer effect. The heading uses a moving linear gradient to extend
the shimmer visual into the foreground content.

No JavaScript or external assets are required.

## Performance

The animation uses CSS `transform` and `opacity` properties where
possible and uses `will-change` for the large animated gradient layers.

## Accessibility

Decorative visual elements are hidden from assistive technologies.

The animation is disabled when the user has enabled
`prefers-reduced-motion`.

## Issue

Implemented for EaseMotion CSS issue #73780.