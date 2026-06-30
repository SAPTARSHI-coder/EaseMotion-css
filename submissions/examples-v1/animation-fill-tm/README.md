# Animation Fill — EaseMotion CSS Utilities

CSS `animation-fill` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css" />
```

## Utility Classes

| Class                            | Declaration                            |
| -------------------------------- | -------------------------------------- |
| `.fill-none`                     | `animation-fill-mode: none;`           |
| `.fill-forwards`                 | `animation-fill-mode: forwards;`       |
| `.fill-backwards`                | `animation-fill-mode: backwards;`      |
| `.fill-both`                     | `animation-fill-mode: both;`           |
| `.fill-mode-normal`              | `animation-fill-mode: normal;`         |
| `.animation-play-running`        | `animation-play-state: running;`       |
| `.animation-play-paused`         | `animation-play-state: paused;`        |
| `.animation-iter-1`              | `animation-iteration-count: 1;`        |
| `.animation-iter-2`              | `animation-iteration-count: 2;`        |
| `.animation-iter-3`              | `animation-iteration-count: 3;`        |
| `.animation-iter-4`              | `animation-iteration-count: 4;`        |
| `.animation-iter-infinite`       | `animation-iteration-count: infinite;` |
| `.animation-iter-0-5`            | `animation-iteration-count: 0.5;`      |
| `.animation-iter-2x`             | `animation-iteration-count: 2;`        |
| `.animation-iter-3x`             | `animation-iteration-count: 3;`        |
| `.animation-fill-mode-none`      | `animation-fill-mode: none;`           |
| `.animation-fill-mode-forwards`  | `animation-fill-mode: forwards;`       |
| `.animation-fill-mode-backwards` | `animation-fill-mode: backwards;`      |
| `.animation-fill-mode-both`      | `animation-fill-mode: both;`           |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Animation Fill
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">Dark mode Animation Fill</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">No motion Animation Fill</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
