# Liquid Fill Progress Bar

## What is this?
A CSS-first progress bar that transforms flat color fills into an undulating liquid surface. It features overlapping wave layers and a wobbling meniscus curve at the leading edge, simulating container-filling physics.

## How does it work?
The component styles `::before` and `::after` pseudo-elements of the `.ease-liquid-bar` container to serve as back and front wave layers.
Both layers use a repeating wave SVG pattern via `mask-image`. Animating `mask-position-x` creates the side-to-side ripple, and differing speeds/opacities generate depth.
The wobbling meniscus is achieved by animating `border-radius` at the right side of the pseudo-elements. The width is driven directly by `--progress`, keeping the progress bar accurate and accessible.

## Why is it useful?
It replaces generic loading animations with highly polished visual physics. Because it runs purely on CSS variables, you can customize the color (`--liquid-color`), speeds, and glow properties from a single style rule without touching JavaScript. It also respects prefers-reduced-motion to keep the experience accessible.
