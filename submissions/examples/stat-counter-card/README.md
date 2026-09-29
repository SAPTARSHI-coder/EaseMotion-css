# Stat Counter Card

**Category:** Card
**Closes:** #86788

A metric card whose number pops up and a mini bar chart animates on hover (or keyboard focus).

## Usage

```html
<link rel="stylesheet" href="style.css" />

<article class="ease-stat-counter-card-scc" tabindex="0">
  <p class="ease-stat-label-scc">Total Users</p>
  <span class="ease-stat-value-scc">12,480</span>
  <p class="ease-stat-trend-scc">▲ 12% this month</p>
  <div class="ease-stat-bars-scc" aria-hidden="true">
    <span class="ease-stat-bar-scc" style="--h: 40%; --i: 0"></span>
    <span class="ease-stat-bar-scc" style="--h: 80%; --i: 1"></span>
  </div>
</article>
```

## Customization

| Custom property | Purpose |
| --------------- | ------- |
| `--h` (per bar) | Bar height as a percentage |
| `--i` (per bar) | Index used to stagger the bar animation |
| `--scc-accent` | Accent color for the number and bars |

## Notes

- Zero dependencies, pure CSS.
- Keyboard accessible (`tabindex="0"` + `:focus-visible`).
- Respects `prefers-reduced-motion`.
- Class names use the `-scc` suffix to avoid collisions.
