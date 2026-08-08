# 3D Tilt Social Share Bar (Startup Theme)

A modern, glassmorphic social share bar that interacts with the user's cursor. Built with a "Startup" aesthetic, it features a pill-shaped translucent background and individual icons that push out in 3D space.

## Features

- **Perspective Tracking**: Uses a tiny JavaScript snippet to track mouse coordinates and map them to CSS custom properties (`--tilt-x` and `--tilt-y`). The CSS then applies these to a 3D `transform: rotateX() rotateY()`.
- **Z-Axis Popping**: Individual social buttons use `translateZ(10px)` by default, and push out further (`translateZ(30px)`) when hovered, making them literally pop out of the glass bar.
- **Glassmorphism Base**: The container uses `backdrop-filter: blur(16px)` combined with a semi-transparent white background to create a frosted glass effect that blends beautifully over any background.
- **Brand Colors**: On hover, the generic gray icons bloom into their respective brand colors (Twitter Blue, LinkedIn Blue, etc.) accompanied by a soft, color-matched glow.

## Installation

1. Copy the CSS from `style.css` into your stylesheet.
2. Copy the HTML structure from `demo.html`, ensuring the `.ease-3d-tilt-wrapper` has a unique ID (e.g., `id="tilt-bar"`).
3. Include the tiny JS script provided in `demo.html` to handle the coordinate tracking.

## Why it fits EaseMotion CSS

- **CSS-Driven Physics**: While JS is used to capture mouse coordinates, the actual animation, interpolation, and 3D rendering are entirely handled natively by the CSS engine via `transition` and `transform`, ensuring high performance.
- **Micro-interactions**: The addition of spring physics (`cubic-bezier(0.34, 1.56, 0.64, 1)`) on the individual button hovers adds that signature tactile "EaseMotion" feel to the 3D effect.
