# Basic Version Info Row

## What it does

This submission adds a simple CSS-only version info row for release notes, changelog cards, docs pages, app settings screens, and update summaries.

It aligns a version tag, release title, supporting text, and a small state label in one compact layout.

## How to use it

Add the utility class to a row containing a version tag, release copy, and optional state:

```html
<div class="basic-version-info-row">
  <span class="version-tag">v2.4</span>
  <div class="version-copy">
    <strong>Layout polish update</strong>
    <p>Improved spacing, row alignment, and mobile wrapping.</p>
  </div>
  <span class="version-state is-current">Current</span>
</div>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is human-readable, composable, and useful across documentation pages, release panels, dashboards, and settings screens. It keeps version details easy to scan with pure HTML and CSS.

## Included features

- Version tag, title, helper copy, and state label layout
- Current, stable, and archive examples
- Divider support between rows
- Text truncation for long helper copy
- Responsive stacked layout on small screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the version info row
- `README.md` - usage and contribution context
