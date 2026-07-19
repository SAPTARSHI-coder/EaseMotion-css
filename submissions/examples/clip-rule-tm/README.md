# Clip Rule — EaseMotion CSS Utilities

CSS `clip-rule` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css">
```

## Utility Classes

| Class | Declaration |
|-------|-------------|
| `.clip-nonzero` | `clip-rule: nonzero;` |
| `.clip-evenodd` | `clip-rule: evenodd;` |
| `.clip-inherit` | `clip-rule: inherit;` |
| `.clip-initial` | `clip-rule: initial;` |
| `.clip-revert` | `clip-rule: revert;` |
| `.clip-unset` | `clip-rule: unset;` |
| `.fill-rule-nonzero` | `fill-rule: nonzero;` |
| `.fill-rule-evenodd` | `fill-rule: evenodd;` |
| `.fill-inherit` | `fill-rule: inherit;` |
| `.fill-initial` | `fill-rule: initial;` |
| `.fill-revert` | `fill-rule: revert;` |
| `.fill-unset` | `fill-rule: unset;` |
| `.mask-mode-alpha` | `mask-mode: alpha;` |
| `.mask-mode-luminance` | `mask-mode: luminance;` |
| `.mask-mode-match-source` | `mask-mode: match-source;` |
| `.mask-repeat-none` | `mask-repeat: no-repeat;` |
| `.mask-repeat-x` | `mask-repeat: repeat-x;` |
| `.mask-repeat-y` | `mask-repeat: repeat-y;` |
| `.mask-repeat` | `mask-repeat: repeat;` |
| `.mask-repeat-round` | `mask-repeat: round;` |
| `.mask-repeat-space` | `mask-repeat: space;` |
| `.mask-position-center` | `mask-position: center;` |
| `.mask-position-top` | `mask-position: top;` |
| `.mask-position-bottom` | `mask-position: bottom;` |
| `.mask-position-left` | `mask-position: left;` |
| `.mask-position-right` | `mask-position: right;` |
| `.mask-position-top-left` | `mask-position: top left;` |
| `.mask-position-top-right` | `mask-position: top right;` |
| `.mask-position-bottom-left` | `mask-position: bottom left;` |
| `.mask-position-bottom-right` | `mask-position: bottom right;` |
| `.mask-size-auto` | `mask-size: auto;` |
| `.mask-size-cover` | `mask-size: cover;` |
| `.mask-size-contain` | `mask-size: contain;` |
| `.mask-size-50` | `mask-size: 50%;` |
| `.mask-size-100` | `mask-size: 100%;` |
| `.mask-composite-add` | `mask-composite: add;` |
| `.mask-composite-subtract` | `mask-composite: subtract;` |
| `.mask-composite-intersect` | `mask-composite: intersect;` |
| `.mask-composite-exclude` | `mask-composite: exclude;` |
| `.mask-clip-nospace` | `mask-clip: no-clip;` |
| `.mask-clip-border` | `mask-clip: border-box;` |
| `.mask-clip-padding` | `mask-clip: padding-box;` |
| `.mask-clip-content` | `mask-clip: content-box;` |
| `.mask-clip-fill` | `mask-clip: fill-box;` |
| `.mask-clip-stroke` | `mask-clip: stroke-box;` |
| `.mask-clip-view` | `mask-clip: view-box;` |
| `.mask-origin-border` | `mask-origin: border-box;` |
| `.mask-origin-padding` | `mask-origin: padding-box;` |
| `.mask-origin-content` | `mask-origin: content-box;` |
| `.mask-origin-fill` | `mask-origin: fill-box;` |
| `.mask-origin-stroke` | `mask-origin: stroke-box;` |
| `.mask-origin-view` | `mask-origin: view-box;` |
| `.mask-image-none` | `mask-image: none;` |
| `.mask-image-gradient` | `mask-image: linear-gradient(to bottom, black, transparent);` |
| `.mask-image-radial` | `mask-image: radial-gradient(circle, black 50%, transparent 80%);` |
| `.mask-none` | `mask: none;` |
| `.mask-auto` | `mask: auto;` |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Clip Rule
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">
  Dark mode Clip Rule
</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">
  No motion Clip Rule
</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
