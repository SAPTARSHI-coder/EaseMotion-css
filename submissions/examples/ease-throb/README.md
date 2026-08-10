# Deep Throb Emphasis (`ease-throb`)

A beginner-friendly emphasis utility component that gives an element a slow, deep heartbeat-like throb — scale and glow expanding and contracting together over a full 2-second cycle — built for the most critical CTAs where `ease-pulse` isn't heavy enough.

## Technical Composition Breakdown

- **Slow 2s Scale Cycle:** Animates `transform: scale()` from `1` → `1.12` → `1` across a single `2s` keyframe loop, matching the acceptance criteria exactly, with the peak scale exposed as `--ease-throb-scale` for instances that need an even deeper throb.
- **Synchronized Glow Expansion:** A two-layer `box-shadow` grows from `0 0 0 0` at rest to `0 0 28px 10px` (inner glow) and `0 0 50px 18px` (outer halo) at the peak, animating on the exact same keyframe percentages as the scale — so the glow and the size breathe together as one motion, not two competing effects.
- **`color-mix()` Color Hook:** Both shadow layers derive their transparency directly from a single `--ease-throb-color` variable via `color-mix(in srgb, ...)`, so changing one value updates the entire glow gradient consistently — demonstrated with red, violet, teal, and amber variants in the demo.
- **Deliberately Slower Than `ease-pulse`:** The demo includes a direct side-by-side comparison against a quick `0.8s` pulse animation, visually proving the `2s` throb reads as deeper and heavier — exactly the differentiation called out in the issue notes.
- **Symmetrical Ease Curve:** Uses `cubic-bezier(0.45, 0, 0.55, 1)`, a symmetrical ease-in-out curve, so the throb breathes in and out at matching speeds rather than snapping on one side — reinforcing the heartbeat feel.
- **Infinite Loop by Design:** Runs as `infinite` since this is a sustained-attention effect for elements that need ongoing emphasis (e.g. a limited-time offer button), not a one-shot entrance animation.
- **Reduced Motion Architecture:** Under `@media (prefers-reduced-motion: reduce)`, the animation is removed entirely and replaced with a static glow, preserving the visual emphasis cue without any scaling motion.

## Workspace Tree Map

```
submissions/examples/ease-throb/
├── demo.html     # Live demo: CTA button, color variants, ease-pulse comparison
├── style.css     # Modular throb animation utility stylesheet
└── README.md     # This file
```

---
Crafted with 💜 by **[pari-dubey1](https://github.com/pari-dubey1)**