# Spring Physics Product Catalog Popover

## What does this do?
A pure CSS animated popover with smooth spring physics bounce effect, designed for Product Catalog interfaces with product images, pricing, ratings, and add-to-cart functionality.

## How is it used?
```html
<div class="popover-container">
  <button class="product-thumb">
    <div class="thumb-image"><svg>...</svg></div>
    <span class="thumb-label">$149</span>
  </button>
  <div class="spring-popover" role="tooltip">
    <div class="spring-image"></div>
    <div class="spring-content">
      <span class="spring-tag">Electronics</span>
      <h4>Wireless Headphones</h4>
      <p>Premium sound quality with active noise cancellation.</p>
      <div class="spring-meta">
        <span class="spring-price">$149.00</span>
        <span class="spring-rating">4.8 ★</span>
      </div>
    </div>
    <div class="spring-footer">
      <button class="add-cart-btn">Add to Cart</button>
    </div>
  </div>
</div>
```

## Why is it useful?
- **Spring physics animation** with playful bounce and overshoot
- **Product catalog optimized** with image, pricing, ratings, and cart
- **Multiple animation variants** (soft, sharp, wave) for different UX needs
- **Theme options** (amber, cyan, rose) to match brand identity
- **E-commerce ready** structure with product details and add-to-cart CTA
- **Accessibility features** including ARIA labels and keyboard focus states

## Animation Variants
| Class | Effect |
|-------|--------|
| `.soft` | Subtle spring bounce |
| `.sharp` | Sharp quick spring |
| `.wave` | Wave-like rotation |

## Color Themes
| Theme | Class | Primary Color |
|-------|-------|--------------|
| Amber | `.theme-amber` | #f59e0b (default) |
| Cyan | `.theme-cyan` | #06b6d4 |
| Rose | `.theme-rose` | #f43f5e |

## CSS Custom Properties
| Property | Default | Description |
|----------|---------|-------------|
| `--cat-duration` | `0.6s` | Animation duration |
| `--cat-bounce` | `cubic-bezier(0.68,-0.55,0.265,1.55)` | Bounce easing |
| `--cat-loop` | `2s` | Loop duration |

## Acceptance Criteria
- ✅ Pure CSS implementation (no JavaScript required)
- ✅ Spring physics animation effect
- ✅ Product catalog styling
- ✅ Multiple animation variants
- ✅ Multiple color themes
- ✅ E-commerce-ready structure
- ✅ Keyboard accessible with focus states
- ✅ ARIA attributes for screen readers
- ✅ CSS custom properties for customization
- ✅ Reduced motion support
- ✅ README.md with complete documentation
