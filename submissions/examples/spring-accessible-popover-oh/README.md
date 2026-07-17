# Spring Physics Accessible Web Popover

## What does this do?
A pure CSS animated popover with spring physics animation, designed for Accessible Web layouts with accessibility settings, toggle options, and WCAG-compliant design.

## How is it used?
```html
<div class="popover-container">
  <button class="access-btn" aria-label="Accessibility options">
    <svg>...</svg>
  </button>
  <div class="spring-popover" role="tooltip" id="access-menu">
    <div class="spring-header">
      <h4>Accessibility</h4>
    </div>
    <div class="spring-options">
      <label class="spring-option" style="--delay: 0s">
        <span class="option-toggle" aria-hidden="true"></span>
        <span class="option-text">
          <span class="option-title">High Contrast</span>
          <span class="option-desc">Increase color contrast</span>
        </span>
      </label>
      <label class="spring-option" style="--delay: 0.05s">
        <span class="option-toggle" aria-hidden="true"></span>
        <span class="option-text">
          <span class="option-title">Large Text</span>
          <span class="option-desc">Increase font size</span>
        </span>
      </label>
      <label class="spring-option" style="--delay: 0.1s">
        <span class="option-toggle" aria-hidden="true"></span>
        <span class="option-text">
          <span class="option-title">Reduced Motion</span>
          <span class="option-desc">Minimize animations</span>
        </span>
      </label>
      <label class="spring-option" style="--delay: 0.15s">
        <span class="option-toggle" aria-hidden="true"></span>
        <span class="option-text">
          <span class="option-title">Screen Reader</span>
          <span class="option-desc">Enhanced screen support</span>
        </span>
      </label>
    </div>
  </div>
</div>
```

## Why is it useful?
- **Spring physics animation** with accessible reveals
- **Accessible Web optimized** with accessibility settings and toggles
- **Multiple animation variants** (slide, fade, grow) for different UX needs
- **Theme options** (blue, green, orange) to match accessible design
- **WCAG compliant** structure with toggle switches
- **Full accessibility** including ARIA labels and keyboard navigation

## Animation Variants
| Class | Effect |
|-------|--------|
| `.slide` | Slide horizontal spring |
| `.fade` | Fade vertical spring |
| `.grow` | Grow scale spring |

## Color Themes
| Theme | Class | Primary Color |
|-------|-------|--------------|
| Blue | `.theme-blue` | #2563eb (default) |
| Green | `.theme-green` | #16a34a |
| Orange | `.theme-orange` | #ea580c |

## CSS Custom Properties
| Property | Default | Description |
|----------|---------|-------------|
| `--spring-duration` | `0.6s` | Animation duration |
| `--spring-ease` | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` | Spring easing function |
| `--delay` | `0.05s` | Per-item delay (set in HTML) |

## Acceptance Criteria
- ✅ Pure CSS implementation (no JavaScript required)
- ✅ Spring physics animation effect
- ✅ Accessible Web styling
- ✅ Multiple animation variants
- ✅ Multiple color themes
- ✅ Accessibility settings structure
- ✅ Full keyboard accessibility
- ✅ ARIA attributes for screen readers
- ✅ CSS custom properties for customization
- ✅ Reduced motion support
- ✅ README.md with complete documentation
