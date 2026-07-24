# Minimalist Tech Tooltip

A pure-CSS animated tooltip with a clean zoom-out reveal transition, styled for minimalist developer tools and tech interfaces. **No JavaScript required** — tooltip visibility is handled entirely via `:hover` and `:focus-visible` pseudo-classes.

## What does this do?

Provides a developer tool card component with tooltips that appear on hover or keyboard focus using a zoom-out animation (scaling from 0.55 to 1). Tooltips feature a dark background with monospace label accents and a minimal line separator — designed for API docs, CLI tools, and developer dashboards.

## How is it used?

```html
<div class="mt-card" tabindex="0">
  <div class="mt-card__marker"></div>
  <h3 class="mt-card__title">REST API</h3>
  <code class="mt-card__code">/api/v2/users</code>
  <div class="mt-tooltip" role="tooltip">
    <span class="mt-tooltip__label">Endpoint</span>
    <span class="mt-tooltip__text">RESTful resource with pagination and filtering.</span>
    <span class="mt-tooltip__line"></span>
  </div>
</div>
```

Add `tabindex="0"` to make the card keyboard-focusable. The tooltip appears on `:hover` and `:focus-visible` automatically.

## Why is it useful?

Developer tool interfaces need tooltips to explain endpoints, commands, and configurations without cluttering the layout. This minimalist variant provides a clean, monospace-accented building block for tech documentation and API reference pages. It fits EaseMotion CSS's animation-first philosophy by using `ease-kf-mt-tt-*` keyframes and CSS custom properties for theming, while remaining fully accessible and responsive.

## Features

- Pure CSS — zero JavaScript dependencies
- Zoom-out reveal animation (scale from 0.55 to 1) with spring easing
- Monospace label accent with cyan color for developer feel
- Line separator in tooltip for visual hierarchy
- Animated top marker on hover (width transition)
- Keyboard accessible via `tabindex` + `:focus-visible`
- `prefers-reduced-motion` support — disables animations for accessibility
- Responsive sizing via CSS custom properties
- BEM naming convention with `mt-` prefix
- Grid-based card layout with 1px dividers

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--mt-tt-duration` | `0.28s` | Base transition duration |
| `--mt-tt-easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Spring easing for zoom-out |
| `--mt-tt-ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | Smooth ease-out for opacity |
| `--mt-tt-scale-from` | `0.55` | Tooltip starting scale |
| `--mt-tt-scale-to` | `1` | Tooltip ending scale |
| `--mt-tt-tooltip-bg` | `#111827` | Tooltip dark background |
| `--mt-tt-tooltip-text` | `#f9fafb` | Tooltip text color |
| `--mt-tt-tooltip-label` | `#22d3ee` | Tooltip label accent (cyan) |
| `--mt-tt-bg` | `#fafafa` | Page background |

## Accessibility

- Uses `tabindex="0"` on cards for keyboard focusability
- `:focus-visible` outline on focused cards triggers tooltip
- `role="tooltip"` on tooltip element for screen reader association
- Semantic `<section>`, `<main>`, `<header>`, `<h3>`, `<code>` elements
- `prefers-reduced-motion: reduce` collapses all transitions
- High contrast tooltip colors (light text on dark background)
