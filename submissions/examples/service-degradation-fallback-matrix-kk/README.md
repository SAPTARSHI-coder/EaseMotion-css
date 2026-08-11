# Service Degradation Fallback Matrix Showcase

## What it does

This submission creates a CSS-only reliability workspace for visualizing degraded services, active fallback behavior, customer-visible feature impact, mitigation actions, and recovery planning. It combines multiple connected sections into one advanced operational showcase for resilience and graceful degradation interfaces.

## How to use it

Use service cards with status pills, fallback bars, and supporting matrix and impact panels:

```html
<article class="service-card degraded">
  <div class="card-top">
    <span class="service-label">Recommendations API</span>
    <span class="status-pill critical">Degraded</span>
  </div>
  <h3>Fallback mode enabled</h3>
  <p>Traffic is routed to cached recommendation bundles.</p>
  <div class="fallback-bar">
    <span style="width: 74%"></span>
  </div>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is human-readable, animation-forward, and composable. The layout uses clear operational states, structured dashboard sections, subtle motion, and reusable CSS-only patterns that work well for reliability interfaces, fallback planning views, and system resilience dashboards.

## Included advanced features

- Multi-section degradation workspace
- Service health cards with fallback states
- Primary vs fallback routing matrix
- Trigger condition badges
- Affected feature visibility panel
- Customer impact summary strip
- Mitigation recommendation panel
- Recovery / restore timeline
- Manual override / exception panel
- Recovery confidence indicator
- Responsive reliability dashboard structure

## Files

- `demo.html` - self-contained demo that opens directly in a browser
- `style.css` - raw CSS for the fallback matrix workspace
- `README.md` - usage and contribution context
