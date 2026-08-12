# Truncate Multi-Line Clamp Utility Classes

This guide details configuration specs for generating SCSS line clamp mixins.

---

## Technical Overview: The Line Clamp Mixin

Writing manual webkit-box directives for multiple text elements makes stylesheets verbose. Utilizing an SCSS line-clamp mixin structures parameters cleanly:

```scss
// SCSS Multi-Line Clamp Mixin
@mixin line-clamp($lines: 2) {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: $lines;
  overflow: hidden;
}

// Class mapping
.clamp-2 {
  @include line-clamp(2);
}
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Observe the paragraphs under the 2-line and 3-line card modules.
3. Verify that paragraph text is cut off precisely at the line bounds and displays an ellipsis (...).
