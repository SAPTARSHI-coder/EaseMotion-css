# Appearance — EaseMotion CSS Utilities

CSS `appearance` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css">
```

## Utility Classes

| Class | Declaration |
|-------|-------------|
| `.appearance-none` | `appearance: none;` |
| `.appearance-auto` | `appearance: auto;` |
| `.appearance-button` | `appearance: button;` |
| `.appearance-checkbox` | `appearance: checkbox;` |
| `.appearance-radio` | `appearance: radio;` |
| `.appearance-textfield` | `appearance: textfield;` |
| `.appearance-searchfield` | `appearance: searchfield;` |
| `.appearance-textarea` | `appearance: textarea;` |
| `.appearance-menulist` | `appearance: menulist;` |
| `.appearance-listbox` | `appearance: listbox;` |
| `.appearance-meter` | `appearance: meter;` |
| `.appearance-progress` | `appearance: progress-bar;` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Appearance
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">
  Dark mode Appearance
</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">
  No motion Appearance
</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
