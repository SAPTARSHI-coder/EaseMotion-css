# Ruby Align — EaseMotion CSS Utilities

CSS `ruby-align` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css">
```

## Utility Classes

| Class | Declaration |
|-------|-------------|
| `.ruby-start` | `ruby-align: start;` |
| `.ruby-center` | `ruby-align: center;` |
| `.ruby-space-between` | `ruby-align: space-between;` |
| `.ruby-space-around` | `ruby-align: space-around;` |
| `.ruby-vert-lr` | `ruby-position: over;` |
| `.ruby-vert-rl` | `ruby-position: under;` |
| `.ruby-over` | `ruby-position: over;` |
| `.ruby-under` | `ruby-position: under;` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Ruby Align
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">
  Dark mode Ruby Align
</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">
  No motion Ruby Align
</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
