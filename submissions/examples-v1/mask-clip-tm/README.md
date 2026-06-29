# Mask Clip — EaseMotion CSS Utilities

CSS `mask-clip` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css">
```

## Utility Classes

| Class | Declaration |
|-------|-------------|
| `.mask-clip-normal` | `mask-clip: normal;` |
| `.mask-clip-content` | `mask-clip: content-box;` |
| `.mask-clip-padding` | `mask-clip: padding-box;` |
| `.mask-clip-border` | `mask-clip: border-box;` |
| `.mask-clip-fill` | `mask-clip: fill-box;` |
| `.mask-clip-stroke` | `mask-clip: stroke-box;` |
| `.mask-clip-view` | `mask-clip: view-box;` |
| `.mask-clip-no-clip` | `mask-clip: no-clip;` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Mask Clip
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">
  Dark mode Mask Clip
</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">
  No motion Mask Clip
</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
