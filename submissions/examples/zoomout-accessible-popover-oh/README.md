# Zoom-Out Accessible Web Popover

## What does this do?
A pure CSS animated popover with zoom-out animation, designed for Accessible Web layouts with accessibility settings, toggle options, and WCAG-compliant design.

## How is it used?
```html
<div class="popover-container">
  <button class="access-btn" aria-label="Accessibility options">
    <svg>...</svg>
  </button>
  <div class="zoom-popover" role="tooltip" id="access-menu">
    <div class="zoom-header">
      <h4>Accessibility</h4>
    </div>
    <div class="zoom-options">
      <label class="zoom-option" style="--delay: 0s">
        <span class="option-toggle" aria-hidden="true"></span>
        <span class="option-text">
          <span class="option-title">High Contrast</span>
          <span class="option-desc">Increase color contrast</span>
        </span>
      </label>
      <label class="zoom-option" style="--delay: 0.05s">
        <span class="option-toggle" aria-hidden="true"></span>
        <span class="option-text">
          <span class="option-title">Large Text</span>
          <span class="option-desc">Increase font size</span>
        </span>
      </label>
      <label class="zoom-option" style="--delay: 0.1s">
        <span class="option-toggle" aria-hidden="true"></span>
        <span class="option-text">
          <span class="option-title">Reduced Motion</span>
          <span class="option-desc">Minimize animations</span>
        </span>
      </label>
      <label class="zoom-option" style="--delay: 0.15s">
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
- **Zoom-out animation** with accessible reveals
- **Accessible Web optimized** with accessibility settings and toggles
- **Multiple animation variants** (zoom, grow, expand) for different UX needs
- **Theme options** (blue, green, orange) to match accessible design
- **WCAG compliant** structure with toggle switches
- **Full accessibility** including ARIA labels and keyboard navigation

## Animation Variants
| Class | Effect |
|-------|--------|
| `.zoom` | Scale zoom animation |
| `.grow` | Blur grow zoom |
| `.expand` | ScaleY expand zoom |

## Color Themes
| Theme | Class | Primary Color |
|-------|-------|--------------|
| Blue | `.theme-blue` | #2563eb (default) |
| Green | `.theme-green` | #16a34a |
| Orange | `.theme-orange` | #ea580c |

## CSS Custom Properties
| Property | Default | Description |
|----------|---------|-------------|
| `--zoom-duration` | `0.5s` | Animation duration |
| `--zoom-ease` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Easing function |
| `--delay` | `0.05s` | Per-item delay (set in HTML) |

## Acceptance Criteria
- ✅ Pure CSS implementation (no JavaScript required)
- ✅ Zoom-out animation effect
- ✅ Accessible Web styling
- ✅ Multiple animation variants
- ✅ Multiple color themes
- ✅ Accessibility settings structure
- ✅ Full keyboard accessibility
- ✅ ARIA attributes for screen readers
- ✅ CSS custom properties for customization
- ✅ Reduced motion support
- ✅ README.md with complete documentation
