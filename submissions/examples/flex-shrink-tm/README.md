# Flex Shrink — EaseMotion CSS Utilities

CSS `flex-shrink` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css">
```

## Utility Classes

| Class | Declaration |
|-------|-------------|
| `.shrink-0` | `flex-shrink: 0;` |
| `.shrink` | `flex-shrink: 1;` |
| `.shrink-2` | `flex-shrink: 2;` |
| `.shrink-3` | `flex-shrink: 3;` |
| `.shrink-4` | `flex-shrink: 4;` |
| `.shrink-5` | `flex-shrink: 5;` |
| `.shrink-none` | `flex-shrink: 0;` |
| `.shrink-auto` | `flex-shrink: auto;` |
| `.shrink-inherit` | `flex-shrink: inherit;` |
| `.shrink-initial` | `flex-shrink: initial;` |
| `.shrink-unset` | `flex-shrink: unset;` |
| `.shrink-revert` | `flex-shrink: revert;` |
| `.shrink-safe` | `flex-grow: 1; flex-shrink: 1;` |
| `.shrink-unsafe` | `flex-grow: 0; flex-shrink: 1;` |
| `.shrink-equal` | `flex-grow: 1; flex-shrink: 1; flex-basis: 0;` |
| `.shrink-basis-auto` | `flex-shrink: 1; flex-basis: auto;` |
| `.shrink-basis-0` | `flex-shrink: 1; flex-basis: 0;` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Flex Shrink
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">
  Dark mode Flex Shrink
</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">
  No motion Flex Shrink
</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
