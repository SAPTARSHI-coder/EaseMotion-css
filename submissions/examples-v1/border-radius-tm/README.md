# Border Radius — EaseMotion CSS Utilities

CSS `border-radius` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css" />
```

## Utility Classes

| Class             | Declaration                                                    |
| ----------------- | -------------------------------------------------------------- |
| `.rounded-none`   | `border-radius: 0;`                                            |
| `.rounded-sm`     | `border-radius: 0.125rem;`                                     |
| `.rounded`        | `border-radius: 0.25rem;`                                      |
| `.rounded-md`     | `border-radius: 0.375rem;`                                     |
| `.rounded-lg`     | `border-radius: 0.5rem;`                                       |
| `.rounded-xl`     | `border-radius: 0.75rem;`                                      |
| `.rounded-2xl`    | `border-radius: 1rem;`                                         |
| `.rounded-3xl`    | `border-radius: 1.5rem;`                                       |
| `.rounded-full`   | `border-radius: 9999px;`                                       |
| `.rounded-t-none` | `border-top-left-radius: 0; border-top-right-radius: 0;`       |
| `.rounded-b-none` | `border-bottom-left-radius: 0; border-bottom-right-radius: 0;` |
| `.rounded-l-none` | `border-top-left-radius: 0; border-bottom-left-radius: 0;`     |
| `.rounded-r-none` | `border-top-right-radius: 0; border-bottom-right-radius: 0;`   |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Border Radius
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">Dark mode Border Radius</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">No motion Border Radius</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
