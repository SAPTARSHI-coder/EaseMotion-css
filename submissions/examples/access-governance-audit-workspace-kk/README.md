# Access Governance Audit Workspace Showcase

## What it does

This submission creates a CSS-only governance workspace for reviewing risky access combinations, active exception requests, permission visibility, and audit remediation planning. It combines multiple connected sections into one structured advanced showcase for internal security, admin, and compliance-style interfaces.

## How to use it

Use finding cards with status pills, risk bars, and supporting panels for exception tracking and matrix-based permission visibility:

```html
<article class="finding-card severe">
  <div class="card-top">
    <span class="role-label">Finance Admin</span>
    <span class="status-pill critical">Flagged</span>
  </div>
  <h3>Privilege escalation path</h3>
  <p>Role combines export and user admin access.</p>
  <div class="risk-bar">
    <span style="width: 82%"></span>
  </div>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is human-readable, animation-forward, and composable. The layout uses clear states, structured dashboard sections, subtle motion, and reusable CSS-only patterns that work well for governance panels, audit workflows, and permission review interfaces.

## Included advanced features

- Multi-section audit workspace
- Flagged access finding cards
- Role-permission audit matrix
- Exception approval panel
- Audit note and finding summaries
- Remediation timeline
- Risk progress indicators
- Responsive governance dashboard structure

## Files

- `demo.html` - self-contained demo that opens directly in a browser
- `style.css` - raw CSS for the governance workspace
- `README.md` - usage and contribution context
