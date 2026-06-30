# Transition — EaseMotion CSS Utilities

CSS `transition` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css">
```

## Utility Classes

| Class | Declaration |
|-------|-------------|
| `.transition-none` | `transition: none;` |
| `.transition-all` | `transition: all 0.2s ease;` |
| `.transition-colors` | `transition: color 0.2s, background-color 0.2s, border-color 0.2s;` |
| `.transition-opacity` | `transition: opacity 0.2s ease;` |
| `.transition-transform` | `transition: transform 0.2s ease;` |
| `.transition-shadow` | `transition: box-shadow 0.2s ease;` |
| `.transition-width` | `transition: width 0.2s ease;` |
| `.transition-height` | `transition: height 0.2s ease;` |
| `.transition-fast` | `transition: all 0.1s ease;` |
| `.transition-slow` | `transition: all 0.3s ease;` |
| `.transition-slower` | `transition: all 0.5s ease;` |
| `.transition-none` | `transition: none 0s ease;` |
| `.transition-opacity-fast` | `transition: opacity 0.1s ease;` |
| `.transition-opacity-slow` | `transition: opacity 0.5s ease;` |
| `.transition-transform-fast` | `transition: transform 0.1s ease;` |
| `.transition-transform-slow` | `transition: transform 0.5s ease;` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Transition
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">
  Dark mode Transition
</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">
  No motion Transition
</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
