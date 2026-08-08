# Donut Progress Ring

## What does this do?
A circular progress indicator that shows a percentage as a filled arc
using `conic-gradient` — no SVG, no JavaScript.

Control the fill with a single CSS custom property:

```html
<div class="donut-ring" style="--donut-percent: 75;">
  <div class="donut-label">75%</div>
</div>
```

## Available classes

| Class | Description |
|---|---|
| `donut-ring` | Base ring (default indigo, 120px) |
| `donut-ring-sm` | Small — 80px |
| `donut-ring-lg` | Large — 160px |
| `donut-success` | Green fill |
| `donut-danger` | Red fill |
| `donut-warning` | Amber fill |
| `donut-info` | Blue fill |
| `donut-ring-animate` | Animates fill from 0 on load |
| `donut-ring-dark` | Dark background inner hole |

## CSS custom properties

| Property | Default | Description |
|---|---|---|
| `--donut-percent` | `75` | Fill amount 0–100 |
| `--donut-size` | `120px` | Ring diameter |
| `--donut-thickness` | `14px` | Ring stroke width |
| `--donut-color` | `#6366f1` | Fill color |
| `--donut-track` | `#e5e7eb` | Track (empty) color |

## Why is it useful?
The repo has linear progress bars and an SVG-based circular ring,
but no pure CSS `conic-gradient` arc ring. This approach is simpler,
requires no SVG markup, and is fully themeable via CSS variables.

## Tech Stack
- HTML
- CSS only (no JavaScript, no SVG, no frameworks)

## Preview
Open `demo.html` directly in your browser.