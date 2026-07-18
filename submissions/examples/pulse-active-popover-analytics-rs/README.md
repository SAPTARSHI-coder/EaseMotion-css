# Pulse-Active Popover — Dashboard Analytics

A pure CSS animated popover with pulse-active interaction, styled for analytics dashboard interfaces.

## Features

- **4 dashboard metric cards** — Visitors, Conversion Rate, Bounce Rate, Avg. Session
- **4 channel breakdown cards** — Direct, Organic, Social, Referral traffic
- **Analytics-rich popovers** — Metric breakdowns, trend indicators, mini bar charts
- **Pulse-active animation** — Smooth scale pulse on open
- **4 position variants** — Bottom, Top, Right, Left (switchable via radio buttons)
- **Dark/light mode** — Automatic via `prefers-color-scheme`
- **Reduced motion** — Respects `prefers-reduced-motion: reduce`
- **Forced colors** — Respects `forced-colors: active`
- **Keyboard accessible** — Tab navigation, Space/Enter to toggle
- **No JavaScript dependency** — Checkbox hack for toggle behavior

## Custom Properties

| Variable                   | Default                     | Description                     |
| -------------------------- | --------------------------- | ------------------------------- |
| `--popover-duration`       | `0.3s`                      | Open/close transition duration  |
| `--popover-ease`           | `cubic-bezier(0.4,0,0.2,1)` | Transition easing               |
| `--popover-pulse-duration` | `2s`                        | Pulse animation cycle time      |
| `--popover-pulse-scale`    | `1.03`                      | Scale factor at pulse peak      |
| `--popover-max-width`      | `320px`                     | Maximum popover width           |
| `--popover-gap`            | `8px`                       | Gap between trigger and popover |

## Usage

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/easemotion-css/easemotion.min.css"
/>
<link rel="stylesheet" href="style.css" />

<div class="analytics-card">
  <div class="pulse-popover-an">
    <input type="checkbox" id="my-popover" class="pulse-popover-toggle-an" />
    <label for="my-popover" class="pulse-popover-trigger-an"
      >View Details</label
    >
    <div class="pulse-popover-content-an" data-position="bottom" role="dialog">
      <div class="popover-header">
        <h4>Breakdown</h4>
        <button type="button" class="popover-close">×</button>
      </div>
      <div class="metric-row">
        <span class="metric-label">Metric</span>
        <span class="metric-value">1,234</span>
      </div>
      <div class="popover-footer">
        <span class="popover-footer-label">Footer label</span>
        <button type="button" class="popover-btn">Action</button>
      </div>
    </div>
  </div>
</div>
```
