# Pulse-Active Popover — Modern SaaS

A pure CSS animated popover with pulse-active interaction, styled for modern SaaS platform interfaces.

## Features

- **8 SaaS-themed cards** — Team Members, API Usage, Subscription, Notifications, Dashboard Redesign, API Integration, Mobile App, Security Audit
- **Workspace & project breakdowns** — Popovers show team rosters, endpoint usage, plan details, notification lists, and task tracking
- **Color-coded status indicators** — Green (done/good), amber (away/warning), red (urgent/bad)
- **Pulse-active animation** — Smooth scale pulse on open
- **4 position variants** — Bottom, Top, Right, Left (switchable via radio buttons)
- **Dark/light mode** — Automatic via `prefers-color-scheme`
- **Reduced motion** — Respects `prefers-reduced-motion: reduce`
- **Forced colors** — Respects `forced-colors: active`
- **Keyboard accessible** — Tab navigation, Space/Enter to toggle
- **No JavaScript dependency** — Checkbox hack for toggle behavior

## Custom Properties

| Variable                   | Default                      | Description                     |
| -------------------------- | ---------------------------- | ------------------------------- |
| `--popover-duration`       | `0.28s`                      | Open/close transition duration  |
| `--popover-ease`           | `cubic-bezier(0.16,1,0.3,1)` | Transition easing               |
| `--popover-pulse-duration` | `1.8s`                       | Pulse animation cycle time      |
| `--popover-pulse-scale`    | `1.04`                       | Scale factor at pulse peak      |
| `--popover-max-width`      | `300px`                      | Maximum popover width           |
| `--popover-gap`            | `10px`                       | Gap between trigger and popover |

## Usage

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/easemotion-css/easemotion.min.css"
/>
<link rel="stylesheet" href="style.css" />

<div class="saas-card">
  <div class="pulse-popover-sa">
    <input type="checkbox" id="my-popover" class="pulse-popover-toggle-sa" />
    <label for="my-popover" class="pulse-popover-trigger-sa"
      >View Details</label
    >
    <div class="pulse-popover-content-sa" data-position="bottom" role="dialog">
      <div class="popover-header">
        <h4>Details</h4>
        <button type="button" class="popover-close">×</button>
      </div>
      <div class="sa-row">
        <span class="sa-label">Item</span>
        <span class="sa-value">Value</span>
      </div>
      <div class="popover-footer">
        <span class="popover-footer-label">Footer</span>
        <button type="button" class="popover-btn">Action</button>
      </div>
    </div>
  </div>
</div>
```
