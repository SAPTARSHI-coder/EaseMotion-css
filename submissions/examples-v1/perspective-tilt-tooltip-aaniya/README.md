# 3D Perspective Tilt Tooltip — Glassmorphism

Closes #46316

## What does this do?

A glassmorphic tooltip that tilts in on a 3D perspective when its trigger is hovered or focused, settling flat as it becomes visible — a single CSS transition, no JavaScript.

## How is it used?

```html
<div class="tilt-tooltip">
  <button class="tilt-tooltip__trigger" type="button">Hover me</button>
  <div class="tilt-tooltip__bubble">
    Your tooltip content here.
  </div>
</div>
```

Hovering or tab-focusing `.tilt-tooltip__trigger` reveals the adjacent `.tilt-tooltip__bubble`, which animates from a perspective-rotated, scaled-down state to flat and fully visible.

Timing, easing, tilt angle, and reveal scale are all exposed as CSS custom properties, so consumers can override them per instance:

```html
<div class="tilt-tooltip" style="--ease-tilt-duration: 500ms; --ease-tilt-angle: 24deg; --ease-tilt-scale: 1.05;">
  <button class="tilt-tooltip__trigger" type="button">Custom tilt</button>
  <div class="tilt-tooltip__bubble">Slower, deeper tilt, slightly larger reveal.</div>
</div>
```

## Why is it useful?

Tooltips are a near-universal UI primitive, and this variant delivers the requested glassmorphism aeshetic — translucent, blurred background with a soft border — combined with a distinctive 3D perspective-tilt reveal rather than a flat fade or slide.

- Needs **no JavaScript** — the whole effect is a single CSS `transition` on `transform`/`opacity`, using native `:hover`/`:focus-visible` and the adjacent-sibling selector.
- Is keyboard accessible: the trigger is a real `<button>`, and `:focus-visible` triggers the same tilt reveal as mouse hover.
- Exposes `--ease-tilt-duration`, `--ease-tilt-curve`, `--ease-tilt-angle`, `--ease-tilt-scale`, and `--ease-tilt-perspective` as custom properties, so consumers can tune timing, easing, tilt depth, and scale without touching the source CSS.
- Respects `prefers-reduced-motion` by skipping the 3D rotation and only cross-fading for users who've opted out of motion.
- Is responsive down to narrow viewports.
- Uses `ease-` prefixed variable names per the library's convention.

## Files

- `demo.html` — self-contained demo with a default and a customized example, opens directly in a browser
- `style.css` — raw CSS (uses `ease-` prefixed variable names; exposes custom properties for timing/easing/scale per the issue's requirement)
- `README.md` — this file