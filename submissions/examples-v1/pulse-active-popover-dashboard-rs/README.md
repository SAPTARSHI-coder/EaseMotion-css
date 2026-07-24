# Pulse-Active Popover — Responsive Dashboard

A pure CSS animated popover with pulse-active interaction, styled for responsive dashboard layouts.

## Features

- **4 dashboard metric cards** — Revenue, Active Users, Orders, Bounce Rate
- **Pulse-active popover** — Click a card to reveal detailed metrics with smooth pulse animation
- **Responsive grid** — Auto-fit columns adapt to any viewport width
- **Keyboard accessible** — Tab to card, Space/Enter to toggle popover, Escape to close via close button
- **Dark mode** — Automatic via `prefers-color-scheme: dark`
- **Reduced motion** — Respects `prefers-reduced-motion: reduce`
- **Forced colors** — Respects `forced-colors: active`

## Custom Properties

| Variable                   | Default                        | Description                     |
| -------------------------- | ------------------------------ | ------------------------------- |
| `--popover-duration`       | `0.3s`                         | Open/close transition duration  |
| `--popover-ease`           | `cubic-bezier(0.4, 0, 0.2, 1)` | Transition easing               |
| `--popover-pulse-duration` | `2s`                           | Pulse animation cycle time      |
| `--popover-pulse-scale`    | `1.03`                         | Scale factor at pulse peak      |
| `--popover-max-width`      | `320px`                        | Maximum popover width           |
| `--popover-gap`            | `8px`                          | Gap between trigger and popover |

## Usage

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/easemotion-css/easemotion.min.css"
/>
<link rel="stylesheet" href="style.css" />

<div class="dashboard-card">
  <div class="card-value">$48,250</div>
  <div class="pulse-popover-db">
    <input type="checkbox" id="my-popover" class="pulse-popover-toggle-db" />
    <label for="my-popover" class="pulse-popover-trigger-db"
      >View Details</label
    >
    <div
      class="pulse-popover-content-db"
      data-position="bottom"
      role="dialog"
      aria-label="Details"
    >
      <div class="popover-body">
        <div class="popover-stat">
          <span class="popover-stat-label">Metric</span>
          <span class="popover-stat-value">Value</span>
        </div>
      </div>
    </div>
  </div>
</div>
```
