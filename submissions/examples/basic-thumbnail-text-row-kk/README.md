# Basic Thumbnail Text Row

## What it does

This submission adds a simple CSS-only thumbnail text row for compact media-style list items.

It works well for article previews, project updates, notification lists, activity feeds, product rows, and compact content summaries.

## How to use it

Add the utility class to a row containing a small thumbnail element and text:

```html
<div class="basic-thumbnail-text-row">
  <span class="thumb" aria-hidden="true">A</span>
  <div>
    <strong>Article preview</strong>
    <p>Use this row for compact summaries.</p>
  </div>
</div>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is human-readable, composable, and useful across many frontend sections. The row can be reused inside cards, dashboards, sidebars, feeds, and content lists without JavaScript or external assets.

## Included features

- Thumbnail and text alignment
- Small square visual marker
- Title and supporting copy structure
- Divider support between rows
- Responsive spacing
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the thumbnail text row
- `README.md` - usage and contribution context
