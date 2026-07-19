# Content — EaseMotion CSS Utilities

CSS `content` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css">
```

## Utility Classes

| Class | Declaration |
|-------|-------------|
| `.content-none` | `content: none;` |
| `.content-normal` | `content: normal;` |
| `.content-open-quote` | `content: open-quote;` |
| `.content-close-quote` | `content: close-quote;` |
| `.content-no-open-quote` | `content: no-open-quote;` |
| `.content-no-close-quote` | `content: no-close-quote;` |
| `.content-chapter` | `content: 'Chapter ' counter(chapter);` |
| `.content-attr` | `content: attr(data-label);` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Content
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">
  Dark mode Content
</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">
  No motion Content
</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
