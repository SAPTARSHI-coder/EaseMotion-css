# Spring Physics Dashboard Analytics Popover

## What does this do?
A pure CSS animated popover with smooth spring physics bounce effect, designed for Dashboard Analytics interfaces with chart visualization and statistics display.

## How is it used?
```html
<div class="popover-container">
  <button class="metric-card">
    <div class="metric-icon">
      <svg>...</svg>
    </div>
    <div class="metric-info">
      <span class="metric-label">Conversion Rate</span>
      <span class="metric-value">24.8%</span>
      <span class="metric-trend up">↑ 12%</span>
    </div>
  </button>
  <div class="spring-popover" role="tooltip">
    <div class="spring-header">
      <h4>Conversion Analytics</h4>
      <span class="spring-period">This Month</span>
    </div>
    <div class="spring-chart">
      <div class="chart-line"></div>
      <div class="chart-point"></div>
      ...
    </div>
    <div class="spring-stats">
      <div class="stat">
        <span class="stat-value">18.2%</span>
        <span class="stat-label">Last Month</span>
      </div>
    </div>
  </div>
</div>
```

## Why is it useful?
- **Spring physics animation** with dynamic bounce and overshoot
- **Dashboard optimized** with dark theme, charts, and statistics
- **Multiple animation variants** (quake, jolt, sway) for different UX needs
- **Theme options** (emerald, orange, violet) to match analytics branding
- **Data visualization ready** with chart points and stats display
- **Accessibility features** including ARIA labels and keyboard focus states

## Animation Variants
| Class | Effect |
|-------|--------|
| `.quake` | Quaking spring effect |
| `.jolt` | Jolting spring |
| `.sway` | Swaying spring |

## Color Themes
| Theme | Class | Primary Color |
|-------|-------|--------------|
| Emerald | `.theme-emerald` | #10b981 (default) |
| Orange | `.theme-orange` | #f97316 |
| Violet | `.theme-violet` | #8b5cf6 |

## CSS Custom Properties
| Property | Default | Description |
|----------|---------|-------------|
| `--dash-duration` | `0.6s` | Animation duration |
| `--dash-bounce` | `cubic-bezier(0.68,-0.55,0.265,1.55)` | Bounce easing |
| `--dash-loop` | `2s` | Loop duration |

## Acceptance Criteria
- ✅ Pure CSS implementation (no JavaScript required)
- ✅ Spring physics animation effect
- ✅ Dashboard analytics styling
- ✅ Multiple animation variants
- ✅ Multiple color themes
- ✅ Data visualization components
- ✅ Keyboard accessible with focus states
- ✅ ARIA attributes for screen readers
- ✅ CSS custom properties for customization
- ✅ Reduced motion support
- ✅ README.md with complete documentation
