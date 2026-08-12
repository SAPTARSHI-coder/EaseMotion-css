# Box Shadow — EaseMotion CSS Utilities

CSS `box-shadow` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css">
```

## Utility Classes

| Class | Declaration |
|-------|-------------|
| `.shadow-none` | `box-shadow: none;` |
| `.shadow-sm` | `box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);` |
| `.shadow` | `box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1);` |
| `.shadow-md` | `box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);` |
| `.shadow-lg` | `box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);` |
| `.shadow-xl` | `box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);` |
| `.shadow-2xl` | `box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);` |
| `.shadow-inner` | `box-shadow: inset 0 2px 4px 0 rgba(0,0,0,0.06);` |
| `.shadow-outline` | `box-shadow: 0 0 0 3px rgba(99,102,241,0.5);` |
| `.shadow-primary` | `box-shadow: 0 4px 14px 0 rgba(99,102,241,0.4);` |
| `.shadow-danger` | `box-shadow: 0 4px 14px 0 rgba(239,68,68,0.4);` |
| `.shadow-success` | `box-shadow: 0 4px 14px 0 rgba(16,185,129,0.4);` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Box Shadow
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">
  Dark mode Box Shadow
</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">
  No motion Box Shadow
</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
