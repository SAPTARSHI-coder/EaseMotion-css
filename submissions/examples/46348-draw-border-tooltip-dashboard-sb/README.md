# Draw-Border Line Tooltip - Responsive Dashboard Layouts

A CSS tooltip component with animated border drawing effect designed for dashboard interfaces.

## Files

- `demo.html` - Demo page showing dashboard UI with tooltips
- `style.css` - Tooltip styles and animations

## Usage

Open `demo.html` in a browser and hover over info buttons and action buttons to see the draw-border tooltip animation.

## Features

### Draw-Border Animation
- Border draws from left to right on hover
- Blue cyan glow effect
- Bouncy scale entrance animation

### Dashboard Components
- Stat cards with metrics
- Info buttons with tooltips
- Chart section with action buttons
- Primary and secondary action buttons

### Design System
- Dark theme dashboard aesthetic
- Cyan accent color for highlights
- Subtle glow effects

## Classes

| Class | Description |
|-------|-------------|
| `ease-draw-tooltip-sb` | Draw-border line tooltip |
| `ease-info-btn-sb` | Info button with tooltip |
| `ease-chart-btn-sb` | Chart action button |
| `ease-primary-action-sb` | Primary action button |
| `ease-secondary-action-sb` | Secondary action button |
| `stat-card` | Dashboard stat card |

## Usage

Add `data-tooltip="Your text"` attribute to any element with `ease-draw-tooltip-sb` class:

```html
<button class="ease-draw-tooltip-sb" data-tooltip="Download chart">
  Download
</button>
```

## Animation Details

The draw-border animation uses `clip-path` to create a left-to-right border reveal effect:
- Animation duration: 0.6s
- Easing: ease forwards
- Effect: Border sweeps from left to right

Closes #46348
