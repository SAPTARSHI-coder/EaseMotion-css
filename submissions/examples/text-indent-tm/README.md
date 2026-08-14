# Text Indent — EaseMotion CSS Utilities

CSS `text-indent` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css">
```

## Utility Classes

| Class | Declaration |
|-------|-------------|
| `.indent-0` | `text-indent: 0;` |
| `.indent-1` | `text-indent: 0.25rem;` |
| `.indent-2` | `text-indent: 0.5rem;` |
| `.indent-4` | `text-indent: 1rem;` |
| `.indent-8` | `text-indent: 2rem;` |
| `.indent-16` | `text-indent: 4rem;` |
| `.indent-neg` | `text-indent: -0.5rem;` |
| `.indent-full` | `text-indent: 100%;` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Text Indent
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">
  Dark mode Text Indent
</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">
  No motion Text Indent
</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
