# Consistency Drift Reconciliation Workspace Showcase

## What it does

This submission creates a CSS-only reliability workspace for visualizing drift between primary and replica systems, reviewing entity mismatches, showing safeguard states, and staging reconciliation recovery. It combines multiple connected sections into one advanced consistency-monitoring showcase.

## How to use it

Use drift cards with status pills, drift bars, and supporting matrix and reconciliation sections:

```html
<article class="drift-card critical">
  <div class="card-top">
    <span class="system-label">Orders Replica</span>
    <span class="status-pill severe-pill">Drift Detected</span>
  </div>
  <h3>Replica lag exceeds threshold</h3>
  <p>Recent order updates have not fully propagated to the read replica.</p>
  <div class="drift-bar">
    <span style="width: 71%"></span>
  </div>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is human-readable, animation-forward, and composable. The layout uses clear operational states, structured dashboard sections, subtle motion, and reusable CSS-only patterns that work well for replication monitoring, reconciliation views, and reliability-focused admin interfaces.

## Included advanced features

- Multi-section consistency workspace
- Primary vs replica comparison cards
- Drift severity and lag indicators
- Entity mismatch visibility panel
- Freshness / replication status metrics
- Reconciliation action queue
- Safeguard / write-protection state badges
- Recovery checkpoint timeline
- Responsive operations dashboard structure

## Files

- `demo.html` - self-contained demo that opens directly in a browser
- `style.css` - raw CSS for the reconciliation workspace
- `README.md` - usage and contribution context
