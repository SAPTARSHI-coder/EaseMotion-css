# Basic Compliance Evidence Row

## What it does

This submission adds a simple CSS-only compliance evidence row for audit
dashboards, control review panels, security questionnaires, and compliance
workspaces.

It presents an evidence type icon, evidence name, helper text, control mapping,
and review state in one compact reusable row.

## How to use it

Add the base row class with an evidence icon, copy area, control label, and
state pill:

```html
<article class="basic-compliance-evidence-row">
  <span class="evidence-icon is-approved" aria-hidden="true">SOC</span>
  <div class="evidence-copy">
    <strong>Access review export</strong>
    <p>Mapped to quarterly access control evidence.</p>
  </div>
  <span class="evidence-meta">AC-02</span>
  <span class="evidence-state is-approved">Approved</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful in common
security and compliance interfaces. The row can be reused inside audit panels,
control review dashboards, evidence libraries, and compliance workspaces while
staying lightweight and CSS-only.

## Included features

- Approved, review, and expiring evidence examples
- Control mapping metadata
- Evidence review state pills
- Long text truncation for evidence descriptions
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the compliance evidence row
- `README.md` - usage and contribution context
