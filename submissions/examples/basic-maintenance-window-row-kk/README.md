# Basic Maintenance Window Row

## What it does

This submission adds a simple CSS-only maintenance window row for status pages,
admin dashboards, incident panels, service health cards, and operations
settings screens.

It displays a service marker, maintenance title, helper copy, time pill, and
state label in one compact row.

## How to use it

Add the base row class with marker, copy, time, and state:

```html
<article class="basic-maintenance-window-row">
  <span class="window-marker is-scheduled" aria-hidden="true"></span>
  <div class="window-copy">
    <strong>Database index refresh</strong>
    <p>Scheduled maintenance for search and reporting services.</p>
  </div>
  <span class="window-time">10:30 PM</span>
  <span class="window-state is-scheduled">Scheduled</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful across
status and admin interfaces. The row can be used in service dashboards,
incident summaries, and operations cards while staying lightweight and CSS-only.

## Included features

- Scheduled, live, and completed maintenance states
- Glowing service marker
- Maintenance title, helper copy, time pill, and state layout
- Text truncation for long maintenance copy
- Subtle hover lift interaction
- Responsive two-column wrapping on small screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the maintenance window row
- `README.md` - usage and contribution context
