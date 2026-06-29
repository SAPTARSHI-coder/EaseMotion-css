# Rotate In Down Right (`ease-rotate-in-down-right`)

An intermediate origin-based rotation entrance utility component where the element rotates into view from the upper-left direction, pivoting around its bottom-right corner via a custom `transform-origin`, while fading from transparent to fully visible.

## Technical Composition Breakdown

- **Pivot-Anchored Rotation:** Sets `transform-origin: right bottom` so the entire rotation pivots around the element's bottom-right corner rather than its center — this single property is what makes the motion read as arriving "from the upper left" instead of spinning in place.
- **Exact Spec Match:** The keyframe track runs from `rotate(45deg)` at `0%` straight to `rotate(0deg)` at `100%`, matching the acceptance criteria precisely, with the starting angle exposed as `--rotate-angle` for instances that need a steeper or shallower entrance.
- **Synchronized Opacity:** `opacity` transitions from `0` to `1` across the exact same keyframe range as the rotation, so the element doesn't pop into visibility before or after the pivot completes — both properties resolve together.
- **Origin Visualizer:** The demo includes a small diagram showing exactly where the pivot dot sits relative to the box, making the abstract `transform-origin: right bottom` concept concrete before seeing it in motion.
- **Configurable via Custom Properties:** `--rotate-angle`, `--rotate-duration`, and `--rotate-ease` are all overridable per-instance, so a steeper rotation or a slower entrance requires only a one-line override rather than duplicating the keyframe.
- **Stagger-Ready:** Ships with `.delay-1` through `.delay-3` helper classes for cascading group entrances, demonstrated across the three example cards.
- **Replay Support:** A small JS snippet in the demo toggles an `.is-replaying` reset class to restart the animation on demand — useful for testing the entrance repeatedly without reloading the page; the CSS for the entrance itself remains 100% animation-driven.
- **Reduced Motion Architecture:** Houses `@media (prefers-reduced-motion: reduce)` safeguards that strip the rotation and opacity animation entirely, leaving the element immediately visible at rest.

## Workspace Tree Map

```
submissions/examples/ease-rotate-in-down-right/
├── demo.html     # Live demo with origin visualizer, staggered cards, and replay button
├── style.css     # Modular rotation-entrance utility stylesheet
└── README.md     # This file
```

---
Crafted with 💜 by **[pari-dubey1](https://github.com/pari-dubey1)**