# Magnetic Pull Dashboard Analytics Popover

## What does this do?
A pure CSS animated popover with smooth magnetic pull attraction effect, designed for Dashboard Analytics interfaces with data visualization, metrics display, and chart components.

## How is it used?
```html
<div class="popover-container">
  <button class="stat-card">
    <div class="stat-icon">
      <svg>...</svg>
    </div>
    <div class="stat-info">
      <span class="stat-label">Total Revenue</span>
      <span class="stat-value">$45,231</span>
      <span class="stat-change positive">+12.5%</span>
    </div>
  </button>
  <div class="dash-popover" role="tooltip">
    <div class="dash-header">
      <h4>Revenue Analytics</h4>
      <span class="dash-period">Last 30 days</span>
    </div>
    <div class="dash-chart">
      <div class="chart-bar" style="--height: 40%"></div>
      <div class="chart-bar" style="--height: 65%"></div>
      ...
    </div>
    <div class="dash-metrics">
      <div class="metric">
        <span class="metric-label">Avg Daily</span>
        <span class="metric-value">$1,508</span>
      </div>
    </div>
  </div>
</div>
```

## Why is it useful?
- **Magnetic attraction effect** draws attention to analytics data
- **Dashboard optimized** with dark theme, data visualization, and metrics
- **Multiple animation variants** (pulsate, glide, spring) for different UX needs
- **Theme options** (cyan, violet, amber) to match analytics branding
- **Chart-ready structure** with bar chart and metric displays
- **Accessibility features** including ARIA labels and keyboard focus states

## Animation Variants
| Class | Effect |
|-------|--------|
| `.pulsate` | Pulsating magnetic effect |
| `.glide` | Smooth glide motion |
| `.spring` | Spring physics effect |

## Color Themes
| Theme | Class | Primary Color |
|-------|-------|--------------|
| Cyan | `.theme-cyan` | #06b6d4 (default) |
| Violet | `.theme-violet` | #8b5cf6 |
| Amber | `.theme-amber` | #f59e0b |

## CSS Custom Properties
| Property | Default | Description |
|----------|---------|-------------|
| `--dash-duration` | `0.5s` | Animation duration |
| `--dash-easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Easing function |
| `--dash-float-duration` | `2s` | Float loop duration |

## Acceptance Criteria
- ✅ Pure CSS implementation (no JavaScript required)
- ✅ Magnetic pull animation effect
- ✅ Dashboard analytics styling
- ✅ Multiple animation variants
- ✅ Multiple color themes
- ✅ Data visualization components
- ✅ Keyboard accessible with focus states
- ✅ ARIA attributes for screen readers
- ✅ CSS custom properties for customization
- ✅ Reduced motion support
- ✅ README.md with complete documentation
