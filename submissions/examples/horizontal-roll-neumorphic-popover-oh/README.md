# Horizontal Roll Neumorphic Soft Popover

## What does this do?
A pure CSS animated popover with horizontal roll-in animation, designed for Neumorphic Soft layouts with soft shadows, concave/convex styling, and navigation items.

## How is it used?
```html
<div class="popover-container">
  <button class="soft-btn" aria-label="Menu">
    <svg>...</svg>
  </button>
  <div class="roll-popover" role="tooltip">
    <div class="roll-items">
      <div class="roll-item" style="--delay: 0s">
        <span class="roll-icon">
          <svg>...</svg>
        </span>
        <span>Home</span>
      </div>
      <div class="roll-item" style="--delay: 0.06s">
        <span class="roll-icon">
          <svg>...</svg>
        </span>
        <span>Projects</span>
      </div>
      <div class="roll-item" style="--delay: 0.12s">
        <span class="roll-icon">
          <svg>...</svg>
        </span>
        <span>Settings</span>
      </div>
      <div class="roll-item" style="--delay: 0.18s">
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
- **Horizontal roll animation** with soft sequential reveals
- **Neumorphic Soft optimized** with soft shadows and gentle transitions
- **Multiple animation variants** (curl, peel, flip) for different UX needs
- **Theme options** (lavender, peach, mint) to match soft aesthetic
- **Navigation ready** structure with icon items
- **Accessibility features** including ARIA labels and keyboard focus states

## Animation Variants
| Class | Effect |
|-------|--------|
| `.curl` | Curl rotate roll |
| `.peel` | Clip-path peel roll |
| `.flip` | 3D flip roll |

## Color Themes
| Theme | Class | Primary Color |
|-------|-------|--------------|
| Lavender | `.theme-lavender` | #9f7aea (default) |
| Peach | `.theme-peach` | #f6ad55 |
| Mint | `.theme-mint` | #68d391 |

## CSS Custom Properties
| Property | Default | Description |
|----------|---------|-------------|
| `--neu-duration` | `0.5s` | Animation duration |
| `--neu-ease` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Easing function |
| `--delay` | `0.06s` | Per-item delay (set in HTML) |

## Acceptance Criteria
- ✅ Pure CSS implementation (no JavaScript required)
- ✅ Horizontal roll animation effect
- ✅ Neumorphic Soft styling
- ✅ Multiple animation variants
- ✅ Multiple color themes
- ✅ Navigation-ready structure
- ✅ Keyboard accessible with focus states
- ✅ ARIA attributes for screen readers
- ✅ CSS custom properties for customization
- ✅ Reduced motion support
- ✅ README.md with complete documentation
