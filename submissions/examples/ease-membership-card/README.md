# EaseMotion Premium Membership Card

## What does this do?
This component renders a responsive, 3D-tilting premium membership card featuring an animated metallic sheen sweep and a brushed gold smart chip built entirely with pure CSS.

## How is it used?
- **Sweeping Metallic Sheen**: The sweeping glare is achieved by applying a skewed `linear-gradient` to an `::before` pseudo-element positioned absolutely over the card base. A `@keyframes` animation (`ease-sheen-sweep`) continuously sweeps the pseudo-element across the width of the card.
- **Brushed Gold Smart Chip**: The metallic chip texture is generated natively using a `conic-gradient` background combined with a repeating linear gradient overlay for micro circuit lines.
- **3D Tilt Interaction**: Perspective and `preserve-3d` transform styles enable a realistic subtle 3D tilt effect on hover (`rotateY` and `rotateX`).

## Why is it useful?
Generating high-fidelity UI textures and lighting effects natively in CSS eliminates the need to load heavy PNG/SVG image assets or rely on JavaScript libraries to calculate lighting angles, resulting in massive performance gains and smooth 60fps animations.
