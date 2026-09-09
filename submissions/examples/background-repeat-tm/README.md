# Background Repeat — EaseMotion CSS Utilities

CSS `background-repeat` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css">
```

## Utility Classes

| Class | Declaration |
|-------|-------------|
| `.bg-repeat` | `background-repeat: repeat;` |
| `.bg-no-repeat` | `background-repeat: no-repeat;` |
| `.bg-repeat-x` | `background-repeat: repeat-x;` |
| `.bg-repeat-y` | `background-repeat: repeat-y;` |
| `.bg-repeat-round` | `background-repeat: round;` |
| `.bg-repeat-space` | `background-repeat: space;` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Background Repeat
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">
  Dark mode Background Repeat
</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">
  No motion Background Repeat
</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
