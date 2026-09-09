# Image Burst Reveal (#87557)

An interactive gallery media component where an image disassembles into scattered 3D matrix tiles and snaps back together upon user interaction.

## Features
- **Scattered Tile Matrix:** 3x3 split grid that scatters across 3D space with random translations and rotations.
- **Smooth Assembly Transitions:** Hardware-accelerated cubic-bezier transitions for assembling and disassembling tiles.
- **Interactive Triggers:** Supports both hover state triggers and interactive button toggles.
- **Accessibility:** Fully supports `@media (prefers-reduced-motion: reduce)` by disabling 3D transforms.

## Usage
Include `style.css` in your project and structure the markup using `.burst-container` containing tile elements with background offsets.