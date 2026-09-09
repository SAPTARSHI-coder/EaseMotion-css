# Basic Workspace Storage Row

## What it does

This submission adds a simple CSS-only workspace storage row for settings
pages, admin dashboards, file managers, usage panels, and workspace billing
screens.

It displays a storage marker, storage label, helper copy, usage progress, and
storage state in one compact row.

## How to use it

Add the base row class with a marker, copy, progress track, and state:

```html
<article class="basic-workspace-storage-row">
  <span class="storage-mark" aria-hidden="true">A</span>
  <div class="storage-copy">
    <strong>Assets folder</strong>
    <p>2.4 GB used from a 10 GB workspace allocation.</p>
    <span class="storage-track" aria-hidden="true">
      <span class="storage-fill" style="--value: 24%"></span>
    </span>
  </div>
  <span class="storage-state is-safe">Safe</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful across
settings, billing, and file-management interfaces. The row can be reused inside
usage panels, admin dashboards, and storage summaries while staying lightweight
and CSS-only.

## Included features

- Safe, warning, and full storage states
- Storage marker, helper copy, progress track, and state pill layout
- CSS variable-powered usage progress width
- Text truncation for long storage descriptions
- Subtle hover lift interaction
- Responsive wrapping on small screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the workspace storage row
- `README.md` - usage and contribution context
