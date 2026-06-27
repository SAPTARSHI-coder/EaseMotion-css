# Grid Auto Rows — EaseMotion CSS Utilities

CSS `grid-auto-rows` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css">
```

## Utility Classes

| Class | Declaration |
|-------|-------------|
| `.grid-auto-row-auto` | `grid-auto-rows: auto;` |
| `.grid-auto-row-min` | `grid-auto-rows: min-content;` |
| `.grid-auto-row-max` | `grid-auto-rows: max-content;` |
| `.grid-auto-row-fr` | `grid-auto-rows: minmax(0, 1fr);` |
| `.grid-auto-row-fixed` | `grid-auto-rows: 100px;` |
| `.grid-auto-row-50` | `grid-auto-rows: 50px;` |
| `.grid-auto-row-100` | `grid-auto-rows: 100px;` |
| `.grid-auto-row-150` | `grid-auto-rows: 150px;` |
| `.grid-auto-row-200` | `grid-auto-rows: 200px;` |
| `.grid-auto-row-250` | `grid-auto-rows: 250px;` |
| `.grid-auto-row-minmax` | `grid-auto-rows: minmax(50px, 1fr);` |
| `.grid-auto-row-minmax-lg` | `grid-auto-rows: minmax(100px, 2fr);` |
| `.grid-auto-row-minmax-sm` | `grid-auto-rows: minmax(30px, 1fr);` |
| `.grid-auto-row-fit` | `grid-auto-rows: fit-content(100px);` |
| `.grid-auto-row-fill` | `grid-auto-rows: minmax(50px, auto);` |
| `.grid-auto-row-px` | `grid-auto-rows: 1px;` |
| `.grid-auto-row-rem` | `grid-auto-rows: 1rem;` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Grid Auto Rows
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">
  Dark mode Grid Auto Rows
</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">
  No motion Grid Auto Rows
</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
