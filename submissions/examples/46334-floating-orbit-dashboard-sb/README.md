# Floating Orbit Tooltip - Responsive Dashboard Layouts

A CSS tooltip component with floating orbit animation effect designed for responsive dashboard interfaces.

## Files

- `demo.html` - Demo page showing responsive dashboard with tooltips
- `style.css` - Tooltip styles and animations

## Usage

Open `demo.html` in a browser and hover over sidebar items and action buttons to see the floating orbit tooltip animation.

## Features

### Floating Orbit Animation
- Tooltip gently floats with subtle rotation
- Indigo/violet gradient with shadow
- Smooth continuous animation loop

### Dashboard Components
- Sidebar navigation with tooltips
- Header action buttons
- Metric cards with info tooltips
- Responsive layout

### Design System
- Dark sidebar with gradient
- White content area
- Indigo accent color

## Classes

| Class | Description |
|-------|-------------|
| `ease-floating-orbit-dash-sb` | Floating orbit tooltip for dashboard |
| `ease-dash-item-sb` | Sidebar navigation item |
| `ease-header-btn-sb` | Header action button |
| `ease-metric-info-sb` | Metric info button |
| `metric-card` | Dashboard metric card |

## Usage

Add `data-tooltip="Your text"` attribute to any element with `ease-floating-orbit-dash-sb` class:

```html
<button class="ease-floating-orbit-dash-sb" data-tooltip="View dashboard">
  Dashboard
</button>
```

Closes #46334
