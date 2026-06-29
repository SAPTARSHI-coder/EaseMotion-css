# Display — EaseMotion CSS Utilities

CSS `display` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css">
```

## Utility Classes

| Class | Declaration |
|-------|-------------|
| `.block` | `display: block;` |
| `.inline-block` | `display: inline-block;` |
| `.inline` | `display: inline;` |
| `.flex` | `display: flex;` |
| `.inline-flex` | `display: inline-flex;` |
| `.grid` | `display: grid;` |
| `.inline-grid` | `display: inline-grid;` |
| `.table` | `display: table;` |
| `.inline-table` | `display: inline-table;` |
| `.table-row` | `display: table-row;` |
| `.table-cell` | `display: table-cell;` |
| `.table-column` | `display: table-column;` |
| `.table-column-group` | `display: table-column-group;` |
| `.table-header-group` | `display: table-header-group;` |
| `.table-row-group` | `display: table-row-group;` |
| `.table-footer-group` | `display: table-footer-group;` |
| `.table-caption` | `display: table-caption;` |
| `.contents` | `display: contents;` |
| `.flow-root` | `display: flow-root;` |
| `.list-item` | `display: list-item;` |
| `.hidden` | `display: none;` |
| `.run-in` | `display: run-in;` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Display
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">
  Dark mode Display
</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">
  No motion Display
</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
