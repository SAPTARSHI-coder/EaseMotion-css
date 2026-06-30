# Dominant Baseline — EaseMotion CSS Utilities

CSS `dominant-baseline` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css" />
```

## Utility Classes

| Class               | Declaration                            |
| ------------------- | -------------------------------------- |
| `.baseline`         | `dominant-baseline: baseline;`         |
| `.middle`           | `dominant-baseline: middle;`           |
| `.central`          | `dominant-baseline: central;`          |
| `.text-top`         | `dominant-baseline: text-top;`         |
| `.text-bottom`      | `dominant-baseline: text-bottom;`      |
| `.before-edge`      | `dominant-baseline: before-edge;`      |
| `.after-edge`       | `dominant-baseline: after-edge;`       |
| `.text-before-edge` | `dominant-baseline: text-before-edge;` |
| `.text-after-edge`  | `dominant-baseline: text-after-edge;`  |
| `.mathematical`     | `dominant-baseline: mathematical;`     |
| `.ideographic`      | `dominant-baseline: ideographic;`      |
| `.alphabetic`       | `dominant-baseline: alphabetic;`       |
| `.hanging`          | `dominant-baseline: hanging;`          |
| `.use-script`       | `dominant-baseline: use-script;`       |
| `.no-change`        | `dominant-baseline: no-change;`        |
| `.reset-size`       | `dominant-baseline: reset-size;`       |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Dominant Baseline
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">Dark mode Dominant Baseline</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">No motion Dominant Baseline</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
