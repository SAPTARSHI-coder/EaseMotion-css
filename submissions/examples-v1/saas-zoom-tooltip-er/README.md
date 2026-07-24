# SaaS Zoom-Out Tooltip

A pure-CSS animated tooltip with a smooth zoom-out reveal transition, styled with glass morphism for SaaS showcase interfaces. **No JavaScript required** — tooltip visibility is handled entirely via `:hover` and `:focus-visible` pseudo-classes.

## What does this do?

Provides a SaaS feature card component with tooltips that appear on hover or keyboard focus using a zoom-out animation (scaling from 0.5 to 1). Tooltips feature glass morphism styling with backdrop blur, a header label, and a description — designed for SaaS product showcases and feature grids.

## How is it used?

```html
<div class="saas-feature" tabindex="0">
  <div class="saas-feature__icon">
    <span aria-hidden="true">&#9889;</span>
  </div>
  <h3 class="saas-feature__title">Lightning Fast</h3>
  <p class="saas-feature__brief">Sub-50ms response times</p>
  <div class="saas-tooltip" role="tooltip">
    <div class="saas-tooltip__header">Performance</div>
    <span class="saas-tooltip__content">Edge-located CDN nodes ensure your API responses arrive in under 50ms globally.</span>
    <span class="saas-tooltip__arrow"></span>
  </div>
</div>
```

Add `tabindex="0"` to make the feature card keyboard-focusable. The tooltip appears on `:hover` and `:focus-visible` automatically.

## Why is it useful?

SaaS showcase pages need tooltips to explain features without cluttering the UI. This zoom-out variant provides a polished, reusable building block with glass morphism styling that complements modern SaaS aesthetics. It fits EaseMotion CSS's animation-first philosophy by using `ease-kf-saas-tt-*` keyframes and CSS custom properties for theming, while remaining fully accessible and responsive.

## Features

- Pure CSS — zero JavaScript dependencies
- Zoom-out reveal animation (scale from 0.5 to 1) with spring easing
- Glass morphism tooltip with backdrop blur and subtle border glow
- Tooltip header + content layout for structured information
- Arrow pointer pointing to the trigger element
- Keyboard accessible via `tabindex` + `:focus-visible`
- `prefers-reduced-motion` support — disables animations for accessibility
- Responsive sizing via CSS custom properties
- BEM naming convention with `saas-feature__` and `saas-tooltip__` prefix

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--saas-tt-duration` | `0.3s` | Base transition duration |
| `--saas-tt-easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Spring easing for zoom-out |
| `--saas-tt-ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | Smooth ease-out for opacity |
| `--saas-tt-scale-from` | `0.5` | Tooltip starting scale |
| `--saas-tt-scale-to` | `1` | Tooltip ending scale |
| `--saas-tt-tooltip-bg` | `rgba(15, 23, 42, 0.92)` | Tooltip glass background |
| `--saas-tt-tooltip-border` | `rgba(99, 102, 241, 0.2)` | Tooltip border color |
| `--saas-tt-tooltip-text` | `#e2e8f0` | Tooltip text color |
| `--saas-tt-accent` | `#6366f1` | Accent/indigo color |

## Accessibility

- Uses `tabindex="0"` on feature cards for keyboard focusability
- `:focus-visible` outline on focused cards triggers tooltip
- `role="tooltip"` on tooltip element for screen reader association
- Semantic `<section>`, `<main>`, `<header>`, `<h3>` elements
- `prefers-reduced-motion: reduce` collapses all transitions
- High contrast tooltip colors (light text on dark glass background)
