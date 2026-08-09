# Spring Physics Responsive Dashboard Popover

## What does this do?
A pure CSS animated popover with spring physics animation, designed for Responsive Dashboard layouts with quick stats, data visualization, and dashboard CTA.

## How is it used?
```html
<div class="popover-container">
  <button class="dash-btn" aria-label="View analytics">
    <svg>...</svg>
    Analytics
  </button>
  <div class="spring-popover" role="tooltip">
    <div class="spring-header">
      <h4>Quick Stats</h4>
      <span class="spring-period">Today</span>
    </div>
    <div class="spring-stats">
      <div class="spring-stat" style="--delay: 0s">
        <div class="stat-icon">
          <svg>...</svg>
        </div>
        <div class="stat-info">
          <span class="stat-value">2,847</span>
          <span class="stat-label">Active Users</span>
        </div>
      </div>
      <div class="spring-stat" style="--delay: 0.05s">
        <div class="stat-icon">
          <svg>...</svg>
        </div>
        <div class="stat-info">
          <span class="stat-value">94.2%</span>
          <span class="stat-label">Uptime</span>
        </div>
      </div>
      <div class="spring-stat" style="--delay: 0.1s">
        <div class="stat-icon">
          <svg>...</svg>
        </div>
        <div class="stat-info">
          <span class="stat-value">1.2s</span>
          <span class="stat-label">Avg Load</span>
        </div>
      </div>
    </div>
    <div class="spring-footer">
      <button class="dash-cta">View Dashboard</button>
    </div>
  </div>
</div>
```

## Why is it useful?
- **Spring physics animation** with data reveals
- **Responsive Dashboard optimized** with quick stats and dashboard CTA
- **Multiple animation variants** (pop, stretch, squash) for different UX needs
- **Theme options** (indigo, sky, violet) to match dashboard aesthetics
- **Data ready** structure with statistics and insights
- **Accessibility features** including ARIA labels and keyboard focus states

## Animation Variants
| Class | Effect |
|-------|--------|
| `.pop` | Pop scale spring |
| `.stretch` | Stretch scaleY spring |
| `.squash` | Squash scale spring |

## Color Themes
| Theme | Class | Primary Color |
|-------|-------|--------------|
| Indigo | `.theme-indigo` | #6366f1 (default) |
| Sky | `.theme-sky` | #0ea5e9 |
| Violet | `.theme-violet` | #a855f7 |

## CSS Custom Properties
| Property | Default | Description |
|----------|---------|-------------|
| `--spring-duration` | `0.6s` | Animation duration |
| `--spring-ease` | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` | Spring easing function |
| `--delay` | `0.05s` | Per-item delay (set in HTML) |

## Acceptance Criteria
- ✅ Pure CSS implementation (no JavaScript required)
- ✅ Spring physics animation effect
- ✅ Responsive Dashboard styling
- ✅ Multiple animation variants
- ✅ Multiple color themes
- ✅ Data visualization structure
- ✅ Keyboard accessible with focus states
- ✅ ARIA attributes for screen readers
- ✅ CSS custom properties for customization
- ✅ Reduced motion support
- ✅ README.md with complete documentation
