# 3D Interactive Hover-Tilt Card

This submission implements a premium interactive 3D Hover-Tilt card utilizing CSS 3D transforms (`perspective`, `rotateX`, `rotateY`) and smooth relative translation along the Z-axis.

---

## Technical Details

- **3D Perspective**: Built using the `perspective` rule on the outer container.
- **Z-Axis Translation**: Element titles and description items are translated along the Z-axis using `transform: translateZ(50px)`, lifting them above the card background when tilted.
- **Dynamic Glare**: Radial gradients shift position dynamically relative to cursor coordinate overrides, creating an organic lighting glare effect.

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Hover and move your cursor across the card — verify the card tilts responsively and the glare highlight tracks your cursor.
3. Observe how the text appears elevated in 3D space relative to the card's background.
4. Enable `prefers-reduced-motion` — verify all tilt transformations are disabled.
