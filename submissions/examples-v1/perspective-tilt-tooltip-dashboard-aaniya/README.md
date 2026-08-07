# 3D Perspective Tilt Tooltip — Dashboard Analytics

Closes #46311

## What does this do?

A dark data-panel tooltip styled for analytics dashboards, tilting in on a 3D perspective when its trigger is hovered or focused and settling flat as it becomes visible — a single CSS transition, no JavaScript.

## How is it used?

```html
<div class="tilt-tooltip-dash">
  <button class="tilt-tooltip-dash__trigger" type="button">Active Users</button>
  <div class="tilt-tooltip-dash__bubble">
    <div class="tilt-tooltip-dash__metric-row">
      <span class="tilt-tooltip-dash__label">12,480</span>
      <span class="tilt-tooltip-dash__delta">+8.2%</span>
    </div>
    <span class="tilt-tooltip-dash__body">Daily active users, last 30 days.</span>
  </div>
</div>
```

Hovering or tab-focusing `.tilt-tooltip-dash__trigger` reveals the adjacent `.tilt-tooltip-dash__bubble`, animating from a perspective-rotated, scaled-down state to flat and fully visible.

Timing, easing, tilt angle, and reveal scale are exposed as CSS custom properties, so consumers can override them per instance:

```html
<div class="tilt-tooltip-dash" style="--ease-tilt-dash-duration: 420ms; --ease-tilt-dash-angle: 22deg; --ease-tilt-dash-scale: 1.05;">
  ...
</div>
```

## Why is it useful?

Analytics dashboards constantly need contextual tooltips for metrics — trend deltas, sparklines, and short explainer text — without disrupting the surrounding data density. This variant matches that aesthetic directly: a dark panel, metric/delta row, and an inline sparkline slot, paired with a distinctive 3D perspective-tilt reveal instead of a flat fade or slide.

- Needs **no JavaScript** — the whole effect is a single CSS `transition` on `transform`/`opacity`, using native `:hover`/`:focus-visible` and the adjacent-sibling selector.
- Is keyboard accessible: the trigger is a real `<button>`, and `:focus-visible` triggers the same tilt reveal as mouse hover.
- Exposes `--ease-tilt-dash-duration`, `--ease-tilt-dash-curve`, `--ease-tilt-dash-angle`, `--ease-tilt-dash-scale`, and `--ease-tilt-dash-perspective` as custom properties, so consumers can tune timing, easing, tilt depth, and scale without touching the source CSS.
- Respects `prefers-reduced-motion` by skipping the 3D rotation and only cross-fading for users who've opted out of motion.
- Is responsive down to narrow viewports.
- Uses `ease-` prefixed variable names per the library's convention.

## Files

- `demo.html` — self-contained demo with a default and a customized example, opens directly in a browser
- `style.css` — raw CSS (uses `ease-` prefixed variable names; exposes custom properties for timing/easing/scale per the issue's requirement)
- `README.md` — this file