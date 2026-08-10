# Magnetic Pull Marketing Landing Page Popover

## What does this do?
A pure CSS animated popover with smooth magnetic pull attraction effect, designed for Marketing Landing Pages with high-converting CTAs, benefit lists, and trust signals.

## How is it used?
```html
<div class="popover-container">
  <button class="mktg-cta-btn">
    <span class="cta-text">Get Started Free</span>
    <span class="cta-arrow">...</span>
  </button>
  <div class="mktg-popover" role="tooltip">
    <div class="mktg-glow"></div>
    <div class="mktg-header">
      <div class="mktg-icon">...</div>
      <div class="mktg-title">
        <h4>Start Your Journey</h4>
        <p>Join 10,000+ users</p>
      </div>
    </div>
    <div class="mktg-benefits">
      <div class="mktg-benefit">
        <svg>...</svg>
        <span>No credit card required</span>
      </div>
    </div>
    <div class="mktg-footer">
      <button class="mktg-action-btn">Create Free Account</button>
      <p class="mktg-trust">Trusted by 10,000+ teams</p>
    </div>
  </div>
</div>
```

## Why is it useful?
- **Magnetic attraction effect** draws attention to conversion-focused CTAs
- **Marketing optimized** with benefits list, trust signals, and social proof
- **Multiple animation variants** (dramatic, subtle, wobble) for different UX needs
- **Theme options** (purple, blue, pink) to match brand identity
- **High-converting structure** with icon header, benefits, and prominent CTA button
- **Accessibility features** including ARIA labels and keyboard focus states

## Animation Variants
| Class | Effect |
|-------|--------|
| `.dramatic` | Strong magnetic pull with overshoot |
| `.subtle` | Gentle floating motion |
| `.wobble` | Rotating wobble attraction |

## Color Themes
| Theme | Class | Primary Color |
|-------|-------|--------------|
| Purple | `.theme-purple` | #8b5cf6 (default) |
| Blue | `.theme-blue` | #3b82f6 |
| Pink | `.theme-pink` | #ec4899 |

## CSS Custom Properties
| Property | Default | Description |
|----------|---------|-------------|
| `--mktg-duration` | `0.5s` | Animation duration |
| `--mktg-easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Easing function |
| `--mktg-float-duration` | `2s` | Float loop duration |

## Acceptance Criteria
- ✅ Pure CSS implementation (no JavaScript required)
- ✅ Magnetic pull animation effect
- ✅ Marketing landing page styling
- ✅ Multiple animation variants
- ✅ Multiple color themes
- ✅ Conversion-focused structure
- ✅ Keyboard accessible with focus states
- ✅ ARIA attributes for screen readers
- ✅ CSS custom properties for customization
- ✅ Reduced motion support
- ✅ README.md with complete documentation
