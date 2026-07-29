# Staggered Entrance Cyberpunk Neon Popover

## What does this do?
A pure CSS animated popover with staggered entrance animation, designed for Cyberpunk Neon layouts with neon glow effects, scan lines, and futuristic UI.

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
  <div class="stagger-popover" role="tooltip">
    <div class="stagger-glow"></div>
    <div class="stagger-header">
      <span class="stagger-status">ONLINE</span>
      <span class="stagger-signal">
        <span></span><span></span><span></span><span></span>
      </span>
    </div>
    <div class="stagger-items">
      <div class="stagger-item" style="--delay: 0.05s">
        <span class="item-icon">
          <svg>...</svg>
        </span>
        <span>Systems Active</span>
      </div>
      <div class="stagger-item" style="--delay: 0.1s">
        <span class="item-icon">
          <svg>...</svg>
        </span>
        <span>Security Level: MAX</span>
      </div>
      <div class="stagger-item" style="--delay: 0.15s">
        <span class="item-icon">
          <svg>...</svg>
        </span>
        <span>Latency: 0.02ms</span>
      </div>
    </div>
    <div class="stagger-footer">
      <button class="cyber-cta">Initialize</button>
    </div>
  </div>
</div>
```

## Why is it useful?
- **Staggered animation** with cyberpunk-style reveals
- **Cyberpunk Neon optimized** with neon glow and futuristic UI
- **Multiple animation variants** (pulse, glow, scan) for different UX needs
- **Theme options** (cyan, magenta, lime) to match neon aesthetics
- **Futuristic ready** structure with status indicators and CTAs
- **Accessibility features** including ARIA labels and keyboard focus states

## Animation Variants
| Class | Effect |
|-------|--------|
| `.pulse` | Pulse scale stagger |
| `.glow` | Glow reveal stagger |
| `.scan` | Clip-path scan stagger |

## Color Themes
| Theme | Class | Primary Color |
|-------|-------|--------------|
| Cyan | `.theme-cyan` | #00fff9 (default) |
| Magenta | `.theme-magenta` | #ff00ff |
| Lime | `.theme-lime` | #39ff14 |

## CSS Custom Properties
| Property | Default | Description |
|----------|---------|-------------|
| `--cyber-duration` | `0.5s` | Animation duration |
| `--cyber-ease` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Easing function |
| `--delay` | `0.05s` | Per-item delay (set in HTML) |

## Acceptance Criteria
- ✅ Pure CSS implementation (no JavaScript required)
- ✅ Staggered entrance animation effect
- ✅ Cyberpunk Neon styling
- ✅ Multiple animation variants
- ✅ Multiple color themes
- ✅ Futuristic UI structure
- ✅ Keyboard accessible with focus states
- ✅ ARIA attributes for screen readers
- ✅ CSS custom properties for customization
- ✅ Reduced motion support
- ✅ README.md with complete documentation
