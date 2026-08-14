# Animated Circular Progress Ring

### What does this do?

It shows circular progress rings drawn with SVG that animate their arc fill on load, with a percentage label in the center and a per-ring accent color.

### How is it used?

```html
<div class="progress-ring" style="--value: 75; --ring-color: #6c63ff;" role="img" aria-label="Progress 75 percent">
  <svg viewBox="0 0 120 120" aria-hidden="true">
    <circle class="ring-track" cx="60" cy="60" r="52"></circle>
    <circle class="ring-fill" cx="60" cy="60" r="52"></circle>
  </svg>
  <span class="ring-label">75%</span>
</div>
```

Set `--value` to the percentage and `--ring-color` to the accent color. The fill offset is derived from `--value`, so the same CSS works for any value with no extra classes.

### Why is it useful?

Progress rings appear in dashboards, skill meters, fitness stats, and profile completeness widgets. This implementation animates the SVG stroke with a single keyframe and drives the fill from a custom property, so it stays composable and readable. The resting state already equals the final value, so under `prefers-reduced-motion: reduce` the ring simply shows its value without animating, and each ring exposes an accessible label.
