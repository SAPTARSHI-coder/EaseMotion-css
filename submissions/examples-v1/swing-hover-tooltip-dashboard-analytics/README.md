# Swing-Hover Tooltip — Dashboard Analytics

A pure CSS tooltip with a spring-like "swing" entrance animation, applied
to **chart data points** rather than nav items or stat cards. Includes a
hoverable bar chart (weekly sessions) and a hoverable line chart
(conversion rate over 6 months), each revealing exact values on
hover/focus. Zero JavaScript.

This is intentionally distinct from the "Modern SaaS Dashboard" example:
that one covers sidebar-nav and stat-card tooltips; this one covers
in-chart data-point tooltips, which is a different interaction pattern
(many small hover targets positioned dynamically).

## Features

- 🎯 Pure CSS — no JavaScript required
- ⌨️ Keyboard accessible via `:focus-visible` (tab through bars/points)
- 🔄 Four placement variants available: top, bottom, left, right
- 🎛️ Customizable timing, easing, scale, offset via CSS variables
- 📊 Bar chart example: 7 hoverable bars, each with a value tooltip
- 📈 Line chart example: 6 hoverable data points positioned over an SVG
  polyline, each with a value tooltip
- 📱 Fully responsive
- 🌀 Respects `prefers-reduced-motion`

## Usage

```html
<div class="tooltip-wrap">
  <button class="tt-trigger" aria-describedby="tt-1">Hover me</button>
  <span class="tt-bubble tt-bubble--top" id="tt-1" role="tooltip">
    Tooltip text here
  </span>
</div>
```

### Bar chart data-point pattern

```html
<span class="tooltip-wrap bar-wrap">
  <button class="bar" style="--bar-h: 71%;" aria-describedby="tt-bar-3">
    <span class="bar__day">Wed</span>
  </button>
  <span class="tt-bubble tt-bubble--top" id="tt-bar-3" role="tooltip">2,090 sessions</span>
</span>
```

### Line chart data-point pattern

Points are absolutely positioned over an SVG polyline using inline
`left`/`top` matching the polyline's coordinate space:

```html
<span class="tooltip-wrap point-wrap" style="left: 284px; top: 55px;">
  <button class="point" aria-describedby="tt-pt-4"></button>
  <span class="tt-bubble tt-bubble--top" id="tt-pt-4" role="tooltip">Apr · 3.2%</span>
</span>
```

## Customization

| Variable | Default | Description |
|---|---|---|
| `--tt-duration` | `0.3s` | Animation duration |
| `--tt-easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Springy swing easing |
| `--tt-scale` | `0.85` | Starting scale before swing-in |
| `--tt-swing-angle` | `15deg` | Rotation angle of the swing |
| `--tt-offset` | `10px` | Gap between trigger and tooltip |
| `--tt-bg` | `#1e293b` | Tooltip background color |
| `--tt-accent` | `#f59e0b` | Amber accent (peak/highlight values) |
| `--tt-accent-2` | `#3b82f6` | Blue accent (bars, line, points) |

## Accessibility

- Revealed on both `:hover` and `:focus-visible`, so keyboard users can tab
  through every bar and data point and get the same value readout.
- Each trigger uses `aria-describedby` pointing to the tooltip's `id`.
- Tooltip element uses `role="tooltip"`.
- Charts use `role="img"` with a descriptive `aria-label` as a fallback
  summary for screen reader users who don't interact point-by-point.
- Animation disabled for users with `prefers-reduced-motion: reduce`.

## Files

- `demo.html` — placement showcase, bar chart, and line chart examples
- `style.css` — component styles and animation logic
- `README.md` — this file