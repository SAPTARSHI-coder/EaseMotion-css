# Text Emphasis — EaseMotion CSS Utilities

CSS `text-emphasis` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css">
```

## Utility Classes

| Class | Declaration |
|-------|-------------|
| `.emphasis-none` | `text-emphasis: none;` |
| `.emphasis-dot` | `text-emphasis: dot;` |
| `.emphasis-circle` | `text-emphasis: circle;` |
| `.emphasis-double` | `text-emphasis: double-circle;` |
| `.emphasis-fse` | `text-emphasis: sesame;` |
| `.emphasis-open` | `text-emphasis: open;` |
| `.emphasis-filled` | `text-emphasis: filled;` |
| `.emphasis-color` | `text-emphasis-color: var(--ease-primary);` |
| `.emphasis-pos` | `text-emphasis-position: over right;` |
| `.emphasis-pos-under` | `text-emphasis-position: under right;` |
| `.text-fill-color` | `-webkit-text-fill-color: var(--ease-primary);` |
| `.text-stroke` | `-webkit-text-stroke: 1px var(--ease-primary);` |
| `.text-stroke-thick` | `-webkit-text-stroke: 2px var(--ease-accent);` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Text Emphasis
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">
  Dark mode Text Emphasis
</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">
  No motion Text Emphasis
</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
