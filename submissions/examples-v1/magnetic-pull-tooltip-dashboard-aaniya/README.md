# Magnetic Pull Tooltip — Responsive Dashboard

Closes #46306

## What does this do?

A dark data-panel tooltip that snaps into place with a magnetic pull motion when its trigger is hovered or focused, and repositions from above to below the trigger on narrow viewports so it stays usable inside compact dashboard layouts (sidebars, cards, mobile widths) — a single CSS `@keyframes` animation, no JavaScript.

## How is it used?

```html
<div class="magnet-tooltip-dash">
  <button class="magnet-tooltip-dash__trigger" type="button">Server Load</button>
  <div class="magnet-tooltip-dash__bubble">
    <div class="magnet-tooltip-dash__metric-row">
      <span class="magnet-tooltip-dash__label">62%</span>
      <span class="magnet-tooltip-dash__delta">-4.1%</span>
    </div>
    <span class="magnet-tooltip-dash__body">Average CPU load across all nodes, last hour.</span>
  </div>
</div>
```

Hovering or tab-focusing `.magnet-tooltip-dash__trigger` reveals the adjacent `.magnet-tooltip-dash__bubble`, playing the `ease-magnet-dash-pull` animation: it starts offset and shrunk, overshoots slightly as it snaps toward the trigger, then settles into place. Below a 480px viewport, the tooltip repositions below the trigger and plays `ease-magnet-dash-pull-below` instead, pulling in from the opposite direction so it never gets clipped at the top of a narrow panel.

Timing, easing, pull distance, and settle scale are exposed as CSS custom properties:

```html
<div class="magnet-tooltip-dash" style="--ease-magnet-dash-duration: 650ms; --ease-magnet-dash-pull-distance: 34px; --ease-magnet-dash-scale: 1.04;">
  ...
</div>
```

## Why is it useful?

Dashboard tooltips need to survive real layout constraints — sidebars, dense card grids, and small screens — where a tooltip that only ever floats above its trigger risks getting clipped or hidden. This variant addresses that directly with a responsive breakpoint that flips the tooltip's position and pull direction, on top of a metric/delta layout suited to analytics dashboards.

- Needs **no JavaScript** — the whole effect is CSS `@keyframes` animations triggered by native `:hover`/`:focus-visible`.
- Is keyboard accessible: the trigger is a real `<button>`, and `:focus-visible` triggers the same pull-in animation as mouse hover.
- **Responsive positioning**: below 480px, the tooltip switches from "above trigger" to "below trigger" placement and animation direction, avoiding overflow in compact dashboard panels.
- Exposes `--ease-magnet-dash-duration`, `--ease-magnet-dash-curve`, `--ease-magnet-dash-scale`, and `--ease-magnet-dash-pull-distance` as custom properties, so consumers can tune timing, easing, and overshoot feel without touching the source CSS.
- Respects `prefers-reduced-motion` by skipping straight to the final, settled state.
- Uses `ease-` prefixed variable and keyframe names per the library's convention.

## Files

- `demo.html` — self-contained demo with a default and a customized example, opens directly in a browser
- `style.css` — raw CSS (uses `ease-` prefixed variable/keyframe names; exposes custom properties for timing/easing/scale per the issue's requirement)
- `README.md` — this file

## Note on related submissions

This repo has two other "Magnetic Pull Tooltip" issues: Creative Portfolio (#46308, bold dark theme) and Accessible Web Layouts (#46307, ARIA/WCAG-focused). This submission is built specifically around the "Responsive Dashboard" brief — a metric/delta panel layout and a responsive above/below repositioning behavior that the other two variants don't implement — so there's no overlap in either purpose or implementation.