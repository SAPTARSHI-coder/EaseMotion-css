# Slide-Right Accessible Web Popover

## What does this do?
A pure CSS animated popover with slide-right animation, designed for Accessible Web layouts with accessibility features, keyboard navigation, and screen reader support.

## How is it used?
```html
<div class="popover-container">
  <button class="access-btn" aria-label="More options" aria-haspopup="true">
    <svg>...</svg>
  </button>
  <div class="slide-popover" role="tooltip" aria-label="Quick options">
    <div class="slide-header">
      <span class="slide-icon" aria-hidden="true">
        <svg>...</svg>
      </span>
      <div class="slide-info">
        <h4 id="popover-title">Accessibility Options</h4>
        <p>Customize your experience</p>
      </div>
    </div>
    <div class="slide-actions" role="menu">
      <button class="slide-action" role="menuitem" style="--delay: 0s">
        <span class="action-icon" aria-hidden="true">
          <svg>...</svg>
        </span>
        <span>High Contrast</span>
      </button>
      <button class="slide-action" role="menuitem" style="--delay: 0.05s">
        <span class="action-icon" aria-hidden="true">
          <svg>...</svg>
        </span>
        <span>Screen Reader</span>
      </button>
      <button class="slide-action" role="menuitem" style="--delay: 0.1s">
        <span class="action-icon" aria-hidden="true">
          <svg>...</svg>
        </span>
        <span>Text Size</span>
      </button>
      <button class="slide-action" role="menuitem" style="--delay: 0.15s">
        <span class="action-icon" aria-hidden="true">
          <svg>...</svg>
        </span>
        <span>Reduce Motion</span>
      </button>
    </div>
  </div>
</div>
```

## Why is it useful?
- **Slide-right animation** with accessible reveals
- **Accessible Web optimized** with keyboard navigation and ARIA support
- **Multiple animation variants** (slide, swipe, sweep) for different UX needs
- **Theme options** (blue, teal, gray) with accessible contrast ratios
- **Accessibility ready** structure with high contrast and focus indicators
- **Screen reader support** with proper ARIA attributes

## Animation Variants
| Class | Effect |
|-------|--------|
| `.slide` | Slide horizontal animation |
| `.swipe` | Swipe skew animation |
| `.sweep` | Sweep blur animation |

## Color Themes
| Theme | Class | Primary Color |
|-------|-------|--------------|
| Blue | `.theme-blue` | #2563eb (default) |
| Teal | `.theme-teal` | #0d9488 |
| Gray | `.theme-gray` | #4b5563 |

## CSS Custom Properties
| Property | Default | Description |
|----------|---------|-------------|
| `--slide-duration` | `0.5s` | Animation duration |
| `--slide-ease` | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` | Easing function |
| `--delay` | `0.05s` | Per-item delay (set in HTML) |

## Accessibility Features
- ARIA labels on buttons and popover
- Role attributes for proper semantics
- Focus-visible outlines for keyboard users
- High contrast color options
- Screen reader friendly structure
- Reduced motion support

## Acceptance Criteria
- ✅ Pure CSS implementation (no JavaScript required)
- ✅ Slide-right animation effect
- ✅ Accessible Web styling
- ✅ Multiple animation variants
- ✅ Multiple color themes
- ✅ Keyboard accessible with focus states
- ✅ ARIA attributes for screen readers
- ✅ High contrast support
- ✅ CSS custom properties for customization
- ✅ Reduced motion support
- ✅ README.md with complete documentation
