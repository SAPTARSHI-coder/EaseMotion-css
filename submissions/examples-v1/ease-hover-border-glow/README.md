# Hover Border Glow (`ease-hover-border-glow`)

A beginner-friendly hover utility component that gives an element's border a soft, colorful glow on `:hover`, using a layered `box-shadow` that spreads and blurs outward along the edge — distinct from `ease-hover-glow`, which lights up the whole element rather than concentrating along the border.

## Technical Composition Breakdown

- **Border-Concentrated Glow, Not Whole-Element Glow:** The `box-shadow` stack starts with a tight `0 0 0 1px` ring matching the border, then layers two progressively larger, more blurred, more transparent rings outward — keeping the glow visually anchored to the edge rather than washing over the entire surface.
- **Configurable Color Variable:** The glow color is driven entirely by `--ease-border-glow-color`, the exact custom property named in the acceptance criteria, defaulting to a soft violet. Every demo instance below proves this is a true per-element override with zero other CSS changes required.
- **`color-mix()` for Transparent Glow Layers:** Uses `color-mix(in srgb, var(--ease-border-glow-color) 55%, transparent)` and a 25% variant to derive the outer glow rings directly from the single color variable, so changing one value updates the entire glow gradient consistently.
- **Smooth Transition:** Both `box-shadow` and `border-color` transition together over `--ease-border-glow-duration` (default `0.3s`) using `ease-out`, so the glow fades in smoothly rather than snapping into view.
- **Works Across Element Types:** Demonstrated identically on cards, buttons, and text/email inputs — the class only touches `border`, `box-shadow`, and `border-color`, so it never conflicts with an element's internal layout or content styling.
- **Focus-Visible Parity:** Inputs and buttons trigger the same glow on `:focus-visible` as on `:hover`, which matters most for inputs since keyboard and pointer users both need the same affordance when an input becomes active.
- **Reduced Motion Architecture:** Under `@media (prefers-reduced-motion: reduce)`, the `transition` is removed so the glow still appears on hover but snaps in immediately rather than animating, keeping the interaction perceivable without inducing motion.

## Workspace Tree Map

```
submissions/examples/ease-hover-border-glow/
├── demo.html     # Live hover demo across cards, buttons, and inputs
├── style.css     # Modular border-glow utility stylesheet
└── README.md     # This file
```

---

Crafted with 💜 by **[pari-dubey1](https://github.com/pari-dubey1)**
