# Basic Permission Request Row

## What it does

This submission adds a CSS-only permission request row for access review
screens, admin dashboards, workspace settings, and security panels.

It shows a requester marker, requester name, helper text, permission level,
request age, and review state in one compact reusable row.

## How to use it

Add the base row class with a request marker, copy area, metadata pills, and a
state pill:

```html
<article class="basic-permission-request-row">
  <span class="request-mark is-approved" aria-hidden="true">OK</span>
  <div class="request-copy">
    <strong>Meera Iyer</strong>
    <p>Requested editor access to the product roadmap workspace.</p>
  </div>
  <span class="request-level">Editor</span>
  <span class="request-age">2 hr</span>
  <span class="request-state is-approved">Approved</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful for common
security and workspace administration interfaces. Developers can reuse the same
row pattern in access review queues, permission dashboards, admin panels, and
workspace settings while keeping the implementation lightweight and CSS-only.

## Included features

- Approved, pending, and denied request examples
- Request marker badges
- Permission level metadata
- Request age metadata
- Review state styling
- Long text truncation for compact dashboards
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the permission request row
- `README.md` - usage and contribution context
