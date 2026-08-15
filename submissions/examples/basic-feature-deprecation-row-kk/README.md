# Basic Feature Deprecation Row

## What it does

This submission adds a CSS-only feature deprecation row for product dashboards,
admin panels, release planning pages, and migration tracking screens.

It shows a feature marker, feature name, migration hint, sunset date, usage
count, and lifecycle state in one compact reusable row.

## How to use it

Add the base row class with a feature marker, copy area, metadata pills, and a
state pill:

```html
<article class="basic-feature-deprecation-row">
  <span class="deprecation-mark is-scheduled" aria-hidden="true">90</span>
  <div class="deprecation-copy">
    <strong>Legacy CSV importer</strong>
    <p>Scheduled for removal after migration to bulk uploader.</p>
  </div>
  <span class="deprecation-date">Nov 12</span>
  <span class="deprecation-usage">128 users</span>
  <span class="deprecation-state is-scheduled">Sunsetting</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful for common
product and release management interfaces. Developers can reuse the same row
pattern in deprecation dashboards, migration plans, product admin pages, and
feature lifecycle screens while keeping the implementation lightweight and
CSS-only.

## Included features

- Preferred, sunsetting, and retired feature examples
- Feature lifecycle marker badges
- Sunset date metadata
- Usage count metadata
- Lifecycle state styling
- Long text truncation for compact dashboards
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the feature deprecation row
- `README.md` - usage and contribution context
