# Line Break — EaseMotion CSS Utilities

CSS `line-break` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css">
```

## Utility Classes

| Class | Declaration |
|-------|-------------|
| `.break-loose` | `line-break: loose;` |
| `.break-normal` | `line-break: normal;` |
| `.break-strict` | `line-break: strict;` |
| `.break-anywhere` | `line-break: anywhere;` |
| `.break-auto` | `line-break: auto;` |
| `.break-words` | `word-break: break-word;` |
| `.break-all` | `word-break: break-all;` |
| `.break-keep` | `word-break: keep-all;` |
| `.overflow-wrap-normal` | `overflow-wrap: normal;` |
| `.overflow-wrap-bw` | `overflow-wrap: break-word;` |
| `.overflow-wrap-anywhere` | `overflow-wrap: anywhere;` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Line Break
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">
  Dark mode Line Break
</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">
  No motion Line Break
</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
