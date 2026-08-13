# Basic Sync Conflict Row

## What it does

This submission adds a simple CSS-only sync conflict row for collaboration
apps, offline editors, cloud sync panels, and file review dashboards.

It presents a conflict state icon, file name, helper text, update source, and
resolution state in one compact reusable row.

## How to use it

Add the base row class with a conflict icon, copy area, source label, and state
pill:

```html
<article class="basic-sync-conflict-row">
  <span class="conflict-icon is-resolved" aria-hidden="true">OK</span>
  <div class="conflict-copy">
    <strong>homepage-copy.md</strong>
    <p>Remote edits were merged with the latest local version.</p>
  </div>
  <span class="conflict-source">Cloud</span>
  <span class="conflict-state is-resolved">Resolved</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful in common
collaboration and sync interfaces. The row can be reused inside offline editors,
file sync panels, review dashboards, and conflict resolution screens while
staying lightweight and CSS-only.

## Included features

- Resolved, review, and blocked conflict examples
- Update source metadata
- Conflict resolution state pills
- Long text truncation for conflict descriptions
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the sync conflict row
- `README.md` - usage and contribution context
