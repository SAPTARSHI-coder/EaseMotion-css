# Inherited — EaseMotion CSS Utilities

CSS `inherited` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css">
```

## Utility Classes

| Class | Declaration |
|-------|-------------|
| `.inherit-all` | `all: inherit;` |
| `.inherit-none` | `all: unset;` |
| `.inherit-initial` | `all: initial;` |
| `.inherit-revert` | `all: revert;` |
| `.inherit-revert-layers` | `all: revert-layer;` |
| `.inherit-normal` | `all: normal;` |
| `.inherit-border` | `border-collapse: inherit;` |
| `.inherit-border-spacing` | `border-spacing: inherit;` |
| `.inherit-caption` | `caption-side: inherit;` |
| `.inherit-color` | `color: inherit;` |
| `.inherit-cursor` | `cursor: inherit;` |
| `.inherit-direction` | `direction: inherit;` |
| `.inherit-font` | `font: inherit;` |
| `.inherit-font-family` | `font-family: inherit;` |
| `.inherit-font-size` | `font-size: inherit;` |
| `.inherit-font-style` | `font-style: inherit;` |
| `.inherit-font-weight` | `font-weight: inherit;` |
| `.inherit-letter-spacing` | `letter-spacing: inherit;` |
| `.inherit-line-height` | `line-height: inherit;` |
| `.inherit-text-align` | `text-align: inherit;` |
| `.inherit-opacity` | `opacity: inherit;` |
| `.inherit-visibility` | `visibility: inherit;` |
| `.inherit-z-index` | `z-index: inherit;` |
| `.inherit-background` | `background: inherit;` |
| `.inherit-border-color` | `border-color: inherit;` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Inherited
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">
  Dark mode Inherited
</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">
  No motion Inherited
</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
