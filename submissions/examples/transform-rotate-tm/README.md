# CSS Transform Rotate

**Category:** Transform
**Slug:** `transform-rotate-tm`

## Overview

CSS 2D and 3D transform utilities.

This submission provides a comprehensive set of CSS utility classes for **CSS Transform Rotate**, built on the EaseMotion CSS design token system from `core/variables.css`.

## Usage

Include the stylesheet in your HTML:

```html
<link rel="stylesheet" href="submissions/examples/transform-rotate-tm/style.css" />
```

## CSS Classes Included

### Layout & Structure
- `.demo-row` — Horizontal flex container
- `.demo-col` — Vertical flex container
- `.demo-gap` — Flex container with gap spacing
- `.demo-wrap` — Flex wrap container
- `.demo-grid-base` — Auto-fill responsive grid

### Responsive
- All demos are responsive and adapt gracefully to mobile viewports (600px breakpoint)
- Dark mode support via `prefers-color-scheme: dark`

## Design Tokens Used

This submission uses EaseMotion CSS design tokens:
- `--ease-color-primary` — Primary brand color (#6c63ff)
- `--ease-color-bg` — Background color (light/dark aware)
- `--ease-color-surface` — Surface/card background
- `--ease-color-text` — Primary text color
- `--ease-color-muted` — Muted/secondary text
- `--ease-space-*` — Consistent spacing scale
- `--ease-speed-medium` — Standard transition speed (300ms)

## Accessibility

- All interactive elements have visible focus states
- Color contrast ratios meet WCAG AA standards
- `prefers-reduced-motion` respected throughout

## File Structure

```
submissions/examples/transform-rotate-tm/
  demo.html    — Interactive demo with live examples
  style.css    — 175+ meaningful CSS lines
  README.md    — This documentation file
```

## Live Demo

Open `demo.html` in any modern browser to see the utilities in action.
