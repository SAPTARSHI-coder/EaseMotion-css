# Basic Backup Status Row

## What it does

This submission adds a simple CSS-only backup status row for admin panels, storage dashboards, recovery summaries, settings screens, and restore workflows.

It aligns a backup marker, snapshot title, helper copy, and small status label in one compact layout.

## How to use it

Add the utility class to a row containing a marker, backup copy, and status:

```html
<div class="basic-backup-status-row">
  <span class="backup-marker" aria-hidden="true">01</span>
  <div class="backup-copy">
    <strong>Daily snapshot</strong>
    <p>Completed at 03:30 with all workspace files included.</p>
  </div>
  <span class="backup-state is-complete">Complete</span>
</div>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is human-readable, composable, and useful across admin dashboards, backup settings, recovery panels, and storage summaries. It keeps backup state information easy to scan with pure HTML and CSS.

## Included features

- Backup marker, title, helper copy, and status layout
- Complete, pending, and ready examples
- Divider support between rows
- Text truncation for long helper copy
- Responsive wrapping on small screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the backup status row
- `README.md` - usage and contribution context
