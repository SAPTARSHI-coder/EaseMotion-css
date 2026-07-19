# Horizontal Roll Glassmorphism UI Popover

## What does this do?
A pure CSS animated popover with horizontal roll-in animation, designed for Glassmorphism UI layouts with glass blur effects, gradient backgrounds, and frosted glass styling.

## How is it used?
```html
<div class="popover-container">
  <button class="glass-btn" aria-label="View profile">
    <div class="glass-avatar">
      <svg>...</svg>
    </div>
  </button>
  <div class="roll-popover" role="tooltip">
    <div class="roll-blur"></div>
    <div class="roll-profile">
      <div class="profile-avatar">
        <svg>...</svg>
      </div>
      <div class="profile-info">
        <h4>Sarah Chen</h4>
        <span>Product Designer</span>
      </div>
    </div>
    <div class="roll-items">
      <div class="roll-item" style="--delay: 0.05s">
        <span class="roll-icon">
          <svg>...</svg>
        </span>
        <span>My Profile</span>
      </div>
      <div class="roll-item" style="--delay: 0.1s">
        <span class="roll-icon">
          <svg>...</svg>
        </span>
        <span>Settings</span>
      </div>
      <div class="roll-item" style="--delay: 0.15s">
        <span class="roll-icon">
          <svg>...</svg>
        </span>
        <span>Logout</span>
      </div>
    </div>
  </div>
</div>
```

## Why is it useful?
- **Horizontal roll animation** with glass blur effects
- **Glassmorphism UI optimized** with frosted glass and gradients
- **Multiple animation variants** (blur, shine, frost) for different UX needs
- **Theme options** (violet, blue, pink) to match glass aesthetics
- **Profile ready** structure with avatar and navigation
- **Accessibility features** including ARIA labels and keyboard focus states

## Animation Variants
| Class | Effect |
|-------|--------|
| `.blur` | Blur reveal roll |
| `.shine` | Shine highlight roll |
| `.frost` | Frost scale roll |

## Color Themes
| Theme | Class | Primary Color |
|-------|-------|--------------|
| Violet | `.theme-violet` | #8b5cf6 (default) |
| Blue | `.theme-blue` | #3b82f6 |
| Pink | `.theme-pink` | #ec4899 |

## CSS Custom Properties
| Property | Default | Description |
|----------|---------|-------------|
| `--glass-duration` | `0.5s` | Animation duration |
| `--glass-ease` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Easing function |
| `--delay` | `0.05s` | Per-item delay (set in HTML) |

## Acceptance Criteria
- ✅ Pure CSS implementation (no JavaScript required)
- ✅ Horizontal roll animation effect
- ✅ Glassmorphism UI styling
- ✅ Multiple animation variants
- ✅ Multiple color themes
- ✅ Profile structure
- ✅ Keyboard accessible with focus states
- ✅ ARIA attributes for screen readers
- ✅ CSS custom properties for customization
- ✅ Reduced motion support
- ✅ README.md with complete documentation
