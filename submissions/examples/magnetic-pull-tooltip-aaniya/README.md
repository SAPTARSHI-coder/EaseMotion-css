# Magnetic Pull Tooltip — Creative Portfolio

Closes #46308

## What does this do?

A bold tooltip that appears to get pulled in like a magnet toward its trigger, snapping into place with a bouncy overshoot — a single CSS `@keyframes` animation, no JavaScript.

## How is it used?

```html
<div class="magnet-tooltip">
  <button class="magnet-tooltip__trigger" type="button">View Project</button>
  <div class="magnet-tooltip__bubble">
    <span class="magnet-tooltip__title">Neon Horizons</span>
    <span class="magnet-tooltip__body">A generative art series exploring light and motion, 2025.</span>
  </div>
</div>
```

Hovering or tab-focusing `.magnet-tooltip__trigger` reveals the adjacent `.magnet-tooltip__bubble`, which plays the `ease-magnet-pull` animation: it starts offset and shrunk, overshoots slightly as it "snaps" toward the trigger, then settles into place.

Timing, easing, pull distance, and settle scale are exposed as CSS custom properties, so consumers can override them per instance:

```html
<div class="magnet-tooltip" style="--ease-magnet-duration: 750ms; --ease-magnet-pull-distance: 40px; --ease-magnet-scale: 1.05;">
  ...
</div>
```

## Why is it useful?

Creative portfolio sites lean into bold, playful interactions rather than subtle corporate UI patterns. This tooltip matches that energy with a distinctive "magnetic snap" motion — a bright accent-bordered card that visibly gets pulled toward its trigger rather than fading or sliding in flatly.

- Needs **no JavaScript** — the whole effect is a single CSS `@keyframes` animation triggered by native `:hover`/`:focus-visible` and the adjacent-sibling selector.
- Is keyboard accessible: the trigger is a real `<button>`, and `:focus-visible` triggers the same pull-in animation as mouse hover.
- Exposes `--ease-magnet-duration`, `--ease-magnet-curve`, `--ease-magnet-scale`, and `--ease-magnet-pull-distance` as custom properties, so consumers can tune timing, easing, overshoot feel, and pull distance without touching the source CSS.
- Respects `prefers-reduced-motion` by skipping straight to the final, settled state for users who've opted out of motion.
- Is responsive down to narrow viewports.
- Uses `ease-` prefixed variable and keyframe names per the library's convention.

## Files

- `demo.html` — self-contained demo with a default and a customized example, opens directly in a browser
- `style.css` — raw CSS (uses `ease-` prefixed variable/keyframe names; exposes custom properties for timing/easing/scale per the issue's requirement)
- `README.md` — this file