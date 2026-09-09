# Basic Export Format Row

## What it does

This submission adds a simple CSS-only export format row for report downloads,
dashboard exports, account data pages, file sharing panels, and admin tools.

It displays a format marker, export label, helper copy, and availability state
in one compact row.

## How to use it

Add the base row class with a format marker, copy, and state pill:

```html
<article class="basic-export-format-row">
  <span class="format-mark is-csv" aria-hidden="true">CSV</span>
  <div class="format-copy">
    <strong>Spreadsheet export</strong>
    <p>Best for analytics, tables, and lightweight report sharing.</p>
  </div>
  <span class="format-state is-ready">Ready</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful across
common dashboard and data-export interfaces. The row can be used inside report
cards, admin tools, account data pages, and download panels while staying
lightweight and CSS-only.

## Included features

- CSV, PDF, and JSON export format examples
- Ready, popular, and advanced format states
- Format marker, helper copy, and state pill layout
- Text truncation for long export descriptions
- Subtle hover lift interaction
- Responsive wrapping on small screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the export format row
- `README.md` - usage and contribution context
