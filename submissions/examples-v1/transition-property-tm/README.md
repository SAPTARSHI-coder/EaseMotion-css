# Transition Property — EaseMotion CSS Utilities

CSS `transition-property` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css">
```

## Utility Classes

| Class | Declaration |
|-------|-------------|
| `.transition-none` | `transition-property: none;` |
| `.transition-all` | `transition-property: all;` |
| `.transition-colors` | `transition-property: color, background-color, border-color;` |
| `.transition-opacity` | `transition-property: opacity;` |
| `.transition-transform` | `transition-property: transform;` |
| `.transition-shadow` | `transition-property: box-shadow;` |
| `.transition-width` | `transition-property: width;` |
| `.transition-height` | `transition-property: height;` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Transition Property
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">
  Dark mode Transition Property
</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">
  No motion Transition Property
</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
