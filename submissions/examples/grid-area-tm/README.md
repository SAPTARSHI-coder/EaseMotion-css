# Grid Area — EaseMotion CSS Utilities

CSS `grid-area` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css">
```

## Utility Classes

| Class | Declaration |
|-------|-------------|
| `.area-auto` | `grid-area: auto;` |
| `.area-1` | `grid-area: 1;` |
| `.area-1-2` | `grid-area: 1 / 2;` |
| `.area-1-3` | `grid-area: 1 / 3;` |
| `.area-2-1` | `grid-area: 2 / 1;` |
| `.area-2-3` | `grid-area: 2 / 3;` |
| `.area-3-1` | `grid-area: 3 / 1;` |
| `.area-3-3` | `grid-area: 3 / 3;` |
| `.area-span-all` | `grid-area: 1 / 1 / -1 / -1;` |
| `.area-span-2` | `grid-area: span 2 / span 2;` |
| `.area-span-3` | `grid-area: span 3 / span 3;` |
| `.area-header` | `grid-area: header;` |
| `.area-sidebar` | `grid-area: sidebar;` |
| `.area-main` | `grid-area: main;` |
| `.area-footer` | `grid-area: footer;` |
| `.area-nav` | `grid-area: nav;` |
| `.area-card` | `grid-area: card;` |
| `.area-content` | `grid-area: content;` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Grid Area
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">
  Dark mode Grid Area
</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">
  No motion Grid Area
</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
