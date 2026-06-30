# Container Type — EaseMotion CSS Utilities

CSS `container-type` utility classes for the EaseMotion CSS framework.

## Quick Start

```html
<link rel="stylesheet" href="style.css" />
```

## Utility Classes

| Class                     | Declaration                    |
| ------------------------- | ------------------------------ |
| `.container-normal`       | `container-type: normal;`      |
| `.container-size`         | `container-type: size;`        |
| `.container-inline`       | `container-type: inline-size;` |
| `.container-block`        | `container-type: block-size;`  |
| `.container-strict`       | `container-type: strict;`      |
| `.container-scroll`       | `container-type: scroll;`      |
| `.container-name-none`    | `container-name: none;`        |
| `.container-name-sidebar` | `container-name: sidebar;`     |
| `.container-name-main`    | `container-name: main;`        |
| `.container-name-header`  | `container-name: header;`      |
| `.container-name-footer`  | `container-name: footer;`      |
| `.container-name-nav`     | `container-name: nav;`         |
| `.container-name-card`    | `container-name: card;`        |
| `.container-name-modal`   | `container-name: modal;`       |
| `.container-q-none`       | `container: none;`             |
| `.container-q-sm`         | `container: sm;`               |
| `.container-q-md`         | `container: md;`               |
| `.container-q-lg`         | `container: lg;`               |
| `.container-q-xl`         | `container: xl;`               |
| `.container-q-wrapper`    | `container: wrapper;`          |
| `.container-q-card`       | `container: card;`             |
| `.container-q-modal`      | `container: modal;`            |
| `.container-q-header`     | `container: header;`           |
| `.container-q-nav`        | `container: nav;`              |

## Responsive Variants

Prefix with `sm-`, `md-`, `lg-` for responsive behavior:

```html
<div class="util-class sm-util-class md-util-class lg-util-class">
  Responsive Container Type
</div>
```

## Dark Mode

Use the `-dark` variant:

```html
<div class="util-class-dark">Dark mode Container Type</div>
```

## Reduced Motion

Use the `-nomotion` variant:

```html
<div class="util-class-nomotion">No motion Container Type</div>
```

## Framework Integration

All utilities use EasMotion design tokens from `core/variables.css`: `--ease-primary`, `--ease-secondary`, `--ease-accent`, `--ease-success`, `--ease-danger`, `--ease-warning`, `--ease-info`.

## License

MIT License — © 2026 EaseMotion Contributors
