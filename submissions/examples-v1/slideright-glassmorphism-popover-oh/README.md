# Slide-Right Glassmorphism UI Popover

## What does this do?
A pure CSS animated popover with slide-right animation, designed for Glassmorphism UI layouts with blur effects, frosted glass styling, and profile navigation.

## How is it used?
```html
<div class="popover-container">
  <button class="glass-btn" aria-label="Profile">
    <svg>...</svg>
  </button>
  <div class="slide-popover" role="tooltip">
    <div class="slide-profile">
      <div class="profile-avatar">
        <svg>...</svg>
      </div>
      <div class="profile-info">
        <h4>Alex Morgan</h4>
        <p>Product Designer</p>
      </div>
    </div>
    <div class="slide-items">
      <a href="#" class="slide-item" style="--delay: 0s">
        <span class="item-icon"><svg>...</svg></span>
        <span>Dashboard</span>
      </a>
      <a href="#" class="slide-item" style="--delay: 0.05s">
        <span class="item-icon"><svg>...</svg></span>
        <span>Profile</span>
      </a>
      <a href="#" class="slide-item" style="--delay: 0.1s">
        <span class="item-icon"><svg>...</svg></span>
        <span>Settings</span>
      </a>
    </div>
    <div class="slide-footer">
      <a href="#" class="slide-logout">
        <svg>...</svg>
        Logout
      </a>
    </div>
  </div>
</div>
```

## Why is it useful?
- **Slide-right animation** with frosted glass reveals
- **Glassmorphism UI optimized** with blur effects and frosted glass
- **Multiple animation variants** (slide, blur, sweep) for different UX needs
- **Theme options** (violet, blue, pink) to match glassmorphism aesthetics
- **Profile ready** structure with avatar and navigation
- **Accessibility features** including ARIA labels and keyboard focus states

## Animation Variants
| Class | Effect |
|-------|--------|
| `.slide` | Slide horizontal animation |
| `.blur` | Blur filter animation |
| `.sweep` | Sweep blur animation |

## Color Themes
| Theme | Class | Primary Color |
|-------|-------|--------------|
| Violet | `.theme-violet` | #8b5cf6 (default) |
| Blue | `.theme-blue` | #3b82f6 |
| Pink | `.theme-pink` | #ec4899 |

## CSS Custom Properties
| Property | Default | Description |
|----------|---------|-------------|
| `--slide-duration` | `0.5s` | Animation duration |
| `--slide-ease` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Easing function |
| `--delay` | `0.05s` | Per-item delay (set in HTML) |

## Acceptance Criteria
- ✅ Pure CSS implementation (no JavaScript required)
- ✅ Slide-right animation effect
- ✅ Glassmorphism UI styling
- ✅ Multiple animation variants
- ✅ Multiple color themes
- ✅ Profile structure
- ✅ Keyboard accessible with focus states
- ✅ ARIA attributes for screen readers
- ✅ CSS custom properties for customization
- ✅ Reduced motion support
- ✅ README.md with complete documentation
