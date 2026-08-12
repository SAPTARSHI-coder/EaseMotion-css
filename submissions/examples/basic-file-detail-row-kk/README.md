# Basic File Detail Row

## What it does

This submission adds a simple CSS-only file detail row for upload panels, attachment lists, document cards, and file manager sections.

It aligns a small file marker, filename, metadata, and a right-side action or status.

## How to use it

Add the utility class to a row containing an icon marker, file text, and optional action:

```html
<div class="basic-file-detail-row">
  <span class="file-icon" aria-hidden="true">PDF</span>
  <div class="file-copy">
    <strong>project-brief.pdf</strong>
    <p>PDF document · 2.4 MB</p>
  </div>
  <span class="file-action">View</span>
</div>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is human-readable, composable, and useful in many frontend interfaces. The pattern can be reused inside cards, upload forms, dashboards, profile pages, and document lists without JavaScript or external assets.

## Included features

- File marker, filename, metadata, and action layout
- Compact row spacing
- Divider support between rows
- Filename truncation for long file names
- Responsive spacing for smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the file detail row
- `README.md` - usage and contribution context
