# Basic Runbook Link Row

## What it does

This submission adds a CSS-only runbook link row for operations dashboards,
reliability consoles, service catalogs, and incident readiness pages.

It shows a service marker, service name, helper text, owner team, last review
state, and documentation health in one compact reusable row.

## How to use it

Add the base row class with a runbook marker, copy area, metadata pills, and a
state pill:

```html
<article class="basic-runbook-link-row">
  <span class="runbook-mark is-verified" aria-hidden="true">OK</span>
  <div class="runbook-copy">
    <strong>Payments API</strong>
    <p>Incident response runbook reviewed by the billing team.</p>
  </div>
  <span class="runbook-owner">Billing</span>
  <span class="runbook-review">Jul 24</span>
  <span class="runbook-state is-verified">Verified</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful for common
operations and reliability interfaces. Developers can reuse the same row pattern
in service catalogs, incident readiness dashboards, runbook review queues, and
on-call admin panels while keeping the implementation lightweight and CSS-only.

## Included features

- Verified, review, and missing runbook examples
- Runbook marker badges
- Owner team metadata
- Last review metadata
- Documentation health state styling
- Long text truncation for compact dashboards
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the runbook link row
- `README.md` - usage and contribution context
