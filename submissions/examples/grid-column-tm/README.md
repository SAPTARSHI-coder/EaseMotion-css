# Grid Column — EaseMotion CSS Utilities

CSS `grid-column` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css">
```

## Utility Classes

| Class | Declaration |
|-------|-------------|
| `.col-auto` | `grid-column: auto;` |
| `.col-span-1` | `grid-column: span 1 / span 1;` |
| `.col-span-2` | `grid-column: span 2 / span 2;` |
| `.col-span-3` | `grid-column: span 3 / span 3;` |
| `.col-span-4` | `grid-column: span 4 / span 4;` |
| `.col-span-6` | `grid-column: span 6 / span 6;` |
| `.col-span-8` | `grid-column: span 8 / span 8;` |
| `.col-span-12` | `grid-column: span 12 / span 12;` |
| `.col-span-full` | `grid-column: 1 / -1;` |
| `.col-start-1` | `grid-column-start: 1;` |
| `.col-start-2` | `grid-column-start: 2;` |
| `.col-start-3` | `grid-column-start: 3;` |
| `.col-start-auto` | `grid-column-start: auto;` |
| `.col-end-1` | `grid-column-end: 1;` |
| `.col-end-3` | `grid-column-end: 3;` |
| `.col-end-auto` | `grid-column-end: auto;` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Grid Column
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">
  Dark mode Grid Column
</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">
  No motion Grid Column
</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
