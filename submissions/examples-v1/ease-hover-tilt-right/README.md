# Hover Tilt Right (`ease-hover-tilt-right`)

A beginner-friendly 3D hover utility component that pivots a card around its vertical (Y) axis on `:hover`, tilting the right edge away from the viewer to simulate a card leaning back in space.

## Technical Composition Breakdown

- **Y-Axis 3D Rotation:** Applies `transform: rotateY(-8deg)` on `:hover` and `:focus-visible`, pivoting the card around its vertical center so the right edge recedes and the left edge advances toward the viewer — configurable via the `--tilt-angle` custom property.
- **Parent-Level Perspective:** The `perspective: 800px` declaration lives on a dedicated `.tilt-wrap` parent rather than the card itself, since `perspective` only affects the 3D rendering of direct children — applying it correctly is the core learning point of this beginner issue.
- **Preserved 3D Context:** `transform-style: preserve-3d` on the card ensures the rotation renders as a true 3D pivot rather than a flattened 2D skew.
- **Smooth Cubic-Bezier Transition:** Uses `cubic-bezier(0.25, 0.8, 0.25, 1)` — a gentle ease-out curve — so the tilt settles smoothly into place without any mechanical snap or bounce.
- **Directional Shadow Shift:** The `box-shadow` shifts horizontally toward the left on hover (`-14px` offset) to reinforce the sense that the card's right side is lifting away from the surface, paired with a soft accent-tinted glow.
- **Opposite-Direction Pairing:** A `--tilt-angle: 8deg` override class (`.ease-hover-tilt-left`) is included in the demo to directly contrast with `ease-hover-tilt-left`, showing how the same utility powers both directions from a single sign flip.
- **Keyboard Accessible:** The hover state is mirrored on `:focus-visible` so keyboard users get identical tilt feedback when tabbing through interactive cards.
- **Reduced Motion Architecture:** Under `@media (prefers-reduced-motion: reduce)`, the 3D rotation is dropped entirely while the shadow transition is preserved, keeping interaction feedback without inducing motion discomfort.

## Workspace Tree Map

```
submissions/examples/ease-hover-tilt-right/
├── demo.html     # Live hover demo with cards and a left/right tilt comparison
├── style.css     # Modular 3D tilt utility stylesheet
└── README.md     # This file
```

---

Crafted with 💜 by **[pari-dubey1](https://github.com/pari-dubey1)**
