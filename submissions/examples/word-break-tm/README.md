# Word Break — EaseMotion CSS Utilities

CSS `word-break` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css">
```

## Utility Classes

| Class | Declaration |
|-------|-------------|
| `.break-words` | `word-break: break-word;` |
| `.break-all` | `word-break: break-all;` |
| `.break-keep` | `word-break: keep-all;` |
| `.break-normal` | `word-break: normal;` |
| `.break-phrase` | `word-break: break-phrase;` |
| `.overflow-wrap-normal` | `overflow-wrap: normal;` |
| `.overflow-wrap-bw` | `overflow-wrap: break-word;` |
| `.overflow-wrap-any` | `overflow-wrap: anywhere;` |
| `.hanging-punctuation-first` | `hanging-punctuation: first;` |
| `.hanging-punctuation-last` | `hanging-punctuation: last;` |
| `.hanging-punctuation-force-end` | `hanging-punctuation: force-end;` |
| `.hanging-punctuation-allow-end` | `hanging-punctuation: allow-end;` |
| `.hyphens-none` | `-webkit-hyphens: none; hyphens: none;` |
| `.hyphens-manual` | `-webkit-hyphens: manual; hyphens: manual;` |
| `.hyphens-auto` | `-webkit-hyphens: auto; hyphens: auto;` |
| `.hyphens-normal` | `hyphens: normal;` |
| `.hyphens-bp` | `-webkit-hyphens: manual;` |
| `.hyphens-none-bp` | `-webkit-hyphens: none;` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Word Break
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">
  Dark mode Word Break
</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">
  No motion Word Break
</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
