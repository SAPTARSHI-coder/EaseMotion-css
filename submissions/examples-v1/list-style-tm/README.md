# List Style — EaseMotion CSS Utilities

CSS `list-style` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css">
```

## Utility Classes

| Class | Declaration |
|-------|-------------|
| `.list-none` | `list-style: none;` |
| `.list-disc` | `list-style: disc;` |
| `.list-decimal` | `list-style: decimal;` |
| `.list-square` | `list-style: square;` |
| `.list-circle` | `list-style: circle;` |
| `.list-inside` | `list-style-position: inside;` |
| `.list-outside` | `list-style-position: outside;` |
| `.list-alpha` | `list-style-type: lower-alpha;` |
| `.list-alpha-upper` | `list-style-type: upper-alpha;` |
| `.list-roman` | `list-style-type: lower-roman;` |
| `.list-roman-upper` | `list-style-type: upper-roman;` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive List Style
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">
  Dark mode List Style
</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">
  No motion List Style
</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
