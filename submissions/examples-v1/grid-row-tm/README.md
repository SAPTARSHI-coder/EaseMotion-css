# Grid Row — EaseMotion CSS Utilities

CSS `grid-row` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css">
```

## Utility Classes

| Class | Declaration |
|-------|-------------|
| `.row-auto` | `grid-row: auto;` |
| `.row-span-1` | `grid-row: span 1 / span 1;` |
| `.row-span-2` | `grid-row: span 2 / span 2;` |
| `.row-span-3` | `grid-row: span 3 / span 3;` |
| `.row-span-4` | `grid-row: span 4 / span 4;` |
| `.row-span-full` | `grid-row: 1 / -1;` |
| `.row-start-1` | `grid-row-start: 1;` |
| `.row-start-auto` | `grid-row-start: auto;` |
| `.row-end-1` | `grid-row-end: 1;` |
| `.row-end-3` | `grid-row-end: 3;` |
| `.row-end-auto` | `grid-row-end: auto;` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Grid Row
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">
  Dark mode Grid Row
</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">
  No motion Grid Row
</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
