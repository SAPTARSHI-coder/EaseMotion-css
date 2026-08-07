# Zoom-Out Creative Portfolio Popover

## What does this do?
A pure CSS animated popover with zoom-out animation, designed for Creative Portfolio layouts with project previews, tags, and creative CTAs.

## How is it used?
```html
<div class="popover-container">
  <button class="creative-btn" aria-label="View project">
    <svg>...</svg>
    View Project
  </button>
  <div class="zoom-popover" role="tooltip">
    <div class="zoom-header">
      <span class="zoom-tag">Featured</span>
      <span class="zoom-category">Web Design</span>
    </div>
    <div class="zoom-preview">
      <div class="preview-img">
        <svg>...</svg>
      </div>
    </div>
    <div class="zoom-content">
      <h4>Brand Identity Design</h4>
      <p>Modern brand identity for tech startup</p>
    </div>
    <div class="zoom-tags">
      <span>Figma</span>
      <span>Branding</span>
      <span>UI/UX</span>
    </div>
    <div class="zoom-footer">
      <button class="creative-cta">View Details</button>
    </div>
  </div>
</div>
```

## Why is it useful?
- **Zoom-out animation** with creative reveals
- **Creative Portfolio optimized** with project previews and tags
- **Multiple animation variants** (scale, blur, fade) for different UX needs
- **Theme options** (purple, orange, pink) to match creative branding
- **Portfolio ready** structure with preview and CTA
- **Accessibility features** including ARIA labels and keyboard focus states

## Animation Variants
| Class | Effect |
|-------|--------|
| `.scale` | Scale bounce zoom |
| `.blur` | Blur reveal zoom |
| `.fade` | Fade scale zoom |

## Color Themes
| Theme | Class | Primary Color |
|-------|-------|--------------|
| Purple | `.theme-purple` | #7c3aed (default) |
| Orange | `.theme-orange` | #ea580c |
| Pink | `.theme-pink` | #db2777 |

## CSS Custom Properties
| Property | Default | Description |
|----------|---------|-------------|
| `--zoom-duration` | `0.5s` | Animation duration |
| `--zoom-ease` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Easing function |

## Acceptance Criteria
- ✅ Pure CSS implementation (no JavaScript required)
- ✅ Zoom-out animation effect
- ✅ Creative Portfolio styling
- ✅ Multiple animation variants
- ✅ Multiple color themes
- ✅ Project preview structure
- ✅ Keyboard accessible with focus states
- ✅ ARIA attributes for screen readers
- ✅ CSS custom properties for customization
- ✅ Reduced motion support
- ✅ README.md with complete documentation
