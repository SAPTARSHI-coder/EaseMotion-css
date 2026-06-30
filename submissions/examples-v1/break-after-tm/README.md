# Break After — EaseMotion CSS Utilities

CSS `break-after` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css" />
```

## Utility Classes

| Class                       | Declaration                  |
| --------------------------- | ---------------------------- |
| `.break-after-auto`         | `break-after: auto;`         |
| `.break-after-avoid`        | `break-after: avoid;`        |
| `.break-after-avoid-page`   | `break-after: avoid-page;`   |
| `.break-after-avoid-column` | `break-after: avoid-column;` |
| `.break-after-avoid-region` | `break-after: avoid-region;` |
| `.break-after-page`         | `break-after: page;`         |
| `.break-after-column`       | `break-after: column;`       |
| `.break-after-left`         | `break-after: left;`         |
| `.break-after-right`        | `break-after: right;`        |
| `.break-after-recto`        | `break-after: recto;`        |
| `.break-after-verso`        | `break-after: verso;`        |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Break After
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">Dark mode Break After</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">No motion Break After</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
