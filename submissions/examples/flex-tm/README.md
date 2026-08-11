# Flex — EaseMotion CSS Utilities

CSS `flex` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css">
```

## Utility Classes

| Class | Declaration |
|-------|-------------|
| `.flex-0` | `flex: 0;` |
| `.flex-1` | `flex: 1;` |
| `.flex-2` | `flex: 2;` |
| `.flex-3` | `flex: 3;` |
| `.flex-4` | `flex: 4;` |
| `.flex-auto` | `flex: auto;` |
| `.flex-none` | `flex: none;` |
| `.flex-initial` | `flex: initial;` |
| `.flex-inherit` | `flex: inherit;` |
| `.flex-row` | `flex: 0 1 auto;` |
| `.flex-col` | `flex: 0 1 auto;` |
| `.flex-equal` | `flex: 1 1 0;` |
| `.flex-1-0` | `flex: 1 0 auto;` |
| `.flex-0-1` | `flex: 0 1 auto;` |
| `.flex-2-1` | `flex: 2 1 auto;` |
| `.flex-1-2` | `flex: 1 2 auto;` |
| `.flex-grow` | `flex-grow: 1;` |
| `.flex-no-grow` | `flex-grow: 0;` |
| `.flex-shrink` | `flex-shrink: 1;` |
| `.flex-no-shrink` | `flex-shrink: 0;` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Flex
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">
  Dark mode Flex
</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">
  No motion Flex
</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
