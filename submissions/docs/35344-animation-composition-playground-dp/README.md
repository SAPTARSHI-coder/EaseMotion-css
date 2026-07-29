# Animation Composition Playground

An interactive documentation page that teaches how combining simple CSS
animations — fade, slide, scale, rotate, blur, bounce, pulse — produces
polished, professional UI motion.

## 1. What does this do?

Provides a live preview object whose motion is built by layering any
combination of seven effects, each independently controlled through CSS
custom properties (`--fx-opacity`, `--fx-translate-y`, `--fx-scale`,
`--fx-rotate`, `--fx-blur`). Users can toggle effects, adjust duration,
delay, distance, scale, and rotation with sliders, apply six curated
presets, compare a progressively richer six-step composition sequence,
read best-practice guidance for common effect pairings, and see how
`prefers-reduced-motion` gracefully simplifies the same animations.

## 2. How is it used?

Open `demo.html` directly in any browser — no build step required.

- Check any combination of effects under **Animation Effects**.
- Drag the sliders under **Motion Controls** to adjust timing and
  magnitude; the live preview updates instantly.
- Click a card under **Animation Presets** to load a ready-made
  composition (e.g. "Modal Entrance" = fade + scale).
- Use **Replay Animation** / **Replay Examples** to re-trigger the
  preview or the composition row.

To reuse this technique in your own project, copy the `@property`
declarations, the `effect-*` keyframes, and the `preview-object`
transform/filter/opacity wiring, then drive `animation-name` /
`animation-duration` / `animation-delay` dynamically from JavaScript
based on which effects are active.

## 3. Why is it useful?

Combining CSS animations on the same element is harder than it looks —
naively stacking `transform`-based animations causes one to silently
override another. This playground demonstrates a working pattern
(animatable custom properties via `@property`, composed into a single
`transform`) while teaching design judgment: which effect combinations
suit dialogs versus notifications versus success feedback, and which
combinations create excessive, disorienting motion. It also models
accessible defaults — keyboard-operable controls, visible focus rings,
and a `prefers-reduced-motion` fallback that simplifies rather than
silently removes feedback.