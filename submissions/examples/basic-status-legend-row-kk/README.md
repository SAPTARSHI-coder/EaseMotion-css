# Basic Status Legend Row

## What it does

This submission adds a simple CSS-only status legend row for dashboards, chart
legends, map panels, system health pages, and analytics interfaces.

It presents a colored legend marker, status name, helper description, item
count, and state label in one compact reusable row.

## How to use it

Add the base row class with a marker, copy area, count label, and state pill:

```html
<article class="basic-status-legend-row">
  <span class="legend-dot is-healthy" aria-hidden="true"></span>
  <div class="legend-copy">
    <strong>Healthy</strong>
    <p>All monitored services are responding normally.</p>
  </div>
  <span class="legend-count">24 items</span>
  <span class="legend-state is-healthy">Stable</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful in common
dashboard interfaces. The row can be reused in map legends, analytics cards,
monitoring panels, and status dashboards while staying lightweight and CSS-only.

## Included features

- Healthy, warning, and critical legend states
- Glowing status marker with soft halo
- Count metadata and state pill
- Long text truncation for descriptions
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the status legend row
- `README.md` - usage and contribution context
