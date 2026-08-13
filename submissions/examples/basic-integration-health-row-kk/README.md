# Basic Integration Health Row

## What it does

This submission adds a simple CSS-only integration health row for connected app
settings, workspace dashboards, admin panels, sync status pages, and developer
tools.

It displays a health marker, integration name, helper copy, last sync time, and
connection state in one compact row.

## How to use it

Add the base row class with marker, copy, meta time, and state pill:

```html
<article class="basic-integration-health-row">
  <span class="health-dot is-connected" aria-hidden="true"></span>
  <div class="integration-copy">
    <strong>GitHub integration</strong>
    <p>Repository events are syncing normally.</p>
  </div>
  <span class="integration-meta">2m ago</span>
  <span class="integration-state is-connected">Connected</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful across
common integration and workspace health interfaces. The row can be used inside
settings cards, connected app panels, developer tools, and admin dashboards
while staying lightweight and CSS-only.

## Included features

- Connected, degraded, and disconnected integration states
- Glowing health marker
- Integration copy, last sync time, and state pill layout
- Text truncation for long helper copy
- Subtle hover lift interaction
- Responsive two-column wrapping on small screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the integration health row
- `README.md` - usage and contribution context
