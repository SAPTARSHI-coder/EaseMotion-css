# Interactive Radial Metric Gauge Indicator Card

> A compact, animated SVG semi-circular gauge component for analytics dashboards, with smooth arc fill transitions, rotating needle, threshold color coding, and numeric readouts.

## Features

- **SVG Stroke Arc** — Uses `stroke-dasharray` and an animated `stroke-dashoffset` on an SVG `<path>` arc element to render the semi-circle fill cleanly with `stroke-linecap: round` for smooth endpoints.
- **Smooth JS Easing** — A `requestAnimationFrame` loop with a cubic ease-out function animates the arc fill, needle rotation, and numeric counter simultaneously for a cohesive fluid animation.
- **Rotating Needle** — An SVG `<line>` element rotates from `-90deg` (0%) to `+90deg` (100%) to track the current value.
- **Threshold Color States** — Automatically switches between three distinct color themes using CSS class toggles:
  - ✅ **Healthy**: `≤ 59%` → Emerald green (`#10b981`)
  - ⚠️ **Moderate**: `60–79%` → Amber (`#f59e0b`)
  - 🔴 **Critical**: `≥ 80%` → Red (`#ef4444`)
- **Randomise Controls** — A demo button rerandomises all gauge values simultaneously with staggered animation.
- **Accessible** — `aria-label` attributes on cards describe the current metric to screen readers.

## Files

```
submissions/examples/radial-metric-gauge-em/
├── demo.html    — Three SVG gauge cards in a responsive grid with needle, fill arc, readout, and sparkline footer
├── style.css    — SVG stroke styling, threshold class color variants, and CSS transition bindings
├── script.js    — requestAnimationFrame easing loop controlling dashoffset, needle rotation, and counter
└── README.md    — Component documentation
```

## Design Tokens

| Variable | Default Value | Purpose |
|---|---|---|
| `--gauge-low`      | `#10b981` | Arc and needle color for healthy thresholds |
| `--gauge-medium`   | `#f59e0b` | Arc color for moderate thresholds |
| `--gauge-critical` | `#ef4444` | Arc color for critical thresholds |
| `--track-color`    | `#334155` | Background arc track color |

## Arc Length Calculation

The fill arc path `M 20 110 A 80 80 0 0 1 180 110` describes a semicircle of radius `80`. Its arc length is:

```
Arc = π × r = π × 80 ≈ 251.3
```

So `stroke-dasharray: 251` and `stroke-dashoffset: 251 - (251 × pct / 100)` creates a clean left-to-right fill effect.

## Acceptance Criteria ✅

- [x] Gauge arc renders cleanly as a semi-circle with smooth `stroke-linecap: round` caps.
- [x] Gauge value arc animates smoothly from 0% to target percentage on load and on click.
- [x] Status indicator color shifts dynamically based on threshold (Healthy / Moderate / Critical).
- [x] Text content (value + status label) centered cleanly beneath the gauge arc.
- [x] Conforms to CI repository structure (`demo.html`, `style.css`, `script.js`, `README.md`).

## License

MIT — Part of the [EaseMotion-css](https://github.com/SAPTARSHI-coder/EaseMotion-css) library.
