# Outline Width — EaseMotion CSS Utilities

CSS `outline-width` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css">
```

## Utility Classes

| Class | Declaration |
|-------|-------------|
| `.outline-0` | `outline-width: 0;` |
| `.outline-1` | `outline-width: 1px;` |
| `.outline-2` | `outline-width: 2px;` |
| `.outline-4` | `outline-width: 4px;` |
| `.outline-8` | `outline-width: 8px;` |
| `.outline-thin` | `outline-width: 1px;` |
| `.outline-medium` | `outline-width: 2px;` |
| `.outline-thick` | `outline-width: 4px;` |
| `.outline-none` | `outline-width: 0; outline-style: none;` |
| `.outline-offset-0` | `outline-offset: 0;` |
| `.outline-offset-1` | `outline-offset: 1px;` |
| `.outline-offset-2` | `outline-offset: 2px;` |
| `.outline-offset-4` | `outline-offset: 4px;` |
| `.outline-offset-8` | `outline-offset: 8px;` |
| `.outline-offset-auto` | `outline-offset: auto;` |
| `.outline-offset-thin` | `outline-offset: 1px;` |
| `.outline-primary` | `outline: 2px solid var(--ease-primary);` |
| `.outline-secondary` | `outline: 2px solid var(--ease-secondary);` |
| `.outline-accent` | `outline: 2px solid var(--ease-accent);` |
| `.outline-success` | `outline: 2px solid var(--ease-success);` |
| `.outline-danger` | `outline: 2px solid var(--ease-danger);` |
| `.outline-warning` | `outline: 2px solid var(--ease-warning);` |
| `.outline-info` | `outline: 2px solid var(--ease-info);` |
| `.outline-current` | `outline: 2px solid currentColor;` |
| `.outline-transparent` | `outline: 2px solid transparent;` |
| `.outline-dashed` | `outline: 2px dashed currentColor;` |
| `.outline-dotted` | `outline: 2px dotted currentColor;` |
| `.outline-double` | `outline: 3px double currentColor;` |
| `.outline-hidden` | `outline: hidden;` |
| `.outline-none` | `outline: none;` |
| `.outline-focus` | `outline: 2px solid var(--ease-primary); outline-offset: 2px;` |
| `.outline-focus-ring` | `outline: 2px solid var(--ease-accent); outline-offset: 4px;` |
| `.outline-focus-visible` | `outline: 2px solid currentColor;` |
| `.outline-no-offset` | `outline-offset: 0; outline-width: 2px;` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Outline Width
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">
  Dark mode Outline Width
</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">
  No motion Outline Width
</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
