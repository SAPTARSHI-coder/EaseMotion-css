# Outline Style — EaseMotion CSS Utilities

CSS `outline-style` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css">
```

## Utility Classes

| Class | Declaration |
|-------|-------------|
| `.outline-none` | `outline-style: none;` |
| `.outline-solid` | `outline-style: solid;` |
| `.outline-dashed` | `outline-style: dashed;` |
| `.outline-dotted` | `outline-style: dotted;` |
| `.outline-double` | `outline-style: double;` |
| `.outline-groove` | `outline-style: groove;` |
| `.outline-ridge` | `outline-style: ridge;` |
| `.outline-inset` | `outline-style: inset;` |
| `.outline-outset` | `outline-style: outset;` |
| `.outline-hidden` | `outline-style: hidden;` |
| `.outline-current` | `outline-style: solid; outline-color: currentColor;` |
| `.outline-primary` | `outline-style: solid; outline-color: var(--ease-primary);` |
| `.outline-secondary` | `outline-style: solid; outline-color: var(--ease-secondary);` |
| `.outline-accent` | `outline-style: solid; outline-color: var(--ease-accent);` |
| `.outline-success` | `outline-style: solid; outline-color: var(--ease-success);` |
| `.outline-danger` | `outline-style: solid; outline-color: var(--ease-danger);` |
| `.outline-warning` | `outline-style: solid; outline-color: var(--ease-warning);` |
| `.outline-info` | `outline-style: solid; outline-color: var(--ease-info);` |
| `.outline-transparent` | `outline-style: solid; outline-color: transparent;` |
| `.outline-inherit` | `outline-style: inherit;` |
| `.outline-initial` | `outline-style: initial;` |
| `.outline-unset` | `outline-style: unset;` |
| `.outline-revert` | `outline-style: revert;` |
| `.outline-2` | `outline-width: 2px; outline-style: solid;` |
| `.outline-4` | `outline-width: 4px; outline-style: solid;` |
| `.outline-focus` | `outline-width: 2px; outline-style: solid; outline-color: var(--ease-primary); outline-offset: 2px;` |
| `.outline-focus-visible` | `outline-width: 2px; outline-style: solid; outline-color: var(--ease-primary); outline-offset: 2px;` |
| `.outline-hover` | `outline-width: 2px; outline-style: solid; outline-color: var(--ease-accent);` |
| `.outline-dashed-current` | `outline-width: 2px; outline-style: dashed; outline-color: currentColor;` |
| `.outline-dotted-current` | `outline-width: 2px; outline-style: dotted; outline-color: currentColor;` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Outline Style
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">
  Dark mode Outline Style
</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">
  No motion Outline Style
</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
