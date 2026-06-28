# API Migration Planner Showcase

## What it does

This submission creates an advanced API migration planning interface using only HTML and CSS. It combines endpoint upgrade cards, consumer compatibility mapping, rollout phases, and a risk register into a single polished showcase for platform, developer-experience, and infrastructure-style dashboards.

## How to use it

Use a migration board with endpoint cards, status chips, progress tracks, and matrix rows for downstream consumer readiness:

```html
<article class="migration-card">
  <div class="card-top">
    <span class="endpoint-tag">Billing API</span>
    <span class="status-chip complete">Ready</span>
  </div>
  <h3>/v2/invoices</h3>
  <p>Schema aligned and ready for rollout.</p>
  <div class="progress-track">
    <span style="width: 88%"></span>
  </div>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is human-readable, animation-forward, and highly composable. The patterns can be reused for version upgrades, deprecation planning, rollout coordination, and compatibility dashboards without needing JavaScript or external frameworks.

## Included advanced patterns

- Multi-card migration board
- Status-coded rollout states
- Animated progress tracks
- Consumer compatibility matrix
- Risk register panel
- Phased cutover timeline
- Responsive admin-style layout

## Files

- `demo.html` - self-contained demo that opens directly in a browser
- `style.css` - raw CSS for the migration planner showcase
- `README.md` - usage and contribution context
