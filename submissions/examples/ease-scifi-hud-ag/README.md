# Sci-Fi HUD Targeting Reticle

A dynamic, rotating head-up display targeter built purely with CSS.

## Features
- **Rotating Rings:** Multiple nested rings with varying border styles (solid, dashed, dotted) rotating at different speeds and directions using `@keyframes`.
- **Targeting Box:** A central reticle with "bracket" style corners created using clever `::before` and `::after` pseudo-elements that obscure parts of the border.
- **Neon Glow:** Extensive use of `box-shadow` and `text-shadow` to create a glowing cyan and magenta interface typical of sci-fi aesthetics.

## Structure
- `demo.html`: The HTML layout defining the outer, middle, and inner rings, crosshairs, and data stream.
- `style.css`: The CSS controlling the rotation animations, scaling pulses, and neon glow effects.

## How to run
Open `demo.html` in your browser to view the animated HUD.
