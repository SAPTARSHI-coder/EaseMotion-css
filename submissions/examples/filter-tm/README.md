# Filter — EaseMotion CSS Utilities

CSS `filter` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css">
```

## Utility Classes

| Class | Declaration |
|-------|-------------|
| `.filter-none` | `filter: none;` |
| `.filter-blur-sm` | `filter: blur(1px);` |
| `.filter-blur` | `filter: blur(2px);` |
| `.filter-blur-md` | `filter: blur(4px);` |
| `.filter-blur-lg` | `filter: blur(8px);` |
| `.filter-brightness-sm` | `filter: brightness(1.1);` |
| `.filter-brightness` | `filter: brightness(1.2);` |
| `.filter-contrast-sm` | `filter: contrast(1.1);` |
| `.filter-contrast` | `filter: contrast(1.2);` |
| `.filter-grayscale-sm` | `filter: grayscale(0.5);` |
| `.filter-grayscale` | `filter: grayscale(1);` |
| `.filter-sepia` | `filter: sepia(1);` |
| `.filter-sepia-sm` | `filter: sepia(0.5);` |
| `.filter-saturate-sm` | `filter: saturate(1.2);` |
| `.filter-saturate` | `filter: saturate(1.8);` |
| `.filter-hue` | `filter: hue-rotate(90deg);` |
| `.filter-drop` | `filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));` |
| `.filter-multi` | `filter: blur(2px) brightness(1.1);` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Filter
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">
  Dark mode Filter
</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">
  No motion Filter
</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
