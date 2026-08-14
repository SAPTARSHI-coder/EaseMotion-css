# Basic Release Version Row

## What it does

This submission adds a simple CSS-only release version row for changelog pages,
deployment panels, product dashboards, and release history screens.

It presents a release icon, version name, helper text, release timing, and
release state in one compact reusable row.

## How to use it

Add the base row class with a release icon, copy area, time label, and state
pill:

```html
<article class="basic-release-version-row">
  <span class="release-icon is-stable" aria-hidden="true">V1</span>
  <div class="release-copy">
    <strong>Version 1.8.0</strong>
    <p>Stable release with dashboard layout improvements.</p>
  </div>
  <span class="release-time">Today</span>
  <span class="release-state is-stable">Stable</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful in common
product and deployment interfaces. The row can be reused inside changelogs,
release history cards, deploy panels, and product dashboards while staying
lightweight and CSS-only.

## Included features

- Stable, beta, and rollback release examples
- Release timing metadata
- Release state pills
- Long text truncation for release notes
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the release version row
- `README.md` - usage and contribution context
