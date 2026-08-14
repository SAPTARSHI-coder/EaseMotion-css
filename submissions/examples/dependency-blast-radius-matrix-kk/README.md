# Dependency Blast Radius Matrix Showcase

## What it does

This submission creates a CSS-only reliability workspace for visualizing how failures in one dependency propagate across connected systems, features, and fallback paths. It combines dependency cards, impact mapping, fallback coverage, mitigation priorities, and restoration planning into one advanced operational showcase.

## How to use it

Use dependency cards with status pills, impact bars, and supporting matrix and checklist sections:

```html
<article class="dependency-card critical">
  <div class="card-top">
    <span class="service-label">Payment Gateway</span>
    <span class="status-pill severe-pill">Critical</span>
  </div>
  <h3>Checkout dependency failure</h3>
  <p>Checkout confirmation and refund workflows are impacted.</p>
  <div class="impact-bar">
    <span style="width: 84%"></span>
  </div>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is human-readable, animation-forward, and composable. The layout uses clear operational states, structured dashboard sections, subtle motion, and reusable CSS-only patterns that work well for dependency analysis, reliability planning, and resilience-focused admin interfaces.

## Included advanced features

- Multi-section blast radius workspace
- Upstream and downstream dependency cards
- Service impact severity states
- Affected feature matrix
- Fallback availability panel
- Recovery priority section
- Mitigation checklist
- Restoration timeline
- Responsive reliability dashboard structure

## Files

- `demo.html` - self-contained demo that opens directly in a browser
- `style.css` - raw CSS for the blast radius workspace
- `README.md` - usage and contribution context
