# Page Break — EaseMotion CSS Utilities

CSS `page-break` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css">
```

## Utility Classes

| Class | Declaration |
|-------|-------------|
| `.break-before-auto` | `break-before: auto;` |
| `.break-before-always` | `break-before: always;` |
| `.break-before-avoid` | `break-before: avoid;` |
| `.break-before-left` | `break-before: left;` |
| `.break-before-right` | `break-before: right;` |
| `.break-before-page` | `break-before: page;` |
| `.break-after-auto` | `break-after: auto;` |
| `.break-after-always` | `break-after: always;` |
| `.break-after-avoid` | `break-after: avoid;` |
| `.break-after-page` | `break-after: page;` |
| `.break-inside-auto` | `break-inside: auto;` |
| `.break-inside-avoid` | `break-inside: avoid;` |
| `.break-inside-avoid-page` | `break-inside: avoid-page;` |
| `.orphans-2` | `orphans: 2;` |
| `.orphans-3` | `orphans: 3;` |
| `.widows-2` | `widows: 2;` |
| `.widows-3` | `widows: 3;` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Page Break
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">
  Dark mode Page Break
</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">
  No motion Page Break
</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
