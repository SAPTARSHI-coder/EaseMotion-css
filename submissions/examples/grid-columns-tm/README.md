# Grid Columns — EaseMotion CSS Utilities

CSS `grid-columns` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css">
```

## Utility Classes

| Class | Declaration |
|-------|-------------|
| `.cols-1` | `grid-template-columns: repeat(1, minmax(0, 1fr));` |
| `.cols-2` | `grid-template-columns: repeat(2, minmax(0, 1fr));` |
| `.cols-3` | `grid-template-columns: repeat(3, minmax(0, 1fr));` |
| `.cols-4` | `grid-template-columns: repeat(4, minmax(0, 1fr));` |
| `.cols-5` | `grid-template-columns: repeat(5, minmax(0, 1fr));` |
| `.cols-6` | `grid-template-columns: repeat(6, minmax(0, 1fr));` |
| `.cols-7` | `grid-template-columns: repeat(7, minmax(0, 1fr));` |
| `.cols-8` | `grid-template-columns: repeat(8, minmax(0, 1fr));` |
| `.cols-9` | `grid-template-columns: repeat(9, minmax(0, 1fr));` |
| `.cols-10` | `grid-template-columns: repeat(10, minmax(0, 1fr));` |
| `.cols-12` | `grid-template-columns: repeat(12, minmax(0, 1fr));` |
| `.cols-auto` | `grid-template-columns: auto;` |
| `.cols-min` | `grid-template-columns: minmax(min-content, 1fr);` |
| `.cols-max` | `grid-template-columns: minmax(max-content, 1fr);` |
| `.cols-subgrid` | `grid-template-columns: subgrid;` |
| `.cols-fr` | `grid-template-columns: 1fr;` |
| `.cols-2fr` | `grid-template-columns: 2fr;` |
| `.cols-3fr` | `grid-template-columns: 3fr;` |
| `.cols-1-2` | `grid-template-columns: 1fr 2fr;` |
| `.cols-2-1` | `grid-template-columns: 2fr 1fr;` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Grid Columns
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">
  Dark mode Grid Columns
</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">
  No motion Grid Columns
</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
