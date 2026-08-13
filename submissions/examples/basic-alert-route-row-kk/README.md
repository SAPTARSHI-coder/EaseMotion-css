# Basic Alert Route Row

## What it does

This submission adds a CSS-only alert route row for monitoring settings,
operations dashboards, on-call consoles, and reliability admin pages.

It shows a route marker, alert destination, helper text, channel type,
escalation delay, and routing health state in one compact reusable row.

## How to use it

Add the base row class with a route marker, copy area, metadata pills, and a
state pill:

```html
<article class="basic-alert-route-row">
  <span class="route-mark is-active" aria-hidden="true">ON</span>
  <div class="route-copy">
    <strong>Critical production incidents</strong>
    <p>Routes urgent alerts to the platform on-call team.</p>
  </div>
  <span class="route-channel">Pager</span>
  <span class="route-delay">0 min</span>
  <span class="route-state is-active">Active</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful for common
monitoring and reliability interfaces. Developers can reuse the same row pattern
in alert routing settings, escalation dashboards, on-call admin panels, and
incident readiness screens while keeping the implementation lightweight and
CSS-only.

## Included features

- Active, muted, and broken alert route examples
- Route marker badges
- Channel type metadata
- Escalation delay metadata
- Routing health state styling
- Long text truncation for compact dashboards
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the alert route row
- `README.md` - usage and contribution context
