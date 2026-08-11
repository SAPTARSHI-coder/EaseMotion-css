# Magnetic Pull Tooltip — Neumorphic Soft

Closes #46305

## What does this do?

A soft-UI (neumorphic) tooltip that snaps into place with a magnetic pull motion when its trigger is hovered or focused, settling with a slight overshoot — a single CSS `@keyframes` animation, no JavaScript.

## How is it used?

```html
<div class="magnet-tooltip-neu">
  <button class="magnet-tooltip-neu__trigger" type="button">Notifications</button>
  <div class="magnet-tooltip-neu__bubble">
    <span class="magnet-tooltip-neu__title">Stay in the loop</span>
    <span class="magnet-tooltip-neu__body">Get alerts when a teammate mentions you or shares a file.</span>
  </div>
</div>
```

Hovering or tab-focusing `.magnet-tooltip-neu__trigger` reveals the adjacent `.magnet-tooltip-neu__bubble`, playing the `ease-magnet-neu-pull` animation: it starts offset and shrunk, overshoots slightly as it snaps toward the trigger, then settles into place.

Timing, easing, pull distance, and settle scale are exposed as CSS custom properties:

```html
<div class="magnet-tooltip-neu" style="--ease-magnet-neu-duration: 650ms; --ease-magnet-neu-pull-distance: 34px; --ease-magnet-neu-scale: 1.04;">
  ...
</div>
```

## Why is it useful?

Neumorphic soft-UI relies on dual-toned, carved-in or raised shadows rather than borders or flat color blocks to establish hierarchy. This variant matches that directly — both trigger and bubble use soft, layered box-shadows — paired with a distinctive magnetic-snap motion rather than a flat fade or slide.

- Needs **no JavaScript** — the whole effect is a single CSS `@keyframes` animation triggered by native `:hover`/`:focus-visible`.
- Is keyboard accessible: the trigger is a real `<button>`, and `:focus-visible` triggers the same pull-in animation as mouse hover.
- Exposes `--ease-magnet-neu-duration`, `--ease-magnet-neu-curve`, `--ease-magnet-neu-scale`, and `--ease-magnet-neu-pull-distance` as custom properties, so consumers can tune timing, easing, and overshoot feel without touching the source CSS.
- Respects `prefers-reduced-motion` by skipping straight to the final, settled state.
- Is responsive down to narrow viewports.
- Uses `ease-` prefixed variable and keyframe names per the library's convention.

## Files

- `demo.html` — self-contained demo with a default and a customized example, opens directly in a browser
- `style.css` — raw CSS (uses `ease-` prefixed variable/keyframe names; exposes custom properties for timing/easing/scale per the issue's requirement)
- `README.md` — this file

## Note on related submissions

This repo has other "Magnetic Pull Tooltip" issues styled for Creative Portfolio (#46308), Accessible Web Layouts (#46307), and Responsive Dashboard (#46306). This submission is built specifically for the "Neumorphic Soft" brief — dual-toned soft-shadow styling on both trigger and bubble, distinct from the flat/bordered/glass treatments used in the other variants.