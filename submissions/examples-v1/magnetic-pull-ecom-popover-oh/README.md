# Magnetic Pull E-Commerce Popover

## What does this do?
A pure CSS animated popover with smooth magnetic pull attraction effect, designed for E-Commerce checkout interfaces with cart functionality, item listings, and checkout CTA.

## How is it used?
```html
<div class="popover-container">
  <button class="trigger-btn">
    Add to Cart
    <span class="badge-count">3</span>
  </button>
  <div class="ecom-popover" role="tooltip">
    <div class="ecom-glow"></div>
    <div class="ecom-header">
      <h4>Your Cart</h4>
      <span class="item-count">3 items</span>
    </div>
    <div class="ecom-items">
      <div class="ecom-item">
        <span class="item-name">Product Item</span>
        <span class="item-price">$29.99</span>
      </div>
    </div>
    <div class="ecom-footer">
      <div class="ecom-total">
        <span>Total:</span>
        <span class="total-price">$29.99</span>
      </div>
      <button class="checkout-btn">Proceed to Checkout</button>
    </div>
  </div>
</div>
```

## Why is it useful?
- **Magnetic attraction effect** draws user attention to cart/checkout actions
- **E-Commerce optimized styling** with warm colors, clear pricing, and prominent CTAs
- **Multiple animation variants** (snappy, smooth, attract) for different UX needs
- **Theme options** (orange, red, green, blue) to match brand identity
- **Cart-ready structure** with header, items list, total, and checkout button
- **Accessibility features** including ARIA labels and keyboard focus states

## Animation Variants
| Class | Effect |
|-------|--------|
| `.snappy` | Fast, quick magnetic response |
| `.smooth` | Gentle, flowing motion |
| `.attract` | Strong pull with overshoot |

## Color Themes
| Theme | Class | Primary Color |
|-------|-------|--------------|
| Orange | `.theme-orange` | #f97316 (default) |
| Red | `.theme-red` | #ef4444 |
| Green | `.theme-green` | #22c55e |
| Blue | `.theme-blue` | #3b82f6 |

## CSS Custom Properties
| Property | Default | Description |
|----------|---------|-------------|
| `--ecom-magnetic-duration` | `0.5s` | Animation duration |
| `--ecom-magnetic-easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Easing function |
| `--ecom-float-duration` | `2s` | Float loop duration |

## Acceptance Criteria
- ✅ Pure CSS implementation (no JavaScript required)
- ✅ Magnetic pull animation effect
- ✅ E-Commerce checkout styling
- ✅ Multiple animation variants
- ✅ Multiple color themes
- ✅ Cart-ready structure
- ✅ Keyboard accessible with focus states
- ✅ ARIA attributes for screen readers
- ✅ CSS custom properties for customization
- ✅ Reduced motion support
- ✅ README.md with complete documentation
