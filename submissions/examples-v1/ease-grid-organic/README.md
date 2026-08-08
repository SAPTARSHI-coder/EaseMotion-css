# ease-grid-organic

A responsive EaseMotion CSS utility that gives grid cards a handcrafted, organic layout with subtle rotation, offset, and scale variation.

## Overview

`ease-grid-organic` adds a lightweight layer of visual texture to standard grid layouts. Direct child elements receive deterministic transforms so the overall grid remains clean and responsive while each item appears slightly unique and handcrafted.

### What it does

- Applies subtle rotations in the ±2° to ±5° range
- Adds small horizontal and vertical offsets for natural variation
- Uses slight scale differences between 0.98 and 1.02
- Preserves responsive grid alignment and avoids overlapping items
- Includes smooth entrance and hover transitions
- Respects `prefers-reduced-motion` by disabling transforms

## Installation

1. Copy `demo.html`, `style.css`, and the `ease-grid-organic` utility into your project.
2. Load EaseMotion CSS first, then `style.css`.

```html
<link rel="stylesheet" href="easemotion.css" />
<link rel="stylesheet" href="path/to/style.css" />
```

## Usage

Add the utility to any grid container with direct children:

```html
<div class="ease-grid ease-grid-auto ease-gap-6 ease-grid-organic">
  <article class="card">...</article>
  <article class="card">...</article>
  <article class="card">...</article>
</div>
```

The utility styles all direct child elements automatically, so grid items do not need additional classes to receive the organic effect.

## Customization

Override these CSS variables to tune the effect:

```css
:root {
  --ease-grid-organic-rotation-intensity: 5deg;
  --ease-grid-organic-offset-distance: 0.4rem;
  --ease-grid-organic-scale-variation: 0.03;
}
```

The demo uses deterministic `nth-child` variants so layouts remain stable after page refresh.

## Browser compatibility

Works in modern browsers that support:

- CSS custom properties
- CSS grid
- `transform` and `transition`
- `prefers-reduced-motion`

## Accessibility

`ease-grid-organic` respects user motion preferences via `prefers-reduced-motion`. When reduced motion is enabled, the utility disables transforms, transitions, and entrance animation while preserving the grid structure.

### Notes

- The effect is purely decorative and does not change keyboard navigation order.
- The utility is designed to preserve layout rhythm and avoid overlap by using gentle offsets and consistent grid gaps.

## Example placeholders

![Screenshot placeholder](screenshot-1.png)

![GIF placeholder](screenshot-2.gif)
