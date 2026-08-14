# Holographic Foil Card

A stunning 3D trading card with a shiny holographic foil effect, built entirely with CSS.

## Features
- **3D Hover Transforms:** Uses `transform-style: preserve-3d` and `rotate3d` to give depth to the card when hovered.
- **Holographic Foil:** Achieved by combining `linear-gradient` for shine and `repeating-linear-gradient` for a rainbow effect, mixed using `mix-blend-mode: color-dodge`.
- **Dynamic Glare:** A radial gradient layer that moves during hover to simulate light reflection.
- **Inner Depth:** The content inside the card pops out using `transform: translateZ()` creating a realistic parallax effect.

## Structure
- `demo.html`: The markup for the card, separated into content, glare, and foil layers.
- `style.css`: The styling that handles the 3D transforms, blending modes, and keyframe animations for the shimmer and glare.

## How to run
Simply open `demo.html` in any modern web browser to see the holographic card in action.
