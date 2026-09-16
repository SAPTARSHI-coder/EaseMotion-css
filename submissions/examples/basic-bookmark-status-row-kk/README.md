# Basic Bookmark Status Row

## What it does

This submission adds a CSS-only bookmark status row for saved content lists,
learning dashboards, knowledge bases, and reading apps.

It shows a bookmark marker, title, helper text, collection, last updated detail,
and saved, shared, or archived state in one compact reusable row.

## How to use it

Add the base row class with a bookmark marker, copy area, metadata pills, and a
state pill:

```html
<article class="basic-bookmark-status-row">
  <span class="bookmark-mark is-saved" aria-hidden="true">SV</span>
  <div class="bookmark-copy">
    <strong>Frontend animation checklist</strong>
    <p>Saved to the design systems collection.</p>
  </div>
  <span class="bookmark-collection">Design</span>
  <span class="bookmark-updated">Today</span>
  <span class="bookmark-state is-saved">Saved</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful for common
content and profile interfaces. Developers can reuse the same row pattern in
saved article lists, learning collections, bookmarks pages, and knowledge bases
while keeping the implementation lightweight and CSS-only.

## Included features

- Saved, shared, and archived bookmark examples
- Bookmark marker badges
- Collection metadata
- Last updated metadata
- Bookmark state styling
- Long text truncation for compact lists
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the bookmark status row
- `README.md` - usage and contribution context
