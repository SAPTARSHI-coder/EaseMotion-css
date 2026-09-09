# Basic Data Source Row

## What it does

This submission adds a simple CSS-only data source row for sync panels, connector settings, dashboards, admin cards, and integration summaries.

It aligns a source marker, source name, sync details, and a small connection status in one compact layout.

## How to use it

Add the utility class to a row containing a source marker, copy, and status:

```html
<div class="basic-data-source-row">
  <span class="source-marker" aria-hidden="true">DB</span>
  <div class="source-copy">
    <strong>Production database</strong>
    <p>PostgreSQL - synced 4 minutes ago</p>
  </div>
  <span class="source-status is-online">Online</span>
</div>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is human-readable, composable, and useful across dashboard settings, admin panels, connector lists, and data-heavy interfaces. It keeps source status details easy to scan with pure HTML and CSS.

## Included features

- Source marker, name, sync details, and status layout
- Online, pending, and paused examples
- Divider support between rows
- Text truncation for long sync details
- Responsive wrapping on small screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the data source row
- `README.md` - usage and contribution context
