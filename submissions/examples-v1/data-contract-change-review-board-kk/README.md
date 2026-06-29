# Data Contract Change Review Board Showcase

## What it does

This submission creates a CSS-only review workspace for evaluating data contract changes before rollout. It combines change classification, downstream compatibility checks, validation readiness, rollout risk, and staged adoption planning into one structured technical showcase.

## How to use it

Use change cards with status pills, impact bars, and supporting panels for compatibility and review decisions:

```html
<article class="change-card breaking">
  <div class="card-top">
    <span class="change-type">Modified field</span>
    <span class="status-pill critical">Breaking</span>
  </div>
  <h3>customer.phone_number</h3>
  <p>Field format moves to strict E.164 validation.</p>
  <div class="impact-bar">
    <span style="width: 78%"></span>
  </div>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is human-readable, animation-forward, and composable. The layout uses clear states, structured dashboard sections, subtle motion, and reusable CSS-only patterns that work well for technical review boards, validation dashboards, and rollout planning interfaces.

## Included advanced features

- Multi-section review workspace
- Schema change classification cards
- Breaking vs safe change indicators
- Consumer compatibility matrix
- Review decision panel
- Rollout risk register
- Staged adoption timeline
- Responsive technical dashboard structure

## Files

- `demo.html` - self-contained demo that opens directly in a browser
- `style.css` - raw CSS for the contract review showcase
- `README.md` - usage and contribution context
