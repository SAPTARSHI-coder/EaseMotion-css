# Image Orientation — EaseMotion CSS Utilities

CSS `image-orientation` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css">
```

## Utility Classes

| Class | Declaration |
|-------|-------------|
| `.img-orient-none` | `image-orientation: none;` |
| `.img-orient-0` | `image-orientation: 0deg;` |
| `.img-orient-90` | `image-orientation: 90deg;` |
| `.img-orient-180` | `image-orientation: 180deg;` |
| `.img-orient-270` | `image-orientation: 270deg;` |
| `.img-orient-flip` | `image-orientation: 0deg flip;` |
| `.img-orient-from-image` | `image-orientation: from-image;` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Image Orientation
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">
  Dark mode Image Orientation
</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">
  No motion Image Orientation
</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
