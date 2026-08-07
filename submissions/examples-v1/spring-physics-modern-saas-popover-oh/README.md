# Spring Physics Modern SaaS Popover

## What does this do?
A pure CSS animated popover with smooth spring physics bounce effect, designed for Modern SaaS interfaces with pricing plans, feature lists, and subscription CTAs.

## How is it used?
```html
<div class="popover-container">
  <button class="pricing-card">
    <span class="plan-name">Pro</span>
    <span class="plan-price">$29<span>/mo</span></span>
    <span class="plan-cta">Choose Plan</span>
  </button>
  <div class="spring-popover" role="tooltip">
    <div class="spring-badge">Most Popular</div>
    <div class="spring-header">
      <h4>Pro Plan Features</h4>
    </div>
    <div class="spring-list">
      <div class="list-item">
        <svg>...</svg>
        <span>Unlimited projects</span>
      </div>
    </div>
    <div class="spring-footer">
      <button class="spring-btn">Start 14-day Trial</button>
    </div>
  </div>
</div>
```

## Why is it useful?
- **Spring physics animation** with playful bounce and overshoot
- **Modern SaaS optimized** with pricing cards and feature lists
- **Multiple animation variants** (boing, thump, ripple) for different UX needs
- **Theme options** (blue, pink, green) to match brand identity
- **Subscription-ready** structure with features and trial CTA
- **Accessibility features** including ARIA labels and keyboard focus states

## Animation Variants
| Class | Effect |
|-------|--------|
| `.boing` | Boing spring effect |
| `.thump` | Thumping spring |
| `.ripple` | Rippling spring |

## Color Themes
| Theme | Class | Primary Color |
|-------|-------|--------------|
| Blue | `.theme-blue` | #3b82f6 (default) |
| Pink | `.theme-pink` | #ec4899 |
| Green | `.theme-green` | #22c55e |

## CSS Custom Properties
| Property | Default | Description |
|----------|---------|-------------|
| `--saas-duration` | `0.6s` | Animation duration |
| `--saas-bounce` | `cubic-bezier(0.68,-0.55,0.265,1.55)` | Bounce easing |
| `--saas-loop` | `2s` | Loop duration |

## Acceptance Criteria
- ✅ Pure CSS implementation (no JavaScript required)
- ✅ Spring physics animation effect
- ✅ Modern SaaS styling
- ✅ Multiple animation variants
- ✅ Multiple color themes
- ✅ Subscription-ready structure
- ✅ Keyboard accessible with focus states
- ✅ ARIA attributes for screen readers
- ✅ CSS custom properties for customization
- ✅ Reduced motion support
- ✅ README.md with complete documentation
