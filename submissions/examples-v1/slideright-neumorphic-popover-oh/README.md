# Slide-Right Neumorphic Soft Popover

## What does this do?
A pure CSS animated popover with slide-right animation, designed for Neumorphic Soft layouts with soft shadows, subtle transitions, and neumorphic styling.

## How is it used?
```html
<div class="popover-container">
  <button class="neu-btn" aria-label="More options">
    <svg>...</svg>
  </button>
  <div class="slide-popover" role="tooltip">
    <div class="slide-header">
      <h4>Options</h4>
    </div>
    <div class="slide-actions">
      <button class="slide-action" style="--delay: 0s">
        <span class="action-icon">
          <svg>...</svg>
        </span>
        <span>Home</span>
      </button>
      <button class="slide-action" style="--delay: 0.05s">
        <span class="action-icon">
          <svg>...</svg>
        </span>
        <span>Search</span>
      </button>
      <button class="slide-action" style="--delay: 0.1s">
        <span class="action-icon">
          <svg>...</svg>
        </span>
        <span>Profile</span>
      </button>
      <button class="slide-action" style="--delay: 0.15s">
        <span class="action-icon">
          <svg>...</svg>
        </span>
        <span>Settings</span>
      </button>
    </div>
  </div>
</div>
```

## Why is it useful?
- **Slide-right animation** with soft reveals
- **Neumorphic Soft optimized** with soft shadows and subtle transitions
- **Multiple animation variants** (slide, swipe, sweep) for different UX needs
- **Theme options** (blue, purple, pink) to match neumorphic aesthetics
- **Soft UI ready** structure with navigation options
- **Accessibility features** including ARIA labels and keyboard focus states

## Animation Variants
| Class | Effect |
|-------|--------|
| `.slide` | Slide horizontal animation |
| `.swipe` | Swipe skew animation |
| `.sweep` | Sweep blur animation |

## Color Themes
| Theme | Class | Primary Color |
|-------|-------|--------------|
| Blue | `.theme-blue` | #4299e1 |
| Purple | `.theme-purple` | #9f7aea |
| Pink | `.theme-pink` | #ed64a6 |

## CSS Custom Properties
| Property | Default | Description |
|----------|---------|-------------|
| `--slide-duration` | `0.5s` | Animation duration |
| `--slide-ease` | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` | Easing function |
| `--delay` | `0.05s` | Per-item delay (set in HTML) |

## Acceptance Criteria
- ✅ Pure CSS implementation (no JavaScript required)
- ✅ Slide-right animation effect
- ✅ Neumorphic Soft styling
- ✅ Multiple animation variants
- ✅ Multiple color themes
- ✅ Soft UI structure
- ✅ Keyboard accessible with focus states
- ✅ ARIA attributes for screen readers
- ✅ CSS custom properties for customization
- ✅ Reduced motion support
- ✅ README.md with complete documentation
