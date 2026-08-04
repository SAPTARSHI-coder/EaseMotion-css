# Truncate Multi-Line Clamp Utilities

This guide details configuration specs for generating SCSS multi-line clamp mixin helpers.

---

## Technical Overview: The Multi-Line Clamp Mixin

Standard text truncation utilizing `text-overflow: ellipsis` only supports single-line headings, breaking layout flows for card body paragraphs. Generating line-clamps via SCSS mixins preserves spacing:

```scss
// SCSS Multi-Line Clamp Truncation Mixin
@mixin line-clamp($lines: 2) {
  display: -webkit-box;
  -webkit-line-clamp: $lines;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

// Utility Classes
.line-clamp-2 { @include line-clamp(2); }
.line-clamp-3 { @include line-clamp(3); }
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Toggle the **Clamp 2 Lines** and **Clamp 3 Lines** buttons — verify the preview paragraph displays exactly 2 or 3 lines of text appended with trailing ellipses.
3. Click **Expand Text** — verify the full description expands cleanly.
