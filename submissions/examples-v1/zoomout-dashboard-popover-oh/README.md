# Zoom-Out Dashboard Analytics Popover

## What does this do?
A pure CSS animated popover with zoom-out animation, designed for Dashboard Analytics layouts with quick stats, data visualization, and dashboard CTA.

## How is it used?
```html
<div class="popover-container">
  <button class="dash-btn" aria-label="View analytics">
    <svg>...</svg>
    Analytics
  </button>
  <div class="zoom-popover" role="tooltip">
    <div class="zoom-header">
      <h4>Quick Stats</h4>
      <span class="zoom-period">Today</span>
    </div>
    <div class="zoom-stats">
      <div class="zoom-stat" style="--delay: 0s">
        <div class="stat-icon">
          <svg>...</svg>
        </div>
        <div class="stat-info">
          <span class="stat-value">2,847</span>
          <span class="stat-label">Active Users</span>
        </div>
      </div>
      <div class="zoom-stat" style="--delay: 0.05s">
        <div class="stat-icon">
          <svg>...</svg>
        </div>
        <div class="stat-info">
          <span class="stat-value">94.2%</span>
          <span class="stat-label">Uptime</span>
        </div>
      </div>
      <div class="zoom-stat" style="--delay: 0.1s">
        <div class="stat-icon">
          <svg>...</svg>
        </div>
        <div class="stat-info">
          <span class="stat-value">1.2s</span>
          <span class="stat-label">Avg Load</span>
        </div>
      </div>
    </div>
    <div class="zoom-footer">
      <button class="dash-cta">View Dashboard</button>
    </div>
  </div>
</div>
```

## Why is it useful?
- **Zoom-out animation** with data reveals
- **Dashboard Analytics optimized** with quick stats and dashboard CTA
- **Multiple animation variants** (scale, bounce, slide) for different UX needs
- **Theme options** (indigo, sky, violet) to match dashboard aesthetics
- **Data ready** structure with statistics and insights
- **Accessibility features** including ARIA labels and keyboard focus states

## Animation Variants
| Class | Effect |
|-------|--------|
| `.scale` | Scale bounce zoom |
| `.bounce` | Spring bounce zoom |
| `.slide` | Slide translate zoom |

## Color Themes
| Theme | Class | Primary Color |
|-------|-------|--------------|
| Indigo | `.theme-indigo` | #6366f1 (default) |
| Sky | `.theme-sky` | #0ea5e9 |
| Violet | `.theme-violet` | #a855f7 |

## CSS Custom Properties
| Property | Default | Description |
|----------|---------|-------------|
| `--zoom-duration` | `0.5s` | Animation duration |
| `--zoom-ease` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Easing function |
| `--delay` | `0.05s` | Per-item delay (set in HTML) |

## Acceptance Criteria
- ✅ Pure CSS implementation (no JavaScript required)
- ✅ Zoom-out animation effect
- ✅ Dashboard Analytics styling
- ✅ Multiple animation variants
- ✅ Multiple color themes
- ✅ Data visualization structure
- ✅ Keyboard accessible with focus states
- ✅ ARIA attributes for screen readers
- ✅ CSS custom properties for customization
- ✅ Reduced motion support
- ✅ README.md with complete documentation
