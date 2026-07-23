# Grid Template Columns — EaseMotion CSS Utilities

CSS `grid-template-columns` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css">
```

## Utility Classes

| Class | Declaration |
|-------|-------------|
| `.grid-cols-none` | `grid-template-columns: none;` |
| `.grid-cols-1` | `grid-template-columns: repeat(1, minmax(0, 1fr));` |
| `.grid-cols-2` | `grid-template-columns: repeat(2, minmax(0, 1fr));` |
| `.grid-cols-3` | `grid-template-columns: repeat(3, minmax(0, 1fr));` |
| `.grid-cols-4` | `grid-template-columns: repeat(4, minmax(0, 1fr));` |
| `.grid-cols-5` | `grid-template-columns: repeat(5, minmax(0, 1fr));` |
| `.grid-cols-6` | `grid-template-columns: repeat(6, minmax(0, 1fr));` |
| `.grid-cols-7` | `grid-template-columns: repeat(7, minmax(0, 1fr));` |
| `.grid-cols-8` | `grid-template-columns: repeat(8, minmax(0, 1fr));` |
| `.grid-cols-9` | `grid-template-columns: repeat(9, minmax(0, 1fr));` |
| `.grid-cols-10` | `grid-template-columns: repeat(10, minmax(0, 1fr));` |
| `.grid-cols-11` | `grid-template-columns: repeat(11, minmax(0, 1fr));` |
| `.grid-cols-12` | `grid-template-columns: repeat(12, minmax(0, 1fr));` |
| `.grid-cols-auto` | `grid-template-columns: auto;` |
| `.grid-cols-min` | `grid-template-columns: minmax(min-content, 1fr);` |
| `.grid-cols-max` | `grid-template-columns: minmax(max-content, 1fr);` |
| `.grid-cols-subgrid` | `grid-template-columns: subgrid;` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Grid Template Columns
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">
  Dark mode Grid Template Columns
</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">
  No motion Grid Template Columns
</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
