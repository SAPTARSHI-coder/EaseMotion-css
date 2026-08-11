# Budget Monitoring Animation (sri)

A rich, animation-first budget monitoring visual indicator component designed for financial tracking components. It features a pulsing alert icon for warnings and an animated progress bar that approaches the defined budget limit.

## Features

- **Pulsing Alert States**: Warning and critical states feature distinct SVG alert indicators that pulse smoothly with gradient background glows.
- **Approaching Limit Animation**: The progress bar animates from 0% to the target limit smoothly on load or transition.
- **Customizable**: Built using variables like `--bm-target-fill` to customize layout limits dynamically in JavaScript.
- **Accessible**: Fully respects user `prefers-reduced-motion` settings.

---

## Classes & Structure

```html
<div class="bm-card bm-state-warning">
  <div class="bm-header">
    <div class="bm-alert-icon-container">
      <!-- SVG Warning Icon -->
    </div>
    <div class="bm-title-area">
      <h2 class="bm-title">Cloud Infrastructure Budget</h2>
      <span class="bm-subtitle">Monthly Spending Limit</span>
    </div>
  </div>
  <div class="bm-progress-wrapper">
    <div class="bm-progress-track">
      <div class="bm-progress-bar animate-fill"></div>
    </div>
    <div class="bm-metrics">
      <span class="bm-usage"><span>$7,800</span> used</span>
      <span class="bm-limit">of $10,000 limit</span>
    </div>
  </div>
</div>
```

| Class                           | Purpose                                                              |
| ------------------------------- | -------------------------------------------------------------------- |
| `.bm-card`                      | Container card for the budget tracker.                               |
| `.bm-state-safe`                | Applies safe styles (green color bar, checks status icon, no pulse). |
| `.bm-state-warning`             | Applies warning status (orange bar and pulsing orange icon).         |
| `.bm-state-critical`            | Applies critical status (red bar and pulsing red icon).              |
| `.bm-progress-bar.animate-fill` | Triggers the limit fill animation on load.                           |

---

## Animation Settings (CSS Custom Properties)

Configure timings and limits dynamically:

- `--bm-target-fill`: Percentage fill (e.g. `92%`).
- `--bm-anim-speed`: Duration of the fill transition (default `2s`).
- `--bm-pulse-speed`: Speed of the pulsing icon indicator (default `1.5s`).
