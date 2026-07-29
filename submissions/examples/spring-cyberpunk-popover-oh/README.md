# Spring Physics Cyberpunk Neon Popover

## What does this do?
A pure CSS animated popover with spring physics animation, designed for Cyberpunk Neon layouts with neon glow effects, scan lines, and futuristic UI.

## How is it used?
```html
<div class="popover-container">
  <button class="cyber-btn" aria-label="Launch system">
    <span class="cyber-icon">
      <svg>...</svg>
    </span>
    <span>Launch</span>
    <span class="cyber-line"></span>
  </button>
  <div class="spring-popover" role="tooltip">
    <div class="spring-glow"></div>
    <div class="spring-header">
      <span class="spring-status">ONLINE</span>
      <span class="spring-signal">
        <span></span><span></span><span></span><span></span>
      </span>
    </div>
    <div class="spring-items">
      <div class="spring-item" style="--delay: 0s">
        <span class="item-icon">
          <svg>...</svg>
        </span>
        <span>Systems Active</span>
      </div>
      <div class="spring-item" style="--delay: 0.05s">
        <span class="item-icon">
          <svg>...</svg>
        </span>
        <span>Security Level: MAX</span>
      </div>
      <div class="spring-item" style="--delay: 0.1s">
        <span class="item-icon">
          <svg>...</svg>
        </span>
        <span>Latency: 0.02ms</span>
      </div>
    </div>
    <div class="spring-footer">
      <button class="cyber-cta">Initialize</button>
    </div>
  </div>
</div>
```

## Why is it useful?
- **Spring physics animation** with neon reveals
- **Cyberpunk Neon optimized** with neon glow and futuristic UI
- **Multiple animation variants** (snap, jolt, rebound) for different UX needs
- **Theme options** (cyan, magenta, lime) to match neon aesthetics
- **Futuristic ready** structure with status indicators and CTAs
- **Accessibility features** including ARIA labels and keyboard focus states

## Animation Variants
| Class | Effect |
|-------|--------|
| `.snap` | Snap horizontal spring |
| `.jolt` | Jolt scale spring |
| `.rebound` | Rebound vertical spring |

## Color Themes
| Theme | Class | Primary Color |
|-------|-------|--------------|
| Cyan | `.theme-cyan` | #00fff9 (default) |
| Magenta | `.theme-magenta` | #ff00ff |
| Lime | `.theme-lime` | #39ff14 |

## CSS Custom Properties
| Property | Default | Description |
|----------|---------|-------------|
| `--spring-duration` | `0.6s` | Animation duration |
| `--spring-ease` | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` | Spring easing function |
| `--delay` | `0.05s` | Per-item delay (set in HTML) |

## Acceptance Criteria
- ✅ Pure CSS implementation (no JavaScript required)
- ✅ Spring physics animation effect
- ✅ Cyberpunk Neon styling
- ✅ Multiple animation variants
- ✅ Multiple color themes
- ✅ Futuristic UI structure
- ✅ Keyboard accessible with focus states
- ✅ ARIA attributes for screen readers
- ✅ CSS custom properties for customization
- ✅ Reduced motion support
- ✅ README.md with complete documentation
