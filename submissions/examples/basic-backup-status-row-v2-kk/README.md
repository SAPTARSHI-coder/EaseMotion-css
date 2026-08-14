# Basic Backup Status Row

## What it does

This submission adds a simple CSS-only backup status row for admin settings,
restore panels, system safety dashboards, and workspace backup screens.

It presents a backup type icon, backup name, helper text, size or progress
metadata, and backup state in one compact reusable row.

## How to use it

Add the base row class with a backup icon, copy area, size label, and state
pill:

```html
<article class="basic-backup-status-row">
  <span class="backup-icon is-complete" aria-hidden="true">OK</span>
  <div class="backup-copy">
    <strong>Daily workspace backup</strong>
    <p>Snapshot completed successfully at 2:00 AM.</p>
  </div>
  <span class="backup-size">4.2 GB</span>
  <span class="backup-state is-complete">Complete</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful in common
admin and reliability interfaces. The row can be reused inside backup settings,
restore panels, system dashboards, and workspace safety pages while staying
lightweight and CSS-only.

## Included features

- Completed, running, and failed backup examples
- Size and progress metadata
- Backup state pills
- Long text truncation for backup descriptions
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the backup status row
- `README.md` - usage and contribution context
