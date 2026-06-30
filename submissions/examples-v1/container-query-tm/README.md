# Container Query — EaseMotion CSS Utilities

CSS `container-query` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css">
```

## Utility Classes

| Class | Declaration |
|-------|-------------|
| `.cq-none` | `container-type: normal;` |
| `.cq-size` | `container-type: size;` |
| `.cq-inline` | `container-type: inline-size;` |
| `.cq-normal` | `container-type: normal;` |
| `.cq-strict` | `container-type: strict;` |
| `.cq-scroll` | `container-type: scroll;` |
| `.container-query-none` | `container-type: normal;` |
| `.container-query-size` | `container-type: size;` |
| `.container-query-inline` | `container-type: inline-size;` |
| `.container-query-block` | `container-type: block-size;` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Container Query
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">
  Dark mode Container Query
</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">
  No motion Container Query
</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
