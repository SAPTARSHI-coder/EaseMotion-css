# Border Width — EaseMotion CSS Utilities

CSS `border-width` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css" />
```

## Utility Classes

| Class         | Declaration                 |
| ------------- | --------------------------- |
| `.border-0`   | `border-width: 0;`          |
| `.border`     | `border-width: 1px;`        |
| `.border-2`   | `border-width: 2px;`        |
| `.border-4`   | `border-width: 4px;`        |
| `.border-8`   | `border-width: 8px;`        |
| `.border-t-0` | `border-top-width: 0;`      |
| `.border-t`   | `border-top-width: 1px;`    |
| `.border-t-2` | `border-top-width: 2px;`    |
| `.border-t-4` | `border-top-width: 4px;`    |
| `.border-b-0` | `border-bottom-width: 0;`   |
| `.border-b`   | `border-bottom-width: 1px;` |
| `.border-b-2` | `border-bottom-width: 2px;` |
| `.border-b-4` | `border-bottom-width: 4px;` |
| `.border-l-0` | `border-left-width: 0;`     |
| `.border-l`   | `border-left-width: 1px;`   |
| `.border-l-2` | `border-left-width: 2px;`   |
| `.border-r-0` | `border-right-width: 0;`    |
| `.border-r`   | `border-right-width: 1px;`  |
| `.border-r-2` | `border-right-width: 2px;`  |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Border Width
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">Dark mode Border Width</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">No motion Border Width</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
