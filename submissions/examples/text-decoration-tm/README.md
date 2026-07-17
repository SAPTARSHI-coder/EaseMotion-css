# Text Decoration — EaseMotion CSS Utilities

CSS `text-decoration` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css">
```

## Utility Classes

| Class | Declaration |
|-------|-------------|
| `.underline` | `text-decoration: underline;` |
| `.overline` | `text-decoration: overline;` |
| `.line-through` | `text-decoration: line-through;` |
| `.no-underline` | `text-decoration: none;` |
| `.underline-double` | `text-decoration: underline double;` |
| `.underline-dotted` | `text-decoration: underline dotted;` |
| `.underline-wavy` | `text-decoration: underline wavy;` |
| `.underline-thick` | `text-decoration: underline 3px;` |
| `.underline-offset-auto` | `text-underline-offset: auto;` |
| `.underline-offset-1` | `text-underline-offset: 1px;` |
| `.underline-offset-2` | `text-underline-offset: 2px;` |
| `.underline-offset-4` | `text-underline-offset: 4px;` |
| `.decoration-primary` | `text-decoration-color: var(--ease-primary);` |
| `.decoration-2` | `text-decoration-thickness: 2px;` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Text Decoration
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">
  Dark mode Text Decoration
</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">
  No motion Text Decoration
</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
