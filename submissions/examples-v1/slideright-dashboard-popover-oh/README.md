# Slide-Right Responsive Dashboard Popover

## What does this do?
A pure CSS animated popover with slide-right animation, designed for Responsive Dashboard layouts with quick stats, data visualization, and dashboard metrics.

## How is it used?
```html
<div class="popover-container">
  <button class="dash-btn" aria-label="View analytics">
    <svg>...</svg>
    Analytics
  </button>
  <div class="slide-popover" role="tooltip">
    <div class="slide-header">
      <h4>Quick Stats</h4>
      <span class="slide-period">Today</span>
    </div>
    <div class="slide-stats">
      <div class="slide-stat" style="--delay: 0s">
        <div class="stat-icon">
          <svg>...</svg>
        </div>
        <div class="stat-info">
          <span class="stat-value">2,847</span>
          <span class="stat-label">Active Users</span>
        </div>
      </div>
      <div class="slide-stat" style="--delay: 0.05s">
        <div class="stat-icon">
          <svg>...</svg>
        </div>
        <div class="stat-info">
          <span class="stat-value">94.2%</span>
          <span class="stat-label">Uptime</span>
        </div>
      </div>
      <div class="slide-stat" style="--delay: 0.1s">
        <div class="stat-icon">
          <svg>...</svg>
        </div>
        <div class="stat-info">
          <span class="stat-value">$12.4k</span>
          <span class="stat-label">Revenue</span>
        </div>
      </div>
    </div>
  </div>
</div>
```

## Why is it useful?
- **Slide-right animation** with data reveals
- **Responsive Dashboard optimized** with quick stats and metrics
- **Multiple animation variants** (slide, swipe, sweep) for different UX needs
- **Theme options** (indigo, emerald, rose) to match dashboard aesthetics
- **Data ready** structure with statistics and metrics
- **Accessibility features** including ARIA labels and keyboard focus states

## Animation Variants
| Class | Effect |
|-------|--------|
| `.slide` | Slide horizontal animation |
| `.swipe` | Swipe skew animation |
| `.sweep` | Sweep blur animation |

## Color Themes
| Theme | Class | Primary Color |
|-------|-------|--------------|
| Indigo | `.theme-indigo` | #6366f1 (default) |
| Emerald | `.theme-emerald` | #10b981 |
| Rose | `.theme-rose` | #f43f5e |

## CSS Custom Properties
| Property | Default | Description |
|----------|---------|-------------|
| `--slide-duration` | `0.5s` | Animation duration |
| `--slide-ease` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Easing function |
| `--delay` | `0.05s` | Per-item delay (set in HTML) |

## Acceptance Criteria
- ✅ Pure CSS implementation (no JavaScript required)
- ✅ Slide-right animation effect
- ✅ Responsive Dashboard styling
- ✅ Multiple animation variants
- ✅ Multiple color themes
- ✅ Data visualization structure
- ✅ Keyboard accessible with focus states
- ✅ ARIA attributes for screen readers
- ✅ CSS custom properties for customization
- ✅ Reduced motion support
- ✅ README.md with complete documentation
