# Magnetic Pull Product Catalog Popover

## What does this do?
A pure CSS animated popover with smooth magnetic pull attraction effect, designed for Product Catalog interfaces with product images, pricing, ratings, and quick action buttons.

## How is it used?
```html
<div class="popover-container">
  <button class="product-card">
    <div class="product-image">
      <svg>...</svg>
    </div>
    <div class="product-info">
      <span class="product-name">Product Name</span>
      <span class="product-price">$99.00</span>
    </div>
  </button>
  <div class="catalog-popover" role="tooltip">
    <div class="catalog-glow"></div>
    <div class="catalog-content">
      <span class="catalog-tag">Category</span>
      <h4>Product Name</h4>
      <p>Product description goes here.</p>
      <div class="catalog-meta">
        <span class="catalog-price">$99.00</span>
        <span class="catalog-rating">★★★★★</span>
      </div>
    </div>
    <div class="catalog-footer">
      <button class="view-btn">Quick View</button>
      <button class="wishlist-btn">...</button>
    </div>
  </div>
</div>
```

## Why is it useful?
- **Magnetic attraction effect** draws attention to product details
- **Product catalog optimized** with image area, pricing, ratings, and tags
- **Multiple animation variants** (bounce, float, pulse) for different UX needs
- **Theme options** (indigo, rose, emerald) to match brand identity
- **Quick actions** with View and Wishlist buttons
- **Accessibility features** including ARIA labels and keyboard focus states

## Animation Variants
| Class | Effect |
|-------|--------|
| `.bounce` | Bouncy magnetic effect |
| `.float` | Gentle floating motion |
| `.pulse` | Pulsing attraction |

## Color Themes
| Theme | Class | Primary Color |
|-------|-------|--------------|
| Indigo | `.theme-indigo` | #6366f1 (default) |
| Rose | `.theme-rose` | #f43f5e |
| Emerald | `.theme-emerald` | #10b981 |

## CSS Custom Properties
| Property | Default | Description |
|----------|---------|-------------|
| `--cat-magnetic-duration` | `0.5s` | Animation duration |
| `--cat-magnetic-easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Easing function |
| `--cat-float-duration` | `2s` | Float loop duration |

## Acceptance Criteria
- ✅ Pure CSS implementation (no JavaScript required)
- ✅ Magnetic pull animation effect
- ✅ Product catalog styling
- ✅ Multiple animation variants
- ✅ Multiple color themes
- ✅ Quick action buttons
- ✅ Keyboard accessible with focus states
- ✅ ARIA attributes for screen readers
- ✅ CSS custom properties for customization
- ✅ Reduced motion support
- ✅ README.md with complete documentation
