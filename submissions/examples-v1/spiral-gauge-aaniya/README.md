# Spiral Gauge — Analytics Dashboard Design

Closes #41801

## What does this do?

A circular gauge whose ring spirals open from empty to a target percentage on load — like a progress ring for analytics dashboards — using a single CSS animation and no JavaScript.

## How is it used?

```html
<div class="spiral-gauge spiral-gauge--62">
  <div class="spiral-gauge__inner">
    <span class="spiral-gauge__value">62%</span>
    <span class="spiral-gauge__label">Revenue</span>
  </div>
</div>
```

Each gauge sweeps from 0° to its target angle (set via the `--ease-spiral-value` custom property) once on page load, animating a `conic-gradient` ring using CSS `@property` for a smooth angle transition.

## Why is it useful?

Gauges are a core building block for analytics/metrics dashboards, and this variant leans into that use case directly — a radial progress indicator that reveals its value with a spiral fill rather than a flat instant render.

- Needs **no JavaScript** — the animation is driven entirely by an animated CSS custom property (`@property --ease-spiral-angle`) feeding a `conic-gradient`.
- Is easily reusable: any gauge just needs a target angle set via `--ease-spiral-value` (percent/100 × 360deg) and its own modifier class.
- Respects `prefers-reduced-motion` by skipping straight to the final value for users who've opted out of motion.
- Is responsive down to narrow viewports.
- Uses `ease-` prefixed variable, custom-property, and keyframe names per the issue's requirement.

## Files

- `demo.html` — self-contained demo with three example gauges, opens directly in a browser
- `style.css` — raw CSS (uses `ease-` prefixed variable/keyframe names per the issue's explicit requirement)
- `README.md` — this file

## Browser note

The spiral fill uses `@property` for animatable `conic-gradient` angles, supported in current Chrome, Edge, and Firefox. In unsupported browsers the ring will render at its final value without the sweep animation (graceful degradation, no broken layout).