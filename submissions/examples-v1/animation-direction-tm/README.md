# Animation Direction — EaseMotion CSS Utilities

CSS `animation-direction` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css" />
```

## Utility Classes

| Class                         | Declaration                               |
| ----------------------------- | ----------------------------------------- |
| `.direction-normal`           | `animation-direction: normal;`            |
| `.direction-reverse`          | `animation-direction: reverse;`           |
| `.direction-alternate`        | `animation-direction: alternate;`         |
| `.direction-alt-reverse`      | `animation-direction: alternate-reverse;` |
| `.animation-duration-fast`    | `animation-duration: 100ms;`              |
| `.animation-duration-faster`  | `animation-duration: 150ms;`              |
| `.animation-duration-normal`  | `animation-duration: 300ms;`              |
| `.animation-duration-slow`    | `animation-duration: 500ms;`              |
| `.animation-duration-slower`  | `animation-duration: 700ms;`              |
| `.animation-duration-slowest` | `animation-duration: 1000ms;`             |
| `.animation-duration-2s`      | `animation-duration: 2s;`                 |
| `.animation-duration-3s`      | `animation-duration: 3s;`                 |
| `.animation-duration-4s`      | `animation-duration: 4s;`                 |
| `.animation-delay-fast`       | `animation-delay: 50ms;`                  |
| `.animation-delay-normal`     | `animation-delay: 100ms;`                 |
| `.animation-delay-slow`       | `animation-delay: 300ms;`                 |
| `.animation-delay-slower`     | `animation-delay: 500ms;`                 |
| `.animation-fill-none`        | `animation-fill-mode: none;`              |
| `.animation-fill-forwards`    | `animation-fill-mode: forwards;`          |
| `.animation-fill-backwards`   | `animation-fill-mode: backwards;`         |
| `.animation-fill-both`        | `animation-fill-mode: both;`              |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Animation Direction
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">Dark mode Animation Direction</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">No motion Animation Direction</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
