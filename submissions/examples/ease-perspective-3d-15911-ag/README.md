# 3D Perspective Gallery

This submission implements a 3D Perspective Gallery showcasing CSS 3D capabilities (`perspective`, `transform-style: preserve-3d`, and `translateZ` spatial layout parameters).

---

## Technical Details

- **Perspective Scene**: The outer container establishes a viewport depth. Adjusting the perspective range dynamically changes vanishing point distance (smaller = greater distortion).
- **preserve-3d**: Keeps cards aligned relative to parent axes rotations.
- **translateZ**: Places elements at distinct depths, creating parallax spatial depth.

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Drag the **Perspective** slider — verify the 3D depth distortion changes dynamically.
3. Drag the **Rotate Y** slider — observe how the three cards rotate around a central axis while preserving depth.
4. Enable `prefers-reduced-motion` — verify all Y-rotations are disabled.
