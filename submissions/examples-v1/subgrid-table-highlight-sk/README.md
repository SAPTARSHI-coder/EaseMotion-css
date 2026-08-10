# CSS Subgrid Data Table with :has() Row Highlight

5-column data table using CSS Subgrid for column alignment and `:has(.cell:hover)` for full-row highlight animation.

## Classes

| Class | Role |
|---|---|
| `ease-sg-table` | Grid container: `grid-template-columns: repeat(5, ...)` |
| `ease-sg-row` | Each row: `grid-template-columns: subgrid` |
| `ease-sg-cell` | Individual cell |
| `ease-sg-header` | Header row modifier |
| `ease-sg-new` | Flash animation for newly added rows |

## Usage

```html
<div class="ease-sg-table">
  <div class="ease-sg-row ease-sg-header">
    <span class="ease-sg-cell">Name</span>
    <span class="ease-sg-cell">Role</span>
  </div>
  <div class="ease-sg-row">
    <span class="ease-sg-cell">Alice</span>
    <span class="ease-sg-cell">Engineer</span>
  </div>
</div>
```

## How it works

- `grid-template-columns: subgrid` on each row inherits the parent's column tracks, ensuring perfect alignment regardless of cell content
- `.ease-sg-row:has(.ease-sg-cell:hover)` selects the row when **any** of its cells are hovered — previously required JS event delegation
- `@supports not (grid-template-columns: subgrid)` falls back to `display: table`

Closes #9612
