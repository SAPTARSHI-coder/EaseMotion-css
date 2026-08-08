# Ease Fade-In Progress Bar — Product Catalog

## Description
Product catalog cards where the card itself, its stock-level bar, and its rating bar each fade in with a staggered sequence — cards appear first, then stock bars fade+fill shortly after, then rating bars fade+fill last. Color-coded stock status (green in-stock, amber low-stock, gray sold-out). Pure CSS, zero JavaScript.

## Features
- Staggered multi-layer fade-in: card → stock bar → rating bar, each with incremental delay
- Color-coded stock level bar (`in-stock` / `low-stock` / `sold-out` variants)
- Star-rating style fill bar with numeric label
- Grid layout with `auto-fit`/`minmax` for natural responsive wrapping
- Fully customizable via CSS custom properties
- Respects `prefers-reduced-motion`

## Usage
```html
<div class="ease-catalog-progress">
  <div class="product-card">
    <p class="product-name">Product Name</p>
    <p class="product-price">$XX.XX</p>

    <div class="stock-row">
      <div class="stock-label-row">
        <span class="stock-label">Stock</span>
        <span class="stock-status in-stock">In Stock</span>
      </div>
      <div class="stock-track">
        <div class="stock-fill in-stock" style="--fill-scale: 0.85;"></div>
      </div>
    </div>

    <div class="rating-row">
      <div class="rating-track">
        <div class="rating-fill" style="--rating-scale: 0.9;"></div>
      </div>
      <span class="rating-text">4.5</span>
    </div>
  </div>
</div>
```
Set `--fill-scale`/`--rating-scale` to a decimal (0–1) representing the bar's fill percentage. Use `.stock-status`/`.stock-fill` modifier classes `in-stock`, `low-stock`, or `sold-out` to match the desired state.

## Customization (CSS custom properties)
| Property | Default | Description |
|---|---|---|
| `--fade-duration` | `0.6s` | Card/bar fade-in duration |
| `--fade-easing` | `cubic-bezier(0.16, 1, 0.3, 1)` | Timing function |
| `--stagger` | `0.15s` | Delay increment between cards |
| `--bar-height` | `8px` | Stock bar thickness |
| `--track-bg` | `#f1f5f9` | Empty bar track background |

## Files
- `demo.html` — live working example with 4 product cards (in-stock, low-stock, sold-out states)
- `style.css` — component styles and all fade-in animations
- `README.md` — this file