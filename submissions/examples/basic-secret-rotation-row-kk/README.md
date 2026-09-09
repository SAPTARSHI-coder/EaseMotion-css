# Basic Secret Rotation Row

## What it does

This submission adds a CSS-only secret rotation row for security dashboards,
admin panels, developer settings, and compliance review screens.

It shows a secret marker, secret name, helper text, owner, next due window, and
rotation state in one compact reusable row.

## How to use it

Add the base row class with a secret marker, copy area, metadata pills, and a
state pill:

```html
<article class="basic-secret-rotation-row">
  <span class="secret-mark is-current" aria-hidden="true">OK</span>
  <div class="secret-copy">
    <strong>payments-webhook-secret</strong>
    <p>Owned by billing services and rotated on schedule.</p>
  </div>
  <span class="secret-owner">Billing</span>
  <span class="secret-due">42 days</span>
  <span class="secret-state is-current">Current</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful for common
security and developer administration interfaces. Developers can reuse the same
row pattern in secret inventory screens, token rotation queues, compliance
dashboards, and workspace security panels while keeping the implementation
lightweight and CSS-only.

## Included features

- Current, due soon, and expired rotation examples
- Secret marker badges
- Owner metadata
- Next due window metadata
- Rotation health state styling
- Long text truncation for compact dashboards
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the secret rotation row
- `README.md` - usage and contribution context
