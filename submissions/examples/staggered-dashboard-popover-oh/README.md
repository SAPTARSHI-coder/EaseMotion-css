# Staggered Entrance Dashboard Popover

## What does this do?
A pure CSS animated popover with staggered entrance animation, designed for Responsive Dashboard layouts with metric cards, mini charts, and statistics display.

## How is it used?
```html
<div class="popover-container">
  <button class="metric-btn" aria-label="View dashboard metrics">
    <div class="metric-icon">
      <svg>...</svg>
    </div>
    <div class="metric-text">
      <span class="metric-label">Weekly Stats</span>
      <span class="metric-value">+24.5%</span>
    </div>
  </button>
  <div class="stagger-popover" role="tooltip">
    <div class="stagger-header">
      <h4>Dashboard Metrics</h4>
      <span class="stagger-period">Last 7 days</span>
    </div>
    <div class="stagger-items">
      <div class="stagger-item" style="--delay: 0.05s">
        <div class="item-chart">
          <div class="chart-bar" style="--h: 60%"></div>
          ...
        </div>
        <span class="item-label">Views</span>
        <span class="item-value">12.4k</span>
      </div>
    </div>
  </div>
</div>
```

## Why is it useful?
- **Staggered animation** with data-driven sequential reveals
- **Responsive Dashboard optimized** with dark theme and mini charts
- **Multiple animation variants** (glow, pulse, shift) for different UX needs
- **Theme options** (cyan, pink, yellow) to match analytics branding
- **Data visualization ready** with mini bar charts
- **Accessibility features** including ARIA labels and keyboard focus states

## Animation Variants
| Class | Effect |
|-------|--------|
| `.glow` | Glow highlight stagger |
| `.pulse` | Scale pulse stagger |
| `.shift` | Clip path shift stagger |

## Color Themes
| Theme | Class | Primary Color |
|-------|-------|--------------|
| Cyan | `.theme-cyan` | #58a6ff (default) |
| Pink | `.theme-pink` | #f778ba |
| Yellow | `.theme-yellow` | #d29922 |

## CSS Custom Properties
| Property | Default | Description |
|----------|---------|-------------|
| `--dash-duration` | `0.5s` | Animation duration |
| `--dash-ease` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Easing function |
| `--delay` | `0.05s` | Per-item delay (set in HTML) |

## Acceptance Criteria
- ✅ Pure CSS implementation (no JavaScript required)
- ✅ Staggered entrance animation effect
- ✅ Responsive Dashboard styling
- ✅ Multiple animation variants
- ✅ Multiple color themes
- ✅ Data visualization components
- ✅ Keyboard accessible with focus states
- ✅ ARIA attributes for screen readers
- ✅ CSS custom properties for customization
- ✅ Reduced motion support
- ✅ README.md with complete documentation
