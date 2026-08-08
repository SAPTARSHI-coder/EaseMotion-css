# Horizontal Roll Product Catalog Popover

## What does this do?
A pure CSS animated popover with horizontal roll-in animation, designed for Product Catalog layouts with quick view, product details, ratings, and action buttons.

## How is it used?
```html
<div class="popover-container">
  <button class="product-btn" aria-label="Quick view">
    <svg>...</svg>
    Quick View
  </button>
  <div class="roll-popover" role="tooltip">
    <div class="roll-product">
      <div class="product-img">
        <svg>...</svg>
      </div>
      <div class="product-info">
        <span class="product-category">Electronics</span>
        <h4>Smart Watch Pro</h4>
        <div class="product-rating">
          <span class="stars">★★★★★</span>
          <span class="review-count">(128)</span>
        </div>
        <div class="product-price">
          <span class="current">$349.00</span>
          <span class="original">$449.00</span>
        </div>
      </div>
    </div>
    <div class="roll-items">
      <div class="roll-item" style="--delay: 0s">
        <span class="item-icon">
          <svg>...</svg>
        </span>
        <span>Add to Wishlist</span>
      </div>
      <div class="roll-item" style="--delay: 0.05s">
        <span class="item-icon">
          <svg>...</svg>
        </span>
        <span>Add to Cart</span>
      </div>
      <div class="roll-item" style="--delay: 0.1s">
        <span class="item-icon">
          <svg>...</svg>
        </span>
        <span>Share</span>
      </div>
    </div>
  </div>
</div>
```

## Why is it useful?
- **Horizontal roll animation** with product reveals
- **Product Catalog optimized** with quick view and action buttons
- **Multiple animation variants** (reveal, bounce, swing) for different UX needs
- **Theme options** (purple, teal, rose) to match catalog branding
- **Product quick view ready** structure with details and actions
- **Accessibility features** including ARIA labels and keyboard focus states

## Animation Variants
| Class | Effect |
|-------|--------|
| `.reveal` | Reveal opacity roll |
| `.bounce` | Bounce easing roll |
| `.swing` | Swing rotate roll |

## Color Themes
| Theme | Class | Primary Color |
|-------|-------|--------------|
| Purple | `.theme-purple` | #8b5cf6 (default) |
| Teal | `.theme-teal` | #14b8a6 |
| Rose | `.theme-rose` | #f43f5e |

## CSS Custom Properties
| Property | Default | Description |
|----------|---------|-------------|
| `--prod-duration` | `0.5s` | Animation duration |
| `--prod-ease` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Easing function |
| `--delay` | `0.05s` | Per-item delay (set in HTML) |

## Acceptance Criteria
- ✅ Pure CSS implementation (no JavaScript required)
- ✅ Horizontal roll animation effect
- ✅ Product Catalog styling
- ✅ Multiple animation variants
- ✅ Multiple color themes
- ✅ Quick view structure
- ✅ Keyboard accessible with focus states
- ✅ ARIA attributes for screen readers
- ✅ CSS custom properties for customization
- ✅ Reduced motion support
- ✅ README.md with complete documentation
