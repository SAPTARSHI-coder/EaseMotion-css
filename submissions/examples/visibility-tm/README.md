# Visibility — EaseMotion CSS Utilities

CSS `visibility` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css">
```

## Utility Classes

| Class | Declaration |
|-------|-------------|
| `.visible` | `visibility: visible;` |
| `.invisible` | `visibility: hidden;` |
| `.visibility-collapse` | `visibility: collapse;` |
| `.visibility-initial` | `visibility: initial;` |
| `.visibility-inherit` | `visibility: inherit;` |
| `.visibility-unset` | `visibility: unset;` |
| `.visibility-hidden` | `visibility: hidden;` |
| `.visibility-visible` | `visibility: visible;` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Visibility
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">
  Dark mode Visibility
</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">
  No motion Visibility
</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
