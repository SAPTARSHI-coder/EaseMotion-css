# ease-card-auto

A lightweight EaseMotion CSS utility that automatically assigns visually distinct card variants using one class. The utility generates six predictable style variants for cards, including accent colors, borders, radius, shadows, gradients, and decorative accents.

## Overview

`ease-card-auto` is designed for developers who want fast visual diversity across card walls without adding extra classes or custom markup. Add the class to a grid container, and each direct child becomes a consistent variant in a repeating pattern.

## Installation

1. Copy `demo.html`, `style.css`, and optionally `script.js` if you extend the feature.
2. Include EaseMotion CSS first, then load `style.css`.

```html
<link rel="stylesheet" href="easemotion.css" />
<link rel="stylesheet" href="submissions/examples/ease-card-auto/style.css" />
```

## Usage

Use with any grid layout or card wrapper:

```html
<div class="ease-grid ease-grid-auto ease-gap-6 ease-card-auto">
  <article class="card">...</article>
  <article class="card">...</article>
  <article class="card">...</article>
</div>
```

The utility styles every direct child automatically, so you do not need to assign unique classes to each card.

## Customization

Tune the utility by overriding CSS variables:

```css
:root {
  --ease-card-auto-transition: 300ms ease-out;
  --ease-card-auto-border-width: 2px;
  --ease-card-auto-radius-default: 2rem;
  --ease-card-auto-shadow-soft: 0 18px 44px rgba(15, 23, 42, 0.08);
}
```

You can also modify theme styles with a dark theme container:

```html
<div class="ease-card-auto" data-theme="dark">...</div>
```

## Browser compatibility

Works in modern browsers that support:

- CSS custom properties
- CSS grid
- CSS transforms and transitions
- `prefers-reduced-motion`

## Accessibility

- Respects `prefers-reduced-motion` by disabling hover transforms and transitions.
- Keeps keyboard order and layout consistent because the utility only changes presentation.
- Decorative elements are purely visual and do not affect content semantics.

## Future enhancements

- Add optional `ease-card-auto-sized` variants for different card heights or aspect ratios.
- Support CSS custom properties for each variant palette to make them themeable externally.
- Add optional `ease-card-auto-shape` utilities for softer or sharper corner variants.

---

Submitted by: @your-github-username
