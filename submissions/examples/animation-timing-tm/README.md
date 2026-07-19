# Animation Timing — EaseMotion CSS Utilities

CSS `animation-timing` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css">
```

## Utility Classes

| Class | Declaration |
|-------|-------------|
| `.ease-linear` | `animation-timing-function: linear;` |
| `.ease-in` | `animation-timing-function: ease-in;` |
| `.ease-out` | `animation-timing-function: ease-out;` |
| `.ease-in-out` | `animation-timing-function: ease-in-out;` |
| `.ease-step-start` | `animation-timing-function: step-start;` |
| `.ease-step-end` | `animation-timing-function: step-end;` |
| `.ease-bounce` | `animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);` |
| `.ease-smooth` | `animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Animation Timing
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">
  Dark mode Animation Timing
</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">
  No motion Animation Timing
</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
