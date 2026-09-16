# 3D DNA Helix 🧬✨

A stunning 3D rotating DNA double helix with glowing nucleotide nodes, connecting rungs, and floating particles. Built entirely with pure CSS 3D transforms.

## Features
- **True 3D Rotation**: Uses `preserve-3d` and `rotateY` for realistic helix spinning.
- **Dual Strand System**: Cyan and magenta strands with opposite Z-offsets creating the double helix structure.
- **Glowing Nodes**: Each nucleotide has a `blur()` glow halo for neon effect.
- **Connecting Rungs**: Gradient bars linking the two strands with 3D depth.
- **Floating Particles**: Ambient particles drifting around the helix.
- **Hover Interaction**: Speeds up rotation and brightens nodes on hover.
- **Zero JavaScript**: All animations are pure CSS.

## Customization
Edit CSS variables in `:root`:
- `--strand-a-color` / `--strand-b-color`: Change strand colors.
- `--rotation-speed`: Control helix rotation speed.
- `--node-size`: Adjust nucleotide sphere size.
- `--rung-width`: Change the distance between strands.
- `--glow-intensity`: Control glow opacity.

## Browser Support
Works in all modern browsers with CSS 3D transform support.

---
*Part of the [EaseMotion CSS](https://github.com/SAPTARSHI-coder/EaseMotion-css) framework.*