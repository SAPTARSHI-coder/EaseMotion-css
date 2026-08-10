# Mask Origin — EaseMotion CSS Utilities

CSS `mask-origin` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css">
```

## Utility Classes

| Class | Declaration |
|-------|-------------|
| `.mask-origin-content` | `mask-origin: content-box;` |
| `.mask-origin-padding` | `mask-origin: padding-box;` |
| `.mask-origin-border` | `mask-origin: border-box;` |
| `.mask-origin-fill` | `mask-origin: fill-box;` |
| `.mask-origin-stroke` | `mask-origin: stroke-box;` |
| `.mask-origin-view` | `mask-origin: view-box;` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Mask Origin
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">
  Dark mode Mask Origin
</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">
  No motion Mask Origin
</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
