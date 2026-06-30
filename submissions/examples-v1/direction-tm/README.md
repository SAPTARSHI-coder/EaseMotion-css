# Direction — EaseMotion CSS Utilities

CSS `direction` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css" />
```

## Utility Classes

| Class                | Declaration                  |
| -------------------- | ---------------------------- |
| `.dir-ltr`           | `direction: ltr;`            |
| `.dir-rtl`           | `direction: rtl;`            |
| `.dir-inherit`       | `direction: inherit;`        |
| `.dir-ltr-important` | `direction: ltr !important;` |
| `.dir-rtl-important` | `direction: rtl !important;` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Direction
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">Dark mode Direction</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">No motion Direction</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
