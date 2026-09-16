# Columns — EaseMotion CSS Utilities

CSS `columns` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css">
```

## Utility Classes

| Class | Declaration |
|-------|-------------|
| `.columns-1` | `columns: 1;` |
| `.columns-2` | `columns: 2;` |
| `.columns-3` | `columns: 3;` |
| `.columns-4` | `columns: 4;` |
| `.columns-6` | `columns: 6;` |
| `.columns-auto` | `columns: auto;` |
| `.columns-xs` | `columns: 16rem;` |
| `.columns-sm` | `columns: 18rem;` |
| `.columns-md` | `columns: 20rem;` |
| `.columns-lg` | `columns: 24rem;` |
| `.columns-xl` | `columns: 28rem;` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Columns
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">
  Dark mode Columns
</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">
  No motion Columns
</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
