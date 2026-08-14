# Basic File Attachment Row

## What it does

This submission adds a simple CSS-only attachment row for upload cards,
document panels, chat attachments, project files, and form review screens.

It presents a file type badge, filename, helper copy, size metadata, and upload
state in a compact reusable row.

## How to use it

Add the base row class with a file badge, copy area, size label, and status
pill:

```html
<article class="basic-file-attachment-row">
  <span class="file-icon file-pdf" aria-hidden="true">PDF</span>
  <div class="file-copy">
    <strong>proposal-summary.pdf</strong>
    <p>Project brief and review notes</p>
  </div>
  <span class="file-size">2.4 MB</span>
  <span class="file-status is-ready">Uploaded</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is human-readable, composable, and useful in
many product interfaces. Developers can drop the row into upload panels,
settings pages, project dashboards, or document lists without JavaScript or
external dependencies.

## Included features

- PDF, image, and document file badge variants
- Uploaded, syncing, and review status states
- Filename and helper text truncation
- Compact file size metadata
- Subtle hover slide and side accent
- Responsive wrapping for smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the attachment row
- `README.md` - usage and contribution context
