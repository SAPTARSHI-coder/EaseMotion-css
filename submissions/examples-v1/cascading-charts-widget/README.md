# Cascading Charts Widget

An analytics dashboard widget featuring four chart types — bar chart, donut chart, line chart, and stat cards — all with **cascading staggered animations** that reveal data progressively. Built with pure HTML and CSS.

## Features

- **Bar Chart** — 7 monthly bars with staggered `scaleY` rise animation and spring overshoot
- **Donut Chart** — 4-segment SVG donut with sequential stroke-dashoffset animation
- **Line Chart** — SVG path with `stroke-dashoffset` draw-on effect and area fill fade-in
- **Stat Cards** — 3 KPI cards with inline progress bars that grow from 0
- **Sequential delays** — every element has a calculated `animation-delay` for cascade effect
- **Hover states** — bars brighten on hover; cards lift with shadow
- **Pure CSS** — zero JavaScript

## File Structure

```
cascading-charts-widget/
├── demo.html
├── style.css
└── README.md
```

## How the Cascading Animation Works

Each chart uses **staggered `animation-delay`** values that increment by a fixed interval (0.1–0.15s):

```css
.bar-item:nth-child(1) .bar { animation-delay: 0.05s; }
.bar-item:nth-child(2) .bar { animation-delay: 0.15s; }
.bar-item:nth-child(3) .bar { animation-delay: 0.25s; }
/* ... */
```

### Animation Techniques

| Chart | Technique |
|---|---|
| Bar | `scaleY(0) → scaleY(1)` with `cubic-bezier(0.34, 1.56, 0.64, 1)` spring |
| Donut | SVG `stroke-dashoffset: 440 → 0` on each segment |
| Line | `stroke-dashoffset: 600 → 0` on `<path>` |
| Stat | `width: 0 → var(--w)` on the fill bar |

## Usage

Open `demo.html` in any modern browser. All charts animate in on page load.

## Customization

Override CSS custom properties to change the color palette:

```css
:root {
  --accent-1: #your-primary;
  --accent-2: #your-secondary;
  --accent-3: #your-tertiary;
  --accent-4: #your-quaternary;
}
```

Adjust `animation-delay` increments to change the cascade speed.
