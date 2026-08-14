# Hyphens — EaseMotion CSS Utilities

CSS `hyphens` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css">
```

## Utility Classes

| Class | Declaration |
|-------|-------------|
| `.hyphens-none` | `-webkit-hyphens: none; hyphens: none;` |
| `.hyphens-manual` | `-webkit-hyphens: manual; hyphens: manual;` |
| `.hyphens-auto` | `-webkit-hyphens: auto; hyphens: auto;` |
| `.hyphens-normal` | `hyphens: normal;` |
| `.hyphens-bp` | `-webkit-hyphens: manual;` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Hyphens
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">
  Dark mode Hyphens
</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">
  No motion Hyphens
</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
