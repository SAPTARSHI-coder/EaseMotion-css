# Staggered Entrance Portfolio Popover

## What does this do?
A pure CSS animated popover with staggered entrance animation, designed for Creative Portfolio layouts with designer profiles, skills, and contact CTAs.

## How is it used?
```html
<div class="popover-container">
  <button class="portfolio-btn">
    <div class="portfolio-thumb">
      <svg>...</svg>
    </div>
    <span class="portfolio-label">View Work</span>
  </button>
  <div class="stagger-popover" role="tooltip">
    <div class="stagger-header">
      <div class="avatar">
        <svg>...</svg>
      </div>
      <div class="header-info">
        <h4>Alex Designer</h4>
        <span>Creative Director</span>
      </div>
    </div>
    <div class="stagger-items">
      <div class="stagger-item" style="--delay: 0.1s">
        <span class="item-dot"></span>
        <span>Brand Identity Design</span>
      </div>
    </div>
    <div class="stagger-footer">
      <button class="contact-btn">Get in Touch</button>
    </div>
  </div>
</div>
```

## Why is it useful?
- **Staggered animation** with elegant sequential reveals
- **Creative Portfolio optimized** with dark theme and gold accents
- **Multiple animation variants** (wave, flip, blur) for different UX needs
- **Theme options** (gold, purple, sage) to match portfolio branding
- **Designer profile ready** structure with avatar, skills, and contact CTA
- **Accessibility features** including ARIA labels and keyboard focus states

## Animation Variants
| Class | Effect |
|-------|--------|
| `.wave` | Wave slide stagger |
| `.flip` | 3D flip stagger |
| `.blur` | Blur reveal stagger |

## Color Themes
| Theme | Class | Primary Color |
|-------|-------|--------------|
| Gold | `.theme-gold` | #d4af37 (default) |
| Purple | `.theme-purple` | #9b59b6 |
| Sage | `.theme-sage` | #a8b5a0 |

## CSS Custom Properties
| Property | Default | Description |
|----------|---------|-------------|
| `--port-duration` | `0.5s` | Animation duration |
| `--port-ease` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Easing function |
| `--delay` | `0.1s` | Per-item delay (set in HTML) |

## Acceptance Criteria
- ✅ Pure CSS implementation (no JavaScript required)
- ✅ Staggered entrance animation effect
- ✅ Creative Portfolio styling
- ✅ Multiple animation variants
- ✅ Multiple color themes
- ✅ Designer profile structure
- ✅ Keyboard accessible with focus states
- ✅ ARIA attributes for screen readers
- ✅ CSS custom properties for customization
- ✅ Reduced motion support
- ✅ README.md with complete documentation
