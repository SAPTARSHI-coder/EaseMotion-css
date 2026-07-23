# Background Blend Mode — EaseMotion CSS Utilities

CSS `background-blend-mode` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css">
```

## Utility Classes

| Class | Declaration |
|-------|-------------|
| `.bg-blend-normal` | `background-blend-mode: normal;` |
| `.bg-blend-multiply` | `background-blend-mode: multiply;` |
| `.bg-blend-screen` | `background-blend-mode: screen;` |
| `.bg-blend-overlay` | `background-blend-mode: overlay;` |
| `.bg-blend-darken` | `background-blend-mode: darken;` |
| `.bg-blend-lighten` | `background-blend-mode: lighten;` |
| `.bg-blend-color-dodge` | `background-blend-mode: color-dodge;` |
| `.bg-blend-color-burn` | `background-blend-mode: color-burn;` |
| `.bg-blend-hard` | `background-blend-mode: hard-light;` |
| `.bg-blend-soft` | `background-blend-mode: soft-light;` |
| `.bg-blend-diff` | `background-blend-mode: difference;` |
| `.bg-blend-exclusion` | `background-blend-mode: exclusion;` |
| `.bg-blend-hue` | `background-blend-mode: hue;` |
| `.bg-blend-color` | `background-blend-mode: color;` |
| `.bg-blend-lum` | `background-blend-mode: luminosity;` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Background Blend Mode
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">
  Dark mode Background Blend Mode
</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">
  No motion Background Blend Mode
</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
