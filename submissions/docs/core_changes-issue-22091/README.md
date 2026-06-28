# Data Table Component — EaseMotion CSS

**Issue:** [#22091 — Add data table component with sorting and responsive design](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/22091)

Styled tables for tabular data display with sorting indicators, multiple visual variants, and responsive horizontal scroll.

## Structure

```
submissions/core_changes-issue-22091/
├── demo.html       # Live demo page showing all variants
├── style.css       # Component styles
└── README.md       # This file
```

## Variants

| Variant | Class | Description |
|---------|-------|-------------|
| **Base** | `.ease-table` | Default table with header styling and row borders |
| **Striped** | `.ease-table-striped` | Alternating row background colors |
| **Bordered** | `.ease-table-bordered` | Full border on all cells |
| **Hover** | `.ease-table-hover` | Row highlight on hover |
| **Compact** | `.ease-table-compact` | Reduced padding for denser data |
| **Sortable** | `.ease-table-sortable` | Sort indicator arrows on headers |
| **Responsive** | `.ease-table-responsive` | Wrapper for horizontal scroll on mobile |

## Usage

```html
<link rel="stylesheet" href="path/to/style.css" />

<div class="ease-table-responsive">
  <table class="ease-table ease-table-striped ease-table-hover">
    <thead>
      <tr><th>Name</th><th>Role</th><th>Status</th></tr>
    </thead>
    <tbody>
      <tr><td>Alice Chen</td><td>Frontend Developer</td><td><span class="ease-status ease-status-active">Active</span></td></tr>
    </tbody>
  </table>
</div>
```

## Features

- Clean base table with uppercase header labels
- Striped rows for readability
- Bordered variant for spreadsheet-like display
- Hover row highlight for interactive tables
- Compact variant for dense data
- Sortable header indicators (↕ default, ↑ asc, ↓ desc)
- Responsive wrapper for horizontal scroll on mobile
- Status badge styles (active, pending, inactive)
- `@layer easemotion-components` for proper cascade ordering
- Dark mode, reduced motion, and forced-colors support
