# Basic Backup Snapshot Row

## What it does

This submission adds a CSS-only backup snapshot row for admin dashboards,
storage tools, recovery panels, and infrastructure status pages.

It shows a snapshot marker, backup name, timestamp helper text, storage target,
backup size, and lifecycle status in one compact reusable row.

## How to use it

Add the base row class with a snapshot mark, copy area, metadata pills, and a
state pill:

```html
<article class="basic-backup-snapshot-row">
  <span class="snapshot-mark is-complete" aria-hidden="true">OK</span>
  <div class="snapshot-copy">
    <strong>workspace-nightly-042</strong>
    <p>Completed today at 02:15 AM with no skipped files.</p>
  </div>
  <span class="snapshot-target">S3 East</span>
  <span class="snapshot-size">8.4 GB</span>
  <span class="snapshot-state is-complete">Complete</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is human-readable, composable, and useful for
common admin and infrastructure interfaces. Developers can reuse the same row
pattern in backup logs, recovery dashboards, storage panels, and system health
screens while keeping the implementation lightweight and CSS-only.

## Included features

- Complete, scheduled, and failed backup examples
- Snapshot marker badges
- Storage target metadata
- Backup size metadata
- Lifecycle state styling
- Long text truncation for compact dashboards
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the backup snapshot row
- `README.md` - usage and contribution context
