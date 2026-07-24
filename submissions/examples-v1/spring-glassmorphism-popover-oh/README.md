# Spring Physics Glassmorphism UI Popover

## What does this do?
A pure CSS animated popover with spring physics animation, designed for Glassmorphism UI layouts with blur effects, frosted glass styling, and profile navigation.

## How is it used?
```html
<div class="popover-container">
  <button class="glass-btn" aria-label="Profile">
    <svg>...</svg>
  </button>
  <div class="spring-popover" role="tooltip">
    <div class="spring-profile">
      <div class="profile-avatar">
        <svg>...</svg>
      </div>
      <div class="profile-info">
        <h4>Alex Morgan</h4>
        <p>Product Designer</p>
      </div>
    </div>
    <div class="spring-items">
      <a href="#" class="spring-item" style="--delay: 0s">
        <span class="item-icon">
          <svg>...</svg>
        </span>
        <span>Dashboard</span>
      </a>
      <a href="#" class="spring-item" style="--delay: 0.05s">
        <span class="item-icon">
          <svg>...</svg>
        </span>
        <span>Profile</span>
      </a>
      <a href="#" class="spring-item" style="--delay: 0.1s">
        <span class="item-icon">
          <svg>...</svg>
        </span>
        <span>Settings</span>
      </a>
    </div>
    <div class="spring-footer">
      <a href="#" class="spring-logout">
        <svg>...</svg>
        Logout
      </a>
    </div>
  </div>
</div>
```

## Why is it useful?
- **Spring physics animation** with elastic reveals
- **Glassmorphism UI optimized** with blur effects and frosted glass
- **Multiple animation variants** (bounce, wobble, elastic) for different UX needs
- **Theme options** (violet, blue, pink) to match glassmorphism aesthetics
- **Profile ready** structure with avatar and navigation
- **Accessibility features** including ARIA labels and keyboard focus states

## Animation Variants
| Class | Effect |
|-------|--------|
| `.bounce` | Bounce scale spring |
| `.wobble` | Wobble item animation |
| `.elastic` | Elastic reveal spring |

## Color Themes
| Theme | Class | Primary Color |
|-------|-------|--------------|
| Violet | `.theme-violet` | #8b5cf6 (default) |
| Blue | `.theme-blue` | #3b82f6 |
| Pink | `.theme-pink` | #ec4899 |

## CSS Custom Properties
| Property | Default | Description |
|----------|---------|-------------|
| `--spring-duration` | `0.6s` | Animation duration |
| `--spring-ease` | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` | Spring easing function |
| `--delay` | `0.05s` | Per-item delay (set in HTML) |

## Acceptance Criteria
- ✅ Pure CSS implementation (no JavaScript required)
- ✅ Spring physics animation effect
- ✅ Glassmorphism UI styling
- ✅ Multiple animation variants
- ✅ Multiple color themes
- ✅ Profile structure
- ✅ Keyboard accessible with focus states
- ✅ ARIA attributes for screen readers
- ✅ CSS custom properties for customization
- ✅ Reduced motion support
- ✅ README.md with complete documentation
