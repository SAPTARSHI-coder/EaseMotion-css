# Zoom-Out Neumorphic Soft Popover

## What does this do?
A pure CSS animated popover with zoom-out animation, designed for Neumorphic Soft layouts with soft shadows, subtle gradients, and profile navigation.

## How is it used?
```html
<div class="popover-container">
  <button class="neu-btn" aria-label="Profile">
    <svg>...</svg>
  </button>
  <div class="zoom-popover" role="tooltip">
    <div class="zoom-profile">
      <div class="profile-avatar">
        <svg>...</svg>
      </div>
      <div class="profile-info">
        <h4>Sarah Chen</h4>
        <p>Senior Designer</p>
      </div>
    </div>
    <div class="zoom-items">
      <a href="#" class="zoom-item" style="--delay: 0s">
        <span class="item-icon">
          <svg>...</svg>
        </span>
        <span>Home</span>
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
- **Zoom-out animation** with soft neumorphic reveals
- **Neumorphic Soft optimized** with soft shadows and subtle gradients
- **Multiple animation variants** (pop, soft, rise) for different UX needs
- **Theme options** (indigo, violet, blue) to match neumorphic aesthetic
- **Profile ready** structure with avatar and navigation
- **Accessibility features** including ARIA labels and keyboard focus states

## Animation Variants
| Class | Effect |
|-------|--------|
| `.pop` | Pop bounce zoom |
| `.soft` | Soft blur zoom |
| `.rise` | Rise translate zoom |

## Color Themes
| Theme | Class | Primary Color |
|-------|-------|--------------|
| Indigo | `.theme-indigo` | #6366f1 (default) |
| Violet | `.theme-violet` | #8b5cf6 |
| Blue | `.theme-blue` | #3b82f6 |

## CSS Custom Properties
| Property | Default | Description |
|----------|---------|-------------|
| `--zoom-duration` | `0.5s` | Animation duration |
| `--zoom-ease` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Easing function |
| `--delay` | `0.05s` | Per-item delay (set in HTML) |

## Acceptance Criteria
- ✅ Pure CSS implementation (no JavaScript required)
- ✅ Zoom-out animation effect
- ✅ Neumorphic Soft styling
- ✅ Multiple animation variants
- ✅ Multiple color themes
- ✅ Profile structure
- ✅ Keyboard accessible with focus states
- ✅ ARIA attributes for screen readers
- ✅ CSS custom properties for customization
- ✅ Reduced motion support
- ✅ README.md with complete documentation
