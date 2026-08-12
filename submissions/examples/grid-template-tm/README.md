# Grid Template — EaseMotion CSS Utilities

CSS `grid-template` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css">
```

## Utility Classes

| Class | Declaration |
|-------|-------------|
| `.grid-none` | `grid-template: none;` |
| `.grid-rows-auto` | `grid-template-rows: auto;` |
| `.grid-cols-auto` | `grid-template-columns: auto;` |
| `.grid-dense` | `grid-template: dense;` |
| `.grid-subgrid-cols` | `grid-template-columns: subgrid;` |
| `.grid-subgrid-rows` | `grid-template-rows: subgrid;` |
| `.grid-1fr` | `grid-template-columns: 1fr;` |
| `.grid-2fr` | `grid-template-columns: 2fr;` |
| `.grid-3fr` | `grid-template-columns: 3fr;` |
| `.grid-4fr` | `grid-template-columns: 4fr;` |
| `.grid-1-2` | `grid-template-columns: 1fr 2fr;` |
| `.grid-2-1` | `grid-template-columns: 2fr 1fr;` |
| `.grid-1-1` | `grid-template-columns: 1fr 1fr;` |
| `.grid-repeat-2` | `grid-template-columns: repeat(2, 1fr);` |
| `.grid-repeat-3` | `grid-template-columns: repeat(3, 1fr);` |
| `.grid-repeat-4` | `grid-template-columns: repeat(4, 1fr);` |
| `.grid-repeat-6` | `grid-template-columns: repeat(6, 1fr);` |
| `.grid-repeat-12` | `grid-template-columns: repeat(12, 1fr);` |
| `.grid-repeat-auto` | `grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));` |
| `.grid-area-header` | `grid-area: header;` |
| `.grid-area-footer` | `grid-area: footer;` |
| `.grid-area-sidebar` | `grid-area: sidebar;` |
| `.grid-area-main` | `grid-area: main;` |
| `.grid-area-nav` | `grid-area: nav;` |
| `.grid-area-content` | `grid-area: content;` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Grid Template
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">
  Dark mode Grid Template
</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">
  No motion Grid Template
</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
