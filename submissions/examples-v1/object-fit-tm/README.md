# Object Fit — EaseMotion CSS Utilities

CSS `object-fit` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css">
```

## Utility Classes

| Class | Declaration |
|-------|-------------|
| `.object-contain` | `object-fit: contain;` |
| `.object-cover` | `object-fit: cover;` |
| `.object-fill` | `object-fit: fill;` |
| `.object-none` | `object-fit: none;` |
| `.object-scale` | `object-fit: scale-down;` |
| `.object-center` | `object-position: center;` |
| `.object-top` | `object-position: top;` |
| `.object-bottom` | `object-position: bottom;` |
| `.object-left` | `object-position: left;` |
| `.object-right` | `object-position: right;` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Object Fit
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">
  Dark mode Object Fit
</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">
  No motion Object Fit
</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
