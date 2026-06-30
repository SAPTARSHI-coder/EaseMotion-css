# Break Before — EaseMotion CSS Utilities

CSS `break-before` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css" />
```

## Utility Classes

| Class                        | Declaration                   |
| ---------------------------- | ----------------------------- |
| `.break-before-auto`         | `break-before: auto;`         |
| `.break-before-avoid`        | `break-before: avoid;`        |
| `.break-before-avoid-page`   | `break-before: avoid-page;`   |
| `.break-before-avoid-column` | `break-before: avoid-column;` |
| `.break-before-avoid-region` | `break-before: avoid-region;` |
| `.break-before-page`         | `break-before: page;`         |
| `.break-before-column`       | `break-before: column;`       |
| `.break-before-left`         | `break-before: left;`         |
| `.break-before-right`        | `break-before: right;`        |
| `.break-before-recto`        | `break-before: recto;`        |
| `.break-before-verso`        | `break-before: verso;`        |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Break Before
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">Dark mode Break Before</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">No motion Break Before</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
