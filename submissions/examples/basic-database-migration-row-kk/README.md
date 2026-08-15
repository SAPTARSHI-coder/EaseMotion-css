# Basic Database Migration Row

## What it does

This submission adds a CSS-only database migration row for deployment
dashboards, admin panels, release screens, and infrastructure status pages.

It shows a migration marker, version name, helper text, author, duration, and
lifecycle state in one compact reusable row.

## How to use it

Add the base row class with a migration marker, copy area, metadata pills, and a
state pill:

```html
<article class="basic-database-migration-row">
  <span class="migration-mark is-applied" aria-hidden="true">OK</span>
  <div class="migration-copy">
    <strong>2026_08_14_add_billing_indexes</strong>
    <p>Added account and invoice indexes for faster billing queries.</p>
  </div>
  <span class="migration-author">Kriti</span>
  <span class="migration-time">18 sec</span>
  <span class="migration-state is-applied">Applied</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful for common
developer and deployment interfaces. Developers can reuse the same row pattern
in migration logs, release dashboards, admin panels, and infrastructure status
screens while keeping the implementation lightweight and CSS-only.

## Included features

- Applied, running, and failed migration examples
- Migration marker badges
- Author metadata
- Duration metadata
- Lifecycle state styling
- Long text truncation for compact dashboards
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the database migration row
- `README.md` - usage and contribution context
