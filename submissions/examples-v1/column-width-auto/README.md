## column-width-auto

Explores `column-width` for responsive multi-column layouts where the browser automatically determines column count.

### Key Features

- `column-width: 200px` — columns grow and shrink naturally with viewport
- `column-width: 150px` — smaller minimum column width produces more columns
- `columns: 250px 3` shorthand combining width and maximum count

### Responsive Behavior

Unlike `column-count` which fixes the number of columns, `column-width` lets the browser calculate column count based on available space. This creates a truly responsive multi-column layout without media queries.
