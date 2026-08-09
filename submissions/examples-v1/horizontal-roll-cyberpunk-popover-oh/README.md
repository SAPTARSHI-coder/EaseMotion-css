# Horizontal Roll Cyberpunk Neon Popover

## What does this do?
A pure CSS animated popover with horizontal roll-in animation, designed for Cyberpunk Neon layouts with neon glow effects, scan lines, and futuristic UI.

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
  <div class="roll-popover" role="tooltip">
    <div class="roll-glow"></div>
    <div class="roll-header">
      <span class="roll-status">ONLINE</span>
      <span class="roll-signal">
        <span></span><span></span><span></span><span></span>
      </span>
    </div>
    <div class="roll-items">
      <div class="roll-item" style="--delay: 0s">
        <span class="roll-icon">
          <svg>...</svg>
        </span>
        <span>Systems Active</span>
      </div>
      <div class="roll-item" style="--delay: 0.06s">
        <span class="roll-icon">
          <svg>...</svg>
        </span>
        <span>Security Level: MAX</span>
      </div>
      <div class="roll-item" style="--delay: 0.12s">
        <span class="roll-icon">
          <svg>...</svg>
        </span>
        <span>Latency: 0.02ms</span>
      </div>
    </div>
    <div class="roll-footer">
      <button class="cyber-cta">Initialize</button>
    </div>
  </div>
</div>
```

## Why is it useful?
- **Horizontal roll animation** with cyberpunk-style reveals
- **Cyberpunk Neon optimized** with neon glow and futuristic UI
- **Multiple animation variants** (glitch, scan, matrix) for different UX needs
- **Theme options** (cyan, magenta, lime) to match neon aesthetics
- **Futuristic ready** structure with status indicators and CTAs
- **Accessibility features** including ARIA labels and keyboard focus states

## Animation Variants
| Class | Effect |
|-------|--------|
| `.glitch` | Glitch shake roll |
| `.scan` | Clip-path scan roll |
| `.matrix` | Scale Y matrix roll |

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
| `--delay` | `0.06s` | Per-item delay (set in HTML) |

## Acceptance Criteria
- ✅ Pure CSS implementation (no JavaScript required)
- ✅ Horizontal roll animation effect
- ✅ Cyberpunk Neon styling
- ✅ Multiple animation variants
- ✅ Multiple color themes
- ✅ Futuristic UI structure
- ✅ Keyboard accessible with focus states
- ✅ ARIA attributes for screen readers
- ✅ CSS custom properties for customization
- ✅ Reduced motion support
- ✅ README.md with complete documentation
