# Slide-Right Cyberpunk Neon Popover

## What does this do?
A pure CSS animated popover with slide-right animation, designed for Cyberpunk Neon layouts with neon glow effects, futuristic UI, and cyber aesthetics.

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
  <div class="slide-popover" role="tooltip">
    <div class="slide-glow"></div>
    <div class="slide-header">
      <span class="slide-status">ONLINE</span>
      <span class="slide-signal">
        <span></span><span></span><span></span><span></span>
      </span>
    </div>
    <div class="slide-items">
      <div class="slide-item" style="--delay: 0s">
        <span class="item-icon">
          <svg>...</svg>
        </span>
        <span>Systems Active</span>
      </div>
      <div class="slide-item" style="--delay: 0.05s">
        <span class="item-icon">
          <svg>...</svg>
        </span>
        <span>Security Level: MAX</span>
      </div>
      <div class="slide-item" style="--delay: 0.1s">
        <span class="item-icon">
          <svg>...</svg>
        </span>
        <span>Latency: 0.02ms</span>
      </div>
    </div>
    <div class="slide-footer">
      <button class="cyber-cta">Initialize</button>
    </div>
  </div>
</div>
```

## Why is it useful?
- **Slide-right animation** with neon reveals
- **Cyberpunk Neon optimized** with neon glow and futuristic UI
- **Multiple animation variants** (slide, glitch, sweep) for different UX needs
- **Theme options** (cyan, magenta, lime) to match neon aesthetics
- **Futuristic ready** structure with status indicators and CTAs
- **Accessibility features** including ARIA labels and keyboard focus states

## Animation Variants
| Class | Effect |
|-------|--------|
| `.slide` | Slide horizontal animation |
| `.glitch` | Glitch skew animation |
| `.sweep` | Sweep blur animation |

## Color Themes
| Theme | Class | Primary Color |
|-------|-------|--------------|
| Cyan | `.theme-cyan` | #00fff9 (default) |
| Magenta | `.theme-magenta` | #ff00ff |
| Lime | `.theme-lime` | #39ff14 |

## CSS Custom Properties
| Property | Default | Description |
|----------|---------|-------------|
| `--slide-duration` | `0.5s` | Animation duration |
| `--slide-ease` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Easing function |
| `--delay` | `0.05s` | Per-item delay (set in HTML) |

## Acceptance Criteria
- ✅ Pure CSS implementation (no JavaScript required)
- ✅ Slide-right animation effect
- ✅ Cyberpunk Neon styling
- ✅ Multiple animation variants
- ✅ Multiple color themes
- ✅ Futuristic UI structure
- ✅ Keyboard accessible with focus states
- ✅ ARIA attributes for screen readers
- ✅ CSS custom properties for customization
- ✅ Reduced motion support
- ✅ README.md with complete documentation
