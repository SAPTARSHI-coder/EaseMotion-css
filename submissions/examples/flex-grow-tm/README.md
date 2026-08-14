# Flex Grow — EaseMotion CSS Utilities

CSS `flex-grow` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css">
```

## Utility Classes

| Class | Declaration |
|-------|-------------|
| `.grow-0` | `flex-grow: 0;` |
| `.grow` | `flex-grow: 1;` |
| `.grow-2` | `flex-grow: 2;` |
| `.grow-3` | `flex-grow: 3;` |
| `.grow-4` | `flex-grow: 4;` |
| `.grow-5` | `flex-grow: 5;` |
| `.grow-full` | `flex-grow: 999;` |
| `.grow-auto` | `flex-grow: auto;` |
| `.grow-none` | `flex-grow: 0;` |
| `.grow-inherit` | `flex-grow: inherit;` |
| `.grow-initial` | `flex-grow: initial;` |
| `.grow-unset` | `flex-grow: unset;` |
| `.grow-revert` | `flex-grow: revert;` |
| `.grow-max` | `flex-grow: 9999;` |
| `.grow-safe` | `flex-grow: 1; flex-shrink: 1;` |
| `.grow-unsafe` | `flex-grow: 1; flex-shrink: 0;` |
| `.grow-equal` | `flex-grow: 1; flex-shrink: 1; flex-basis: 0;` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Flex Grow
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">
  Dark mode Flex Grow
</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">
  No motion Flex Grow
</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
