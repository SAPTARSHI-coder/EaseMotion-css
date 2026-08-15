# Grid Template Rows — EaseMotion CSS Utilities

CSS `grid-template-rows` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css">
```

## Utility Classes

| Class | Declaration |
|-------|-------------|
| `.grid-rows-none` | `grid-template-rows: none;` |
| `.grid-rows-1` | `grid-template-rows: repeat(1, minmax(0, 1fr));` |
| `.grid-rows-2` | `grid-template-rows: repeat(2, minmax(0, 1fr));` |
| `.grid-rows-3` | `grid-template-rows: repeat(3, minmax(0, 1fr));` |
| `.grid-rows-4` | `grid-template-rows: repeat(4, minmax(0, 1fr));` |
| `.grid-rows-5` | `grid-template-rows: repeat(5, minmax(0, 1fr));` |
| `.grid-rows-6` | `grid-template-rows: repeat(6, minmax(0, 1fr));` |
| `.grid-rows-auto` | `grid-template-rows: auto;` |
| `.grid-rows-min` | `grid-template-rows: minmax(min-content, auto);` |
| `.grid-rows-max` | `grid-template-rows: minmax(max-content, auto);` |
| `.grid-rows-fr` | `grid-template-rows: minmax(0, 1fr);` |
| `.grid-rows-subgrid` | `grid-template-rows: subgrid;` |
| `.grid-rows-dense` | `grid-template-rows: dense;` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Grid Template Rows
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">
  Dark mode Grid Template Rows
</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">
  No motion Grid Template Rows
</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
