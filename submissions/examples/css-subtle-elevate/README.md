# CSS Background: Subtle Elevate

A smooth, accessible, and performant background animation that creates
a subtle floating and elevation effect using pure HTML and vanilla CSS.

## Features

- Pure HTML and Vanilla CSS
- No JavaScript required
- Smooth ambient gradient movement
- Floating decorative glass elements
- Subtle elevation animation
- Dark-mode friendly design
- Responsive layout
- Hardware-friendly CSS transforms
- `prefers-reduced-motion` accessibility support
- No external assets or dependencies

## Files

- `demo.html` — Demo structure
- `style.css` — Complete animation and styling
- `README.md` — Documentation

## How It Works

The effect combines blurred radial gradients with slowly moving
CSS transforms to create a calm ambient background.

Additional translucent floating orbs provide depth, while the central
content card uses a subtle vertical elevation animation.

All animation is handled through CSS keyframes without JavaScript.

## Performance

The animation primarily uses `transform` and `opacity` for movement
and rendering efficiency. `will-change` is applied to the continuously
animated decorative elements.

## Accessibility

Decorative visual elements are marked with `aria-hidden="true"`.

The animation automatically stops when the user has enabled
`prefers-reduced-motion`.

## Issue

Implemented for EaseMotion CSS issue #73781.