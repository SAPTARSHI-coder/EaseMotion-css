# Grid Auto Columns — EaseMotion CSS Utilities

CSS `grid-auto-columns` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css">
```

## Utility Classes

| Class | Declaration |
|-------|-------------|
| `.grid-auto-col-auto` | `grid-auto-columns: auto;` |
| `.grid-auto-col-min` | `grid-auto-columns: min-content;` |
| `.grid-auto-col-max` | `grid-auto-columns: max-content;` |
| `.grid-auto-col-fr` | `grid-auto-columns: minmax(0, 1fr);` |
| `.grid-auto-col-fixed` | `grid-auto-columns: 200px;` |
| `.grid-auto-col-100` | `grid-auto-columns: 100px;` |
| `.grid-auto-col-150` | `grid-auto-columns: 150px;` |
| `.grid-auto-col-250` | `grid-auto-columns: 250px;` |
| `.grid-auto-col-300` | `grid-auto-columns: 300px;` |
| `.grid-auto-col-400` | `grid-auto-columns: 400px;` |
| `.grid-auto-col-minmax` | `grid-auto-columns: minmax(100px, 1fr);` |
| `.grid-auto-col-minmax-lg` | `grid-auto-columns: minmax(200px, 2fr);` |
| `.grid-auto-col-minmax-sm` | `grid-auto-columns: minmax(50px, 1fr);` |
| `.grid-auto-col-fit` | `grid-auto-columns: fit-content(200px);` |
| `.grid-auto-col-fill` | `grid-auto-columns: minmax(100px, auto);` |
| `.grid-auto-col-px` | `grid-auto-columns: 1px;` |
| `.grid-auto-col-rem` | `grid-auto-columns: 1rem;` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Grid Auto Columns
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">
  Dark mode Grid Auto Columns
</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">
  No motion Grid Auto Columns
</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
