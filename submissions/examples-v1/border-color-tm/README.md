# Border Color — EaseMotion CSS Utilities

CSS `border-color` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css">
```

## Utility Classes

| Class | Declaration |
|-------|-------------|
| `.border-transparent` | `border-color: transparent;` |
| `.border-current` | `border-color: currentColor;` |
| `.border-primary` | `border-color: var(--ease-primary);` |
| `.border-secondary` | `border-color: var(--ease-secondary);` |
| `.border-accent` | `border-color: var(--ease-accent);` |
| `.border-success` | `border-color: var(--ease-success);` |
| `.border-danger` | `border-color: var(--ease-danger);` |
| `.border-warning` | `border-color: var(--ease-warning);` |
| `.border-info` | `border-color: var(--ease-info);` |
| `.border-black` | `border-color: #000;` |
| `.border-white` | `border-color: #fff;` |
| `.border-gray-50` | `border-color: #f8fafc;` |
| `.border-gray-100` | `border-color: #f1f5f9;` |
| `.border-gray-200` | `border-color: #e2e8f0;` |
| `.border-gray-300` | `border-color: #cbd5e1;` |
| `.border-gray-400` | `border-color: #94a3b8;` |
| `.border-gray-500` | `border-color: #64748b;` |
| `.border-gray-600` | `border-color: #475569;` |
| `.border-gray-700` | `border-color: #334155;` |
| `.border-gray-800` | `border-color: #1e293b;` |
| `.border-gray-900` | `border-color: #0f172a;` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Border Color
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">
  Dark mode Border Color
</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">
  No motion Border Color
</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
