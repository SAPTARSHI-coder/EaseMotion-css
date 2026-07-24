# Horizontal Roll Dashboard Analytics Popover

## What does this do?
A pure CSS animated popover with horizontal roll-in animation, designed for Dashboard Analytics layouts with metric bars, data visualization, and report CTAs.

## How is it used?
```html
<div class="popover-container">
  <button class="dash-btn" aria-label="View insights">
    <svg>...</svg>
    Analytics
  </button>
  <div class="roll-popover" role="tooltip">
    <div class="roll-header">
      <h4>Traffic Overview</h4>
      <span class="roll-period">Last 7 days</span>
    </div>
    <div class="roll-metrics">
      <div class="roll-metric" style="--delay: 0s">
        <div class="metric-bar" style="--w: 80%"></div>
        <div class="metric-info">
          <span class="metric-label">Page Views</span>
          <span class="metric-value">24.5K</span>
        </div>
      </div>
      <div class="roll-metric" style="--delay: 0.05s">
        <div class="metric-bar" style="--w: 65%"></div>
        <div class="metric-info">
          <span class="metric-label">Unique Visitors</span>
          <span class="metric-value">8.2K</span>
        </div>
      </div>
      <div class="roll-metric" style="--delay: 0.1s">
        <div class="metric-bar" style="--w: 90%"></div>
        <div class="metric-info">
          <span class="metric-label">Bounce Rate</span>
          <span class="metric-value">32.1%</span>
        </div>
      </div>
      <div class="roll-metric" style="--delay: 0.15s">
        <div class="metric-bar" style="--w: 75%"></div>
        <div class="metric-info">
          <span class="metric-label">Avg. Session</span>
          <span class="metric-value">4m 23s</span>
        </div>
      </div>
    </div>
    <div class="roll-footer">
      <button class="dash-cta">View Full Report</button>
    </div>
  </div>
</div>
```

## Why is it useful?
- **Horizontal roll animation** with data insight reveals
- **Dashboard Analytics optimized** with metric bars and data visualization
- **Multiple animation variants** (sweep, rise, swoosh) for different UX needs
- **Theme options** (cyan, violet, emerald) to match analytics branding
- **Analytics ready** structure with metrics and report CTA
- **Accessibility features** including ARIA labels and keyboard focus states

## Animation Variants
| Class | Effect |
|-------|--------|
| `.sweep` | Sweep slide roll |
| `.rise` | Rise fade roll |
| `.swoosh` | Scale swoosh roll |

## Color Themes
| Theme | Class | Primary Color |
|-------|-------|--------------|
| Cyan | `.theme-cyan` | #06b6d4 (default) |
| Violet | `.theme-violet` | #8b5cf6 |
| Emerald | `.theme-emerald` | #10b981 |

## CSS Custom Properties
| Property | Default | Description |
|----------|---------|-------------|
| `--dash-duration` | `0.5s` | Animation duration |
| `--dash-ease` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Easing function |
| `--delay` | `0.05s` | Per-item delay (set in HTML) |

## Acceptance Criteria
- ✅ Pure CSS implementation (no JavaScript required)
- ✅ Horizontal roll animation effect
- ✅ Dashboard Analytics styling
- ✅ Multiple animation variants
- ✅ Multiple color themes
- ✅ Data visualization structure
- ✅ Keyboard accessible with focus states
- ✅ ARIA attributes for screen readers
- ✅ CSS custom properties for customization
- ✅ Reduced motion support
- ✅ README.md with complete documentation
