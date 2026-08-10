# Horizontal Roll Marketing Landing Page Popover

## What does this do?
A pure CSS animated popover with horizontal roll-in animation, designed for Marketing Landing Page layouts with newsletter signup, email input, and benefits list.

## How is it used?
```html
<div class="popover-container">
  <button class="market-btn" aria-label="Subscribe">
    <svg>...</svg>
    Subscribe
  </button>
  <div class="roll-popover" role="tooltip">
    <div class="roll-header">
      <h4>Join Our Newsletter</h4>
      <p>Get weekly updates and exclusive offers</p>
    </div>
    <div class="roll-form">
      <div class="roll-input" style="--delay: 0s">
        <input type="email" placeholder="Enter your email" />
      </div>
      <div class="roll-input" style="--delay: 0.05s">
        <button class="market-cta">Subscribe Now</button>
      </div>
    </div>
    <div class="roll-benefits">
      <div class="roll-benefit" style="--delay: 0.1s">
        <span class="benefit-check">
          <svg>...</svg>
        </span>
        <span>Weekly product updates</span>
      </div>
      <div class="roll-benefit" style="--delay: 0.15s">
        <span class="benefit-check">
          <svg>...</svg>
        </span>
        <span>Exclusive discounts</span>
      </div>
      <div class="roll-benefit" style="--delay: 0.2s">
        <span class="benefit-check">
          <svg>...</svg>
        </span>
        <span>No spam, unsubscribe anytime</span>
      </div>
    </div>
  </div>
</div>
```

## Why is it useful?
- **Horizontal roll animation** with lead capture reveals
- **Marketing Landing Page optimized** with email signup and benefits
- **Multiple animation variants** (expand, unfold, slide) for different UX needs
- **Theme options** (blue, green, pink) to match marketing branding
- **Newsletter ready** structure with form and benefits list
- **Accessibility features** including ARIA labels and keyboard focus states

## Animation Variants
| Class | Effect |
|-------|--------|
| `.expand` | Scale Y expand roll |
| `.unfold` | 3D unfold roll |
| `.slide` | Simple slide roll |

## Color Themes
| Theme | Class | Primary Color |
|-------|-------|--------------|
| Blue | `.theme-blue` | #3b82f6 (default) |
| Green | `.theme-green` | #22c55e |
| Pink | `.theme-pink` | #ec4899 |

## CSS Custom Properties
| Property | Default | Description |
|----------|---------|-------------|
| `--mkt-duration` | `0.5s` | Animation duration |
| `--mkt-ease` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Easing function |
| `--delay` | `0.05s` | Per-item delay (set in HTML) |

## Acceptance Criteria
- ✅ Pure CSS implementation (no JavaScript required)
- ✅ Horizontal roll animation effect
- ✅ Marketing Landing Page styling
- ✅ Multiple animation variants
- ✅ Multiple color themes
- ✅ Newsletter structure
- ✅ Keyboard accessible with focus states
- ✅ ARIA attributes for screen readers
- ✅ CSS custom properties for customization
- ✅ Reduced motion support
- ✅ README.md with complete documentation
