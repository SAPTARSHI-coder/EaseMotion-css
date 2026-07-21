# Font Weight — EaseMotion CSS Utilities

CSS `font-weight` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css">
```

## Utility Classes

| Class | Declaration |
|-------|-------------|
| `.font-thin` | `font-weight: 100;` |
| `.font-extralight` | `font-weight: 200;` |
| `.font-light` | `font-weight: 300;` |
| `.font-normal` | `font-weight: 400;` |
| `.font-medium` | `font-weight: 500;` |
| `.font-semibold` | `font-weight: 600;` |
| `.font-bold` | `font-weight: 700;` |
| `.font-extrabold` | `font-weight: 800;` |
| `.font-black` | `font-weight: 900;` |
| `.font-lighter` | `font-weight: lighter;` |
| `.font-bolder` | `font-weight: bolder;` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Font Weight
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">
  Dark mode Font Weight
</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">
  No motion Font Weight
</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
