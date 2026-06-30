# Grid Template Columns Utilities

Utility classes for defining the number of columns in a CSS Grid layout.

## Available Classes

| Class          | CSS                                                 |
| -------------- | --------------------------------------------------- |
| `.grid-cols-1` | `grid-template-columns: repeat(1, minmax(0, 1fr));` |
| `.grid-cols-2` | `grid-template-columns: repeat(2, minmax(0, 1fr));` |
| `.grid-cols-3` | `grid-template-columns: repeat(3, minmax(0, 1fr));` |
| `.grid-cols-4` | `grid-template-columns: repeat(4, minmax(0, 1fr));` |
| `.grid-cols-5` | `grid-template-columns: repeat(5, minmax(0, 1fr));` |
| `.grid-cols-6` | `grid-template-columns: repeat(6, minmax(0, 1fr));` |

## Usage

```html
<div class="grid-demo grid-cols-3">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

## What It Does

These utilities make it easy to create responsive grid layouts by defining a fixed number of equal-width columns.

## Use Cases

- Card layouts
- Dashboards
- Image galleries
- Product grids
- Admin panels
