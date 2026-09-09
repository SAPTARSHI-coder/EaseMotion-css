# Basic File Visibility Row

## What it does

This submission adds a CSS-only file visibility row for file managers, document
settings, knowledge bases, and sharing dashboards.

It shows a file marker, file name, helper text, visibility scope, access count,
and private, shared, or public state in one compact reusable row.

## How to use it

Add the base row class with a file marker, copy area, metadata pills, and a
state pill:

```html
<article class="basic-file-visibility-row">
  <span class="file-mark is-private" aria-hidden="true">PR</span>
  <div class="file-copy">
    <strong>project-budget.xlsx</strong>
    <p>Only the owner can view or edit this file.</p>
  </div>
  <span class="file-scope">Owner</span>
  <span class="file-access">1 user</span>
  <span class="file-state is-private">Private</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful for common
file and sharing interfaces. Developers can reuse the same row pattern in file
settings, document dashboards, knowledge bases, and sharing panels while keeping
the implementation lightweight and CSS-only.

## Included features

- Private, shared, and public file examples
- File visibility marker badges
- Visibility scope metadata
- Access count metadata
- File state styling
- Long text truncation for compact file lists
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the file visibility row
- `README.md` - usage and contribution context
