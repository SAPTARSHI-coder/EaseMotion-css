# Divider Component — Dark Mode Support

A divider component with automatic dark mode support using the `@media (prefers-color-scheme: dark)` CSS media query for EaseMotion CSS.

## What does this do?

This submission adds comprehensive dark mode support to the divider component, ensuring it automatically adapts to the user's OS or browser color scheme preference while maintaining WCAG AAA compliance.

## How is it used?

```html
<!-- Basic horizontal divider -->
<hr class="ease-divider" aria-hidden="true">

<!-- Dashed divider -->
<hr class="ease-divider ease-divider-dashed" aria-hidden="true">

<!-- Labeled divider -->
<hr class="ease-divider" aria-hidden="true">
<span class="ease-divider-label">Section Break</span>
<hr class="ease-divider" aria-hidden="true">

<!-- Gradient divider -->
<hr class="ease-divider ease-divider-gradient" aria-hidden="true">

<!-- Vertical divider -->
<div class="ease-divider-vertical" aria-hidden="true"></div>

<!-- Animated divider -->
<hr class="ease-divider ease-divider-animated" aria-hidden="true">
```

## Why is it useful?

The divider component currently has no adaptation for dark mode. Users who enable dark mode in their OS or browser are presented with a light-colored component on a dark background, creating poor contrast and a degraded visual experience. This submission fixes that by adding automatic dark mode support.

## Features

- Automatic dark mode via `@media (prefers-color-scheme: dark)`
- All color values use CSS custom properties (design tokens)
- Text contrast ratio >= 4.5:1 against dark background
- Combined dark + high contrast block for WCAG AAA compliance
- Manual toggle via `data-theme` attribute
- Smooth color transitions
- Full divider variant support (solid, dashed, dotted, gradient, vertical, animated)
- Reduced motion support

## Acceptance Criteria Met

| Criteria | Status |
|----------|--------|
| `@media (prefers-color-scheme: dark)` block present | Pass |
| All color values use CSS custom properties | Pass |
| Text contrast ratio >= 4.5:1 | Pass |
| Dark + high contrast block for WCAG AAA | Pass |

## Design Tokens

All colors are defined as CSS custom properties for easy customization:

| Token | Light | Dark | Description |
|-------|-------|------|-------------|
| `--ease-divider-color` | `#e2e8f0` | `#334155` | Divider line color |
| `--ease-divider-label-color` | `#64748b` | `#94a3b8` | Label text color |
| `--ease-divider-label-bg` | `#ffffff` | `#1e293b` | Label background |
| `--ease-divider-text` | `#1e293b` | `#f1f5f9` | Primary text |
| `--ease-divider-text-muted` | `#64748b` | `#94a3b8` | Muted text |
| `--ease-divider-accent` | `#6366f1` | `#818cf8` | Accent color |
| `--ease-divider-bg` | `#ffffff` | `#0f172a` | Page background |
| `--ease-divider-surface` | `#f8fafc` | `#1e293b` | Card surface |

## Files

- `demo.html` — Live demonstration with all divider variants and dark mode toggle
- `style.css` — Component styles with dark mode support via CSS custom properties
- `README.md` — This documentation file

## Browser Support

Works in modern browsers that support:
- CSS custom properties (variables)
- `@media (prefers-color-scheme: dark)`
- `@media (prefers-contrast: more)`
- `:has()` selector
