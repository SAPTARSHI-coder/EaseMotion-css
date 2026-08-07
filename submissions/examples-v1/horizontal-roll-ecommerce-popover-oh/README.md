# Horizontal Roll E-Commerce Checkout Popover

## What does this do?
A pure CSS animated popover with horizontal roll-in animation, designed for E-Commerce Checkout layouts with shopping cart items, prices, and checkout CTA.

## How is it used?
```html
<div class="popover-container">
  <button class="ecom-btn" aria-label="View cart">
    <svg>...</svg>
    <span class="ecom-count">3</span>
  </button>
  <div class="roll-popover" role="tooltip">
    <div class="roll-header">
      <h4>Your Cart</h4>
      <span class="roll-count">3 items</span>
    </div>
    <div class="roll-items">
      <div class="roll-item" style="--delay: 0s">
        <div class="item-img">
          <svg>...</svg>
        </div>
        <div class="item-details">
          <span class="item-name">Premium Headphones</span>
          <span class="item-price">$299.00</span>
        </div>
      </div>
      <div class="roll-item" style="--delay: 0.05s">
        <div class="item-img">
          <svg>...</svg>
        </div>
        <div class="item-details">
          <span class="item-name">Wireless Mouse</span>
          <span class="item-price">$49.00</span>
        </div>
      </div>
      <div class="roll-item" style="--delay: 0.1s">
        <div class="item-img">
          <svg>...</svg>
        </div>
        <div class="item-details">
          <span class="item-name">USB-C Cable</span>
          <span class="item-price">$19.00</span>
        </div>
      </div>
    </div>
    <div class="roll-footer">
      <div class="roll-total">
        <span>Total</span>
        <span class="total-price">$367.00</span>
      </div>
      <button class="ecom-cta">Checkout</button>
    </div>
  </div>
</div>
```

## Why is it useful?
- **Horizontal roll animation** with shopping cart reveals
- **E-Commerce Checkout optimized** with cart items and checkout CTA
- **Multiple animation variants** (shuffle, slide, stretch) for different UX needs
- **Theme options** (orange, red, amber) to match e-commerce branding
- **Shopping cart ready** structure with items, prices, and total
- **Accessibility features** including ARIA labels and keyboard focus states

## Animation Variants
| Class | Effect |
|-------|--------|
| `.shuffle` | Shuffle alternating roll |
| `.slide` | Simple slide roll |
| `.stretch` | Stretch scale roll |

## Color Themes
| Theme | Class | Primary Color |
|-------|-------|--------------|
| Orange | `.theme-orange` | #f97316 (default) |
| Red | `.theme-red` | #ef4444 |
| Amber | `.theme-amber` | #f59e0b |

## CSS Custom Properties
| Property | Default | Description |
|----------|---------|-------------|
| `--ecom-duration` | `0.5s` | Animation duration |
| `--ecom-ease` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Easing function |
| `--delay` | `0.05s` | Per-item delay (set in HTML) |

## Acceptance Criteria
- ✅ Pure CSS implementation (no JavaScript required)
- ✅ Horizontal roll animation effect
- ✅ E-Commerce Checkout styling
- ✅ Multiple animation variants
- ✅ Multiple color themes
- ✅ Shopping cart structure
- ✅ Keyboard accessible with focus states
- ✅ ARIA attributes for screen readers
- ✅ CSS custom properties for customization
- ✅ Reduced motion support
- ✅ README.md with complete documentation
