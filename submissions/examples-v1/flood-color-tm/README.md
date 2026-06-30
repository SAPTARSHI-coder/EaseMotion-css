# Flood Color — EaseMotion CSS Utilities

CSS `flood-color` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css">
```

## Utility Classes

| Class | Declaration |
|-------|-------------|
| `.flood-opacity-0` | `flood-color: transparent;` |
| `.flood-opacity-1` | `flood-color: rgba(255,255,255,0.3);` |
| `.flood-opacity-2` | `flood-color: rgba(255,255,255,0.6);` |
| `.flood-opacity-3` | `flood-color: rgba(255,255,255,0.8);` |
| `.flood-opacity-full` | `flood-color: #fff;` |
| `.flood-opacity-dark` | `flood-color: rgba(0,0,0,0.5);` |
| `.flood-opacity-primary` | `flood-color: var(--ease-primary);` |
| `.flood-opacity-accent` | `flood-color: var(--ease-accent);` |
| `.flood-opacity-none` | `flood-color: none;` |
| `.flood-opacity-current` | `flood-color: currentColor;` |
| `.flood-opacity-success` | `flood-color: var(--ease-success);` |
| `.flood-opacity-warning` | `flood-color: var(--ease-warning);` |
| `.flood-opacity-danger` | `flood-color: var(--ease-danger);` |
| `.flood-opacity-info` | `flood-color: var(--ease-info);` |
| `.flood-opacity-secondary` | `flood-color: var(--ease-secondary);` |
| `.flood-opacity-transparent` | `flood-color: transparent;` |
| `.flood-opacity-10` | `flood-opacity: 0.1;` |
| `.flood-opacity-20` | `flood-opacity: 0.2;` |
| `.flood-opacity-50` | `flood-opacity: 0.5;` |
| `.flood-opacity-80` | `flood-opacity: 0.8;` |
| `.flood-opacity-100` | `flood-opacity: 1;` |
| `.flood-opacity-150` | `flood-opacity: 1.5;` |
| `.flood-opacity-200` | `flood-opacity: 2;` |
| `.flood-opacity-auto` | `flood-opacity: auto;` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Flood Color
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">
  Dark mode Flood Color
</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">
  No motion Flood Color
</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
