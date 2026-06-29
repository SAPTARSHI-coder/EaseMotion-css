# Font Display — EaseMotion CSS Utilities

CSS `font-display` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css">
```

## Utility Classes

| Class | Declaration |
|-------|-------------|
| `.font-swap` | `font-display: swap;` |
| `.font-block` | `font-display: block;` |
| `.font-fallback` | `font-display: fallback;` |
| `.font-optional` | `font-display: optional;` |
| `.font-auto` | `font-display: auto;` |
| `.font-display-auto` | `font-display: auto;` |
| `.font-display-block` | `font-display: block;` |
| `.font-display-swap` | `font-display: swap;` |
| `.font-display-fallback` | `font-display: fallback;` |
| `.font-display-optional` | `font-display: optional;` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Font Display
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">
  Dark mode Font Display
</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">
  No motion Font Display
</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
