# Grid Auto Flow — EaseMotion CSS Utilities

CSS `grid-auto-flow` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css">
```

## Utility Classes

| Class | Declaration |
|-------|-------------|
| `.grid-flow-row` | `grid-auto-flow: row;` |
| `.grid-flow-col` | `grid-auto-flow: column;` |
| `.grid-flow-dense` | `grid-auto-flow: dense;` |
| `.grid-flow-row-dense` | `grid-auto-flow: row dense;` |
| `.grid-flow-col-dense` | `grid-auto-flow: column dense;` |
| `.grid-flow-dense-row` | `grid-auto-flow: dense row;` |
| `.grid-flow-dense-col` | `grid-auto-flow: dense column;` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Grid Auto Flow
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">
  Dark mode Grid Auto Flow
</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">
  No motion Grid Auto Flow
</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
