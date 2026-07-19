# Horizontal Roll Creative Portfolio Popover

## What does this do?
A pure CSS animated popover with horizontal roll-in animation, designed for Creative Portfolio layouts with designer profiles, skills, and contact CTAs.

## How is it used?
```html
<div class="popover-container">
  <button class="portfolio-btn" aria-label="View portfolio">
    <div class="portfolio-avatar">
      <svg>...</svg>
    </div>
    <span class="portfolio-name">Alex Design</span>
  </button>
  <div class="roll-popover" role="tooltip">
    <div class="roll-header">
      <span class="roll-tag">Featured</span>
      <span class="roll-badge">Top Rated</span>
    </div>
    <div class="roll-items">
      <div class="roll-item" style="--delay: 0s">
        <span class="roll-dot"></span>
        <span>Brand Identity</span>
      </div>
      <div class="roll-item" style="--delay: 0.05s">
        <span class="roll-dot"></span>
        <span>UI/UX Design</span>
      </div>
      <div class="roll-item" style="--delay: 0.1s">
        <span class="roll-dot"></span>
        <span>Print Design</span>
      </div>
    </div>
    <div class="roll-footer">
      <button class="roll-btn">View Profile</button>
    </div>
  </div>
</div>
```

## Why is it useful?
- **Horizontal roll animation** with elegant left-to-right reveal
- **Creative Portfolio optimized** with dark theme and gold accents
- **Multiple animation variants** (slide, accordion, twist) for different UX needs
- **Theme options** (gold, violet, coral) to match portfolio branding
- **Designer profile ready** structure with skills and contact CTA
- **Accessibility features** including ARIA labels and keyboard focus states

## Animation Variants
| Class | Effect |
|-------|--------|
| `.slide` | Slide roll from left |
| `.accordion` | Accordion expand roll |
| `.twist` | Twist rotate roll |

## Color Themes
| Theme | Class | Primary Color |
|-------|-------|--------------|
| Gold | `.theme-gold` | #d4af37 (default) |
| Violet | `.theme-violet` | #9b59b6 |
| Coral | `.theme-coral` | #ff6b6b |

## CSS Custom Properties
| Property | Default | Description |
|----------|---------|-------------|
| `--port-duration` | `0.5s` | Animation duration |
| `--port-ease` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Easing function |
| `--delay` | `0.05s` | Per-item delay (set in HTML) |

## Acceptance Criteria
- ✅ Pure CSS implementation (no JavaScript required)
- ✅ Horizontal roll animation effect
- ✅ Creative Portfolio styling
- ✅ Multiple animation variants
- ✅ Multiple color themes
- ✅ Designer profile structure
- ✅ Keyboard accessible with focus states
- ✅ ARIA attributes for screen readers
- ✅ CSS custom properties for customization
- ✅ Reduced motion support
- ✅ README.md with complete documentation
