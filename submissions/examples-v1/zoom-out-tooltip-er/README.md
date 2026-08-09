# Zoom-Out Tooltip

A pure-CSS animated tooltip with a smooth zoom-out reveal transition. Designed for product catalog layouts. **No JavaScript required** — tooltip visibility is handled entirely via `:hover` and `:focus-visible` pseudo-classes.

## What does this do?

Provides a product card component with a tooltip that appears on hover or keyboard focus using a zoom-out animation (scaling from 0.6 to 1). The tooltip includes an arrow pointer and fades in with a spring-like easing curve.

## How is it used?

```html
<article class="zot-product" tabindex="0">
  <div class="zot-product__image">
    <div class="zot-product__img-placeholder">&#127912;</div>
    <span class="zot-product__badge">New</span>
  </div>
  <div class="zot-product__info">
    <h3 class="zot-product__name">Product Name</h3>
    <span class="zot-product__price">$49.00</span>
  </div>
  <div class="zot-tooltip" role="tooltip">
    <span class="zot-tooltip__content">Tooltip description text.</span>
    <span class="zot-tooltip__arrow"></span>
  </div>
</article>
```

Add `tabindex="0"` to make the card keyboard-focusable. The tooltip appears on `:hover` and `:focus-visible` automatically.

## Why is it useful?

Tooltips are among the most commonly needed UI elements in e-commerce product catalogs. This zoom-out variant provides a polished, reusable building block that contributors can drop directly into product grid layouts. It fits EaseMotion CSS's animation-first philosophy by using `ease-kf-zot-appear` keyframes and CSS custom properties for theming, while remaining fully accessible and responsive.

## Features

- Pure CSS — zero JavaScript dependencies
- Zoom-out reveal animation (scale from 0.6 to 1) with spring easing
- Arrow pointer pointing to the trigger element
- Keyboard accessible via `tabindex` + `:focus-visible`
- `prefers-reduced-motion` support — disables animations for accessibility
- Responsive sizing via CSS custom properties
- BEM naming convention with `zot-` prefix
- Product catalog-inspired card layout

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--zot-duration` | `0.35s` | Base transition duration |
| `--zot-easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Spring easing for zoom-out |
| `--zot-ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | Smooth ease-out for opacity |
| `--zot-scale-start` | `0.6` | Tooltip starting scale (before zoom-out) |
| `--zot-scale-end` | `1` | Tooltip ending scale (fully visible) |
| `--zot-tooltip-bg` | `#1e293b` | Tooltip background color |
| `--zot-tooltip-text` | `#f1f5f9` | Tooltip text color |
| `--zot-tooltip-radius` | `0.5rem` | Tooltip border radius |

## Accessibility

- Uses `tabindex="0"` on product cards for keyboard focusability
- `:focus-visible` outline on focused cards triggers tooltip
- `role="tooltip"` on tooltip element for screen reader association
- Semantic `<article>`, `<main>`, `<header>` elements
- `prefers-reduced-motion: reduce` collapses all transitions
- High contrast tooltip colors (light text on dark background)
