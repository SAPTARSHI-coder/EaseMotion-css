# Basic OAuth App Row

## What it does

This submission adds a CSS-only OAuth app row for security settings pages,
connected app dashboards, admin panels, and access review screens.

It shows an app marker, app name, helper text, granted scope count, last used
time, and authorization state in one compact reusable row.

## How to use it

Add the base row class with an app marker, copy area, metadata pills, and a
state pill:

```html
<article class="basic-oauth-app-row">
  <span class="oauth-mark is-approved" aria-hidden="true">GH</span>
  <div class="oauth-copy">
    <strong>GitHub Sync</strong>
    <p>Approved by workspace admin for repository automation.</p>
  </div>
  <span class="oauth-scopes">4 scopes</span>
  <span class="oauth-used">Today</span>
  <span class="oauth-state is-approved">Approved</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful for common
security and admin interfaces. Developers can reuse the same row pattern in
connected app settings, access review dashboards, workspace security pages, and
OAuth permission screens while keeping the implementation lightweight and
CSS-only.

## Included features

- Approved, review, and revoked OAuth app examples
- App initial marker badges
- Scope count metadata
- Last used metadata
- Authorization state styling
- Long text truncation for compact dashboards
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the OAuth app row
- `README.md` - usage and contribution context
