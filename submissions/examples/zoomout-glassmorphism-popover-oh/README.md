# Zoom-Out Glassmorphism UI Popover

## What does this do?
A pure CSS animated popover with zoom-out animation, designed for Glassmorphism UI layouts with blur effects, frosted glass styling, and profile navigation.

## How is it used?
```html
<div class="popover-container">
  <button class="glass-btn" aria-label="Profile">
    <svg>...</svg>
  </button>
  <div class="zoom-popover" role="tooltip">
    <div class="zoom-profile">
      <div class="profile-avatar">
        <svg>...</svg>
      </div>
      <div class="profile-info">
        <h4>Alex Morgan</h4>
        <p>Product Designer</p>
      </div>
    </div>
    <div class="zoom-items">
      <a href="#" class="zoom-item" style="--delay: 0s">
        <span class="item-icon">
          <svg>...</svg>
        </span>
        <span>Dashboard</span>
      </a>
      <a href="#" class="zoom-item" style="--delay: 0.05s">
        <span class="item-icon">
          <svg>...</svg>
        </span>
        <span>Profile</span>
      </a>
      <a href="#" class="zoom-item" style="--delay: 0.1s">
        <span class="item-icon">
          <svg>...</svg>
        </span>
        <span>Settings</span>
      </a>
    </div>
    <div class="zoom-footer">
      <a href="#" class="zoom-logout">
        <svg>...</svg>
        Logout
      </a>
    </div>
  </div>
</div>
```

## Why is it useful?
- **Zoom-out animation** with frosted glass reveals
- **Glassmorphism UI optimized** with blur effects and frosted glass
- **Multiple animation variants** (blur, frost, shine) for different UX needs
- **Theme options** (violet, blue, pink) to match glassmorphism aesthetics
- **Profile ready** structure with avatar and navigation
- **Accessibility features** including ARIA labels and keyboard focus states

## Animation Variants
| Class | Effect |
|-------|--------|
| `.blur` | Blur filter zoom |
| `.frost` | Backdrop filter frost zoom |
| `.shine` | Clip-path shine zoom |

## Color Themes
| Theme | Class | Primary Color |
|-------|-------|--------------|
| Violet | `.theme-violet` | #8b5cf6 (default) |
| Blue | `.theme-blue` | #3b82f6 |
| Pink | `.theme-pink` | #ec4899 |

## CSS Custom Properties
| Property | Default | Description |
|----------|---------|-------------|
| `--zoom-duration` | `0.5s` | Animation duration |
| `--zoom-ease` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Easing function |
| `--delay` | `0.05s` | Per-item delay (set in HTML) |

## Acceptance Criteria
- ✅ Pure CSS implementation (no JavaScript required)
- ✅ Zoom-out animation effect
- ✅ Glassmorphism UI styling
- ✅ Multiple animation variants
- ✅ Multiple color themes
- ✅ Profile structure
- ✅ Keyboard accessible with focus states
- ✅ ARIA attributes for screen readers
- ✅ CSS custom properties for customization
- ✅ Reduced motion support
- ✅ README.md with complete documentation
