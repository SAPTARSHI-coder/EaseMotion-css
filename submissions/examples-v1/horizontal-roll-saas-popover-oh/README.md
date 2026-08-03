# Horizontal Roll SaaS Showcase Popover

## What does this do?
A pure CSS animated popover with horizontal roll-in animation, designed for SaaS Showcase layouts with pricing plans, checkmarks, and professional CTA.

## How is it used?
```html
<div class="popover-container">
  <button class="saas-btn" aria-label="Get started">
    <svg>...</svg>
    Get Started
  </button>
  <div class="roll-popover" role="tooltip">
    <div class="roll-header">
      <h4>Choose Plan</h4>
      <span class="roll-popular">Most Popular</span>
    </div>
    <div class="roll-items">
      <div class="roll-item" style="--delay: 0s">
        <div class="item-content">
          <span class="item-title">Starter</span>
          <span class="item-price">Free</span>
        </div>
        <span class="item-check">
          <svg>...</svg>
        </span>
      </div>
      <div class="roll-item active" style="--delay: 0.06s">
        <div class="item-content">
          <span class="item-title">Professional</span>
          <span class="item-price">$29/mo</span>
        </div>
        <span class="item-check">
          <svg>...</svg>
        </span>
      </div>
      <div class="roll-item" style="--delay: 0.12s">
        <div class="item-content">
          <span class="item-title">Enterprise</span>
          <span class="item-price">Custom</span>
        </div>
        <span class="item-check">
          <svg>...</svg>
        </span>
      </div>
    </div>
    <div class="roll-footer">
      <button class="saas-cta">Continue</button>
    </div>
  </div>
</div>
```

## Why is it useful?
- **Horizontal roll animation** with professional reveals
- **SaaS Showcase optimized** with pricing plans and CTAs
- **Multiple animation variants** (stream, flow, chase) for different UX needs
- **Theme options** (violet, indigo, blue) to match SaaS branding
- **Pricing ready** structure with plans and continue CTA
- **Accessibility features** including ARIA labels and keyboard focus states

## Animation Variants
| Class | Effect |
|-------|--------|
| `.stream` | Stream slide roll |
| `.flow` | Flow fade roll |
| `.chase` | Chase delay roll |

## Color Themes
| Theme | Class | Primary Color |
|-------|-------|--------------|
| Violet | `.theme-violet` | #7c3aed (default) |
| Indigo | `.theme-indigo` | #4f46e5 |
| Blue | `.theme-blue` | #2563eb |

## CSS Custom Properties
| Property | Default | Description |
|----------|---------|-------------|
| `--saas-duration` | `0.5s` | Animation duration |
| `--saas-ease` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Easing function |
| `--delay` | `0.06s` | Per-item delay (set in HTML) |

## Acceptance Criteria
- ✅ Pure CSS implementation (no JavaScript required)
- ✅ Horizontal roll animation effect
- ✅ SaaS Showcase styling
- ✅ Multiple animation variants
- ✅ Multiple color themes
- ✅ Pricing structure
- ✅ Keyboard accessible with focus states
- ✅ ARIA attributes for screen readers
- ✅ CSS custom properties for customization
- ✅ Reduced motion support
- ✅ README.md with complete documentation
