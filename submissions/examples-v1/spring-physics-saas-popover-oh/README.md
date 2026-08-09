# Spring Physics SaaS Popover

## What does this do?
A pure CSS animated popover with smooth spring physics bounce effect, designed for SaaS Showcase interfaces with feature lists and call-to-action buttons.

## How is it used?
```html
<div class="popover-container">
  <button class="spring-btn">
    <span class="btn-content">
      <svg>...</svg>
      Discover Features
    </span>
  </button>
  <div class="spring-popover" role="tooltip">
    <div class="spring-glow"></div>
    <div class="spring-header">
      <div class="spring-icon">
        <svg>...</svg>
      </div>
      <h4>Powerful Features</h4>
    </div>
    <div class="spring-features">
      <div class="feature-item">
        <span class="feature-dot"></span>
        <span>Lightning fast performance</span>
      </div>
    </div>
    <div class="spring-footer">
      <button class="spring-cta">Get Started Now</button>
    </div>
  </div>
</div>
```

## Why is it useful?
- **Spring physics animation** with realistic bounce and overshoot
- **SaaS Showcase optimized** with feature list and CTA
- **Multiple animation variants** (light, heavy, elastic) for different UX needs
- **Theme options** (fuchsia, sky, lime) to match brand identity
- **Playful yet professional** bouncy feel that draws attention
- **Accessibility features** including ARIA labels and keyboard focus states

## Animation Variants
| Class | Effect |
|-------|--------|
| `.light` | Subtle spring bounce |
| `.heavy` | Strong spring effect |
| `.elastic` | Elastic overshoot |

## Color Themes
| Theme | Class | Primary Color |
|-------|-------|--------------|
| Fuchsia | `.theme-fuchsia` | #d946ef (default) |
| Sky | `.theme-sky` | #0ea5e9 |
| Lime | `.theme-lime` | #84cc16 |

## CSS Custom Properties
| Property | Default | Description |
|----------|---------|-------------|
| `--spring-duration` | `0.6s` | Animation duration |
| `--spring-bounce` | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` | Bounce easing |
| `--spring-duration-loop` | `2s` | Loop duration |

## Acceptance Criteria
- ✅ Pure CSS implementation (no JavaScript required)
- ✅ Spring physics animation effect
- ✅ SaaS Showcase styling
- ✅ Multiple animation variants
- ✅ Multiple color themes
- ✅ Feature-ready structure
- ✅ Keyboard accessible with focus states
- ✅ ARIA attributes for screen readers
- ✅ CSS custom properties for customization
- ✅ Reduced motion support
- ✅ README.md with complete documentation
