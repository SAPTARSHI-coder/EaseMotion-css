# Basic Region Failover Row

## What it does

This submission adds a CSS-only region failover row for infrastructure
dashboards, deployment panels, status pages, and reliability consoles.

It shows a region marker, region code, helper text, failover role, latency, and
health state in one compact reusable row.

## How to use it

Add the base row class with a region marker, copy area, metadata pills, and a
state pill:

```html
<article class="basic-region-failover-row">
  <span class="region-mark is-primary" aria-hidden="true">US</span>
  <div class="region-copy">
    <strong>us-east-1</strong>
    <p>Primary region serving production traffic normally.</p>
  </div>
  <span class="region-role">Primary</span>
  <span class="region-latency">42 ms</span>
  <span class="region-state is-primary">Healthy</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful for common
infrastructure and reliability interfaces. Developers can reuse the same row
pattern in region health dashboards, failover panels, deployment consoles, and
status pages while keeping the implementation lightweight and CSS-only.

## Included features

- Primary, standby, and degraded region examples
- Region marker badges
- Failover role metadata
- Latency metadata
- Health state styling
- Long text truncation for compact dashboards
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the region failover row
- `README.md` - usage and contribution context
