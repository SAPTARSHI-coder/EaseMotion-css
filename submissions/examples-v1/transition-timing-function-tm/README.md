# Transition Timing Function — EaseMotion CSS Utilities

CSS `transition-timing-function` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css">
```

## Utility Classes

| Class | Declaration |
|-------|-------------|
| `.ease` | `transition-timing-function: ease;` |
| `.ease-in` | `transition-timing-function: ease-in;` |
| `.ease-out` | `transition-timing-function: ease-out;` |
| `.ease-in-out` | `transition-timing-function: ease-in-out;` |
| `.ease-linear` | `transition-timing-function: linear;` |
| `.ease-step-start` | `transition-timing-function: step-start;` |
| `.ease-step-end` | `transition-timing-function: step-end;` |
| `.ease-bounce` | `transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);` |
| `.ease-smooth` | `transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);` |
| `.ease-decelerate` | `transition-timing-function: cubic-bezier(0, 0, 0.2, 1);` |
| `.ease-accelerate` | `transition-timing-function: cubic-bezier(0.4, 0, 1, 1);` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Transition Timing Function
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">
  Dark mode Transition Timing Function
</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">
  No motion Transition Timing Function
</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
