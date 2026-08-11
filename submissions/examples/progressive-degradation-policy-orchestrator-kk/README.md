# Progressive Degradation Policy Orchestrator Showcase

## What it does

This submission creates a CSS-only resilience workspace for visualizing how a system activates different degradation policies under pressure, how those policies affect services and user journeys, and how recovery is staged. It combines multiple connected sections into one advanced systems-orchestration showcase.

## How to use it

Use policy cards with status pills, policy bars, and supporting matrix and recovery sections:

```html
<article class="policy-card critical">
  <div class="card-top">
    <span class="policy-label">Recommendation Policy</span>
    <span class="status-pill severe-pill">Tier 2 Active</span>
  </div>
  <h3>Cached response fallback enabled</h3>
  <p>Live personalization is disabled while the system serves precomputed recommendation bundles.</p>
  <div class="policy-bar">
    <span style="width: 76%"></span>
  </div>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is human-readable, animation-forward, and composable. The layout uses clear operational states, structured dashboard sections, subtle motion, and reusable CSS-only patterns that work well for resilience planning, policy control views, and reliability-focused admin interfaces.

## Included advanced features

- Multi-section degradation orchestrator workspace
- Policy activation and severity cards
- Degradation tier ladder
- Service-to-policy mapping matrix
- Affected user journey visibility panel
- Manual override / operator control panel
- Dependency protection rules
- Recovery readiness checkpoints
- Staged restore timeline
- Responsive reliability dashboard structure

## Files

- `demo.html` - self-contained demo that opens directly in a browser
- `style.css` - raw CSS for the orchestrator workspace
- `README.md` - usage and contribution context
