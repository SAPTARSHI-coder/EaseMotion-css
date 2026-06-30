# Ease Liquid Button Interaction Components

An advanced CSS-only micro-interaction feature set supplying fluid blob and liquid backgrounds utilizing dynamic nested layouts.

## Technical Implementation Details

- **Border-Radius Morph Technique**: Leverages custom percentage distributions (`60% 40% 30% 70% / 60% 30% 70% 40%`) on multi-layered scaling absolute objects. This mimics liquid physical characteristics when paired with rotation matrices.
- **Performance Optimizations**: Explicitly utilizes `will-change: transform` to engage device layer composition for smooth 60fps rendering instead of memory-heavy blur filter implementations.
- **Accessibility Fallback Profile**: Fully covers explicit `prefers-reduced-motion` compliance media queries, resetting elements instantly to solid high-contrast color values for motion-sensitive users.

## How to Customize

Adjust values in `:root` to adapt execution parameters:

- `--ease-liquid-color`: Change the primary fluid background base hex code.
- `--ease-liquid-speed`: Controls transition times.
