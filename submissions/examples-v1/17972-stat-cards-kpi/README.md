# KPI Stat Cards

> **Issue:** [#17972](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/17972)  
> **Category:** Enhancement · Animation · CSS Grid  
> **Level:** Intermediate

---

## Overview

Upgrades plain, full-width stat blocks into polished KPI cards with:
- **CSS Grid layout** — responsive 4-col → 2-col → 1-col
- **Icon badges** with per-card accent colors
- **Trend indicators** (up / down / neutral) with directional arrows and percentage
- **Sparkline bar charts** using CSS custom property `--h` for bar height
- **Hover animations** — lift, accent border glow, icon bounce, color transition
- **Animated counter** via `IntersectionObserver` + `setInterval`

---

## Demos Included

| Demo | Description |
|------|-------------|
| **Library Overview** | 4 EaseMotion stat cards (Utilities, Animations, Dependencies, Contributors) with sparklines |
| **Dashboard KPI Row** | Compact 4-column row suitable for a dashboard header |

---

## Files

```
submissions/examples/17972-stat-cards-kpi/
├── demo.html   — Full showcase with 2 demo variants
├── style.css   — All component styling, no inline styles
└── README.md   — This file
```

---

## CSS Techniques

| Technique | Implementation |
|-----------|----------------|
| Responsive grid | `grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))` |
| Per-card accent colors | CSS custom properties `--card-accent`, `--card-accent-light` |
| Hover lift | `transform: translateY(-6px)` + `box-shadow` transition |
| Accent border glow | `box-shadow: 0 0 0 1px var(--card-accent)` on hover |
| Icon bounce | `transform: scale(1.1) rotate(-5deg)` on hover |
| Accent stripe | `::before` pseudo-element, left edge, opacity 0→1 on hover |
| Sparkline bars | Flex row of `div`s with `height: var(--h)` |
| Number counter | `IntersectionObserver` + JS `setInterval` |

---

## Usage

```html
<div class="stat-card stat-card--blue">
  <div class="stat-card__header">
    <div class="stat-icon stat-icon--blue"><!-- SVG icon --></div>
    <div class="trend-badge trend-badge--up">+12%</div>
  </div>
  <div class="stat-card__value" data-target="84">0</div>
  <div class="stat-card__label">Utility Classes</div>
  <div class="stat-card__sub">vs. 75 last month</div>
  <div class="stat-sparkline">
    <div class="sparkline-bar" style="--h: 60%"></div>
    <div class="sparkline-bar active" style="--h: 100%"></div>
  </div>
</div>
```

Available color variants: `stat-card--blue`, `--purple`, `--green`, `--orange`, `--red`

---

## Browser Support

All modern browsers. CSS Grid and custom properties supported in Chrome, Firefox, Safari, Edge.