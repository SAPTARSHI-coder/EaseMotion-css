# Basic Export Format Row

## What it does

This submission adds a simple CSS-only export format row for report builders,
download panels, data tables, analytics pages, and admin dashboards.

It presents an export format icon, format name, helper text, estimated file
size, and availability state in one compact reusable row.

## How to use it

Add the base row class with a format icon, copy area, size label, and state
pill:

```html
<article class="basic-export-format-row is-selected">
  <span class="export-icon is-csv" aria-hidden="true">CSV</span>
  <div class="export-copy">
    <strong>Spreadsheet export</strong>
    <p>Best for editing data in sheets and reporting tools.</p>
  </div>
  <span class="export-size">240 KB</span>
  <span class="export-state is-ready">Ready</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful in common
data-heavy product interfaces. The row can be reused inside report builders,
download modals, export panels, and admin dashboards while staying lightweight
and CSS-only.

## Included features

- CSV, PDF, and JSON export format examples
- Ready, popular, and developer state pills
- Estimated file size metadata
- Long text truncation for export descriptions
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the export format row
- `README.md` - usage and contribution context
