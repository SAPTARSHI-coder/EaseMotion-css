# Animated SLA Uptime Monitor Cards

## What does this do?

This example shows service reliability cards with uptime percentages, status indicators, and animated history bars.

## How is it used?

Add a card inside the monitor grid and choose a status class:

```html
<article class="sla-card is-healthy">
  <div class="card-topline">
    <span class="sla-status"></span>
    <span class="status-label">Healthy</span>
  </div>
  <h2>API Gateway</h2>
  <strong class="uptime-value">99.98%</strong>
  <p>30-day uptime</p>
</article>
```

## Why is it useful?

Status pages, SaaS dashboards, and infrastructure panels often need compact reliability summaries. This component uses motion to draw attention to live status without overwhelming the metric cards.

## Features

- Healthy, watch, and incident states
- Animated status pulse
- Uptime history bars
- Responsive single-column layout on small screens
- `prefers-reduced-motion` support

## Tech Stack

- HTML
- CSS

## Preview

Open `demo.html` directly in a browser to view the example.

## Contribution Notes

- Proposed for issue #11123
- All files are scoped to this submission folder
- No framework source files are modified
