# Scroll Behavior — EaseMotion CSS Utilities

CSS `scroll-behavior` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css">
```

## Utility Classes

| Class | Declaration |
|-------|-------------|
| `.scroll-smooth` | `scroll-behavior: smooth;` |
| `.scroll-auto` | `scroll-behavior: auto;` |
| `.scroll-normal` | `scroll-behavior: normal;` |
| `.scroll-inherit` | `scroll-behavior: inherit;` |
| `.scroll-initial` | `scroll-behavior: initial;` |
| `.scroll-unset` | `scroll-behavior: unset;` |
| `.scrollbar-width-thin` | `scrollbar-width: thin;` |
| `.scrollbar-width-none` | `scrollbar-width: none;` |
| `.scrollbar-width-auto` | `scrollbar-width: auto;` |
| `.scrollbar-color-thumb` | `scrollbar-color: var(--ease-primary) var(--ease-border);` |
| `.overflow-anchor-auto` | `overflow-anchor: auto;` |
| `.overflow-anchor-none` | `overflow-anchor: none;` |
| `.scroll-snap-none` | `scroll-snap-type: none;` |
| `.scroll-snap-x` | `scroll-snap-type: x mandatory;` |
| `.scroll-snap-y` | `scroll-snap-type: y mandatory;` |
| `.scroll-padding` | `scroll-padding: 0;` |
| `.scroll-padding-sm` | `scroll-padding: 0.5rem;` |
| `.scroll-padding-md` | `scroll-padding: 1rem;` |
| `.scroll-padding-lg` | `scroll-padding: 2rem;` |
| `.scroll-padding-xl` | `scroll-padding: 3rem;` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Scroll Behavior
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">
  Dark mode Scroll Behavior
</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">
  No motion Scroll Behavior
</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
