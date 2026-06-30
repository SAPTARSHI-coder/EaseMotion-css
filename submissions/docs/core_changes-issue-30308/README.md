# Responsive Data Table — EaseMotion CSS

**Issue:** [#30308 — Add Responsive Data Table component with striped rows and sorting indicators](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/30308)

A styled data table system with striped rows, hover highlights, sortable column indicators, sticky headers, bordered and compact variants, and responsive horizontal scroll.

## Structure

```
submissions/docs/core_changes-issue-30308/
├── demo.html       # Demo page showing all table variants
├── style.css       # Component styles
└── README.md       # This file
```

## Classes

| Class | Purpose |
|-------|---------|
| `.ease-table` | Base table (full-width, clean styling) |
| `.ease-table-striped` | Alternating row backgrounds via `nth-child(even)` |
| `.ease-table-hover` | Row highlight on hover with smooth transition |
| `.ease-table-bordered` | Adds borders around all cells |
| `.ease-table-compact` | Reduced padding and smaller font size |
| `.ease-table-sortable` | Sort arrow indicators on header cells |
| `.ease-table-sort-asc` | Upward sort arrow (active) |
| `.ease-table-sort-desc` | Downward sort arrow (active) |
| `.ease-table-sticky` | Applied to `<thead>` for sticky headers |
| `.ease-table-responsive` | Wrapper for horizontal scroll on small screens |
| `.ease-table-numeric` | Right-aligns and uses tabular-nums for numbers |

## Features

- **Responsive scroll**: Wrap in `.ease-table-responsive` for overflow-x scroll on small screens
- **Sticky header**: Add `.ease-table-sticky` to `<thead>` for pinned headers during scroll
- **Sort indicators**: CSS-only (`::after` pseudo-elements with border arrows), no JS required
- **Customizable**: All colors via `--ease-color-*` CSS variables
- **Accessible**: Uses semantic `<table>`, `<caption>`, `<thead>`, `<th>`, `<tbody>`
- **Reduced motion**: Hover transitions disabled when `prefers-reduced-motion: reduce`
- **Scrollbar styling**: Custom thin scrollbar for the responsive wrapper
- **Numeric columns**: `.ease-table-numeric` for right-aligned tabular-nums
- **Combinable**: All variants work together (e.g., `ease-table ease-table-striped ease-table-hover ease-table-sortable`)
