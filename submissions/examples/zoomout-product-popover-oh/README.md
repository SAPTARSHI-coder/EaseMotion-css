# Zoom-Out Product Catalog Popover

## What does this do?
A pure CSS animated popover with zoom-out animation, designed for Product Catalog layouts with quick view, product details, ratings, and action buttons.

## How is it used?
```html
<div class="popover-container">
  <button class="product-btn" aria-label="Quick view">
    <svg>...</svg>
    Quick View
  </button>
  <div class="zoom-popover" role="tooltip">
    <div class="zoom-product">
      <div class="product-image">
        <svg>...</svg>
      </div>
      <div class="product-info">
        <h4>Wireless Headphones</h4>
        <p class="product-price">$299.00</p>
        <div class="product-rating">
          <span class="stars">★★★★★</span>
          <span class="count">(128)</span>
        </div>
      </div>
    </div>
    <div class="zoom-actions">
      <button class="product-cta primary">Add to Cart</button>
      <button class="product-cta secondary">Wishlist</button>
    </div>
  </div>
</div>
```

## Why is it useful?
- **Zoom-out animation** with product reveals
- **Product Catalog optimized** with quick view and ratings
- **Multiple animation variants** (scale, reveal, pop) for different UX needs
- **Theme options** (purple, teal, rose) to match e-commerce branding
- **E-commerce ready** structure with product cards and CTAs
- **Accessibility features** including ARIA labels and keyboard focus states

## Animation Variants
| Class | Effect |
|-------|--------|
| `.scale` | Scale bounce zoom |
| `.reveal` | Reveal translate zoom |
| `.pop` | Pop spring zoom |

## Color Themes
| Theme | Class | Primary Color |
|-------|-------|--------------|
| Purple | `.theme-purple` | #7c3aed (default) |
| Teal | `.theme-teal` | #0d9488 |
| Rose | `.theme-rose` | #e11d48 |

## CSS Custom Properties
| Property | Default | Description |
|----------|---------|-------------|
| `--zoom-duration` | `0.5s` | Animation duration |
| `--zoom-ease` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Easing function |
| `--delay` | `0.05s` | Per-item delay (set in HTML) |

## Acceptance Criteria
- ✅ Pure CSS implementation (no JavaScript required)
- ✅ Zoom-out animation effect
- ✅ Product Catalog styling
- ✅ Multiple animation variants
- ✅ Multiple color themes
- ✅ Quick view structure
- ✅ Keyboard accessible with focus states
- ✅ ARIA attributes for screen readers
- ✅ CSS custom properties for customization
- ✅ Reduced motion support
- ✅ README.md with complete documentation
