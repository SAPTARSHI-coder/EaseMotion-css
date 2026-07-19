# Magnetic Pull Modern SaaS Popover

## What does this do?
A pure CSS animated popover with smooth magnetic pull attraction effect, designed for Modern SaaS interfaces with pricing plans, feature lists, and subscription CTAs.

## How is it used?
```html
<div class="popover-container">
  <button class="saas-btn">
    <span class="btn-icon">
      <svg>...</svg>
    </span>
    <span class="btn-text">View Plans</span>
  </button>
  <div class="saas-popover" role="tooltip">
    <div class="saas-glow"></div>
    <div class="saas-header">
      <div class="plan-badge">Recommended</div>
      <h4>Pro Plan</h4>
      <div class="plan-price">
        <span class="price-amount">$29</span>
        <span class="price-period">/month</span>
      </div>
    </div>
    <div class="saas-features">
      <div class="feature">
        <svg>...</svg>
        <span>Unlimited Projects</span>
      </div>
    </div>
    <div class="saas-footer">
      <button class="subscribe-btn">Start Free Trial</button>
      <p class="saas-note">No credit card required</p>
    </div>
  </div>
</div>
```

## Why is it useful?
- **Magnetic attraction effect** draws attention to pricing/subscription CTAs
- **Modern SaaS optimized** with clean design, pricing cards, and feature lists
- **Multiple animation variants** (float, snap, breath) for different UX needs
- **Theme options** (indigo, teal, rose) to match brand identity
- **Subscription-ready structure** with pricing, features, and trial CTA
- **Accessibility features** including ARIA labels and keyboard focus states

## Animation Variants
| Class | Effect |
|-------|--------|
| `.float` | Floating magnetic effect |
| `.snap` | Snapping attraction |
| `.breath` | Breathing magnetic effect |

## Color Themes
| Theme | Class | Primary Color |
|-------|-------|--------------|
| Indigo | `.theme-indigo` | #6366f1 (default) |
| Teal | `.theme-teal` | #14b8a6 |
| Rose | `.theme-rose` | #f43f5e |

## CSS Custom Properties
| Property | Default | Description |
|----------|---------|-------------|
| `--saas-duration` | `0.5s` | Animation duration |
| `--saas-easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Easing function |
| `--saas-float-duration` | `2s` | Float loop duration |

## Acceptance Criteria
- ✅ Pure CSS implementation (no JavaScript required)
- ✅ Magnetic pull animation effect
- ✅ Modern SaaS styling
- ✅ Multiple animation variants
- ✅ Multiple color themes
- ✅ Subscription-ready structure
- ✅ Keyboard accessible with focus states
- ✅ ARIA attributes for screen readers
- ✅ CSS custom properties for customization
- ✅ Reduced motion support
- ✅ README.md with complete documentation
